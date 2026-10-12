#!/usr/bin/env bash
# ==============================================================================
# 🤖 ORoX AI ROBOT — AUTO FLASH & SERIAL MONITOR SCRIPT
# ==============================================================================
set -e

PORT=""
for p in /dev/ttyACM0 /dev/ttyUSB0 /dev/ttyACM1 /dev/ttyUSB1; do
  if [ -e "$p" ]; then
    PORT="$p"
    break
  fi
done

if [ -z "$PORT" ]; then
  echo "❌ Error: ESP32 USB port not found!"
  echo "Please connect your ESP32 DevKit to your computer with a micro-USB data cable."
  exit 1
fi

echo "🚀 Found ESP32 on $PORT."

# Free serial port if held by another process
fuser -k "$PORT" 2>/dev/null || true
sleep 0.5

echo "Uploading ORoX Robot firmware..."
/home/safin313/.local/bin/arduino-cli upload -p "$PORT" --fqbn esp32:esp32:esp32 /home/safin313/.gemini/antigravity-ide/scratch/orox_robot

echo "✅ Flash complete! Opening live serial monitor (115200 baud)..."
python3 -c '
import os, sys, time
port = "'"$PORT"'"
try:
    os.system(f"stty -F {port} 115200 raw -echo")
    fd = os.open(port, os.O_RDONLY | os.O_NONBLOCK)
    print("=== LIVE OROX SERIAL MONITOR ===")
    start = time.time()
    while time.time() - start < 15.0:
        try:
            d = os.read(fd, 256)
            if d:
                sys.stdout.write(d.decode("utf-8", errors="replace"))
                sys.stdout.flush()
        except BlockingIOError:
            pass
        time.sleep(0.05)
    os.close(fd)
except Exception as e:
    print("Notice:", e)
'
