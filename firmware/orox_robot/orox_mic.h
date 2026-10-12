#ifndef OROX_MIC_H
#define OROX_MIC_H

#include <Arduino.h>
#include <ESP_I2S.h>
#include <math.h>

// ==============================================================================
// 🤖 ORoX INMP441 I2S DIGITAL MEMS MICROPHONE ENGINE (NON-BLOCKING)
// ==============================================================================
// Features:
// - Non-blocking I2S read (2ms max timeout - ZERO CPU FREEZE!)
// - Dual-channel sniffing (works whether L/R is tied to GND or 3.3V)
// - Adaptive ambient noise floor tracking with high speech sensitivity
// ==============================================================================

#define MIC_SAMPLE_RATE 16000
#define MIC_BUF_SAMPLES 64

class OroxMic {
private:
  int sckPin;
  int wsPin;
  int sdPin;
  bool isInitialized = false;
  I2SClass i2s;

  int32_t rawSamples[MIC_BUF_SAMPLES * 2];
  float curLevel = 0.0f;
  float peakLevel = 0.0f;
  float noiseFloor = 0.8f;
  int32_t maxL = 0;
  int32_t maxR = 0;

  unsigned long lastPrintTime = 0;
  unsigned long lastVoiceTime = 0;
  unsigned long lastClapTime = 0;

public:
  OroxMic(int sck = 32, int ws = 23, int sd = 35)
    : sckPin(sck), wsPin(ws), sdPin(sd), i2s(I2S_NUM_1) {}

  bool begin() {
    Serial.println("\n[ORoX MIC] Initializing INMP441 on I2S_NUM_1...");
    i2s.setPins(sckPin, wsPin, -1, sdPin);
    
    // Set 2ms timeout so readBytes NEVER blocks the main loop or buttons!
    i2s.setTimeout(2);

    if (!i2s.begin(I2S_MODE_STD, MIC_SAMPLE_RATE, I2S_DATA_BIT_WIDTH_32BIT, I2S_SLOT_MODE_STEREO, I2S_STD_SLOT_BOTH)) {
      Serial.println("❌ [ORoX MIC] INMP441 begin failed!");
      isInitialized = false;
      return false;
    }

    isInitialized = true;
    Serial.printf("✅ [ORoX MIC] INMP441 Initialized Successfully on I2S_NUM_1 (SCK:%d, WS:%d, SD:%d)!\n", 
                  sckPin, wsPin, sdPin);
    return true;
  }

  void update() {
    if (!isInitialized) return;
    unsigned long now = millis();

    // Fast non-blocking read
    size_t bytesRead = i2s.readBytes((char*)rawSamples, sizeof(rawSamples));
    int pairs = bytesRead / (2 * sizeof(int32_t));

    if (pairs > 0) {
      int64_t sumSquares = 0;
      int32_t curMaxL = 0;
      int32_t curMaxR = 0;
      int32_t curPeak = 0;

      for (int i = 0; i < pairs; i++) {
        // INMP441 outputs 24-bit audio in upper bits of 32-bit slot
        int32_t s0 = rawSamples[i * 2] >> 14;
        int32_t s1 = rawSamples[i * 2 + 1] >> 14;

        if (abs(s0) > curMaxL) curMaxL = abs(s0);
        if (abs(s1) > curMaxR) curMaxR = abs(s1);

        // Take whichever channel has active data (works for L/R = GND or 3.3V)
        int32_t val = (abs(s0) > abs(s1)) ? s0 : s1;
        int32_t absVal = abs(val);
        if (absVal > curPeak) curPeak = absVal;
        sumSquares += ((int64_t)val * val);
      }

      maxL = curMaxL;
      maxR = curMaxR;
      float rms = sqrt((float)sumSquares / (float)pairs);

      // Sensitive scaling: speech jumps to 3.0 ~ 15.0
      float norm = (rms / 800.0f) * 10.0f;
      if (norm > 100.0f) norm = 100.0f;

      curLevel = curLevel * 0.6f + norm * 0.4f;
      float pNorm = ((float)curPeak / 2000.0f) * 10.0f;
      if (pNorm > 100.0f) pNorm = 100.0f;
      peakLevel = pNorm;

      // Adaptively track ambient noise floor
      if (curLevel < noiseFloor) {
        noiseFloor = curLevel;
      } else {
        noiseFloor = noiseFloor * 0.992f + curLevel * 0.008f;
      }
    }

    if (now - lastPrintTime > 2500) {
      lastPrintTime = now;
      Serial.printf("[ORoX MIC STATUS] Level: %.1f | NoiseFloor: %.1f | Peak: %.1f (L:%d, R:%d)\n", 
                    curLevel, noiseFloor, peakLevel, maxL, maxR);
    }
  }

  float getAudioLevel() const { return curLevel; }
  float getNoiseFloor() const { return noiseFloor; }

  // Detect human voice speaking near robot (requires clear vocal intensity above room noise)
  bool checkVoice() {
    if (!isInitialized) return false;
    unsigned long now = millis();
    float voiceThresh = max(9.0f, noiseFloor * 2.8f + 5.0f);

    if (curLevel > voiceThresh && (now - lastVoiceTime > 4000)) {
      lastVoiceTime = now;
      Serial.printf(">>> 🗣️ VOICE DETECTED! Level: %.1f (Floor: %.1f, Thresh: %.1f) <<<\n", curLevel, noiseFloor, voiceThresh);
      return true;
    }
    return false;
  }

  // Detect sharp clap, snap, or tap
  bool checkClap() {
    if (!isInitialized) return false;
    unsigned long now = millis();
    if (peakLevel > 22.0f && peakLevel > (noiseFloor + 15.0f) && (now - lastClapTime > 2500)) {
      lastClapTime = now;
      Serial.printf(">>> 👏 CLAP DETECTED! Peak: %.1f <<<\n", peakLevel);
      return true;
    }
    return false;
  }
};

#endif
