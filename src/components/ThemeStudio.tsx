import React, { useState } from 'react';
import { Palette, ArrowRight, ShieldCheck, Sparkles, Wand2 } from 'lucide-react';
import { CLASSIC_THEMES, CHARACTER_THEMES, RobotTheme, RobotReaction } from '../types/robotCustomizer';
import { InteractiveRobot3D } from './InteractiveRobot3D';
import { robotAudio } from '../utils/soundEffects';

interface ThemeStudioProps {
  onSelectThemeForWaitlist?: (theme: RobotTheme) => void;
}

export const ThemeStudio: React.FC<ThemeStudioProps> = ({ onSelectThemeForWaitlist }) => {
  const [activeCategory, setActiveCategory] = useState<'character' | 'classic'>('character');
  const [selectedTheme, setSelectedTheme] = useState<RobotTheme>(CHARACTER_THEMES[0]);
  const [currentReaction, setCurrentReaction] = useState<RobotReaction>('idle');
  const [savedBadge, setSavedBadge] = useState<boolean>(false);

  const handleSelectTheme = (theme: RobotTheme) => {
    setSelectedTheme(theme);
    setSavedBadge(false);

    // Audio effects for theme selection
    if (theme.category === 'character' && theme.characterType) {
      robotAudio.playCharacterSound(theme.characterType);
    } else {
      robotAudio.playChirp();
    }
  };

  const handleTriggerMood = (mood: RobotReaction) => {
    setCurrentReaction(mood);

    // Audio effects for each reaction (no waving, friendly nod instead)
    switch (mood) {
      case 'nod':
        robotAudio.playNod();
        break;
      case 'dance':
        robotAudio.playDance();
        break;
      case 'laugh':
        robotAudio.playLaugh();
        break;
      case 'love':
        robotAudio.playLove();
        break;
      case 'sleep':
        robotAudio.playSleep();
        break;
      case 'shock':
        robotAudio.playShock();
        break;
      case 'spin':
        robotAudio.playSpin();
        break;
      default:
        robotAudio.playChirp();
    }

    // Return to idle after a few seconds unless sleep mode
    if (mood !== 'sleep') {
      setTimeout(() => {
        setCurrentReaction('idle');
      }, 3500);
    }
  };

  const handleSelectEdition = () => {
    setSavedBadge(true);
    robotAudio.playGreeting();
    if (onSelectThemeForWaitlist) {
      onSelectThemeForWaitlist(selectedTheme);
    }
    const suggestionEl = document.getElementById('suggestion');
    if (suggestionEl) {
      suggestionEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeThemeList = activeCategory === 'character' ? CHARACTER_THEMES : CLASSIC_THEMES;

  return (
    <section id="customizer" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background radial accent with live theme accent color */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[180px] pointer-events-none transition-all duration-700 opacity-25"
        style={{ backgroundColor: selectedTheme.accentHex }}
      />

      {/* Enlarged, Eye-Catching Header with Clean Crisp Typography */}
      <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 relative z-10">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-orox-card border border-white/15 text-xs font-mono uppercase tracking-widest text-orox-amber mb-6 shadow-glow-orange">
          <Palette className="w-3.5 h-3.5 text-orox-orange animate-spin" style={{ animationDuration: '6s' }} />
          <span>[ 3D BOX LAB & ACTION FIGURE STUDIO ]</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.05] mb-6 font-display">
          Customize Your <br className="hidden sm:inline" />
          <span
            className="text-transparent bg-clip-text transition-all duration-500"
            style={{
              backgroundImage: `linear-gradient(to right, ${selectedTheme.accentHex}, #FFA033, #FFD54F)`,
            }}
          >
            {selectedTheme.category === 'character' ? 'Action Figure Edition' : 'ORoX Edition'}
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
          The iconic squircle head remains identical across all editions, while collectible cartoon action figure bodies (Spider-Hero, Sukuna Kimono, Deadpool Merc, Lofi Hoodie, Iron Armor) transform your desktop companion!
        </p>
      </div>

      {/* Main Studio Console */}
      <div className="bg-glass-card rounded-[2.5rem] sm:rounded-[3rem] border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.6)] overflow-hidden max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 relative z-10 backdrop-blur-2xl">
        
        {/* Left Column: 3D Stage Viewport */}
        <div className="lg:col-span-7 bg-[#0b0c10] p-6 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden min-h-[500px] sm:min-h-[560px]">
          
          {/* Top Status Overlay Bar */}
          <div className="w-full flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full animate-ping"
                style={{ backgroundColor: selectedTheme.accentHex }}
              />
              <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-white font-semibold">
                {selectedTheme.name}
              </span>
              <span
                className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border"
                style={{
                  borderColor: `${selectedTheme.accentHex}60`,
                  backgroundColor: `${selectedTheme.accentHex}20`,
                  color: selectedTheme.accentHex,
                }}
              >
                {selectedTheme.badge}
              </span>
            </div>

            <div className="text-xs font-mono text-slate-400">
              3D PREVIEW
            </div>
          </div>

          {/* Interactive 3D Canvas Stage */}
          <div className="w-full h-full my-auto flex items-center justify-center relative">
            <InteractiveRobot3D
              theme={selectedTheme}
              reaction={currentReaction}
              onTap={() => handleTriggerMood('nod')}
              className="w-full h-[400px] sm:h-[450px]"
            />

            {/* Instruction tooltip badge */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[10px] sm:text-[11px] font-mono text-slate-200 pointer-events-none whitespace-nowrap max-w-[92%] truncate text-center shadow-lg">
              Move cursor to aim head • Click robot to interact
            </div>
          </div>

          {/* Interactive Mood Buttons Bar */}
          <div className="z-10 pt-4 border-t border-white/10">
            <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-300 mb-2.5 flex items-center gap-2">
              <Wand2 className="w-3.5 h-3.5 text-orox-orange" />
              <span>Interactive Emotive Behaviors:</span>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5 sm:gap-2">
              {[
                { mood: 'nod' as RobotReaction, label: 'Nod' },
                { mood: 'dance' as RobotReaction, label: 'Dance' },
                { mood: 'love' as RobotReaction, label: 'Love' },
                { mood: 'laugh' as RobotReaction, label: 'Laugh' },
                { mood: 'spin' as RobotReaction, label: 'Spin' },
                { mood: 'shock' as RobotReaction, label: 'Alert' },
                { mood: 'sleep' as RobotReaction, label: 'Sleep' },
              ].map((btn) => (
                <button
                  key={btn.mood}
                  type="button"
                  onClick={() => handleTriggerMood(btn.mood)}
                  className={`p-2 rounded-xl text-xs font-mono font-medium flex flex-col items-center justify-center gap-1 transition-all cursor-pointer min-h-[46px] ${
                    currentReaction === btn.mood
                      ? 'bg-orox-orange text-black font-bold shadow-glow-orange scale-105'
                      : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10'
                  }`}
                >
                  <span className="capitalize">{btn.label}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Studio Customization Controls */}
        <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between bg-[#12141A]/95 backdrop-blur-md">
          
          <div>
            {/* Category Switcher Tabs */}
            <div className="grid grid-cols-2 gap-2 p-1.5 bg-[#0A0B0E] rounded-2xl border border-white/10 mb-6">
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('character');
                  handleSelectTheme(CHARACTER_THEMES[0]);
                }}
                className={`py-2.5 px-3 rounded-xl text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  activeCategory === 'character'
                    ? 'bg-orox-orange text-black font-extrabold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Action Figures ({CHARACTER_THEMES.length})</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveCategory('classic');
                  handleSelectTheme(CLASSIC_THEMES[0]);
                }}
                className={`py-2.5 px-3 rounded-xl text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  activeCategory === 'classic'
                    ? 'bg-orox-orange text-black font-extrabold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Palette className="w-3.5 h-3.5" />
                <span>Industrial ({CLASSIC_THEMES.length})</span>
              </button>
            </div>

            {/* Edition Selection Grid */}
            <div className="text-xs font-mono uppercase tracking-widest text-slate-300 mb-3 flex items-center justify-between">
              <span>{activeCategory === 'character' ? 'Select Action Figure Body:' : 'Select Hardware Finish:'}</span>
              <span className="text-[10px] text-slate-400">{activeThemeList.length} Options</span>
            </div>

            <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1 no-scrollbar">
              {activeThemeList.map((t) => {
                const isSelected = selectedTheme.id === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => handleSelectTheme(t)}
                    className={`w-full p-3 rounded-2xl border text-left transition-all flex items-center justify-between gap-3 cursor-pointer ${
                      isSelected
                        ? 'bg-white/10 border-white/40 shadow-lg scale-[1.01]'
                        : 'bg-[#181A22] border-white/5 hover:border-white/20 hover:bg-[#1E212B]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Colorway Dual Swatch */}
                      <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center border border-white/10 shrink-0 shadow-inner"
                        style={{ backgroundColor: t.bodyHex }}
                      >
                        <span
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: t.accentHex }}
                        />
                      </div>

                      <div className="truncate">
                        <div className="text-xs sm:text-sm font-semibold text-white truncate flex items-center gap-2">
                          <span>{t.name}</span>
                          {t.category === 'character' && (
                            <span
                              className="text-[9px] font-mono px-1.5 py-0.5 rounded-sm shrink-0 uppercase"
                              style={{
                                backgroundColor: `${t.accentHex}25`,
                                color: t.accentHex,
                              }}
                            >
                              Armor
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-slate-400 truncate">
                          {t.tagline}
                        </div>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center">
                      <span
                        className={`w-4 h-4 rounded-full border-2 transition-all flex items-center justify-center ${
                          isSelected ? 'border-white bg-orox-orange' : 'border-white/20'
                        }`}
                      >
                        {isSelected && <span className="w-1.5 h-1.5 bg-black rounded-full" />}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Edition Live Specs Callout */}
            <div className="mt-5 p-4 rounded-2xl bg-[#0A0B0E] border border-white/10 text-xs space-y-1.5">
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                Chassis Architecture:
              </label>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400">Head Module:</span>
                <span className="text-white font-medium">Standard ORoX Squircle with OLED Screen</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400">Body Chassis:</span>
                <span className="text-white font-medium">
                  {selectedTheme.category === 'character' ? 'Changeable Action Figure Armor' : 'Precision Anodized Matte Shell'}
                </span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400">Audio Voice Timbre:</span>
                <span className="text-orox-amber font-mono font-medium truncate max-w-[200px]">
                  {selectedTheme.characterVoice ? 'Character Neural Speech' : 'Pure Acoustic Companion'}
                </span>
              </div>
            </div>
          </div>

          {/* Action CTA: Grab This Edition Button */}
          <div className="mt-6 pt-5 border-t border-white/10">
            <button
              type="button"
              onClick={handleSelectEdition}
              className="w-full py-4 px-6 rounded-2xl text-black font-extrabold text-xs sm:text-sm font-mono uppercase tracking-wider flex items-center justify-center gap-2.5 btn-attractive-primary cursor-pointer shadow-lg"
            >
              <ShieldCheck className="w-4 h-4 text-black" />
              <span>{savedBadge ? 'EDITION SELECTED!' : `SELECT ${selectedTheme.name.toUpperCase()}`}</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
            <p className="text-[11px] text-slate-400 font-mono text-center mt-2.5 uppercase tracking-wide">
              {activeCategory === 'character' ? '★ Signature ORoX Head + Changeable Cartoon Body' : 'Precision Industrial Desktop Companion'}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ThemeStudio;
