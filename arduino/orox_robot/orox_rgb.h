#ifndef OROX_RGB_H
#define OROX_RGB_H

#include <Arduino.h>

// ==============================================================================
// 🤖 ORoX RGB MOOD LIGHT & ACOUSTIC EAR HALO CONTROLLER
// ==============================================================================
// Controls Red, Green, Blue pins using PWM (analogWrite).
// Supports Common Cathode (default) and Common Anode LEDs.
// Smooth breathing, pulsing, and emotional color themes.
// ==============================================================================

enum RGBTheme {
  RGB_OFF,
  RGB_IDLE_CYAN,      // Peaceful breathing cyan
  RGB_TALKING_BLUE,   // Active conversation glow
  RGB_TOUCH_PINK,     // Sweet cute blushing pink
  RGB_PUFFER_CORAL,   // Special magical coral-rose for puffer fish
  RGB_VOMIT_GREEN,    // Sick toxic green & yellow flicker
  RGB_TILT_AMBER,     // Surprised/alert amber flash
  RGB_SUNNY_GOLD,     // Warm golden sunlight
  RGB_RAIN_AQUA,      // Aquatic rain blue
  RGB_SLEEP_NAVY,     // Calm midnight dim amber/blue
  RGB_OROX_ORANGE     // Signature ORoX Tangerine
};

class OroxRGB {
private:
  int rPin, gPin, bPin;
  bool isCommonAnode;

  uint8_t curR = 0, curG = 0, curB = 0;
  uint8_t targetR = 0, targetG = 0, targetB = 0;

  RGBTheme currentTheme = RGB_IDLE_CYAN;
  unsigned long lastUpdate = 0;
  float breathPhase = 0.0f;

  void applyHardware(uint8_t r, uint8_t g, uint8_t b) {
    if (isCommonAnode) {
      r = 255 - r;
      g = 255 - g;
      b = 255 - b;
    }
    analogWrite(rPin, r);
    analogWrite(gPin, g);
    analogWrite(bPin, b);
  }

public:
  OroxRGB(int redPin = 13, int greenPin = 14, int bluePin = 27, bool commonAnode = false)
    : rPin(redPin), gPin(greenPin), bPin(bluePin), isCommonAnode(commonAnode) {}

  void begin() {
    pinMode(rPin, OUTPUT);
    pinMode(gPin, OUTPUT);
    pinMode(bPin, OUTPUT);
    setTheme(RGB_OROX_ORANGE);
    applyHardware(255, 110, 0); // Boot signature Tangerine glow
  }

  void setTheme(RGBTheme theme) {
    currentTheme = theme;

    switch (theme) {
      case RGB_OFF:
        targetR = 0; targetG = 0; targetB = 0;
        break;
      case RGB_IDLE_CYAN:
        targetR = 0; targetG = 180; targetB = 255;
        break;
      case RGB_TALKING_BLUE:
        targetR = 40; targetG = 120; targetB = 255;
        break;
      case RGB_TOUCH_PINK:
        targetR = 255; targetG = 60; targetB = 160;
        break;
      case RGB_PUFFER_CORAL:
        targetR = 255; targetG = 90; targetB = 140; // Soft cutie puffer fish coral
        break;
      case RGB_VOMIT_GREEN:
        targetR = 50; targetG = 255; targetB = 15; // Sick toxic green
        break;
      case RGB_TILT_AMBER:
        targetR = 255; targetG = 140; targetB = 0; // Startled amber
        break;
      case RGB_SUNNY_GOLD:
        targetR = 255; targetG = 200; targetB = 20;
        break;
      case RGB_RAIN_AQUA:
        targetR = 0; targetG = 200; targetB = 200;
        break;
      case RGB_SLEEP_NAVY:
        targetR = 40; targetG = 15; targetB = 0; // Warm 5% nightlight amber
        break;
      case RGB_OROX_ORANGE:
        targetR = 255; targetG = 110; targetB = 0;
        break;
    }
  }

  void setColor(uint8_t r, uint8_t g, uint8_t b) {
    targetR = r; targetG = g; targetB = b;
  }

  void update() {
    unsigned long now = millis();
    if (now - lastUpdate < 20) return; // 50 Hz refresh
    lastUpdate = now;

    // Smooth color interpolation towards target
    curR += (int)((targetR - curR) * 0.18f);
    curG += (int)((targetG - curG) * 0.18f);
    curB += (int)((targetB - curB) * 0.18f);

    // Apply mood breathing modulation
    breathPhase += 0.05f;
    float breathMod = 0.75f + 0.25f * sin(breathPhase);

    if (currentTheme == RGB_VOMIT_GREEN) {
      // Rapid sick flicker
      breathMod = 0.5f + ((random(100) > 40) ? 0.5f : 0.0f);
    } else if (currentTheme == RGB_TILT_AMBER) {
      // Fast warning pulse
      breathMod = 0.4f + 0.6f * abs(sin(breathPhase * 2.5f));
    } else if (currentTheme == RGB_SLEEP_NAVY) {
      // Steady dim glow
      breathMod = 0.5f;
    }

    uint8_t finalR = (uint8_t)(curR * breathMod);
    uint8_t finalG = (uint8_t)(curG * breathMod);
    uint8_t finalB = (uint8_t)(curB * breathMod);

    applyHardware(finalR, finalG, finalB);
  }
};

#endif
