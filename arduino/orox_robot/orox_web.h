#ifndef OROX_WEB_H
#define OROX_WEB_H

#include <Arduino.h>

// ==============================================================================
// 🤖 ORoX AI WEB COMPANION (EMBEDS SOUND ENGINE FROM safin313-stack/ORoX_Bot)
// ==============================================================================
// Provides the exact same audio and speech experience as:
// https://safin313-stack.github.io/ORoX_Bot/
// - Web Audio API melodic chimes [659.25, 987.77] Hz
// - High-pitch cute anime speech synthesis (pitch: 1.35, rate: 1.12)
// - Real-time browser microphone speech recognition
// - Instant command dispatch to ESP32 OLED face and RGB ear halos
// ==============================================================================

const char INDEX_HTML[] PROGMEM = R"rawliteral(
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>ORoX AI - Desktop Companion</title>
  <style>
    :root {
      --bg: #090d16;
      --card-bg: rgba(20, 26, 42, 0.85);
      --card-border: rgba(255, 255, 255, 0.08);
      --text: #f1f5f9;
      --text-dim: #94a3b8;
      --orox-orange: #ff7700;
      --orox-coral: #ff4d6d;
      --orox-cyan: #06b6d4;
      --orox-purple: #a855f7;
      --orox-green: #10b981;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
    body {
      background: radial-gradient(circle at 50% 0%, #1e1b4b 0%, var(--bg) 80%);
      color: var(--text);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 16px;
    }
    .container { width: 100%; max-width: 440px; display: flex; flex-direction: column; gap: 14px; }
    .header { display: flex; align-items: center; justify-content: space-between; padding: 6px 4px; }
    .header h1 { font-size: 22px; font-weight: 800; color: #fff; display: flex; align-items: center; gap: 8px; }
    .status-badge {
      font-size: 11px; font-weight: 700; background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.4);
      padding: 4px 12px; border-radius: 20px; color: var(--orox-green);
    }
    .glass-card {
      background: var(--card-bg); border-radius: 22px; padding: 18px;
      backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
      border: 1px solid var(--card-border); box-shadow: 0 10px 30px rgba(0,0,0,0.4);
    }
    .card-title {
      font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;
      color: var(--text-dim); margin-bottom: 12px; display: flex; align-items: center; gap: 6px;
    }
    /* Mic Stage */
    .mic-stage { display: flex; flex-direction: column; align-items: center; padding: 8px 0; }
    .mic-btn {
      width: 86px; height: 86px; border-radius: 50%;
      background: linear-gradient(135deg, #ff851a, #ff5500); border: none; color: #fff;
      display: flex; align-items: center; justify-content: center; cursor: pointer;
      box-shadow: 0 0 25px rgba(255, 102, 0, 0.45);
      transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .mic-btn:active, .mic-btn.listening {
      transform: scale(0.92); background: linear-gradient(135deg, #ff4d6d, #e60039);
      box-shadow: 0 0 35px rgba(255, 77, 109, 0.7);
    }
    .mic-svg { width: 38px; height: 38px; fill: white; }
    .mic-status { margin-top: 10px; font-size: 13px; font-weight: 700; color: var(--orox-orange); }
    .speech-box {
      width: 100%; background: rgba(0, 0, 0, 0.35); border-radius: 14px; padding: 10px 14px;
      margin-top: 10px; font-size: 13px; font-style: italic; color: var(--text-dim); text-align: center;
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
    .reply-box {
      width: 100%; background: rgba(255, 119, 0, 0.1); border-left: 3px solid var(--orox-orange);
      border-radius: 0 12px 12px 0; padding: 10px 14px; margin-top: 8px;
      font-size: 13px; font-weight: 600; color: var(--text); display: none; line-height: 1.4;
    }
    /* Buttons Grid */
    .btn-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
    .action-btn {
      border: none; border-radius: 14px; padding: 12px 10px; font-size: 12px; font-weight: 700;
      color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px;
      background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.08);
      transition: all 0.15s ease;
    }
    .action-btn:active { transform: scale(0.95); background: rgba(255, 255, 255, 0.15); }
    .btn-special {
      grid-column: span 2; background: linear-gradient(135deg, #ff4d6d, #ff758c);
      box-shadow: 0 4px 18px rgba(255, 77, 109, 0.4); border: none; font-size: 13px;
    }
    .btn-vomit { background: linear-gradient(135deg, #10b981, #059669); }
    .btn-pomodoro { background: linear-gradient(135deg, #a855f7, #7c3aed); }
    .control-row { display: flex; justify-content: space-between; align-items: center; margin-top: 8px; }
    .pill-btn {
      background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255,255,255,0.1);
      color: #fff; padding: 8px 16px; border-radius: 20px; font-size: 12px; font-weight: 700; cursor: pointer;
    }
    .pill-btn:active { background: var(--orox-orange); }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🤖 ORoX AI</h1>
      <div class="status-badge">● ONLINE</div>
    </div>

    <!-- Voice Stage -->
    <div class="glass-card">
      <div class="card-title">🗣️ Live Voice Companion (Chibi Engine)</div>
      <div class="mic-stage">
        <button id="micBtn" class="mic-btn" onclick="toggleVoice()">
          <svg class="mic-svg" viewBox="0 0 24 24">
            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
            <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
          </svg>
        </button>
        <div id="micStatus" class="mic-status">Tap to speak with ORoX</div>
        <div id="userSpeech" class="speech-box">"Press mic or tap buttons below to chat..."</div>
        <div id="robotReply" class="reply-box"></div>
      </div>
    </div>

    <!-- Questions -->
    <div class="glass-card">
      <div class="card-title">💬 Interactive Questions</div>
      <div class="btn-grid">
        <button class="action-btn btn-special" onclick="ask('What is my name ?')">💖 "What is my name ?" (Puffer Fish)</button>
        <button class="action-btn" onclick="ask('How are you feeling today?')">😊 Feelings</button>
        <button class="action-btn" onclick="ask('Tell me a joke')">😂 Tech Joke</button>
        <button class="action-btn" onclick="ask('What can you do?')">⚡ Capabilities</button>
        <button class="action-btn" onclick="ask('Do you love me?')">❤️ Do You Love Me?</button>
        <button class="action-btn" onclick="ask('What is the weather?')">🌤️ Weather Info</button>
        <button class="action-btn" onclick="ask('What time is it?')">⏰ Current Time</button>
        <button class="action-btn" onclick="ask('Sing a song')">🎵 Sing / Dance</button>
        <button class="action-btn" onclick="ask('Who created you?')">🚀 Who Made You?</button>
        <button class="action-btn" onclick="ask('Are you tired?')">🔋 Are You Tired?</button>
        <button class="action-btn" onclick="ask('Tell me a secret')">🤫 Robot Secret</button>
      </div>
    </div>

    <!-- 100 Expressive Faces Gallery (mochi_100_faces) -->
    <div class="glass-card">
      <div class="card-title">🎭 100 Procedural Faces Engine</div>
      <div style="background: rgba(0,0,0,0.35); border-radius: 14px; padding: 12px; margin-bottom: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.06);">
        <div id="faceBadge" style="font-size: 15px; font-weight: 800; color: var(--orox-orange);">#1 Sweet ORoX</div>
        <div id="faceDetails" style="font-size: 11px; color: var(--text-dim); margin-top: 4px;">Round eyes · Smile mouth · None</div>
      </div>
      <div style="display: flex; gap: 6px; margin-bottom: 12px;">
        <button class="action-btn" style="flex:1;" onclick="faceCmd('p')">◀ Prev</button>
        <button class="action-btn" style="flex:1;" onclick="faceCmd('r')">🎲 Random</button>
        <button class="action-btn" style="flex:1;" onclick="faceCmd('n')">▶ Next</button>
        <button class="action-btn" style="flex:1;" id="autoBtn" onclick="faceCmd('a')">✨ Auto</button>
      </div>
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
        <span style="font-size: 11px; color: var(--text-dim); font-weight: 600;">1</span>
        <input type="range" id="faceSlider" min="1" max="100" value="1" style="flex:1; accent-color: var(--orox-orange);" oninput="onFaceSlider(this.value)">
        <span id="faceNumDisplay" style="font-size: 12px; font-weight: 700; width: 34px; text-align: right; color: var(--orox-orange);">#1</span>
      </div>
      <div class="btn-grid">
        <button class="action-btn" onclick="face(5)">💖 Heart Eyes</button>
        <button class="action-btn" onclick="face(3)">😄 Joy Laugh</button>
        <button class="action-btn" onclick="face(14)">😉 Cheeky Wink</button>
        <button class="action-btn" onclick="face(4)">😴 Sleepy Eyes</button>
        <button class="action-btn btn-vomit" onclick="trigger('vomit')">🤢 Shake / Vomit</button>
        <button class="action-btn btn-pomodoro" onclick="trigger('pomodoro')">⏳ Pomodoro Sprint</button>
      </div>
    </div>

    <!-- Controls -->
    <div class="glass-card">
      <div class="card-title">⚙️ Hardware Controls</div>
      <div class="control-row">
        <span>Volume Control:</span>
        <button class="pill-btn" onclick="trigger('vol')">🔊 Cycle Vol</button>
      </div>
      <div class="control-row">
        <span>OLED Brightness:</span>
        <button class="pill-btn" onclick="trigger('bri')">☀️ Cycle Bri</button>
      </div>
      <div class="control-row">
        <span>Mode Change:</span>
        <button class="pill-btn" onclick="trigger('mode')">🔄 Switch Mode</button>
      </div>
      <div class="control-row" style="margin-top:14px;">
        <button class="action-btn btn-special" style="width:100%;" onclick="syncDeviceData()">📱 1-Click Sync Time & Weather</button>
      </div>
    </div>
  </div>

  <script>
    // ==========================================================================
    // 🎀 SOUND EFFECTS & VOICE ENGINE (DIRECT FROM safin313-stack/ORoX_Bot)
    // ==========================================================
    let audioCtx = null;
    function getAudioCtx() {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      return audioCtx;
    }

    // Play website's signature soft chime [659.25, 987.77] Hz
    function playSoftChime() {
      try {
        const ctx = getAudioCtx();
        const now = ctx.currentTime;
        [659.25, 987.77].forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + i * 0.05);
          gain.gain.setValueAtTime(0.045, now + i * 0.05);
          gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 0.12);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + i * 0.05);
          osc.stop(now + i * 0.05 + 0.13);
        });
      } catch (e) {}
    }

    // Speak with high-pitch cute anime voice (matches https://safin313-stack.github.io/ORoX_Bot/)
    function speakCuteVoice(text) {
      playSoftChime();
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.pitch = 1.35; // Sweet high pitch
        utterance.rate = 1.10;  // Deliberate cute tempo
        utterance.volume = 1.0;

        const voices = window.speechSynthesis.getVoices();
        const preferred = ['Samantha', 'Victoria', 'Google US English', 'Aria', 'Jenny', 'Karen', 'Tessa'];
        let matched = null;
        for (const name of preferred) {
          matched = voices.find(v => v.name.includes(name) || (v.lang.startsWith('en') && v.name.toLowerCase().includes(name.toLowerCase())));
          if (matched) break;
        }
        if (!matched) {
          matched = voices.find(v => v.lang.startsWith('en') && !v.name.includes('David') && !v.name.includes('Mark'));
        }
        if (matched) utterance.voice = matched;
        window.speechSynthesis.speak(utterance);
      }
    }

    // Speech Recognition
    let recognition;
    let isListening = false;

    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition = new SpeechRec();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        isListening = true;
        document.getElementById('micBtn').classList.add('listening');
        document.getElementById('micStatus').innerText = 'Listening to you...';
      };

      recognition.onresult = (e) => {
        const text = e.results[0][0].transcript;
        document.getElementById('userSpeech').innerText = '"' + text + '"';
        ask(text);
      };

      recognition.onerror = () => {
        document.getElementById('micStatus').innerText = 'Tap mic to try again';
      };

      recognition.onend = () => {
        isListening = false;
        document.getElementById('micBtn').classList.remove('listening');
        document.getElementById('micStatus').innerText = 'Tap to speak with ORoX';
      };
    }

    function toggleVoice() {
      if (!recognition) {
        alert('Speech Recognition is not supported on this browser. Use Chrome/Safari on your phone!');
        return;
      }
      if (isListening) {
        recognition.stop();
      } else {
        recognition.start();
      }
    }

    function ask(q) {
      document.getElementById('userSpeech').innerText = '"' + q + '"';
      fetch('/ask?q=' + encodeURIComponent(q))
        .then(r => r.json())
        .then(data => {
          const rep = document.getElementById('robotReply');
          rep.style.display = 'block';
          rep.innerText = '🤖 ORoX: ' + data.reply;
          // Play the website's exact sweet voice on phone/PC speaker
          speakCuteVoice(data.reply);
        })
        .catch(e => console.error(e));
    }

    function faceCmd(cmd) {
      playSoftChime();
      fetch('/face?cmd=' + cmd)
        .then(r => r.json())
        .then(data => updateFaceUI(data))
        .catch(e => console.error(e));
    }

    function onFaceSlider(val) {
      document.getElementById('faceNumDisplay').innerText = '#' + val;
      fetch('/face?idx=' + val)
        .then(r => r.json())
        .then(data => updateFaceUI(data))
        .catch(e => console.error(e));
    }

    function face(idx) {
      playSoftChime();
      fetch('/face?idx=' + idx)
        .then(r => r.json())
        .then(data => updateFaceUI(data))
        .catch(e => console.error(e));
    }

    function updateFaceUI(data) {
      if (!data) return;
      if (data.index) {
        const slider = document.getElementById('faceSlider');
        if (slider) slider.value = data.index;
        const numDisp = document.getElementById('faceNumDisplay');
        if (numDisp) numDisp.innerText = '#' + data.index;
      }
      if (data.name) {
        const parts = data.name.split(' (');
        const badge = document.getElementById('faceBadge');
        if (badge) badge.innerText = parts[0] || data.name;
        const details = document.getElementById('faceDetails');
        if (details && parts[1]) {
          details.innerText = parts[1].replace(')', '');
        }
      }
      if (typeof data.auto !== 'undefined') {
        const ab = document.getElementById('autoBtn');
        if (ab) ab.style.background = data.auto ? 'var(--orox-orange)' : 'rgba(255,255,255,0.06)';
      }
    }

    window.addEventListener('DOMContentLoaded', () => {
      fetch('/face')
        .then(r => r.json())
        .then(data => updateFaceUI(data))
        .catch(() => {});
    });

    function trigger(action) {
      playSoftChime();
      fetch('/action?cmd=' + action);
    }

    function syncDeviceData() {
      const now = new Date();
      let hours = now.getHours();
      let mins = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      const minStr = mins < 10 ? '0' + mins : mins;
      const timeStr = hours + ':' + minStr + ' ' + ampm;

      const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
      const dateStr = days[now.getDay()] + ', ' + months[now.getMonth()] + ' ' + now.getDate();

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code`)
            .then(r => r.json())
            .then(d => {
              const temp = Math.round(d.current.temperature_2m) + '°C';
              const code = d.current.weather_code;
              let cond = 'Sunny';
              let simpleCode = 0;
              if (code >= 51 && code <= 67) { cond = 'Rainy'; simpleCode = 2; }
              else if (code >= 1 && code <= 3) { cond = 'Cloudy'; simpleCode = 1; }
              const humid = d.current.relative_humidity_2m + '%';

              fetch(`/sync?time=${encodeURIComponent(timeStr)}&date=${encodeURIComponent(dateStr)}&temp=${encodeURIComponent(temp)}&cond=${encodeURIComponent(cond)}&code=${simpleCode}&humid=${encodeURIComponent(humid)}`)
                .then(() => alert('✅ ORoX Time & Weather Synced Perfectly!'));
            })
            .catch(() => sendFallbackSync(timeStr, dateStr));
        }, () => sendFallbackSync(timeStr, dateStr));
      } else {
        sendFallbackSync(timeStr, dateStr);
      }
    }

    function sendFallbackSync(t, d) {
      fetch(`/sync?time=${encodeURIComponent(t)}&date=${encodeURIComponent(d)}&temp=24%C2%B0C&cond=Sunny&code=0&humid=60%`)
        .then(() => alert('✅ ORoX Time Synced!'));
    }
  </script>
</body>
</html>
)rawliteral";

#endif
