#ifndef OROX_FACES_H
#define OROX_FACES_H

#include <Arduino.h>
#include <U8g2lib.h>
#include <math.h>

// Screen Modes
enum ScreenMode {
  MODE_FACE,
  MODE_VOMIT,
  MODE_TIME,
  MODE_WEATHER,
  MODE_PUFFER_FISH,
  MODE_POMODORO_SCREEN
};

// ==============================================================================
// 🤖 ORoX 100+ PROCEDURAL FACES & MICRO-ANIMATION ENGINE
// Directly incorporates the 100 Expressions Engine from mochi_100_faces:
// - 15 Eye Geometries with spring physics & pupil catchlights
// - 10 Dynamic Mouths with lip-sync speech animation
// - 8 Mood Extras: Dithered Blush, Falling Tear, Pulsing Sparkles, Sweat,
//   Breathing Brows, Floating Hearts, and Zzz
// - Natural Micro-Saccade movements & blink-concealed face transitions
// ==============================================================================

const char* const EYE_N[15]   = {"Round","Tall","Joy","Sleepy","Heart","Star","Pupil","Cat","Dizzy","Pixel","Grumpy","Sparkle","Droopy","Wink","Moon"};
const char* const MOUTH_N[10] = {"Smile","Oh","Cat","Flat","Grin","Smirk","Wavy","Tongue","Dot","Frown"};
const char* const EXTRA_N[8]  = {"None","Blush","Tear","Sparkles","Sweat","Brows","Hearts","Zzz"};
const char* const ADJ[10]     = {"Sweet","Cosmic","Fluffy","Sneaky","Dreamy","Zesty","Cheeky","Silky","Turbo","Lunar"};
const char* const NOUN[10]    = {"ORoX","Bean","Pixel","Boba","Comet","Pudding","Ninja","Jelly","Neon","Cloud"};

struct Expr { 
  uint8_t e, m, x, gap, s; 
};

class OroxFaces {
private:
  U8G2 &display;
  Expr cur;
  int exprIdx = 0;
  int pendingExpr = -1;
  bool autoMode = false;
  unsigned long nextExpr = 0;

  // Animation Physics & Look Tracking
  float eyeX = 0, eyeY = 0;
  float targetX = 0, targetY = 0;
  float velocityX = 0, velocityY = 0;
  float openness = 1.0f, targetOpen = 1.0f;
  float breathe = 0.0f;

  unsigned long nextLook = 0;
  unsigned long nextBlink = 0;
  bool blinking = false;
  unsigned long blinkStart = 0;

  // Modes & Timers
  ScreenMode currentMode = MODE_FACE;
  unsigned long modeEndTime = 0;
  bool isTalking = false;
  unsigned long talkStartTime = 0;
  unsigned long vomitStartTime = 0;

  // HUD Overlay for Volume & Brightness
  String hudTitle = "";
  int hudLevel = 0;
  unsigned long hudEndTime = 0;

  // Brightness Control (0..255 contrast)
  int brightnessLevel = 3;

  // Cached Weather & Time Data
  String timeString = "12:00 PM";
  String dateString = "FRI, OCT 10";
  String weatherTemp = "24°C";
  String weatherCond = "Sunny";
  String weatherHumid = "60%";
  int weatherCode = 0;

  unsigned long pomodoroEndTime = 0;

  float springMove(float current, float target, float &velocity, float stiffness, float damping) {
    velocity += (target - current) * stiffness;
    velocity *= damping;
    return current + velocity;
  }

  // Thick elliptical arc from mochi_100_faces
  void thickArc(U8G2 &d, float cx, float cy, float rx, float ry, float a0, float a1) {
    for (int i = 0; i <= 16; i++) {
      float a = a0 + (a1 - a0) * i / 16.0f;
      d.drawDisc((int)(cx + cos(a) * rx), (int)(cy + sin(a) * ry), 1);
    }
  }

  void thickBezier(U8G2 &d, float x0, float y0, float cx, float cy, float x1, float y1) {
    for (int i = 0; i <= 14; i++) {
      float t = i / 14.0f, u = 1 - t;
      d.drawDisc((int)(u*u*x0 + 2*u*t*cx + t*t*x1), (int)(u*u*y0 + 2*u*t*cy + t*t*y1), 1);
    }
  }

  void miniHeart(U8G2 &d, int x, int y) {
    d.drawHLine(x - 2, y, 2);     d.drawHLine(x + 1, y, 2);
    d.drawHLine(x - 2, y + 1, 5);
    d.drawHLine(x - 1, y + 2, 3);
    d.drawPixel(x, y + 3);
  }

  void plusSpark(U8G2 &d, int x, int y, int r) {
    d.drawHLine(x - r, y, 2 * r + 1);
    d.drawVLine(x, y - r, 2 * r + 1);
  }

  // ==============================================================================
  // EYES (15 TYPES) — Ported directly from mochi_100_faces
  // ==============================================================================
  void drawEye(U8G2 &d, int x, int y, int s, int side, uint8_t type, float ov, int px, int py) {
    if (type == 13) type = (side > 0) ? 2 : 0; // Wink (Joy on right, Round on left)

    bool lineType = (type == 2 || type == 14 || type == 8);
    d.setDrawColor(1);

    // Closed eye while blinking
    if (!lineType && ov < 0.3f) {
      d.drawRBox(x - s, y - 1, 2 * s, 3, 1);
      return;
    }

    int ry = max(1, (int)(s * ov));
    float lv = max(ov, 0.3f);

    switch (type) {
      case 0: // Round Squircle
        d.drawFilledEllipse(x, y, s, ry);
        if (ov > 0.6f) { d.setDrawColor(0); d.drawBox(x - s / 2, y - ry / 2, 2, 2); }
        break;

      case 1: { // Tall Oval
        int rt = max(1, (int)(s * 1.15f * ov));
        d.drawFilledEllipse(x, y, (int)(s * 0.7f), rt);
        if (ov > 0.6f) { d.setDrawColor(0); d.drawBox(x - s / 3, y - rt / 2, 2, 2); }
        break;
      }

      case 2: // Joy (^)
        thickArc(d, x, y + s * 0.35f, s * 0.9f, s * 0.9f * lv, PI * 1.1f, PI * 1.9f);
        break;

      case 14: // Moon (u)
        thickArc(d, x, y - s * 0.35f, s * 0.9f, s * 0.9f * lv, PI * 0.1f, PI * 0.9f);
        break;

      case 3: // Sleepy (Flat Eyelid)
        d.drawFilledEllipse(x, y, s, ry);
        d.setDrawColor(0);
        d.drawBox(x - s - 1, y - ry - 1, 2 * s + 3, ry + 1);
        break;

      case 4: { // Heart (<3)
        float r = s * 0.9f;
        d.drawDisc((int)(x - r * 0.5f), (int)(y - r * 0.3f), (int)(r * 0.58f));
        d.drawDisc((int)(x + r * 0.5f), (int)(y - r * 0.3f), (int)(r * 0.58f));
        d.drawTriangle((int)(x - r * 1.05f), (int)(y - r * 0.05f),
                       (int)(x + r * 1.05f), (int)(y - r * 0.05f),
                       x, (int)(y + r * 1.0f));
        break;
      }

      case 5: { // Star
        float R = s * 1.15f, r0 = R * 0.45f;
        for (int i = 0; i < 10; i++) {
          float a0 = -PI / 2 + i * PI / 5, a1 = a0 + PI / 5;
          float r1 = (i % 2) ? r0 : R, r2 = (i % 2) ? R : r0;
          d.drawTriangle(x, y,
                         (int)(x + cos(a0) * r1), (int)(y + sin(a0) * r1),
                         (int)(x + cos(a1) * r2), (int)(y + sin(a1) * r2));
        }
        break;
      }

      case 6: // Pupil Eyes
        d.drawFilledEllipse(x, y, s, ry);
        d.setDrawColor(0);
        d.drawDisc(x + constrain(px, -s / 3, s / 3), y + (int)(constrain(py, -s / 3, s / 3) * ov), max(2, s / 2));
        d.setDrawColor(1);
        if (ov > 0.6f) d.drawBox(x + constrain(px, -s / 3, s / 3) - 3, y - 3, 2, 2);
        break;

      case 7: // Cat Slit
        d.drawFilledEllipse(x, y, s, ry);
        d.setDrawColor(0);
        d.drawBox(x - 1, y - ry + 2, 2, max(1, 2 * ry - 4));
        break;

      case 8: // Dizzy X_X
        for (int o = -1; o <= 1; o++) {
          d.drawLine(x - s * 3 / 4, y - s * 3 / 4 + o, x + s * 3 / 4, y + s * 3 / 4 + o);
          d.drawLine(x + s * 3 / 4, y - s * 3 / 4 + o, x - s * 3 / 4, y + s * 3 / 4 + o);
        }
        break;

      case 9: { // Pixel / Cyber Eyes
        int hh = max(2, (int)(s * 0.95f * ov));
        d.drawRBox(x - s, y - hh, 2 * s, 2 * hh + 1, min(3, hh));
        break;
      }

      case 10: { // Grumpy (Angled Outer Brows)
        d.drawFilledEllipse(x, y, s, ry);
        d.setDrawColor(0);
        int o = x + side * (s + 2), n = x - side * (s + 2);
        int yt = y - s - 3, yi = y, yo = y - (int)(s * 0.8f);
        d.drawTriangle(o, yt, n, yt, n, yi);
        d.drawTriangle(o, yt, n, yi, o, yo);
        break;
      }

      case 11: { // Sparkle Cross
        int R = (int)(s * 1.3f), w = max(2, (int)(s * 0.3f));
        d.drawTriangle(x, y - R, x - w, y, x + w, y);
        d.drawTriangle(x, y + R, x - w, y, x + w, y);
        d.drawTriangle(x - R, y, x, y - w, x, y + w);
        d.drawTriangle(x + R, y, x, y - w, x, y + w);
        break;
      }

      case 12: { // Droopy (Angled Inner Brows)
        d.drawFilledEllipse(x, y, s, ry);
        d.setDrawColor(0);
        int o = x + side * (s + 2), n = x - side * (s + 2);
        int yt = y - s - 3, yi = y - (int)(s * 0.8f), yo = y;
        d.drawTriangle(n, yt, o, yt, o, yo);
        d.drawTriangle(n, yt, o, yo, n, yi);
        break;
      }
    }
    d.setDrawColor(1);
  }

  // ==============================================================================
  // MOUTHS (10 TYPES) — Ported directly from mochi_100_faces + Lip-Sync
  // ==============================================================================
  void drawMouth(U8G2 &d, uint8_t type, int cx, int cy) {
    d.setDrawColor(1);

    if (isTalking) {
      // Natural lip-sync mouth movement
      unsigned long elapsed = millis() - talkStartTime;
      int tOpen = (int)(abs(sin(elapsed / 110.0f)) * 7.0f);
      if (tOpen < 2) {
        d.drawBox(cx - 6, cy + 1, 12, 2);
      } else {
        d.drawFilledEllipse(cx, cy + 2, 5, max(3, tOpen));
      }
      return;
    }

    switch (type) {
      case 0: thickArc(d, cx, cy - 6, 14, 9, PI * 0.15f, PI * 0.85f); break; // Smile
      case 1: d.drawFilledEllipse(cx, cy + 2, 4, 5 + (int)(sin(millis() / 300.0) * 1.5)); break; // Oh
      case 2: // Cat :3
        thickArc(d, cx - 7, cy - 3, 7, 6, 0, PI);
        thickArc(d, cx + 7, cy - 3, 7, 6, 0, PI);
        break;
      case 3: d.drawBox(cx - 8, cy + 1, 16, 3); break; // Flat
      case 4: // Open Joy Grin
        d.drawFilledEllipse(cx, cy - 4, 15, 10);
        d.setDrawColor(0);
        d.drawBox(cx - 16, cy - 15, 33, 11);
        d.drawFilledEllipse(cx, cy + 3, 6, 3);
        d.setDrawColor(1);
        break;
      case 5: thickBezier(d, cx - 12, cy, cx + 2, cy + 12, cx + 14, cy - 6); break; // Smirk
      case 6: // Wavy
        for (int i = -14; i <= 14; i++) {
          d.drawDisc(cx + i, cy + (int)(sin(i * 0.45f) * 3), 1);
        }
        break;
      case 7: // Tongue
        d.drawRBox(cx, cy - 1, 10, 10, 3);
        d.setDrawColor(0);
        d.drawVLine(cx + 5, cy + 3, 6);
        d.setDrawColor(1);
        thickArc(d, cx, cy - 6, 14, 9, PI * 0.15f, PI * 0.85f);
        break;
      case 8: d.drawDisc(cx, cy + 2, 3); break; // Dot
      case 9: thickArc(d, cx, cy + 12, 14, 9, PI * 1.15f, PI * 1.85f); break; // Frown
    }
  }

  // ==============================================================================
  // EXTRAS (8 TYPES) — Dithered Blush, Tears, Sparkles, Brows, Hearts, Zzz
  // ==============================================================================
  void drawExtra(U8G2 &d, uint8_t type, int gap, int s) {
    unsigned long t = millis();
    d.setDrawColor(1);

    switch (type) {
      case 1: // Dithered Blush
        for (int side = -1; side <= 1; side += 2) {
          int bx = 64 + side * (gap + 10), by = 43;
          for (int dx = -7; dx <= 7; dx++) {
            for (int dy = -3; dy <= 3; dy++) {
              if ((dx * dx) / 49.0f + (dy * dy) / 9.0f <= 1.0f && ((dx + dy) & 1)) {
                d.drawPixel(bx + dx, by + dy);
              }
            }
          }
        }
        break;

      case 2: { // Falling Tear
        int f = (t / 60) % 18;
        if (f < 14) d.drawDisc(64 + gap + s / 3, 26 + s + 2 + f, 2);
        break;
      }

      case 3: { // Pulsing Sparkles
        const int sx[3] = {8, 119, 110}, sy[3] = {10, 14, 56};
        for (int i = 0; i < 3; i++) {
          int p = (t / 180 + i * 2) % 4;
          int r = (p == 0) ? 1 : (p == 1 || p == 3) ? 2 : 3;
          plusSpark(d, sx[i], sy[i], r);
        }
        break;
      }

      case 4: // Anime Sweat Drop
        d.drawDisc(112, 13, 2);
        d.drawTriangle(112, 4, 110, 11, 114, 11);
        break;

      case 5: { // Expressive Brows
        int yb = 26 - s - 6 + (int)(sin(t / 700.0) * 1.5);
        for (int o = 0; o < 2; o++) {
          d.drawLine(64 - gap - 12, yb + 2 + o, 64 - gap + 12, yb - 2 + o);
          d.drawLine(64 + gap - 12, yb - 2 + o, 64 + gap + 12, yb + 2 + o);
        }
        break;
      }

      case 6: { // Floating Hearts Rising
        for (int i = 0; i < 2; i++) {
          int f = (t / 40 + i * 30) % 56;
          miniHeart(d, (i ? 118 : 8) + (int)(sin(f / 8.0f) * 3), 60 - f);
        }
        break;
      }

      case 7: { // Zzz
        d.setFont(u8g2_font_6x10_tf);
        int n = (t / 500) % 4;
        for (int i = 0; i < n; i++) d.drawStr(104 + i * 7, 18 - i * 6, "z");
        break;
      }
    }
  }

  // ==============================================================================
  // SPECIAL PUFFER FISH EASTER EGG SCREEN
  // ==============================================================================
  void drawPufferFishFace() {
    float t = millis() / 250.0f;
    int puff = (int)(sin(t) * 4.0f);
    int cx = 64, cy = 32;

    display.drawDisc(cx, cy, 21 + puff);
    display.drawCircle(cx, cy, 22 + puff);

    for (int a = 0; a < 360; a += 45) {
      float rad = a * PI / 180.0f;
      int sx = cx + (int)(cos(rad) * (24 + puff));
      int sy = cy + (int)(sin(rad) * (24 + puff));
      display.drawPixel(sx, sy);
    }

    display.drawDisc(cx - 9, cy - 3, 5);
    display.drawDisc(cx + 9, cy - 3, 5);
    display.drawDisc(cx - 10, cy - 5, 2);
    display.drawDisc(cx + 8, cy - 5, 2);

    display.drawCircle(cx, cy + 7, 3);

    int finWobble = (int)(cos(t * 2.0f) * 3.0f);
    display.drawTriangle(cx - 24 - puff, cy, cx - 30 - puff, cy - 4 + finWobble, cx - 30 - puff, cy + 4 - finWobble);
    display.drawTriangle(cx + 24 + puff, cy, cx + 30 + puff, cy - 4 - finWobble, cx + 30 + puff, cy + 4 + finWobble);

    miniHeart(display, 18, 14 + (int)(sin(t) * 3.0f));
    miniHeart(display, 108, 14 + (int)(cos(t) * 3.0f));

    display.setFont(u8g2_font_6x10_tr);
    display.drawStr(24, 62, "CUTIE PUFFER!");
  }

  // ==============================================================================
  // VOMITING / SICK ANIMATION (MPU6050 Shake Triggered)
  // ==============================================================================
  void drawVomitFace() {
    int cx = 64, cy = 24;
    int s = 10;

    display.drawLine(cx - 24 - s, cy - s, cx - 24 + s, cy + s);
    display.drawLine(cx - 24 - s, cy + s, cx - 24 + s, cy - s);
    display.drawLine(cx + 24 - s, cy - s, cx + 24 + s, cy + s);
    display.drawLine(cx + 24 - s, cy + s, cx + 24 + s, cy - s);

    thickBezier(display, cx - 8, cy + 8, cx, cy + 12, cx + 8, cy + 8);

    unsigned long elapsed = millis() - vomitStartTime;
    int flowOffset = (int)(elapsed / 35) % 12;

    for (int y = cy + 14; y < 64; y += 4) {
      int wave = (int)(sin((y + flowOffset) / 2.5f) * 6.0f);
      display.drawBox(cx + wave - 5, y, 10, 3);
      if ((y + flowOffset) % 6 == 0) {
        display.drawDisc(cx + wave + ((y % 2 == 0) ? 8 : -8), y, 2);
      }
    }

    display.setFont(u8g2_font_5x8_tr);
    display.drawStr(34, 10, "*BLEEEGH!*");
  }

  // ==============================================================================
  // CLOCK / TIME SCREEN
  // ==============================================================================
  void drawTimeScreen() {
    display.setFont(u8g2_font_inb19_mr);
    int tw = display.getStrWidth(timeString.c_str());
    display.drawStr(64 - tw / 2, 34, timeString.c_str());

    display.setFont(u8g2_font_6x10_tr);
    int dw = display.getStrWidth(dateString.c_str());
    display.drawStr(64 - dw / 2, 52, dateString.c_str());

    int secX = (int)((millis() / 50) % 128);
    display.drawHLine(0, 62, 128);
    display.drawBox(secX, 61, 8, 3);
  }

  // ==============================================================================
  // WEATHER SCREEN
  // ==============================================================================
  void drawWeatherScreen() {
    int ix = 32, iy = 32;
    if (weatherCode == 0) {
      display.drawDisc(ix, iy, 11);
      for (int a = 0; a < 360; a += 45) {
        float r = a * PI / 180.0f;
        display.drawLine(ix + cos(r)*14, iy + sin(r)*14, ix + cos(r)*18, iy + sin(r)*18);
      }
    } else if (weatherCode == 2) {
      display.drawDisc(ix - 5, iy - 2, 8);
      display.drawDisc(ix + 6, iy, 7);
      display.drawBox(ix - 8, iy, 18, 5);
      int drop = (millis() / 80) % 8;
      display.drawLine(ix - 6, iy + 7 + drop, ix - 7, iy + 10 + drop);
      display.drawLine(ix + 4, iy + 6 + drop, ix + 3, iy + 9 + drop);
    } else {
      display.drawDisc(ix - 7, iy, 8);
      display.drawDisc(ix + 6, iy - 3, 9);
      display.drawDisc(ix + 14, iy + 2, 6);
      display.drawBox(ix - 10, iy + 2, 28, 6);
    }

    display.setFont(u8g2_font_logisoso16_tr);
    display.drawStr(66, 28, weatherTemp.c_str());

    display.setFont(u8g2_font_6x10_tr);
    display.drawStr(66, 44, weatherCond.c_str());
    display.drawStr(66, 58, ("Humid: " + weatherHumid).c_str());
  }

  // ==============================================================================
  // POMODORO FOCUS SCREEN
  // ==============================================================================
  void drawPomodoroScreen() {
    long remainingMs = max(0L, (long)(pomodoroEndTime - millis()));
    int mins = remainingMs / 60000;
    int secs = (remainingMs % 60000) / 1000;

    display.setFont(u8g2_font_6x10_tr);
    display.drawStr(22, 12, "POMODORO FOCUS");

    display.setFont(u8g2_font_inb19_mr);
    char buf[16];
    sprintf(buf, "%02d:%02d", mins, secs);
    int tw = display.getStrWidth(buf);
    display.drawStr(64 - tw / 2, 38, buf);

    float prog = 1.0f - ((float)remainingMs / (25.0f * 60000.0f));
    prog = constrain(prog, 0.0f, 1.0f);
    display.drawFrame(14, 48, 100, 8);
    display.drawBox(16, 50, (int)(prog * 96), 4);
  }

  void drawHUDOverlay() {
    display.drawBox(20, 14, 88, 36);
    display.setDrawColor(0);
    display.setFont(u8g2_font_6x10_tr);
    int tw = display.getStrWidth(hudTitle.c_str());
    display.drawStr(64 - tw / 2, 26, hudTitle.c_str());

    for (int i = 1; i <= 4; i++) {
      int bx = 26 + (i - 1) * 19;
      if (i <= hudLevel) {
        display.drawBox(bx, 33, 14, 8);
      } else {
        display.drawFrame(bx, 33, 14, 8);
      }
    }
    display.setDrawColor(1);
  }

public:
  OroxFaces(U8G2 &disp) : display(disp) {}

  void begin() {
    display.begin();
    applyBrightness();
    setExpression(0);
    nextLook  = millis() + 1000;
    nextBlink = millis() + 2500;
    nextExpr  = millis() + 4500;
  }

  int cycleBrightness() {
    brightnessLevel++;
    if (brightnessLevel > 4) brightnessLevel = 1;
    applyBrightness();
    showHUD("BRIGHTNESS", brightnessLevel);
    return brightnessLevel;
  }

  void applyBrightness() {
    uint8_t contrast = brightnessLevel * 63;
    display.setContrast(contrast);
  }

  int getBrightnessLevel() const { return brightnessLevel; }

  void showHUD(String title, int level, unsigned long durationMs = 2000) {
    hudTitle = title;
    hudLevel = level;
    hudEndTime = millis() + durationMs;
  }

  void setExpression(int i) {
    i = ((i % 100) + 100) % 100;
    exprIdx = i;
    int k = i / 15;
    cur.e   = i % 15;
    cur.m   = (i * 7 + k) % 10;
    cur.x   = (i * 3 + (i / 10)) % 8;
    cur.gap = 22 + (i * 13 % 9);   // Eye distance (22..30)
    cur.s   = 9 + (i * 7 % 6);     // Eye size (9..14)
    Serial.printf("[ORoX FACE #%d] %s %s | %s eyes, %s mouth, %s\n", i + 1,
                  ADJ[i % 10], NOUN[i / 10],
                  EYE_N[cur.e], MOUTH_N[cur.m], EXTRA_N[cur.x]);
  }

  // Smooth concealed face transition (swaps when eyes blink shut)
  void requestExpression(int i) {
    pendingExpr = ((i % 100) + 100) % 100;
    if (!blinking) { 
      blinking = true; 
      blinkStart = millis(); 
      targetOpen = 0; 
    }
  }

  void setTalking(bool talking) {
    isTalking = talking;
    if (talking) { 
      talkStartTime = millis(); 
      targetX = 0; 
      targetY = 0; 
    }
  }

  void triggerVomit(unsigned long durationMs = 4200) {
    currentMode = MODE_VOMIT;
    vomitStartTime = millis();
    modeEndTime = millis() + durationMs;
    isTalking = false;
  }

  void triggerPufferFish(unsigned long durationMs = 6500) {
    currentMode = MODE_PUFFER_FISH;
    modeEndTime = millis() + durationMs;
    isTalking = false;
  }

  void showTime(String tStr, String dStr, unsigned long durationMs = 6000) {
    timeString = tStr; dateString = dStr;
    currentMode = MODE_TIME; modeEndTime = millis() + durationMs;
  }

  void showWeather(String temp, String cond, int code, String humid = "60%", unsigned long durationMs = 8000) {
    weatherTemp = temp; weatherCond = cond; weatherCode = code; weatherHumid = humid;
    currentMode = MODE_WEATHER; modeEndTime = millis() + durationMs;
  }

  void startPomodoro(unsigned long durationMs = 25UL * 60UL * 1000UL) {
    pomodoroEndTime = millis() + durationMs;
    currentMode = MODE_POMODORO_SCREEN;
    modeEndTime = pomodoroEndTime;
  }

  void setAutoMode(bool enable) { autoMode = enable; }
  bool getAutoMode() const { return autoMode; }
  int getExpressionIndex() const { return exprIdx; }
  ScreenMode getMode() const { return currentMode; }

  String getExpressionName() const {
    char buf[128];
    snprintf(buf, sizeof(buf), "#%d %s %s (%s eyes, %s mouth, %s)",
             exprIdx + 1, ADJ[exprIdx % 10], NOUN[exprIdx / 10],
             EYE_N[cur.e], MOUTH_N[cur.m], EXTRA_N[cur.x]);
    return String(buf);
  }

  void nextExpression() {
    requestExpression(exprIdx + 1);
  }

  void prevExpression() {
    requestExpression(exprIdx - 1);
  }

  void randomExpression() {
    requestExpression(random(0, 100));
  }

  // ==============================================================================
  // LOOK / BLINK / MICRO-MOVEMENT SACCADES (from mochi_100_faces)
  // ==============================================================================
  void update() {
    unsigned long now = millis();

    if (currentMode != MODE_FACE && modeEndTime > 0 && now >= modeEndTime) {
      currentMode = MODE_FACE;
      setExpression(0);
    }

    // Look selection
    if (now >= nextLook && currentMode == MODE_FACE) {
      int r = random(100);
      if      (r < 25) { targetX = 0;               targetY = 0; }
      else if (r < 45) { targetX = random(-18, -8); targetY = random(-5, 6); }
      else if (r < 65) { targetX = random(8, 19);   targetY = random(-5, 6); }
      else if (r < 78) { targetX = random(-5, 6);   targetY = random(-9, -4); }
      else if (r < 90) { targetX = random(-5, 6);   targetY = random(4, 9); }
      else             { targetX = random(-16, 17); targetY = random(-9, 10); }
      nextLook = now + random(500, 1800);
    }

    // Micro-saccade jitters (alive realism)
    if (random(100) < 3) {
      targetX = constrain(targetX + random(-3, 4), -18.0f, 18.0f);
      targetY = constrain(targetY + random(-2, 3), -10.0f, 10.0f);
    }

    // Auto-mode cycling
    if (autoMode && currentMode == MODE_FACE && now >= nextExpr && !isTalking) {
      int n;
      do { n = random(100); } while (n == exprIdx);
      requestExpression(n);
      nextExpr = now + random(4000, 8000);
    }

    // Blink & face-swap handling
    if (!blinking && now >= nextBlink) { 
      blinking = true; 
      blinkStart = now; 
      targetOpen = 0; 
    }
    if (blinking) {
      unsigned long t = now - blinkStart;
      if (t < 70) {
        targetOpen = 0;
      } else if (t < 150) {
        // Face swaps seamlessly while eyes are shut!
        if (pendingExpr >= 0) { 
          setExpression(pendingExpr); 
          pendingExpr = -1; 
        }
        targetOpen = 1;
      } else {
        blinking = false; 
        targetOpen = 1; 
        nextBlink = now + random(1800, 5000); 
      }
    }

    eyeX = springMove(eyeX, targetX, velocityX, 0.024f, 0.82f);
    eyeY = springMove(eyeY, targetY, velocityY, 0.024f, 0.82f);
    openness += (targetOpen - openness) * 0.28f;
    breathe  += 0.045f;
  }

  void render() {
    display.clearBuffer();

    switch (currentMode) {
      case MODE_FACE: {
        int ex = (int)(eyeX * 0.6f);
        int ey = (int)(eyeY * 0.5f + sin(breathe) * 1.0f);
        int px = (int)(eyeX * 0.45f);
        int py = (int)(eyeY * 0.35f);
        int cy = 26 + ey;

        drawEye(display, 64 - cur.gap + ex, cy, cur.s, -1, cur.e, openness, px, py);
        drawEye(display, 64 + cur.gap + ex, cy, cur.s,  1, cur.e, openness, px, py);
        drawMouth(display, cur.m, 64 + ex / 2, 50);
        drawExtra(display, cur.x, cur.gap, cur.s);
        break;
      }
      case MODE_PUFFER_FISH:
        drawPufferFishFace();
        break;
      case MODE_VOMIT:
        drawVomitFace();
        break;
      case MODE_TIME:
        drawTimeScreen();
        break;
      case MODE_WEATHER:
        drawWeatherScreen();
        break;
      case MODE_POMODORO_SCREEN:
        drawPomodoroScreen();
        break;
    }

    if (hudEndTime > 0 && millis() < hudEndTime) {
      drawHUDOverlay();
    }

    display.sendBuffer();
  }
};

#endif
