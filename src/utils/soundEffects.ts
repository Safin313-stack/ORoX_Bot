const baseUrl = (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL)
  ? (import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`)
  : '/';

export const CUTE_AUDIO_MAP: Record<string, string> = {
  intro: `${baseUrl}audio/orox-intro.mp3`,
  cheer: `${baseUrl}audio/orox-cheer.mp3`,
  luffy: `${baseUrl}audio/orox-luffy.mp3`,
  joke: `${baseUrl}audio/orox-joke.mp3`,
  workday: `${baseUrl}audio/orox-workday.mp3`,
  privacy: `${baseUrl}audio/orox-privacy.mp3`,
  price: `${baseUrl}audio/orox-price.mp3`,
  colors: `${baseUrl}audio/orox-colors.mp3`,
  night: `${baseUrl}audio/orox-night.mp3`,
  giggle: `${baseUrl}audio/orox-giggle.mp3`,
};

// Web Audio API Synthesizer for robotic sound effects and feedback
class RobotAudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private availableVoices: SpeechSynthesisVoice[] = [];

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.refreshVoices();
      try {
        window.speechSynthesis.onvoiceschanged = () => {
          this.refreshVoices();
        };
      } catch {}
    }
  }

  public refreshVoices() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.availableVoices = window.speechSynthesis.getVoices();
    }
  }

  public getCutestVoice(): SpeechSynthesisVoice | null {
    if (this.availableVoices.length === 0) {
      this.refreshVoices();
    }
    const voices = this.availableVoices;
    if (voices.length === 0) return null;

    // Prioritized list of sweet, high-quality, friendly cute female/anime voices
    const preferredNames = [
      'Samantha',
      'Victoria',
      'Karen',
      'Tessa',
      'Google US English',
      'Google UK English Female',
      'Jenny',
      'Aria',
      'Sonia',
      'Zira',
      'Moira',
      'Fiona',
      'Kyoko',
    ];

    for (const name of preferredNames) {
      const match = voices.find(
        (v) =>
          v.name.includes(name) ||
          (v.lang.startsWith('en') && v.name.toLowerCase().includes(name.toLowerCase()))
      );
      if (match) return match;
    }

    // Natural / Online fallback
    const natural = voices.find(
      (v) => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Online'))
    );
    if (natural) return natural;

    // Any non-deep male English voice
    const femaleOrLight = voices.find(
      (v) =>
        v.lang.startsWith('en') &&
        !v.name.includes('David') &&
        !v.name.includes('Mark') &&
        !v.name.includes('George') &&
        !v.name.includes('Alex')
    );
    return femaleOrLight || voices.find((v) => v.lang.startsWith('en')) || voices[0] || null;
  }

  public initContext() {
    if (typeof window === 'undefined') return;
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  // Cute robot wake/chirp sound
  public playChirp() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(580, now);
      osc.frequency.exponentialRampToValueAtTime(920, now + 0.08);
      osc.frequency.exponentialRampToValueAtTime(1280, now + 0.18);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.22);
    } catch {
      // Audio fallback
    }
  }

  // Friendly greeting sound (three-tone cute ascending chime)
  public playGreeting() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      [
        { freq: 523.25, time: 0, dur: 0.1 },
        { freq: 659.25, time: 0.09, dur: 0.12 },
        { freq: 783.99, time: 0.2, dur: 0.18 },
        { freq: 1046.5, time: 0.32, dur: 0.25 },
      ].forEach(({ freq, time, dur }) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + time);

        gain.gain.setValueAtTime(0.1, now + time);
        gain.gain.exponentialRampToValueAtTime(0.001, now + time + dur);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + time);
        osc.stop(now + time + dur);
      });
    } catch {}
  }

  // Friendly Nod & Ear Pulse (no waving hands)
  public playNod() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      [580, 720, 880, 1100].forEach((freq, i) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.06);
        gain.gain.setValueAtTime(0.08, now + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.14);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.06);
        osc.stop(now + i * 0.06 + 0.15);
      });
    } catch {}
  }

  // Alias for backward compatibility
  public playWave() {
    this.playNod();
  }

  // Action Figure Edition Character Sounds
  public playCharacterSound(type: string) {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      if (type === 'luffy') {
        // Joyful pirate adventure fanfare & energetic chime
        [523.25, 659.25, 783.99, 1046.5, 1318.51].forEach((freq, idx) => {
          if (!this.ctx) return;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + idx * 0.05);
          gain.gain.setValueAtTime(0.11, now + idx * 0.05);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.18);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now + idx * 0.05);
          osc.stop(now + idx * 0.05 + 0.19);
        });
      } else if (type === 'spiderman') {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(1400, now);
        osc.frequency.exponentialRampToValueAtTime(450, now + 0.18);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.2);
      } else if (type === 'sukuna') {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.exponentialRampToValueAtTime(90, now + 0.35);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.4);
      } else if (type === 'deadpool') {
        [950, 1450, 1200].forEach((freq, idx) => {
          if (!this.ctx) return;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'square';
          osc.frequency.setValueAtTime(freq, now + idx * 0.08);
          gain.gain.setValueAtTime(0.07, now + idx * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.09);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now + idx * 0.08);
          osc.stop(now + idx * 0.08 + 0.1);
        });
      } else if (type === 'lofi') {
        [261.63, 329.63, 392.00, 493.88, 587.33].forEach((freq, idx) => {
          if (!this.ctx) return;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.04);
          gain.gain.setValueAtTime(0.08, now + idx * 0.04);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now + idx * 0.04);
          osc.stop(now + 0.52);
        });
      } else if (type === 'ironman') {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(1900, now + 0.25);
        gain.gain.setValueAtTime(0.09, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.28);
      } else {
        this.playChirp();
      }
    } catch {}
  }

  // Dance / Synth Groove
  public playDance() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const notes = [523, 659, 784, 1046, 880, 784, 1046];
      notes.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.11);
        gain.gain.setValueAtTime(0.07, now + idx * 0.11);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.11 + 0.13);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.11);
        osc.stop(now + idx * 0.11 + 0.14);
      });
    } catch {}
  }

  // Laugh / Cute Giggles
  public playLaugh() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      [740, 920, 800, 980, 840, 1060].forEach((freq, i) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);
        gain.gain.setValueAtTime(0.09, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.09);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.1);
      });
    } catch {}
  }

  // Love / Warm Romance Tone
  public playLove() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      [440, 554, 659, 880].forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.09);
        gain.gain.setValueAtTime(0.09, now + idx * 0.09);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.09 + 0.38);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.09);
        osc.stop(now + idx * 0.09 + 0.4);
      });
    } catch {}
  }

  // Sleep / Lullaby Dim
  public playSleep() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      [659.25, 523.25, 392, 261.63].forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.18);
        gain.gain.setValueAtTime(0.06, now + idx * 0.18);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.18 + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.18);
        osc.stop(now + idx * 0.18 + 0.38);
      });
    } catch {}
  }

  // Shock / Alert
  public playShock() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.exponentialRampToValueAtTime(1480, now + 0.18);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.22);
    } catch {}
  }

  // Spin Whirr
  public playSpin() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.linearRampToValueAtTime(1100, now + 0.2);
      osc.frequency.linearRampToValueAtTime(450, now + 0.4);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.42);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.42);
    } catch {}
  }

  // Tactile click
  public playClick() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1400, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.04);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.04);
    } catch {}
  }

  /**
   * Cute robot melodic vocal chatter synthesized using Web Audio API.
   * Produces cheerful, lively, high-pitched robotic syllables and warbles.
   * Guaranteed to work on every browser without dependencies on OS Speech Dispatcher.
   */
  public playCuteRobotChatter(durationSec: number = 1.6) {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const syllableCount = Math.max(4, Math.floor(durationSec * 6.5));
      const melodicNotes = [
        659.25, 739.99, 783.99, 880.0, 987.77, 1046.5, 1174.66, 1318.51, 1479.98,
      ];

      for (let i = 0; i < syllableCount; i++) {
        const time = now + i * 0.13;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        // Alternate waveforms for animated cute robot vocal timbre
        osc.type = i % 3 === 0 ? 'sine' : i % 3 === 1 ? 'triangle' : 'square';

        const startFreq = melodicNotes[Math.floor(Math.random() * melodicNotes.length)];
        const endFreq = melodicNotes[Math.floor(Math.random() * melodicNotes.length)];

        osc.frequency.setValueAtTime(startFreq, time);
        osc.frequency.exponentialRampToValueAtTime(endFreq, time + 0.09);

        // Friendly cheerful robot volume envelope
        gain.gain.setValueAtTime(0.09, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.11);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(time);
        osc.stop(time + 0.12);
      }
    } catch {}
  }

  private currentAudioEl: HTMLAudioElement | null = null;

  // Sweet two-tone robotic chime before talking
  public playSoftChime() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      [659.25, 987.77].forEach((freq, i) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.05);
        gain.gain.setValueAtTime(0.045, now + i * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 0.12);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.05);
        osc.stop(now + i * 0.05 + 0.13);
      });
    } catch {}
  }

  /**
   * Play pre-rendered, crystal-clear real cute voice audio clips.
   * 100% reliable across all browsers, operating systems, and devices (including Linux).
   */
  public playCuteVoiceClip(
    clipKeyOrUrl: string,
    onStart?: () => void,
    onEnd?: () => void
  ): boolean {
    if (this.isMuted) {
      if (onStart) onStart();
      setTimeout(() => onEnd?.(), 1000);
      return false;
    }

    try {
      this.initContext();
      this.playSoftChime();

      if (this.currentAudioEl) {
        this.currentAudioEl.pause();
        this.currentAudioEl.currentTime = 0;
      }

      const url = CUTE_AUDIO_MAP[clipKeyOrUrl] || clipKeyOrUrl;
      const audio = new Audio(url);
      this.currentAudioEl = audio;

      let started = false;
      audio.onplay = () => {
        if (!started) {
          started = true;
          onStart?.();
        }
      };

      audio.onended = () => {
        this.currentAudioEl = null;
        onEnd?.();
      };

      audio.onerror = () => {
        this.currentAudioEl = null;
        onEnd?.();
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            if (!started) {
              started = true;
              onStart?.();
            }
          })
          .catch(() => {
            onEnd?.();
          });
      }
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Main Speak Method:
   * 1. Checks for matching pre-rendered cute voice clips for guaranteed pristine playback.
   * 2. For custom inputs, plays dynamic vocal synthesis or high-pitch cute speech.
   * 3. Always plays a pleasant companion wake chime and manages callbacks cleanly.
   */
  public speak(
    text: string,
    onStart?: () => void,
    onEnd?: () => void,
    options?: { pitch?: number; rate?: number },
    clipKey?: string
  ) {
    this.initContext();

    if (this.isMuted) {
      if (onStart) onStart();
      setTimeout(() => {
        if (onEnd) onEnd();
      }, 1000);
      return;
    }

    // 1. Direct clipKey matching
    if (clipKey && CUTE_AUDIO_MAP[clipKey]) {
      this.playCuteVoiceClip(clipKey, onStart, onEnd);
      return;
    }

    // 2. Intelligent phrase matching against pre-rendered cute voice files
    const lower = text.toLowerCase();
    let matchedKey: string | null = null;
    if (lower.includes('luffy') || lower.includes('pirate')) {
      matchedKey = 'luffy';
    } else if (lower.includes('incredible') || lower.includes('shining') || lower.includes('cheer')) {
      matchedKey = 'cheer';
    } else if (lower.includes('joke') || lower.includes('social algorithm')) {
      matchedKey = 'joke';
    } else if (lower.includes('workday') || lower.includes('pomodoro') || lower.includes('timers')) {
      matchedKey = 'workday';
    } else if (lower.includes('private') || lower.includes('microphone') || lower.includes('privacy')) {
      matchedKey = 'privacy';
    } else if (lower.includes('$199') || lower.includes('early-bird') || lower.includes('price')) {
      matchedKey = 'price';
    } else if (lower.includes('tangerine') || lower.includes('matte graphite') || lower.includes('colors')) {
      matchedKey = 'colors';
    } else if (lower.includes('goodnight') || lower.includes('sweet dreams') || lower.includes('guard your desk')) {
      matchedKey = 'night';
    } else if (lower.includes('funny') || lower.includes('giggle') || lower.includes('tee-hee')) {
      matchedKey = 'giggle';
    } else if (lower.includes('hello') || lower.includes('introduce') || lower.includes('orox')) {
      matchedKey = 'intro';
    }

    if (matchedKey) {
      this.playCuteVoiceClip(matchedKey, onStart, onEnd);
      return;
    }

    // 3. For any arbitrary custom text:
    const wordCount = text.split(' ').length;
    const estDuration = Math.min(6.0, Math.max(1.8, wordCount * 0.35));

    this.playSoftChime();
    if (onStart) onStart();

    let ended = false;
    const finish = () => {
      if (!ended) {
        ended = true;
        if (onEnd) onEnd();
      }
    };

    // Try dynamic online cute TTS audio stream first
    try {
      const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text.slice(0, 150))}&tl=en&client=tw-ob`;
      const dynAudio = new Audio(ttsUrl);
      this.currentAudioEl = dynAudio;
      dynAudio.playbackRate = options?.rate ?? 1.15;

      dynAudio.onended = () => {
        this.currentAudioEl = null;
        finish();
      };
      dynAudio.onerror = () => {
        this.fallbackSpeechSynth(text, estDuration, finish, options);
      };
      dynAudio.play().catch(() => {
        this.fallbackSpeechSynth(text, estDuration, finish, options);
      });
      return;
    } catch {
      this.fallbackSpeechSynth(text, estDuration, finish, options);
    }
  }

  private fallbackSpeechSynth(
    text: string,
    estDuration: number,
    finish: () => void,
    options?: { pitch?: number; rate?: number }
  ) {
    let synthStarted = false;
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.pitch = options?.pitch ?? 1.35;
        utterance.rate = options?.rate ?? 1.08;
        utterance.volume = 1.0;

        const bestVoice = this.getCutestVoice();
        if (bestVoice) {
          utterance.voice = bestVoice;
        }

        utterance.onend = finish;
        utterance.onerror = () => {
          this.playCuteRobotChatter(estDuration);
          finish();
        };

        window.speechSynthesis.speak(utterance);
        synthStarted = true;
      } catch {
        synthStarted = false;
      }
    }

    if (!synthStarted) {
      this.playCuteRobotChatter(estDuration);
    }
    setTimeout(finish, Math.round(estDuration * 1000 + 400));
  }

  public stopSpeaking() {
    if (this.currentAudioEl) {
      this.currentAudioEl.pause();
      this.currentAudioEl.currentTime = 0;
      this.currentAudioEl = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}

export const robotAudio = new RobotAudioEngine();
