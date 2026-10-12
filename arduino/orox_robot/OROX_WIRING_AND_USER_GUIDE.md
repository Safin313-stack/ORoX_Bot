# 🤖 ORoX AI Robot — Master Wiring & Architecture Blueprint

Welcome to the definitive engineering guide for building your **ORoX AI Desktop Companion Robot**!

---

## 📋 1. Master Hardware Pinout Table (ESP32 DevKit)

All 11 hardware components have been assigned to verified, non-conflicting GPIO pins on the ESP32:

| # | Component | Component Pin | ESP32 Pin | Voltage Rail | Purpose & Notes |
|---|:---|:---|:---|:---|:---|
| **1** | **1.3" OLED Display** (SH1106) | `VCC` | **3V3** | 3.3V | Emotive screen face |
| | | `GND` | **GND** | Ground | Ground |
| | | `SCL` | **GPIO 22** | Logic | Hardware I2C Clock |
| | | `SDA` | **GPIO 21** | Logic | Hardware I2C Data |
| **2** | **RGB Mood LED** (Common Cathode)| `Red` | **GPIO 13** | PWM (via 220Ω) | Expressive ear halo glow |
| | | `Green` | **GPIO 14** | PWM (via 220Ω) | Vomit green / alert amber |
| | | `Blue` | **GPIO 27** | PWM (via 220Ω) | Talking blue / idle cyan |
| | | `Cathode (-)`| **GND** | Ground | Common Cathode ground |
| **3** | **Push Button 1 (Volume)** | Leg 1 | **GPIO 16** | Internal Pull-Up | Cycle Volume (25%, 50%, 75%, 100%, Mute) |
| | | Leg 2 | **GND** | Ground | Active LOW |
| **4** | **Push Button 2 (Brightness)** | Leg 1 | **GPIO 17** | Internal Pull-Up | Cycle OLED Brightness (25%, 50%, 75%, 100%) |
| | | Leg 2 | **GND** | Ground | Active LOW |
| **5** | **4-Pin Yellow Push Button** | Pair A | **GPIO 18** | Internal Pull-Up | Short: Mode Cycle / Long: Sleep/Wake |
| | | Pair B | **GND** | Ground | Active LOW |
| **6** | **MPU6050 6-Axis IMU** | `VCC` | **3V3** | 3.3V | Motion, shake & tilt detection |
| | | `GND` | **GND** | Ground | Ground |
| | | `SCL` | **GPIO 22** | Logic | Shared I2C Clock |
| | | `SDA` | **GPIO 21** | Logic | Shared I2C Data |
| | | `AD0` | **GND** | Ground | Locks I2C Address to `0x68` |
| **7** | **MAX98357A I2S DAC Amp** | `VIN` | **VIN (5V)** | 5V Power | 3.2W High-fidelity speaker power |
| | | `GND` | **GND** | Ground | Audio Ground |
| | | `LRC` (WS) | **GPIO 25** | Logic | I2S Word Select Clock |
| | | `BCLK` | **GPIO 26** | Logic | I2S Bit Clock |
| | | `DIN` | **GPIO 33** | Logic | I2S Digital Audio Data |
| | | `GAIN` | **GND** | Ground | 9dB clean gain |
| **8** | **Speaker (3W 4Ω/8Ω)** | `+` and `-` | **MAX98357A Out**| Audio | Connect to speaker terminals |
| **9** | **INMP441 I2S Digital Mic** | `VDD` | **3V3** | 3.3V ONLY | **CAUTION: Do NOT connect to 5V!** |
| | | `GND` | **GND** | Ground | Ground |
| | | `L/R` | **GND** | Ground | Tied to GND for Left Channel |
| | | `WS` | **GPIO 23** | Logic | I2S_NUM_1 Word Select Clock |
| | | `SCK` | **GPIO 32** | Logic | I2S_NUM_1 Bit Clock |
| | | `SD` | **GPIO 35** | Input-Only | I2S_NUM_1 Serial Data In |
| **10**| **Piezo Buzzer** | Positive `(+)`| **GPIO 5** | Logic | Acoustic robot chirps and chimes |
| | | Negative `(-)`| **GND** | Ground | Ground |
| **11**| **TTP223 Touch Sensor** | `VCC` | **3V3** | 3.3V | Capacitive head petting |
| | | `GND` | **GND** | Ground | Ground |
| | | `SIG` / `OUT` | **GPIO 4** | Logic | Digital Touch Trigger |
| **12**| **SW-520D Tilt Ball Switch**| Pin 1 | **GPIO 19** | Internal Pull-Up | Physical bump / tumble alert |
| | | Pin 2 | **GND** | Ground | Active LOW |

---

## 🗺️ 2. ASCII Schematic & Wiring Architecture

```text
                                  +---------------------------------------+
                                  |         ESP32 DevKit (30/38 Pin)      |
                                  |                                       |
                                  |   [3V3]     [VIN]     [GND]   [GPIO 21] [GPIO 22]
                                  +-----+---------+---------+---------+---------+
                                        |         |         |         |         |
     +----------------------------------+         |         |         |         |
     |   +----------------------------------------+         |         |         |
     |   |   +----------------------------------------------+         |         |
     |   |   |                                                        |         |
     |   |   |   +----------------------------------------------------+         |
     |   |   |   |   +----------------------------------------------------------+
     |   |   |   |   |
  +--+---+---+---+---+--+
  |  VCC GND SDA SCL   |  ====> 1.3" I2C OLED Display (SH1106 / SSD1306)
  +---------------------+
  |  VCC GND SDA SCL   |  ====> MPU6050 6-Axis Motion Sensor (AD0 to GND)
  +--+---+---+---+---+--+
     |   |
     |   |       +---------------------------------------------+
     |   +-----> | Touch Sensor (TTP223): OUT ---------> GPIO 4|
     |           +---------------------------------------------+
     |           | SW-520D Tilt Switch:   SIG ---------> GPIO 19
     |           +---------------------------------------------+
     |           | Buzzer:                POS (+) -----> GPIO 5
     |           +---------------------------------------------+
     |           | Button 1 (Volume):     LEG 1 -------> GPIO 16 (Leg 2 to GND)
     |           +---------------------------------------------+
     |           | Button 2 (Brightness): LEG 1 -------> GPIO 17 (Leg 2 to GND)
     |           +---------------------------------------------+
     |           | Yellow Button (Mode):  LEG 1 -------> GPIO 18 (Leg 2 to GND)
     |           +---------------------------------------------+
     |           | RGB LED Red Pin --------------------> GPIO 13 (via 220Ω)
     |           | RGB LED Green Pin ------------------> GPIO 14 (via 220Ω)
     |           | RGB LED Blue Pin -------------------> GPIO 27 (via 220Ω)
     |           +---------------------------------------------+
     |
     |    +----------------------------------------------------+
     +--> | INMP441 Mic: VDD (3.3V!), GND, L/R to GND          |
          | SCK ------> GPIO 32                                |
          | WS -------> GPIO 23                                |
          | SD -------> GPIO 35 (Input Only)                   |
          +----------------------------------------------------+
     |
     |    +----------------------------------------------------+
     +--> | MAX98357A Amp: VIN to 5V (VIN), GND                |
          | BCLK -----> GPIO 26                                |
          | LRC ------> GPIO 25                                |
          | DIN ------> GPIO 33                                |
          | Speaker leads to OUT+ and OUT-                     |
          +----------------------------------------------------+
```

---

## 💖 3. The Special Easter Egg ("What is my name ?")

Whenever you ask ORoX:
> **"What is my name ?"** (via voice, web companion, or Serial terminal)

ORoX will respond with:
1. **Verbatim Spoken Voice (SAM Speech Synthesizer)**:
   > *"you are a cutie little puffer fish. And I will be always there for you, no matter what. And I will be the greatest version of myself to prove that u didn't choose the wrong person. And thank you for choosing me"*
2. **Animated OLED Screen**:
   - Triggers the special **Plump Cutie Puffer Fish Face** with fluttering fins, animated kiss lips, and floating love hearts!
3. **RGB Lighting**:
   - Soft romantic **Puffer Coral Rose** breathing glow.
4. **Audio**:
   - Plays an uplifting, emotional ascending chime melody!

---

## ⚡ 4. 10 Interactive Questions & Behaviors

1. **"How are you feeling today?"**: Joy crescent eyes `^ ^`, cheerful chime, speaks energized greeting.
2. **"Tell me a joke"**: Wink face with open smile, tells a clean tech pun with comedic chime.
3. **"What can you do?"**: Curious thinking face, lists focus timer, companion, weather, and jokes.
4. **"Do you love me?"**: Pulsing glowing **Heart Eyes (`<3 <3`)** and romantic pink ear glow!
5. **"What is the weather?"**: Renders animated Sun/Rain/Cloud glyph, live temperature, humidity, and forecast advice.
6. **"What time is it?"**: High-contrast digital clock, date, and animated seconds bar with double bell chime.
7. **"Sing a song / Dance"**: Plays an upbeat 8-bit melody while bouncing eyes rhythmically left and right!
8. **"Who created you?"**: Sparkle anime eyes, speaks ORoX desktop AI companion origins.
9. **"Are you tired?"**: Energetic wink, reassuring 100% full battery status.
10. **"Tell me a secret"**: Cheeky cat smile, whispers about doing little victory dances on your desk!

---

## 🤢 5. Motion & Physical Behavior Engines

- **Violent Shaking (MPU6050)**:
  - Shaking ORoX quickly triggers **Vomiting Mode**: `X_X` dizzy spiral eyes, animated vomit pixels streaming downwards, toxic green LED flicker, and nauseous gurgle sound!
- **Bump / Tumble (SW-520D)**:
  - Tipping the robot over triggers startled wide eyes and an amber alert tone.
- **Head Touch (TTP223)**:
  - Tapping the robot's head triggers blushing pink cheeks, heart eyes, and a cute giggle chime.
- **Dedicated Volume Button (GPIO 16)**:
  - Cycles Volume (25% -> 50% -> 75% -> 100% -> Mute) with on-screen HUD meter and confirmation tone.
- **Dedicated Brightness Button (GPIO 17)**:
  - Cycles OLED contrast (25% -> 50% -> 75% -> 100%) with on-screen HUD meter.
- **Yellow 4-Pin Button (GPIO 18)**:
  - Short Click: Switches between Companion, Pomodoro Focus (25m countdown), Nightstand, and Pet Mode.
  - Long Press (>1.2s): Toggles Sleep / Wake. Sleep mode dims to 5% warm amber nightlight with relaxed `zZ` eyelids.

---

## 🚀 6. Uploading to ESP32

### Via Arduino IDE:
1. Open Arduino IDE.
2. Go to **File -> Open...** and select `/home/safin313/.gemini/antigravity-ide/scratch/orox_robot/orox_robot.ino`.
3. Select Board: **ESP32 Dev Module** (or `DOIT ESP32 DEVKIT V1`).
4. Select your USB Port.
5. Click **Upload**!

### Via Command Line / One-Click Script:
Simply run:
```bash
/home/safin313/.gemini/antigravity-ide/scratch/orox_robot/flash_orox.sh
```
