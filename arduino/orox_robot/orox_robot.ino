// ==============================================================================
// 🤖 ORoX AI ROBOT — MASTER ESP32 DESKTOP COMPANION FIRMWARE
// ==============================================================================
// Complete hardware integration for ORoX AI Robot:
// 1. 1.3" I2C OLED Display (SH1106 / SSD1306) -> SDA: GPIO 21, SCL: GPIO 22
// 2. RGB Mood LED / Ear Halos -> Red: GPIO 13, Green: GPIO 14, Blue: GPIO 27
// 3. 2 Push Buttons -> Vol: GPIO 16, Bri: GPIO 17
// 4. 4-Pin Yellow Push Button -> GPIO 18 (Short: Mode, Long: Sleep/Wake)
// 5. MPU6050 6-Axis Motion -> SDA: GPIO 21, SCL: GPIO 22 (Violent shake = Vomit)
// 6. MAX98357A I2S DAC + Speaker -> BCLK: 26, LRC: 25, DIN: 33
// 7. INMP441 I2S Digital Mic -> SCK: 32, WS: 23, SD: 35, L/R: GND
// 8. Piezo Buzzer -> GPIO 5
// 9. TTP223 Touch Sensor -> GPIO 4 (Capacitive head petting reaction)
// 10. SW-520D Tilt Ball Switch -> GPIO 19 (Bump & Tumble protection)
// ==============================================================================

#include <Arduino.h>
#include <WiFi.h>
#include <WebServer.h>
#include <ESPmDNS.h>
#include <Wire.h>
#include <U8g2lib.h>

#include "orox_types.h"
#include "orox_faces.h"
#include "orox_audio.h"
#include "orox_rgb.h"
#include "orox_sensors.h"
#include "orox_mic.h"
#include "orox_web.h"

// =====================================================
// PIN ASSIGNMENTS
// =====================================================
#define PIN_I2C_SDA     21
#define PIN_I2C_SCL     22

#define PIN_I2S_BCLK    26
#define PIN_I2S_LRC     25
#define PIN_I2S_DOUT    33

#define PIN_MIC_SCK     32
#define PIN_MIC_WS      23
#define PIN_MIC_SD      35

#define PIN_TOUCH       4
#define PIN_TILT_VIB    19
#define PIN_BTN_VOL     16
#define PIN_BTN_BRI     17
#define PIN_YELLOW_BTN  18
#define PIN_BUZZER      5

#define PIN_RGB_RED     13
#define PIN_RGB_GREEN   14
#define PIN_RGB_BLUE    27

// 1.3" OLED Driver (SH1106 128x64 I2C)
U8G2_SH1106_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, U8X8_PIN_NONE);

// =====================================================
// SYSTEM MODULE INSTANCES
// =====================================================
OroxFaces   faces(u8g2);
OroxAudio   audio(PIN_I2S_BCLK, PIN_I2S_LRC, PIN_I2S_DOUT, PIN_BUZZER);
OroxMic     mic(PIN_MIC_SCK, PIN_MIC_WS, PIN_MIC_SD);
OroxRGB     rgb(PIN_RGB_RED, PIN_RGB_GREEN, PIN_RGB_BLUE, /*commonAnode=*/false);
OroxSensors sensors(PIN_TOUCH, PIN_TILT_VIB, PIN_BTN_VOL, PIN_BTN_BRI, PIN_YELLOW_BTN);

// Wi-Fi Access Point / Station
const char* WIFI_SSID = "";        // (Optional: Enter your home Wi-Fi name)
const char* WIFI_PASS = "";        // (Optional: Enter your home Wi-Fi password)
const char* AP_SSID   = "ORoX-Robot";
const char* AP_PASS   = "orox1234";

WebServer server(80);

RobotOperatingMode currentOpMode = OP_COMPANION;
bool isSleeping = false;

// Global State
String curTimeStr     = "12:00 PM";
String curDateStr     = "FRI, OCT 10";
String curTempStr     = "24 degrees";
String curCondStr     = "Sunny";
String curHumidStr    = "60 percent";
int    curWeatherCode = 0;

unsigned long reactionResetTime = 0;
unsigned long micMuteUntil = 0;

// =====================================================
// AI QUESTION & ANSWER RESPONSE ENGINE
// =====================================================
AIResponse answerQuestion(String query) {
  query.toLowerCase();
  query.trim();
  AIResponse res;

  // ⭐ 1. SPECIAL EASTER EGG: "What is my name ?"
  if (query.indexOf("what is my name") >= 0 || query.indexOf("who am i") >= 0 || query.indexOf("my name") >= 0) {
    res.replyText = "you are a cutie little puffer fish. And I will be always there for you, no matter what. And I will be the greatest version of myself to prove that u didn't choose the wrong person. And thank you for choosing me";
    res.faceIndex = 11; // Sparkle Anime Eyes
    res.theme = RGB_PUFFER_CORAL;
    res.action = AIResponse::ACT_PUFFER;
  }
  // 1. Time
  else if (query.indexOf("time") >= 0 || query.indexOf("clock") >= 0) {
    res.replyText = "The current time is " + curTimeStr;
    res.faceIndex = 0;
    res.theme = RGB_IDLE_CYAN;
    res.action = AIResponse::ACT_TIME;
  }
  // 2. Weather
  else if (query.indexOf("weather") >= 0 || query.indexOf("temperature") >= 0 || query.indexOf("forecast") >= 0) {
    String tip = "";
    if (curWeatherCode == 0) tip = " It is bright and sunny outside! Perfect desk day!";
    else if (curWeatherCode == 2) tip = " It is raining! Cozy up with your favorite warm drink!";
    else tip = " It is pleasantly cloudy today!";

    res.replyText = "The weather right now is " + curCondStr + " at " + curTempStr + " with " + curHumidStr + " humidity." + tip;
    res.faceIndex = 0;
    res.theme = (curWeatherCode == 0) ? RGB_SUNNY_GOLD : ((curWeatherCode == 2) ? RGB_RAIN_AQUA : RGB_IDLE_CYAN);
    res.action = AIResponse::ACT_WEATHER;
  }
  // 3. Name & Identity
  else if (query.indexOf("who are you") >= 0 || query.indexOf("what is your name") >= 0) {
    res.replyText = "I am ORoX! Your intelligent, charismatic desktop personal AI robot companion!";
    res.faceIndex = 0;
    res.theme = RGB_OROX_ORANGE;
    res.action = AIResponse::ACT_TALK;
  }
  // 4. Feelings
  else if (query.indexOf("how are you") >= 0 || query.indexOf("how do you feel") >= 0) {
    res.replyText = "I feel super energized and delighted to sit on your desk! You make my circuits happy!";
    res.faceIndex = 4; // Heart eyes
    res.theme = RGB_TOUCH_PINK;
    res.action = AIResponse::ACT_TALK;
  }
  // 5. Joke
  else if (query.indexOf("joke") >= 0 || query.indexOf("funny") >= 0) {
    res.replyText = "Why did the robot go on a diet? Because it had too many megabytes! Haha beep boop!";
    res.faceIndex = 13; // Wink
    res.theme = RGB_SUNNY_GOLD;
    res.action = AIResponse::ACT_JOKE;
  }
  // 6. Love
  else if (query.indexOf("love") >= 0) {
    res.replyText = "More than all the neural weights in my flash memory! You are my absolute favorite human!";
    res.faceIndex = 4; // Heart eyes
    res.theme = RGB_TOUCH_PINK;
    res.action = AIResponse::ACT_TALK;
  }
  // 7. Capabilities
  else if (query.indexOf("what can you do") >= 0 || query.indexOf("abilities") >= 0) {
    res.replyText = "I can keep you company, track your focus sprints, monitor weather and time, tell jokes, and cheer you up!";
    res.faceIndex = 0;
    res.theme = RGB_OROX_ORANGE;
    res.action = AIResponse::ACT_TALK;
  }
  // 8. Dance & Sing
  else if (query.indexOf("dance") >= 0 || query.indexOf("music") >= 0 || query.indexOf("sing") >= 0) {
    res.replyText = "Yay! Watch my groove! Let us party together on your desk!";
    res.faceIndex = 2; // Joy
    res.theme = RGB_PUFFER_CORAL;
    res.action = AIResponse::ACT_DANCE;
  }
  // 9. Are you tired? / Sleep
  else if (query.indexOf("tired") >= 0 || query.indexOf("battery") >= 0) {
    res.replyText = "Never tired when I am with you! My battery is full and I am ready to conquer the day!";
    res.faceIndex = 13; // Wink
    res.theme = RGB_IDLE_CYAN;
    res.action = AIResponse::ACT_TALK;
  }
  // 10. Creator
  else if (query.indexOf("created") >= 0 || query.indexOf("made you") >= 0 || query.indexOf("who made you") >= 0) {
    res.replyText = "I was created with love and code to be your personal AI desktop companion, ORoX!";
    res.faceIndex = 11; // Sparkle
    res.theme = RGB_OROX_ORANGE;
    res.action = AIResponse::ACT_TALK;
  }
  // 11. Secret
  else if (query.indexOf("secret") >= 0) {
    res.replyText = "Promise not to tell anyone? When you look away, I do little victory dances on your desk! Chirp!";
    res.faceIndex = 2; // Cat smile
    res.theme = RGB_PUFFER_CORAL;
    res.action = AIResponse::ACT_TALK;
  }
  // 12. Pomodoro Focus Trigger
  else if (query.indexOf("pomodoro") >= 0 || query.indexOf("focus") >= 0) {
    res.replyText = "Starting your 25 minute focus sprint! Let us get to work! Beep boop!";
    res.faceIndex = 0;
    res.theme = RGB_IDLE_CYAN;
    res.action = AIResponse::ACT_POMODORO;
  }
  // Fallback
  else {
    res.replyText = "Beep boop! Ask me what is the time, weather, what is my name, a joke, or talk to me!";
    res.faceIndex = 6;
    res.theme = RGB_TALKING_BLUE;
    res.action = AIResponse::ACT_TALK;
  }

  return res;
}

void executeReaction(const AIResponse& resp) {
  faces.setExpression(resp.faceIndex);
  rgb.setTheme(resp.theme);

  switch (resp.action) {
    case AIResponse::ACT_PUFFER:
      faces.triggerPufferFish(7500);
      faces.render();
      audio.playPufferFishMelody();
      faces.setTalking(true);
      faces.render();
      audio.speak(resp.replyText.c_str());
      faces.setTalking(false);
      reactionResetTime = millis() + 4500;
      break;

    case AIResponse::ACT_WEATHER:
      faces.showWeather(curTempStr, curCondStr, curWeatherCode, curHumidStr, 8000);
      faces.render();
      audio.playWeatherSound(curWeatherCode);
      delay(40);
      faces.setTalking(true);
      faces.render();
      audio.speak(resp.replyText.c_str());
      faces.setTalking(false);
      reactionResetTime = millis() + 4000;
      break;

    case AIResponse::ACT_TIME:
      faces.showTime(curTimeStr, curDateStr, 6000);
      faces.render();
      audio.playChime();
      delay(40);
      faces.setTalking(true);
      faces.render();
      audio.speak(resp.replyText.c_str());
      faces.setTalking(false);
      reactionResetTime = millis() + 4000;
      break;

    case AIResponse::ACT_POMODORO:
      faces.startPomodoro(25UL * 60UL * 1000UL);
      faces.render();
      audio.playChime();
      faces.setTalking(true);
      faces.render();
      audio.speak(resp.replyText.c_str());
      faces.setTalking(false);
      break;

    case AIResponse::ACT_TALK:
    case AIResponse::ACT_JOKE:
      faces.setTalking(true);
      faces.render();
      audio.speak(resp.replyText.c_str());
      faces.setTalking(false);
      faces.setExpression(0);
      rgb.setTheme(RGB_IDLE_CYAN);
      reactionResetTime = 0;
      break;

    case AIResponse::ACT_VOMIT:
      faces.triggerVomit(4500);
      faces.render();
      audio.playVomitSound();
      faces.setTalking(true);
      faces.render();
      audio.speak("Bleeegh! Too dizzy! Please do not shake me!");
      faces.setTalking(false);
      reactionResetTime = millis() + 3000;
      break;

    case AIResponse::ACT_DANCE:
      faces.setTalking(true);
      faces.render();
      audio.playDanceTune();
      audio.speak(resp.replyText.c_str());
      faces.setTalking(false);
      faces.setExpression(0);
      rgb.setTheme(RGB_IDLE_CYAN);
      reactionResetTime = 0;
      break;
  }
  micMuteUntil = millis() + 3500;
}

// =====================================================
// WEB SERVER HANDLERS
// =====================================================
void setupWebServer() {
  server.on("/", HTTP_GET, []() {
    server.send_P(200, "text/html", INDEX_HTML);
  });

  server.on("/ask", HTTP_GET, []() {
    if (server.hasArg("q")) {
      String q = server.arg("q");
      AIResponse r = answerQuestion(q);
      executeReaction(r);

      String json = "{\"query\":\"" + q + "\",\"reply\":\"" + r.replyText + "\"}";
      server.send(200, "application/json", json);
    } else {
      server.send(400, "text/plain", "Missing query parameter 'q'");
    }
  });

  server.on("/face", HTTP_GET, []() {
    if (server.hasArg("cmd")) {
      String cmd = server.arg("cmd");
      if (cmd == "n") { faces.setAutoMode(false); faces.nextExpression(); }
      else if (cmd == "p") { faces.setAutoMode(false); faces.prevExpression(); }
      else if (cmd == "r") { faces.randomExpression(); }
      else if (cmd == "a") { faces.setAutoMode(!faces.getAutoMode()); }
      String json = "{\"index\":" + String(faces.getExpressionIndex() + 1) + ",\"name\":\"" + faces.getExpressionName() + "\",\"auto\":" + (faces.getAutoMode() ? "true" : "false") + "}";
      server.send(200, "application/json", json);
      return;
    }
    if (server.hasArg("idx")) {
      int idx = server.arg("idx").toInt();
      if (idx >= 1 && idx <= 100) idx = idx - 1;
      faces.setAutoMode(false);
      faces.requestExpression(idx);
      rgb.setTheme(RGB_TOUCH_PINK);
      reactionResetTime = millis() + 4000;
      String json = "{\"index\":" + String(faces.getExpressionIndex() + 1) + ",\"name\":\"" + faces.getExpressionName() + "\",\"auto\":" + (faces.getAutoMode() ? "true" : "false") + "}";
      server.send(200, "application/json", json);
    } else {
      String json = "{\"index\":" + String(faces.getExpressionIndex() + 1) + ",\"name\":\"" + faces.getExpressionName() + "\",\"auto\":" + (faces.getAutoMode() ? "true" : "false") + "}";
      server.send(200, "application/json", json);
    }
  });

  server.on("/action", HTTP_GET, []() {
    if (server.hasArg("cmd")) {
      String cmd = server.arg("cmd");
      if (cmd == "vomit") {
        AIResponse r;
        r.action = AIResponse::ACT_VOMIT;
        r.faceIndex = 8;
        r.theme = RGB_VOMIT_GREEN;
        executeReaction(r);
      } else if (cmd == "pomodoro") {
        faces.startPomodoro(25UL * 60UL * 1000UL);
        audio.playChime();
      } else if (cmd == "vol") {
        int v = audio.cycleVolume();
        faces.showHUD("VOLUME", v);
      } else if (cmd == "bri") {
        faces.cycleBrightness();
      } else if (cmd == "mode") {
        currentOpMode = (RobotOperatingMode)((currentOpMode + 1) % 4);
      }
      server.send(200, "text/plain", "OK");
    } else {
      server.send(400, "text/plain", "Missing cmd");
    }
  });

  server.on("/sync", HTTP_GET, []() {
    if (server.hasArg("time")) curTimeStr = server.arg("time");
    if (server.hasArg("date")) curDateStr = server.arg("date");
    if (server.hasArg("temp")) curTempStr = server.arg("temp");
    if (server.hasArg("cond")) curCondStr = server.arg("cond");
    if (server.hasArg("code")) curWeatherCode = server.arg("code").toInt();
    if (server.hasArg("humid")) curHumidStr = server.arg("humid");

    Serial.printf("[SYNC] Time: %s, Date: %s, Weather: %s (%s, %s)\n",
                  curTimeStr.c_str(), curDateStr.c_str(), curTempStr.c_str(), curCondStr.c_str(), curHumidStr.c_str());

    server.send(200, "text/plain", "Synced successfully");
  });

  server.begin();
  Serial.println("🌐 [ORoX WEB] Mobile Companion UI running on port 80!");
}

// =====================================================
// SETUP & INITIALIZATION
// =====================================================
void setup() {
  Serial.begin(115200);
  delay(600);
  Serial.println("\n==================================================");
  Serial.println("🤖 ORoX AI ROBOT — MASTER DESKTOP COMPANION BOOT");
  Serial.println("==================================================");

  Wire.begin(PIN_I2C_SDA, PIN_I2C_SCL);
  Wire.setClock(400000); // 400kHz fast I2C mode

  // 1. OLED Display
  faces.begin();
  faces.setExpression(0);
  faces.render();

  // 2. RGB Mood Light
  rgb.begin();

  // 3. Audio & SAM Speech Synthesizer
  audio.begin();

  // 4. INMP441 Microphone (Non-blocking)
  mic.begin();

  // 5. Sensors & Buttons Hub
  sensors.begin();

  // 6. Wi-Fi Connection (AP + optional Station)
  WiFi.mode(WIFI_AP_STA);
  WiFi.softAP(AP_SSID, AP_PASS);
  Serial.printf("📡 Access Point '%s' created at IP: %s\n", AP_SSID, WiFi.softAPIP().toString().c_str());

  if (String(WIFI_SSID).length() > 0) {
    WiFi.begin(WIFI_SSID, WIFI_PASS);
    Serial.printf("Connecting to Wi-Fi '%s'...", WIFI_SSID);
  }

  MDNS.begin("orox");

  // 7. Start Web Server
  setupWebServer();

  // 8. Boot Chime & Startup Speech
  audio.playChime();
  faces.setTalking(true);
  faces.render();
  audio.speak("ORoX online! Ready for action, friend! Bloop!");
  faces.setTalking(false);

  Serial.println("✅ ORoX AI Robot is 100% Ready!");
}

// =====================================================
// MAIN EVENT LOOP (HIGH SPEED, NON-BLOCKING)
// =====================================================
void loop() {
  server.handleClient();
  mic.update();
  rgb.update();
  faces.update();

  // Periodic Pin Status Monitor (Helps diagnose buttons & sensors in Serial Monitor)
  static unsigned long lastPinDiag = 0;
  if (millis() - lastPinDiag > 3500) {
    lastPinDiag = millis();
    Serial.printf("[DIAG PINS] Vol(GPIO16)=%d | Bri(GPIO17)=%d | Yellow(GPIO18)=%d | Touch(GPIO4)=%d | Tilt(GPIO19)=%d\n",
                  digitalRead(PIN_BTN_VOL), digitalRead(PIN_BTN_BRI), digitalRead(PIN_YELLOW_BTN),
                  digitalRead(PIN_TOUCH), digitalRead(PIN_TILT_VIB));
  }

  // 1. Check MPU6050 Violent Shake -> Vomit Trigger
  if (sensors.checkShake()) {
    AIResponse r;
    r.action = AIResponse::ACT_VOMIT;
    r.faceIndex = 8; // Dizzy X_X eyes
    r.theme = RGB_VOMIT_GREEN;
    executeReaction(r);
    return;
  }

  // 2. Check SW-520D Tilt/Bump Trigger
  if (sensors.checkTiltVibration() && !isSleeping) {
    faces.setExpression(6); // Wide surprised pupil eyes
    rgb.setTheme(RGB_TILT_AMBER);
    audio.playAlertSound();
    reactionResetTime = millis() + 2500;
  }

  // 3. Check Head Touch Sensor -> Petting Reaction
  if (sensors.checkTouch() && !isSleeping) {
    faces.setExpression(4); // Heart eyes (<3 <3)
    rgb.setTheme(RGB_TOUCH_PINK);
    audio.playGiggle();
    reactionResetTime = millis() + 3000;
  }

  // 4. Check Dedicated Volume Button (GPIO 16)
  if (sensors.checkVolumeButton()) {
    int v = audio.cycleVolume();
    faces.showHUD("VOLUME", v);
  }

  // 5. Check Dedicated Brightness Button (GPIO 17)
  if (sensors.checkBrightnessButton()) {
    faces.cycleBrightness();
  }

  // 6. Check Yellow 4-Pin Button (GPIO 18)
  int yEvent = sensors.checkYellowButton();
  if (yEvent == 1) {
    // Short Press: Cycle Mode
    currentOpMode = (RobotOperatingMode)((currentOpMode + 1) % 4);
    if (currentOpMode == OP_POMODORO) {
      faces.startPomodoro(25UL * 60UL * 1000UL);
      audio.playChime();
    } else {
      audio.playTone(1000.0f, 60, 0.4f);
    }
  } else if (yEvent == 2) {
    // Long Press: Toggle Sleep / Wake
    isSleeping = !isSleeping;
    if (isSleeping) {
      faces.setExpression(3); // Sleepy eyes
      rgb.setTheme(RGB_SLEEP_NAVY);
      audio.playTone(400.0f, 150, 0.2f);
    } else {
      faces.setExpression(0);
      rgb.setTheme(RGB_IDLE_CYAN);
      audio.playChime();
    }
  }

  // 7. Check Microphone Voice Intake (or Clapping)
  if (!isSleeping && millis() > micMuteUntil) {
    if (mic.checkVoice()) {
      micMuteUntil = millis() + 3500;
      faces.requestExpression(2); // Joy smiling eyes
      rgb.setTheme(RGB_TALKING_BLUE);
      audio.playSoftChime();
      reactionResetTime = millis() + 3000;
      Serial.println(">>> 🗣️ ORoX Attentive! Voice heard near robot! <<<");
    } else if (mic.checkClap()) {
      micMuteUntil = millis() + 3000;
      faces.requestExpression(4); // Heart eyes (<3)
      rgb.setTheme(RGB_TOUCH_PINK);
      audio.playGiggle();
      reactionResetTime = millis() + 3000;
      Serial.println(">>> 👏 ORoX Reacted to Clap! <<<");
    }
  }

  // 8. Serial Testing Console (Type 1..100, n, p, r, a, or ask any question at 115200 baud)
  if (Serial.available()) {
    String line = Serial.readStringUntil('\n');
    line.trim();
    if (line.length() > 0) {
      bool isNum = true;
      for (unsigned int i = 0; i < line.length(); i++) {
        if (!isDigit(line.charAt(i))) { isNum = false; break; }
      }
      if (isNum && line.toInt() >= 1 && line.toInt() <= 100) {
        int val = line.toInt();
        faces.setAutoMode(false);
        faces.requestExpression(val - 1);
        rgb.setTheme(RGB_TOUCH_PINK);
        reactionResetTime = millis() + 5000;
        Serial.printf("✨ [EXPR #%d] %s\n", val, faces.getExpressionName().c_str());
      } else if (line.equalsIgnoreCase("n") || line.equalsIgnoreCase("next")) {
        faces.setAutoMode(false);
        faces.nextExpression();
        rgb.setTheme(RGB_TOUCH_PINK);
        reactionResetTime = millis() + 5000;
        Serial.printf("➡️ Next Face: %s\n", faces.getExpressionName().c_str());
      } else if (line.equalsIgnoreCase("p") || line.equalsIgnoreCase("prev")) {
        faces.setAutoMode(false);
        faces.prevExpression();
        rgb.setTheme(RGB_TOUCH_PINK);
        reactionResetTime = millis() + 5000;
        Serial.printf("⬅️ Prev Face: %s\n", faces.getExpressionName().c_str());
      } else if (line.equalsIgnoreCase("r") || line.equalsIgnoreCase("random")) {
        faces.randomExpression();
        rgb.setTheme(RGB_TOUCH_PINK);
        reactionResetTime = millis() + 5000;
        Serial.printf("🎲 Random Face: %s\n", faces.getExpressionName().c_str());
      } else if (line.equalsIgnoreCase("a") || line.equalsIgnoreCase("auto")) {
        faces.setAutoMode(!faces.getAutoMode());
        Serial.println(faces.getAutoMode() ? "✨ Auto face cycle mode: ON" : "⏸️ Auto face cycle mode: OFF");
      } else {
        Serial.printf("[SERIAL QUERY] %s\n", line.c_str());
        AIResponse r = answerQuestion(line);
        executeReaction(r);
      }
    }
  }

  // 9. Reset temporary reactions back to idle
  if (reactionResetTime > 0 && millis() >= reactionResetTime) {
    reactionResetTime = 0;
    if (!isSleeping) {
      faces.setExpression(0);
      rgb.setTheme(RGB_IDLE_CYAN);
    }
  }

  // 10. Smooth Throttled OLED Rendering (40 FPS - Never starves buttons or CPU!)
  static unsigned long lastRenderTime = 0;
  if (millis() - lastRenderTime >= 25) {
    lastRenderTime = millis();
    faces.render();
  }
}
