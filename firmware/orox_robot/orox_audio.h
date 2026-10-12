#ifndef OROX_AUDIO_H
#define OROX_AUDIO_H

#include <Arduino.h>
#include <ESP_I2S.h>
#include <ESP8266SAM.h>
#include "OroxAudioOutput.h"
#include <math.h>

// ==============================================================================
// 🤖 ORoX AUDIO SYSTEM (MAX98357A I2S DAC + BUZZER + WEBSITE SOUND ENGINE)
// ==============================================================================
// Directly ports the sound and vocal chatter engine from the official ORoX repo:
// https://github.com/Safin313-stack/ORoX_Bot (soundEffects.ts)
// - Cheerful Chibi anime formant voice (VOICE_ELF, pitch 48)
// - Melodic robot vocal chatter (sine/triangle frequency glissando)
// - Crisp acoustic ear chimes & sound effects
// ==============================================================================

#define AUDIO_SAMPLE_RATE 22050
#define AUDIO_BUF_SIZE    256

class OroxAudio {
private:
  int bclkPin;
  int lrcPin;
  int doutPin;
  int buzzerPin;
  bool isInitialized = false;
  I2SClass i2s;

  ESP8266SAM sam;
  OroxAudioOutput samOut;

  float volumeScale = 1.0f; // Default 100% volume
  int volumeLevel = 4;      // 0: Mute, 1: 25%, 2: 50%, 3: 75%, 4: 100%

  int16_t sampleBuffer[AUDIO_BUF_SIZE * 2];

  void outputChunk(int samplesCount) {
    if (!isInitialized) return;
    i2s.write((uint8_t*)sampleBuffer, samplesCount * 2 * sizeof(int16_t));
  }

public:
  OroxAudio(int bclk = 26, int lrc = 25, int dout = 33, int buzzer = 5) 
    : bclkPin(bclk), lrcPin(lrc), doutPin(dout), buzzerPin(buzzer), i2s(I2S_NUM_0) {}

  bool begin() {
    pinMode(buzzerPin, OUTPUT);
    digitalWrite(buzzerPin, LOW);

    i2s.setPins(bclkPin, lrcPin, doutPin, -1);
    if (!i2s.begin(I2S_MODE_STD, AUDIO_SAMPLE_RATE, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_STEREO, I2S_STD_SLOT_BOTH)) {
      Serial.println("❌ MAX98357A I2S begin failed!");
      isInitialized = false;
      return false;
    }

    samOut.setI2S(&i2s);

    // ==========================================================================
    // 🎀 ORoX WEBSITE MATCHING CHIBI ANIME VOICE:
    // Uses VOICE_ELF with optimized pitch and formant resonance to match the
    // sweet, bubbly tone from https://safin313-stack.github.io/ORoX_Bot/
    // ==========================================================================
    sam.SetVoice(ESP8266SAM::VOICE_ELF);
    sam.SetSpeed(72);   // Clear deliberate tempo
    sam.SetPitch(56);   // Sweet cute anime robot pitch without extreme harmonic distortion
    sam.SetThroat(125); // Warmer formant balance
    sam.SetMouth(140);  // Clear articulation

    isInitialized = true;
    Serial.printf("✅ [ORoX AUDIO] MAX98357A I2S Chibi Voice Initialized (BCLK:%d, LRC:%d, DIN:%d, BUZZER:%d)\n", 
                  bclkPin, lrcPin, doutPin, buzzerPin);
    return true;
  }

  // Volume Cycling: 0=Mute, 1=25%, 2=50%, 3=75%, 4=100%
  int cycleVolume() {
    volumeLevel++;
    if (volumeLevel > 4) volumeLevel = 0; // Wrap to Mute

    if (volumeLevel == 0) {
      volumeScale = 0.0f;
      samOut.SetGain(0.0f);
      Serial.println("[VOLUME] Muted");
    } else {
      volumeScale = volumeLevel * 0.25f;
      samOut.SetGain(volumeScale * 0.88f);
      playTone(600.0f + volumeLevel * 120.0f, 60, 0.35f);
      Serial.printf("[VOLUME] Level %d (%d%%)\n", volumeLevel, volumeLevel * 25);
    }
    return volumeLevel;
  }

  void setVolumeLevel(int lvl) {
    if (lvl < 0) lvl = 0;
    if (lvl > 4) lvl = 4;
    volumeLevel = lvl;
    volumeScale = volumeLevel * 0.25f;
    samOut.SetGain(volumeScale * 0.88f);
  }

  int getVolumeLevel() const { return volumeLevel; }

  // Hardware Buzzer Beep
  void chirpBuzzer(int freq, int durationMs) {
    if (volumeLevel == 0) return;
    tone(buzzerPin, freq, durationMs);
    delay(durationMs);
    noTone(buzzerPin);
  }

  // ==============================================================================
  // SAM SPEECH SYNTHESIS (CRYSTAL-CLEAR CHIBI ANIME VOICE)
  // ==============================================================================
  void speak(const char* text) {
    if (!isInitialized || !text || volumeLevel == 0) return;

    // Convert string to clean ASCII phoneme-friendly English
    String clean = "";
    for (int i = 0; text[i]; i++) {
      char c = text[i];
      if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9') || 
          c == ' ' || c == '.' || c == ',' || c == '?' || c == '!' || c == '\'') {
        clean += c;
      } else if (c == '%') {
        clean += " percent ";
      } else if ((uint8_t)c == 0xC2 && (uint8_t)text[i+1] == 0xB0) {
        clean += " degrees ";
        i++;
      }
    }

    if (clean.length() == 0) return;

    playSoftChime();
    samOut.SetGain(volumeScale * 0.82f);
    sam.Say(&samOut, clean.c_str());
  }

  // ==============================================================================
  // PROCEDURAL I2S SOUND & GLISSANDO SYNTHESIZER
  // ==============================================================================
  void playTone(float freqHz, int durationMs, float gain = 0.35f) {
    playToneGlissando(freqHz, freqHz, durationMs, gain);
  }

  void playToneGlissando(float startFreq, float endFreq, int durationMs, float gain = 0.35f) {
    if (!isInitialized || volumeLevel == 0) return;

    int totalSamples = (AUDIO_SAMPLE_RATE * durationMs) / 1000;
    float phase = 0.0f;
    float amp = 14000.0f * gain * volumeScale;

    int samplesProcessed = 0;
    while (samplesProcessed < totalSamples) {
      int count = min(AUDIO_BUF_SIZE, totalSamples - samplesProcessed);
      for (int i = 0; i < count; i++) {
        float progress = (float)(samplesProcessed + i) / (float)totalSamples;
        float currentFreq = startFreq + (endFreq - startFreq) * progress;
        float phaseInc = (2.0f * PI * currentFreq) / AUDIO_SAMPLE_RATE;

        // Exponential decay envelope
        float env = 1.0f - (progress * 0.85f);
        int16_t s = (int16_t)(sin(phase) * amp * env);
        phase += phaseInc;
        if (phase >= 2.0f * PI) phase -= 2.0f * PI;

        sampleBuffer[i * 2]     = s;
        sampleBuffer[i * 2 + 1] = s;
      }
      outputChunk(count);
      samplesProcessed += count;
    }
  }

  // ==============================================================================
  // CUTE ROBOT VOCAL CHATTER (EXACT MATCH FOR ORoX WEBSITE soundEffects.ts)
  // Synthesizes playful, cheerful, high-pitched robotic syllables and warbles!
  // ==============================================================================
  void playCuteRobotChatter(float durationSec = 1.4f) {
    if (volumeLevel == 0) return;
    const float melodicNotes[] = {
      659.25f, 739.99f, 783.99f, 880.0f, 987.77f, 1046.5f, 1174.66f, 1318.51f, 1479.98f
    };
    int syllableCount = max(4, (int)(durationSec * 6.5f));

    for (int i = 0; i < syllableCount; i++) {
      float startF = melodicNotes[random(0, 9)];
      float endF = melodicNotes[random(0, 9)];
      playToneGlissando(startF, endF, 90, 0.35f);
    }
  }

  // Sweet two-tone robotic chime (Exact match for website playSoftChime: 659.25Hz and 987.77Hz)
  void playSoftChime() {
    if (volumeLevel == 0) return;
    playTone(659.25f, 70, 0.35f);
    playTone(987.77f, 180, 0.40f);
  }

  // Double bell notification chime
  void playChime() {
    playSoftChime();
  }

  // Cheerful Giggle for head pats
  void playGiggle() {
    if (volumeLevel == 0) return;
    playTone(880.0f, 60,  0.30f);
    playTone(1174.0f, 70, 0.35f);
    playTone(1480.0f, 80, 0.40f);
    chirpBuzzer(2200, 30);
  }

  // Puffer fish / Love Easter Egg melody
  void playPufferFishMelody() {
    if (volumeLevel == 0) return;
    playTone(523.25f, 120, 0.35f); // C5
    playTone(659.25f, 120, 0.35f); // E5
    playTone(783.99f, 140, 0.40f); // G5
    playTone(1046.5f, 320, 0.45f); // C6
    chirpBuzzer(1318, 50);
  }

  // Vomiting / Dizzy Gurgle Sound
  void playVomitSound() {
    if (volumeLevel == 0) return;
    for (int rep = 0; rep < 3; rep++) {
      for (float f = 380.0f; f > 140.0f; f -= 30.0f) {
        playTone(f, 25, 0.40f);
        chirpBuzzer((int)f * 2, 12);
      }
    }
  }

  // Alert / Bump Sound
  void playAlertSound() {
    if (volumeLevel == 0) return;
    playTone(600.0f, 60, 0.35f);
    playTone(1200.0f, 160, 0.40f);
    chirpBuzzer(1800, 40);
  }

  // Weather Sounds
  void playWeatherSound(int code) {
    if (volumeLevel == 0) return;
    if (code == 0) {
      playTone(659.25f, 90, 0.35f);
      playTone(783.99f, 90, 0.35f);
      playTone(987.77f, 220, 0.40f);
    } else if (code == 2) {
      playTone(1200.0f, 40, 0.25f);
      playTone(900.0f, 40, 0.25f);
      playTone(1100.0f, 60, 0.25f);
    } else {
      playSoftChime();
    }
  }

  // Dance / Song Groove
  void playDanceTune() {
    if (volumeLevel == 0) return;
    float notes[] = { 523.25f, 587.33f, 659.25f, 783.99f, 880.0f, 1046.5f };
    for (int i = 0; i < 6; i++) {
      playTone(notes[i], 80, 0.35f);
    }
  }
};

#endif
