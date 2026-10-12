#ifndef OROX_SENSORS_H
#define OROX_SENSORS_H

#include <Arduino.h>
#include <Wire.h>
#include <math.h>

// ==============================================================================
// 🤖 ORoX INTEGRATED SENSOR & BUTTON HUB (HIGH RESPONSIVENESS)
// ==============================================================================
// 1. MPU6050: 6-Axis Motion & Shake (Violent shake = Vomit trigger)
// 2. TTP223 Touch Sensor: Capacitive head pet/tap reaction
// 3. SW-520D Tilt Ball Switch: Bump / Tumble detection
// 4. Button 1: Dedicated Volume cycling (Pin 16 -> GND)
// 5. Button 2: Dedicated Brightness cycling (Pin 17 -> GND)
// 6. Yellow 4-Pin Button: Mode cycling / Sleep toggle (Pin 18 -> GND)
// ==============================================================================

#define MPU_ADDR 0x68

class OroxSensors {
private:
  int touchPin;
  int tiltPin;
  int btnVolPin;
  int btnBriPin;
  int btnYellowPin;

  // Touch sensor debounce state
  bool touchActive = false;
  unsigned long lastTouchTime = 0;

  // SW-520D Tilt/Vibration state
  bool lastTiltState = HIGH;
  unsigned long lastTiltTrigger = 0;
  unsigned long tiltSuppressUntil = 0;
  int tiltPulseCount = 0;
  unsigned long lastTiltPulse = 0;

  // Button 1 (Volume) State
  bool lastVolBtnState = HIGH;
  unsigned long lastVolBtnPress = 0;

  // Button 2 (Brightness) State
  bool lastBriBtnState = HIGH;
  unsigned long lastBriBtnPress = 0;

  // 4-Pin Yellow Button State
  bool lastYellowBtnState = HIGH;
  unsigned long yellowPressStart = 0;
  bool yellowLongHandled = false;

  // MPU6050 state
  bool mpuDetected = false;
  unsigned long lastMpuRead = 0;
  unsigned long lastShakePeak = 0;
  int shakePeakCount = 0;
  unsigned long lastVomitTrigger = 0;
  float prevAccelMag = 1.0f;

public:
  OroxSensors(int touch = 4, int tilt = 19, int btnVol = 16, int btnBri = 17, int btnYellow = 18)
    : touchPin(touch), tiltPin(tilt), btnVolPin(btnVol), btnBriPin(btnBri), btnYellowPin(btnYellow) {}

  bool begin() {
    // Initialize digital sensor pins with internal pull-ups
    pinMode(touchPin, INPUT);
    pinMode(tiltPin, INPUT_PULLUP);
    pinMode(btnVolPin, INPUT_PULLUP);
    pinMode(btnBriPin, INPUT_PULLUP);
    pinMode(btnYellowPin, INPUT_PULLUP);

    // Initialize MPU6050 via I2C
    Wire.beginTransmission(MPU_ADDR);
    Wire.write(0x6B); // Power Management 1 register
    Wire.write(0);    // Wake up MPU6050
    byte err = Wire.endTransmission();

    if (err == 0) {
      mpuDetected = true;
      Serial.println("✅ [ORoX MPU6050] Detected OK at 0x68!");

      Wire.beginTransmission(MPU_ADDR);
      Wire.write(0x1C); // Accelerometer config
      Wire.write(0x08); // +/- 4g sensitivity
      Wire.endTransmission();
    } else {
      Wire.beginTransmission(0x69);
      Wire.write(0x6B);
      Wire.write(0);
      byte err2 = Wire.endTransmission();
      if (err2 == 0) {
        mpuDetected = true;
        Serial.println("✅ [ORoX MPU6050] Detected OK at 0x69!");
      } else {
        Serial.println("⚠️ [ORoX MPU6050] Not detected on I2C. Using tilt sensor for shake backup.");
        mpuDetected = false;
      }
    }

    Serial.printf("✅ [ORoX BUTTONS] Ready (Vol:%d, Bri:%d, Yellow:%d, Touch:%d, Tilt:%d)\n",
                  btnVolPin, btnBriPin, btnYellowPin, touchPin, tiltPin);
    return true;
  }

  bool isMpuActive() const { return mpuDetected; }

  void suppressTilt(unsigned long ms = 5000) {
    tiltSuppressUntil = millis() + ms;
  }

  // Check Touch Sensor (Returns true on head touch)
  bool checkTouch() {
    unsigned long now = millis();
    int val = digitalRead(touchPin);

    if (val == HIGH && !touchActive && (now - lastTouchTime > 350)) {
      touchActive = true;
      lastTouchTime = now;
      Serial.println(">>> 💖 HEAD TOUCH / PET DETECTED! <<<");
      return true;
    } else if (val == LOW) {
      touchActive = false;
    }
    return false;
  }

  // Check SW-520D Tilt Ball Switch (Returns true on bump/tilt)
  bool checkTiltVibration() {
    unsigned long now = millis();
    if (now < tiltSuppressUntil) return false;

    bool curTilt = digitalRead(tiltPin);

    if (curTilt != lastTiltState) {
      lastTiltState = curTilt;

      if (now - lastTiltPulse < 500) {
        tiltPulseCount++;
      } else {
        tiltPulseCount = 1;
      }
      lastTiltPulse = now;

      if (now - lastTiltTrigger > 1200) {
        lastTiltTrigger = now;
        Serial.println(">>> ⚠️ SW-520D TILT/BUMP DETECTED! <<<");
        return true;
      }
    }
    return false;
  }

  // Check Dedicated Volume Button (Short Click)
  bool checkVolumeButton() {
    unsigned long now = millis();
    bool curState = digitalRead(btnVolPin);
    bool triggered = false;

    if (curState == LOW && lastVolBtnState == HIGH && (now - lastVolBtnPress > 120)) {
      triggered = true;
      lastVolBtnPress = now;
      Serial.printf("[BUTTON 1 - VOL] Clicked on GPIO %d!\n", btnVolPin);
    }
    lastVolBtnState = curState;
    return triggered;
  }

  // Check Dedicated Brightness Button (Short Click)
  bool checkBrightnessButton() {
    unsigned long now = millis();
    bool curState = digitalRead(btnBriPin);
    bool triggered = false;

    if (curState == LOW && lastBriBtnState == HIGH && (now - lastBriBtnPress > 120)) {
      triggered = true;
      lastBriBtnPress = now;
      Serial.printf("[BUTTON 2 - BRI] Clicked on GPIO %d!\n", btnBriPin);
    }
    lastBriBtnState = curState;
    return triggered;
  }

  // Check 4-Pin Yellow Button: 1 = Short Click (Mode), 2 = Long Press (Sleep/Wake)
  int checkYellowButton() {
    int event = 0;
    unsigned long now = millis();
    bool curState = digitalRead(btnYellowPin);

    if (curState == LOW && lastYellowBtnState == HIGH) {
      yellowPressStart = now;
      yellowLongHandled = false;
    } else if (curState == LOW && lastYellowBtnState == LOW) {
      if (!yellowLongHandled && (now - yellowPressStart >= 800)) {
        event = 2; // Long press = Sleep / Wake
        yellowLongHandled = true;
        Serial.printf("[YELLOW BUTTON] Long Press (>800ms) on GPIO %d!\n", btnYellowPin);
      }
    } else if (curState == HIGH && lastYellowBtnState == LOW) {
      if (!yellowLongHandled && (now - yellowPressStart >= 40) && (now - yellowPressStart < 800)) {
        event = 1; // Short press = Mode Cycle
        Serial.printf("[YELLOW BUTTON] Short Click on GPIO %d!\n", btnYellowPin);
      }
    }

    lastYellowBtnState = curState;
    return event;
  }

  // Check MPU6050 for Violent Shake / Vomit trigger
  bool checkShake() {
    unsigned long now = millis();

    if (now - lastVomitTrigger < 4500) return false;

    if (!mpuDetected) {
      if (tiltPulseCount >= 4 && (now - lastTiltPulse < 600)) {
        tiltPulseCount = 0;
        lastVomitTrigger = now;
        suppressTilt(5000);
        Serial.println(">>> 🤢 RAPID SHAKE DETECTED VIA TILT! TRIGGERING VOMIT! <<<");
        return true;
      }
      return false;
    }

    if (now - lastMpuRead < 25) return false;
    lastMpuRead = now;

    Wire.beginTransmission(MPU_ADDR);
    Wire.write(0x3B);
    if (Wire.endTransmission(false) != 0) return false;
    if (Wire.requestFrom((uint16_t)MPU_ADDR, (uint8_t)6, true) != 6) return false;

    int16_t rawX = (Wire.read() << 8) | Wire.read();
    int16_t rawY = (Wire.read() << 8) | Wire.read();
    int16_t rawZ = (Wire.read() << 8) | Wire.read();

    float ax = rawX / 8192.0f;
    float ay = rawY / 8192.0f;
    float az = rawZ / 8192.0f;

    float currentMag = sqrt(ax * ax + ay * ay + az * az);
    float jerk = abs(currentMag - prevAccelMag);
    prevAccelMag = currentMag;

    float dev = abs(currentMag - 1.0f);

    if (dev > 0.50f || jerk > 0.45f) {
      if (now - lastShakePeak < 750) {
        shakePeakCount++;
      } else {
        shakePeakCount = 1;
      }
      lastShakePeak = now;

      if (shakePeakCount >= 2) {
        shakePeakCount = 0;
        lastVomitTrigger = now;
        suppressTilt(5000);
        Serial.printf(">>> 🤢 MPU6050 SHAKE DETECTED (dev=%.2f, jerk=%.2f)! TRIGGERING VOMIT! <<<\n", dev, jerk);
        return true;
      }
    }

    if (now - lastShakePeak > 800) {
      shakePeakCount = 0;
    }

    return false;
  }
};

#endif
