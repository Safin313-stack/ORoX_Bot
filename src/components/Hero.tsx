import React, { useState } from 'react';
import { Sparkles, ArrowRight, MessageSquare, Shield, Zap, Volume2, Eye, Smile, Music, Heart, Laugh, RotateCw, Moon, BatteryCharging } from 'lucide-react';
import { robotAudio } from '../utils/soundEffects';
import { InteractiveRobot3D } from './InteractiveRobot3D';
import { ROBOT_THEMES, RobotTheme, RobotReaction } from '../types/robotCustomizer';

export const Hero: React.FC = () => {
  const [heroTapped, setHeroTapped] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<RobotTheme>(ROBOT_THEMES[0]);
  const [currentReaction, setCurrentReaction] = useState<RobotReaction>('idle');
  const [reactionTimer, setReactionTimer] = useState<ReturnType<typeof setTimeout> | null>(null);

  const handleRobotTap = () => {
    setHeroTapped(true);
    triggerMood('nod');
    robotAudio.speak("Hey there! I am ORoX. I can't wait to hang out on your desk and chat!", () => {}, () => {
      setTimeout(() => setHeroTapped(false), 1500);
    });
  };

  const triggerMood = (mood: RobotReaction) => {
    if (reactionTimer) clearTimeout(reactionTimer);
    setCurrentReaction(mood);

    switch (mood) {
      case 'nod':
        robotAudio.playNod();
        break;
      case 'dance':
        robotAudio.playDance();
        break;
      case 'love':
        robotAudio.playLove();
        break;
      case 'laugh':
        robotAudio.playLaugh();
        break;
      case 'spin':
        robotAudio.playSpin();
        break;
      case 'sleep':
        robotAudio.playSleep();
        break;
      default:
        robotAudio.playChirp();
    }

    if (mood !== 'sleep') {
      const t = setTimeout(() => {
        setCurrentReaction('idle');
      }, 3200);
      setReactionTimer(t);
    }
  };

  const handleSelectTheme = (t: RobotTheme) => {
    setCurrentTheme(t);
    if (t.category === 'character' && t.characterType) {
      robotAudio.playCharacterSound(t.characterType);
    } else {
      robotAudio.playChirp();
    }
  };

  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 md:pt-40 md:pb-32 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Ambient background glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full blur-[180px] pointer-events-none transition-colors duration-700 opacity-25"
        style={{ backgroundColor: currentTheme.accentHex }}
      />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
        
        {/* Status Pill Badge (Clean, Crisp Typography without Pixel Distortion) */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full bg-orox-card border border-white/15 text-[10px] sm:text-xs font-mono text-orox-amber mb-5 sm:mb-8 shadow-glow-orange hover:border-orox-orange transition-all cursor-default max-w-full">
          <span
            className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full animate-ping shrink-0"
            style={{ backgroundColor: currentTheme.accentHex }}
          />
          <span className="font-bold text-white tracking-wider whitespace-nowrap uppercase">PROJECT COMING SOON</span>
          <span className="text-slate-500 font-sans">|</span>
          <span className="text-slate-300 tracking-wider truncate uppercase">PERSONAL AI ROBOT</span>
        </div>

        {/* Extra Large, Eye-Catching Primary Headline (Clean, Crisp, Zero Pixel Artifacts) */}
        <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.1] mb-5 sm:mb-8 font-display break-words">
          The AI Robot That <br className="hidden sm:inline" />
          <span
            className="text-transparent bg-clip-text transition-all duration-500 inline-block pb-1"
            style={{
              backgroundImage: `linear-gradient(to right, ${currentTheme.accentHex}, #FFA033, #FFD54F)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Talks, Listens & Understands.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-300 text-sm sm:text-lg md:text-xl leading-relaxed max-w-3xl mb-8 sm:mb-12 px-1">
          Meet <strong className="text-white font-bold">ORoX</strong> — the charismatic desktop companion equipped with real-time neural speech, expressive glowing OLED eyes, and interchangeable action figure armor.
        </p>

        {/* Action CTAs: High-End Attractive Luxury Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto mb-10 sm:mb-16 px-1 sm:px-0">
          <a
            href="#suggestion"
            onClick={() => robotAudio.playGreeting()}
            className="w-full sm:w-auto px-6 sm:px-10 py-3.5 sm:py-5 rounded-2xl text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 btn-attractive-primary cursor-pointer min-h-[48px] sm:min-h-[52px] text-center"
          >
            <Sparkles className="w-4 h-4 text-black shrink-0" />
            <span>GRAB YOUR FIRST PERSONAL AI ROBOT</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>

          <a
            href="#simulator"
            onClick={() => robotAudio.playClick()}
            className="w-full sm:w-auto px-5 sm:px-9 py-3.5 sm:py-5 rounded-2xl text-slate-200 font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 btn-attractive-secondary cursor-pointer min-h-[48px] sm:min-h-[52px] text-center"
          >
            <MessageSquare className="w-4 h-4 text-orox-orange shrink-0" />
            <span>TRY LIVE VOICE DEMO</span>
          </a>
        </div>

        {/* Centerpiece Showcase Stage (Interactive 3D Robot that tracks cursor!) */}
        <div className="relative w-full max-w-4xl mt-1 sm:mt-2 px-0">
          
          {/* Glowing Pedestal Ring */}
          <div
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-28 rounded-[100%] blur-3xl pointer-events-none opacity-35 transition-colors duration-700"
            style={{ backgroundColor: currentTheme.accentHex }}
          />
          <div
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-14 border-b-2 rounded-[100%] pointer-events-none opacity-70 transition-colors duration-700"
            style={{ borderColor: `${currentTheme.accentHex}88` }}
          />

          {/* Interactive Robot Showcase Card with Dark Glassmorphism */}
          <div className="relative bg-gradient-to-b from-[#161824]/90 via-[#10121A]/94 to-[#0A0B10]/98 p-3.5 sm:p-8 md:p-10 rounded-2xl sm:rounded-[3.5rem] border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.6)] backdrop-blur-2xl group transition-all duration-300 hover:border-white/25 w-full">
            
            {/* Top Interactive Controls Container */}
            <div className="relative z-20 flex flex-col items-center gap-2 mb-2">
              
              {/* Interactive Cursor Tracking & Tap Prompt Hint */}
              <div className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[10px] sm:text-xs font-mono text-slate-300 flex items-center gap-2 group-hover:text-white transition-colors shadow-sm pointer-events-none max-w-full truncate">
                <span
                  className={`w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full shrink-0 ${heroTapped ? 'bg-emerald-400' : 'animate-ping'}`}
                  style={{ backgroundColor: currentTheme.accentHex }}
                />
                <Eye className="w-3.5 h-3.5 shrink-0" style={{ color: currentTheme.accentHex }} />
                <span className="truncate uppercase tracking-wider">
                  {heroTapped ? 'OROX IS SPEAKING!' : 'TAP ROBOT OR MOVE TO INTERACT'}
                </span>
              </div>

              {/* Quick Interactive Reaction Pills directly on the 3D Stage (Zero hand waving; friendly nod) */}
              <div className="w-full max-w-full overflow-x-auto no-scrollbar py-1 flex justify-start sm:justify-center px-1">
                <div className="flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 bg-black/70 backdrop-blur-md rounded-full border border-white/10 text-[10px] sm:text-[11px] font-mono shrink-0">
                  <button
                    type="button"
                    onClick={() => triggerMood('nod')}
                    className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap uppercase tracking-wider ${
                      currentReaction === 'nod' ? 'bg-white text-black font-bold shadow-md' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <Smile className="w-3.5 h-3.5" />
                    <span>Nod</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => triggerMood('dance')}
                    className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap uppercase tracking-wider ${
                      currentReaction === 'dance' ? 'bg-white text-black font-bold shadow-md' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <Music className="w-3.5 h-3.5" />
                    <span>Dance</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => triggerMood('love')}
                    className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap uppercase tracking-wider ${
                      currentReaction === 'love' ? 'bg-white text-black font-bold shadow-md' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <Heart className="w-3.5 h-3.5" />
                    <span>Love</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => triggerMood('laugh')}
                    className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap uppercase tracking-wider ${
                      currentReaction === 'laugh' ? 'bg-white text-black font-bold shadow-md' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <Laugh className="w-3.5 h-3.5" />
                    <span>Laugh</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => triggerMood('spin')}
                    className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap uppercase tracking-wider ${
                      currentReaction === 'spin' ? 'bg-white text-black font-bold shadow-md' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <RotateCw className="w-3.5 h-3.5" />
                    <span>Spin</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => triggerMood('sleep')}
                    className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap uppercase tracking-wider ${
                      currentReaction === 'sleep' ? 'bg-white text-black font-bold shadow-md' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <Moon className="w-3.5 h-3.5" />
                    <span>Nap</span>
                  </button>
                </div>
              </div>

            </div>

            {/* True 3D WebGL Robot Canvas (Seamless transparent integration, zero white background!) */}
            <div className="relative z-10 my-1 sm:my-2 h-[290px] xs:h-[340px] sm:h-[420px] md:h-[480px] w-full flex items-center justify-center">
              <InteractiveRobot3D
                theme={currentTheme}
                reaction={currentReaction}
                onTap={handleRobotTap}
              />
            </div>

            {/* Quick Theme Switcher Ribbon: Fully responsive on phone & desktop */}
            <div className="relative z-20 pt-3.5 sm:pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 text-center sm:text-left">
              {/* Left Column: Color Name (with Box Lab quick link on mobile) */}
              <div className="w-full sm:w-44 flex items-center justify-between sm:justify-start gap-2 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] sm:text-xs">COLOR:</span>
                  <span className="text-white font-bold truncate max-w-[130px]">{currentTheme.name}</span>
                </div>
                <a
                  href="#customizer"
                  className="sm:hidden text-[11px] font-mono text-orox-amber hover:text-white underline underline-offset-4 uppercase tracking-wider font-semibold"
                >
                  BOX LAB &rarr;
                </a>
              </div>

              {/* Center Column: Perfectly Centered & Finger-Tap Friendly Color Dots */}
              <div className="w-full sm:flex-1 flex justify-center overflow-x-auto no-scrollbar py-0.5">
                <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center items-center gap-1.5 p-1.5 bg-black/60 rounded-2xl sm:rounded-full border border-white/10 max-w-full shrink-0">
                  {ROBOT_THEMES.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => handleSelectTheme(t)}
                      title={`${t.name} (${t.tagline})`}
                      className={`w-7 h-7 sm:w-6 sm:h-6 rounded-full flex items-center justify-center p-0.5 transition-all cursor-pointer shrink-0 ${
                        currentTheme.id === t.id
                          ? 'scale-115 border-2 border-white shadow-lg'
                          : 'opacity-70 hover:opacity-100 hover:scale-110'
                      }`}
                      style={{ backgroundColor: t.bodyHex }}
                    >
                      <span
                        className="w-4 h-4 sm:w-3.5 sm:h-3.5 rounded-full"
                        style={{ backgroundColor: t.accentHex }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: Desktop Open Box Lab Button */}
              <div className="hidden sm:block sm:w-44 text-right shrink-0">
                <a
                  href="#customizer"
                  className="text-xs font-mono text-orox-amber hover:text-white underline underline-offset-4 transition-colors uppercase tracking-wider inline-block font-semibold"
                >
                  OPEN BOX LAB &rarr;
                </a>
              </div>
            </div>

            {/* Floating Telemetry Callout Badges with Auto-Floating Animations and Hover Dodge */}
            {/* 1. Left Upper Badge: Acoustic Ears */}
            <div className="hidden lg:block absolute -left-8 top-16 p-4 rounded-2xl bg-[#11131A]/95 border border-white/15 backdrop-blur-md shadow-2xl text-left max-w-[210px] animate-float-slow hover:translate-x-3 hover:-translate-y-2 transition-all duration-300 pointer-events-auto cursor-pointer z-30 group/badge">
              <div className="flex items-center gap-2 text-xs font-mono font-bold mb-1" style={{ color: currentTheme.accentHex }}>
                <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                <span>360° ACOUSTIC EARS</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-snug">
                Dual resonant acoustic chambers tuned for human voice timbre.
              </p>
            </div>

            {/* 2. Right Upper Badge: Low Latency */}
            <div className="hidden lg:block absolute -right-8 top-20 p-4 rounded-2xl bg-[#11131A]/95 border border-white/15 backdrop-blur-md shadow-2xl text-left max-w-[210px] animate-float-delayed hover:-translate-x-3 hover:-translate-y-2 transition-all duration-300 pointer-events-auto cursor-pointer z-30 group/badge">
              <div className="flex items-center gap-2 text-xs font-mono font-bold mb-1" style={{ color: currentTheme.accentHex }}>
                <Zap className="w-3.5 h-3.5" />
                <span>SUB-180MS LATENCY</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-snug">
                Bidirectional neural speech streaming with zero pause lag.
              </p>
            </div>

            {/* 3. Left Middle Badge: Hardware Privacy (SAFE POSITION: top-[52%] to NEVER overlap bottom footer ribbon!) */}
            <div className="hidden lg:block absolute -left-8 top-[52%] p-4 rounded-2xl bg-[#11131A]/95 border border-white/15 backdrop-blur-md shadow-2xl text-left max-w-[210px] animate-float-slow hover:translate-x-3 hover:-translate-y-2 transition-all duration-300 pointer-events-auto cursor-pointer z-30 group/badge">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold mb-1">
                <Shield className="w-3.5 h-3.5" />
                <span>HARDWARE PRIVACY</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-snug">
                Physical mechanical mic disconnect circuit for total peace of mind.
              </p>
            </div>

            {/* 4. Right Middle Badge: 4-5H Battery Backup */}
            <div className="hidden lg:block absolute -right-8 top-[52%] p-4 rounded-2xl bg-[#11131A]/95 border border-white/15 backdrop-blur-md shadow-2xl text-left max-w-[210px] animate-float-delayed hover:-translate-x-3 hover:-translate-y-2 transition-all duration-300 pointer-events-auto cursor-pointer z-30 group/badge">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold mb-1">
                <BatteryCharging className="w-3.5 h-3.5" />
                <span>4-5H BATTERY RUN</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-snug">
                Continuous active conversation backup + 15W Qi desk dock included.
              </p>
            </div>

          </div>
        </div>

        {/* Live Metrics Ribbon with Updated 4-5H Battery Backup and Clean Typography */}
        <div className="mt-10 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 w-full max-w-5xl">
          {[
            { label: 'VOICE LATENCY', value: '< 180 ms', detail: 'Instant Natural Dialogue' },
            { label: 'ACTIVE BATTERY', value: '4-5 Hours', detail: '+ Magnetic Qi Wireless Dock' },
            { label: 'OLED FACES', value: '100+ Expressions', detail: 'Custom Character Expressions' },
            { label: 'FIRST DROP', value: 'EARLY PASS', detail: 'Priority Production Delivery' },
          ].map((metric, idx) => (
            <div
              key={idx}
              className="bg-glass rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-white/10 text-center hover:border-white/25 hover:scale-[1.02] transition-all"
            >
              <div className="text-lg sm:text-2xl font-black font-display text-white mb-0.5 sm:mb-1">
                {metric.value}
              </div>
              <div className="text-[10px] sm:text-xs font-mono font-bold mb-0.5 sm:mb-1 tracking-wider" style={{ color: currentTheme.accentHex }}>
                {metric.label}
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 font-mono">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
