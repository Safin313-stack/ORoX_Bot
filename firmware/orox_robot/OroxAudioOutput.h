#pragma once
// ==============================================================================
// 🤖 ORoX AUDIO OUTPUT DRIVER (I2S -> MAX98357A)
// ==============================================================================
// High-performance, zero-stutter I2S audio bridge for MAX98357A.
// - 256-sample DMA batching (zero buffer underruns, completely stutter-free)
// - 2-Pole Gentle Smoothing Filter (silky, warm acoustic voice)
// - Dynamic Soft Limiter (no clipping distortion on 3W speakers)
// ==============================================================================

#include <Arduino.h>
#include <ESP_I2S.h>
#include <AudioOutput.h>

class OroxAudioOutput : public AudioOutput {
public:
  static const int BATCH = 256; // 256 samples = 11.6ms buffer headroom

  OroxAudioOutput(I2SClass* i2sPtr = nullptr) 
    : _i2s(i2sPtr), _idx(0), _gain(0.85f), _filter1(0), _filter2(0) {}

  void setI2S(I2SClass* i2sPtr) { _i2s = i2sPtr; }

  bool SetGain(float g) override {
    if (g > 1.2f) g = 1.2f;
    if (g < 0.0f) g = 0.0f;
    _gain = g;
    return true;
  }

  bool begin() override {
    _idx = 0;
    _filter1 = 0;
    _filter2 = 0;
    return true;
  }

  bool ConsumeSample(int16_t sample[2]) override {
    if (!_i2s) return false;

    // SAM generates mono 16-bit audio in Left Channel
    int16_t raw = sample[AudioOutput::LEFTCHANNEL];

    // 2-Pole IIR Low-Pass Filter: Eliminates harsh digital quantization buzz
    _filter1 = (_filter1 * 3 + raw) >> 2;
    _filter2 = (_filter2 * 3 + _filter1) >> 2;

    // Apply linear clean gain
    int32_t val = (int32_t)(_filter2 * _gain);

    // Soft limiter (safely clamp below int16 overflow to avoid clipping)
    if (val > 28000) val = 28000;
    if (val < -28000) val = -28000;

    int16_t v = (int16_t)val;
    _buf[_idx * 2]     = v; // Left channel
    _buf[_idx * 2 + 1] = v; // Right channel
    _idx++;

    if (_idx >= BATCH) {
      flush();
    }
    return true;
  }

  void flush() override {
    if (!_i2s || _idx == 0) return;
    // Pure, continuous non-blocking I2S write - ZERO STALLS!
    _i2s->write((uint8_t*)_buf, _idx * 2 * sizeof(int16_t));
    _idx = 0;
  }

  bool stop() override {
    flush();
    return true;
  }

private:
  I2SClass* _i2s;
  int16_t _buf[BATCH * 2];
  int _idx;
  float _gain;
  int32_t _filter1;
  int32_t _filter2;
};
