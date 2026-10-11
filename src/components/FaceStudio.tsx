import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Play,
  Pause,
  Shuffle,
  ChevronLeft,
  ChevronRight,
  Sliders,
  Heart,
  Layers,
  Search,
  Check,
  Cat,
  Zap,
  Moon,
} from 'lucide-react';
import {
  MOCHI_100_EXPRESSIONS,
  EYE_NAMES,
  MOUTH_NAMES,
  EXTRA_NAMES,
  MochiFaceSpec,
} from '../types/mochiFaces';
import { RobotFace } from './RobotFace';
import { robotAudio } from '../utils/soundEffects';

type CategoryFilter = 'iconic' | 'joy' | 'kawaii' | 'cyber' | 'chill' | 'all' | 'custom';

export const FaceStudio: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [isAutoCycle, setIsAutoCycle] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('iconic');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Custom Mix & Match State
  const [customEye, setCustomEye] = useState<number>(0);
  const [customMouth, setCustomMouth] = useState<number>(0);
  const [customExtra, setCustomExtra] = useState<number>(0);

  const selectedFace: MochiFaceSpec = MOCHI_100_EXPRESSIONS[currentIdx] || MOCHI_100_EXPRESSIONS[0];

  // Auto-Cycle Mode (simulates 'a' command in mochi_100_faces.ino)
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isAutoCycle) {
      interval = setInterval(() => {
        setCurrentIdx((prev) => (prev + 1) % 100);
      }, 1400);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoCycle]);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === 'ArrowRight' || e.key === 'n') {
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'p') {
        handlePrev();
      } else if (e.key === ' ' || e.key === 'r') {
        e.preventDefault();
        handleRandom();
      } else if (e.key === 'a') {
        toggleAutoMode();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNext = () => {
    robotAudio.playClick();
    setCurrentIdx((prev) => (prev + 1) % 100);
  };

  const handlePrev = () => {
    robotAudio.playClick();
    setCurrentIdx((prev) => (prev - 1 + 100) % 100);
  };

  const handleRandom = () => {
    robotAudio.playChirp();
    const rand = Math.floor(Math.random() * 100);
    setCurrentIdx(rand);
  };

  const toggleAutoMode = () => {
    robotAudio.playClick();
    setIsAutoCycle(!isAutoCycle);
  };

  const handleSelectFace = (idx: number) => {
    robotAudio.playClick();
    setCurrentIdx(idx);
  };

  // Filter faces based on active category and search
  const filteredFaces = MOCHI_100_EXPRESSIONS.filter((face) => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        face.name.toLowerCase().includes(q) ||
        face.eyeName.toLowerCase().includes(q) ||
        face.mouthName.toLowerCase().includes(q) ||
        face.extraName.toLowerCase().includes(q) ||
        String(face.index + 1).includes(q)
      );
    }

    if (activeCategory === 'iconic') {
      return face.tags.includes('iconic');
    } else if (activeCategory === 'joy') {
      return face.tags.includes('joy');
    } else if (activeCategory === 'kawaii') {
      return face.tags.includes('kawaii');
    } else if (activeCategory === 'cyber') {
      return face.tags.includes('cyber');
    } else if (activeCategory === 'chill') {
      return face.tags.includes('chill');
    }
    return true; // 'all'
  });

  return (
    <section id="emotions" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-orox-orange/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Enlarged Header with Clean Crisp Typography */}
      <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 relative z-10">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-orox-card border border-orox-orange/40 text-orox-amber text-xs font-mono uppercase tracking-widest mb-6 shadow-glow-orange">
          <Sliders className="w-3.5 h-3.5 text-orox-orange animate-pulse" />
          <span>[ MOCHI 100 OLED FACE LAB & EXPRESSION MATRIX ]</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6 font-display">
          100 Emotive OLED Faces. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orox-orange via-amber-400 to-yellow-300">
            A Soulful Digital Persona.
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
          Inspired by our Arduino OLED micro-companion architecture: 15 optical eye types, 10 mouth geometries, and 8 animated particle extras creating 100 distinct living personas.
        </p>
      </div>

      {/* Main Studio Matrix Console */}
      <div className="bg-glass-card rounded-[2.5rem] sm:rounded-[3rem] border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.6)] overflow-hidden max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 relative z-10 backdrop-blur-2xl">
        
        {/* Left Column: Live OLED Screen Simulation */}
        <div className="lg:col-span-5 bg-[#0b0c10] p-6 sm:p-10 flex flex-col items-center justify-between border-b lg:border-b-0 lg:border-r border-white/10 relative">
          
          {/* Top Status Bar with Arduino Serial Monitor format */}
          <div className="w-full flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-mono text-white uppercase tracking-wider font-semibold">
                FACE #{activeCategory === 'custom' ? 'CUSTOM' : selectedFace.index + 1}
              </span>
            </div>

            <div className="text-[10px] sm:text-xs font-mono px-2.5 py-0.5 rounded-full bg-orox-orange/20 border border-orox-orange/40 text-orox-amber uppercase font-bold">
              {activeCategory === 'custom' ? 'CUSTOM MIX' : selectedFace.name}
            </div>
          </div>

          {/* Center OLED Hero Screen with Live Cursor Tracking & Blinking */}
          <div className="my-6 sm:my-8 flex flex-col items-center justify-center w-full">
            <div className="relative p-2">
              <RobotFace
                size="hero"
                mochiFace={activeCategory === 'custom' ? undefined : selectedFace}
                customEye={activeCategory === 'custom' ? customEye : undefined}
                customMouth={activeCategory === 'custom' ? customMouth : undefined}
                customExtra={activeCategory === 'custom' ? customExtra : undefined}
                onClick={() => robotAudio.playChirp()}
              />
            </div>

            {/* Interactive hint */}
            <div className="mt-3 px-3.5 py-1 rounded-full bg-black/70 border border-white/10 text-[10px] font-mono text-slate-300 uppercase tracking-wide">
              Move cursor to guide gaze • Tap to blink
            </div>
          </div>

          {/* Serial Monitor Technical Readout */}
          <div className="w-full bg-[#11131a] rounded-2xl p-4 border border-white/10 text-left font-mono text-[11px] space-y-1.5 z-10">
            <div className="text-slate-400 flex justify-between items-center text-[10px]">
              <span>SERIAL READOUT:</span>
              <span className="text-emerald-400 font-mono">115200 BAUD</span>
            </div>
            <div className="text-white text-xs truncate font-medium">
              {activeCategory === 'custom' ? (
                <>
                  <span className="text-orox-amber font-bold">#CUSTOM</span> • {EYE_NAMES[customEye]} eyes • {MOUTH_NAMES[customMouth]} mouth • {EXTRA_NAMES[customExtra]}
                </>
              ) : (
                <>
                  <span className="text-orox-amber font-bold">#{selectedFace.index + 1} {selectedFace.name}</span> | {selectedFace.eyeName} eyes, {selectedFace.mouthName} mouth, {selectedFace.extraName}
                </>
              )}
            </div>
            <div className="text-[10px] text-slate-400">
              {activeCategory === 'custom' ? 'User-generated custom facial parameters.' : selectedFace.description}
            </div>
          </div>

          {/* Navigation Controls Bar (Next / Previous / Random / Auto Cycle) */}
          <div className="w-full pt-4 mt-4 border-t border-white/10 flex items-center justify-between gap-2 z-10">
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs flex items-center gap-1 transition-all cursor-pointer font-bold"
                title="Previous Face (Key: p)"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">PREV</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs flex items-center gap-1 transition-all cursor-pointer font-bold"
                title="Next Face (Key: n)"
              >
                <span className="hidden sm:inline">NEXT</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleRandom}
                className="p-2.5 rounded-xl bg-orox-orange/20 border border-orox-orange/40 hover:bg-orox-orange/30 text-orox-amber font-mono text-xs flex items-center gap-1.5 transition-all cursor-pointer font-bold"
                title="Random Expression (Key: r)"
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span>RANDOM</span>
              </button>

              <button
                type="button"
                onClick={toggleAutoMode}
                className={`p-2.5 rounded-xl font-mono text-xs flex items-center gap-1.5 transition-all cursor-pointer font-bold ${
                  isAutoCycle
                    ? 'bg-emerald-500 text-black font-extrabold shadow-lg animate-pulse'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
                title="Toggle Auto Cycle (Key: a)"
              >
                {isAutoCycle ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isAutoCycle ? 'PAUSE' : 'AUTO'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Right Column: 100 Faces Explorer, Scrubber & Mixer */}
        <div className="lg:col-span-7 bg-[#12141c] p-6 sm:p-8 flex flex-col justify-between">
          <div>
            
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1.5 bg-[#0a0b10] rounded-2xl border border-white/10 mb-5">
              {[
                { id: 'iconic', label: 'Top 12', icon: <Sparkles className="w-3 h-3" /> },
                { id: 'joy', label: 'Joy & Love', icon: <Heart className="w-3 h-3" /> },
                { id: 'kawaii', label: 'Kawaii :3', icon: <Cat className="w-3 h-3" /> },
                { id: 'cyber', label: 'Cyber', icon: <Zap className="w-3 h-3" /> },
                { id: 'chill', label: 'Chill & Zzz', icon: <Moon className="w-3 h-3" /> },
                { id: 'all', label: 'All 100', icon: <Layers className="w-3 h-3" /> },
                { id: 'custom', label: 'Mixer', icon: <Sliders className="w-3 h-3" /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(tab.id as CategoryFilter);
                    robotAudio.playClick();
                  }}
                  className={`px-3 py-2 rounded-xl text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer font-semibold ${
                    activeCategory === tab.id
                      ? 'bg-gradient-to-r from-orox-orange to-amber-500 text-black font-extrabold shadow-md scale-[1.02]'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Quick Face Index Range Scrubber (1..100) */}
            {activeCategory !== 'custom' && (
              <div className="mb-5 bg-[#171923] p-3.5 rounded-2xl border border-white/10">
                <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-2 font-medium">
                  <span>EXPRESSION INDEX: #{currentIdx + 1} / 100</span>
                  <span className="text-orox-amber font-bold">{selectedFace.name}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="99"
                  value={currentIdx}
                  onChange={(e) => setCurrentIdx(parseInt(e.target.value, 10))}
                  className="w-full accent-[#FF7A00] cursor-pointer h-2 bg-[#0A0B0E] rounded-lg"
                />
              </div>
            )}

            {/* Search Input when viewing All 100 */}
            {activeCategory === 'all' && (
              <div className="relative mb-4">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name (e.g. 'Mochi', 'Cosmic', 'Pixel') or # number..."
                  className="w-full bg-[#171923] border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-orox-orange"
                />
              </div>
            )}

            {/* Mode A: Preset Faces Grid */}
            {activeCategory !== 'custom' ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[380px] overflow-y-auto pr-1">
                {filteredFaces.map((face) => {
                  const isSelected = currentIdx === face.index;
                  return (
                    <button
                      key={face.id}
                      type="button"
                      onClick={() => handleSelectFace(face.index)}
                      className={`p-3 rounded-2xl border text-left flex flex-col justify-between transition-all duration-150 cursor-pointer ${
                        isSelected
                          ? 'bg-orox-orange/20 border-orox-orange shadow-glow-orange scale-[1.02]'
                          : 'bg-[#181a24] border-white/5 hover:bg-[#202230] hover:border-white/15'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-orox-amber font-bold">
                          #{face.index + 1}
                        </span>
                        <div className="w-12 h-8 rounded-lg bg-black/60 p-0.5 flex items-center justify-center overflow-hidden border border-white/10">
                          <RobotFace size="sm" mochiFace={face} className="scale-[0.45] origin-center" />
                        </div>
                      </div>

                      <div>
                        <div className="text-xs font-bold text-white truncate font-display">
                          {face.name}
                        </div>
                        <div className="text-[10px] font-mono text-slate-400 truncate uppercase mt-0.5">
                          {face.eyeName} • {face.mouthName}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : (
              /* Mode B: Custom Mixer (Direct selection of 15 Eyes, 10 Mouths, 8 Extras) */
              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-1">
                {/* 1. Eye Type Selector (15 Types) */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 font-semibold">
                    1. Optical Eye Geometry ({EYE_NAMES[customEye]}):
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
                    {EYE_NAMES.map((name, idx) => (
                      <button
                        key={name}
                        type="button"
                        onClick={() => {
                          setCustomEye(idx);
                          robotAudio.playChirp();
                        }}
                        className={`p-2 rounded-xl text-[10px] font-mono text-center transition-all cursor-pointer font-medium ${
                          customEye === idx
                            ? 'bg-orox-orange text-black font-extrabold shadow-sm'
                            : 'bg-[#181a24] text-slate-300 hover:bg-[#222534] border border-white/5'
                        }`}
                      >
                        {name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Mouth Type Selector (10 Types) */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 font-semibold">
                    2. Vocal Mouth Geometry ({MOUTH_NAMES[customMouth]}):
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
                    {MOUTH_NAMES.map((name, idx) => (
                      <button
                        key={name}
                        type="button"
                        onClick={() => {
                          setCustomMouth(idx);
                          robotAudio.playChirp();
                        }}
                        className={`p-2 rounded-xl text-[10px] font-mono text-center transition-all cursor-pointer font-medium ${
                          customMouth === idx
                            ? 'bg-orox-orange text-black font-extrabold shadow-sm'
                            : 'bg-[#181a24] text-slate-300 hover:bg-[#222534] border border-white/5'
                        }`}
                      >
                        {name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Extra Particles Selector (8 Types) */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 font-semibold">
                    3. Particle Extras ({EXTRA_NAMES[customExtra]}):
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                    {EXTRA_NAMES.map((name, idx) => (
                      <button
                        key={name}
                        type="button"
                        onClick={() => {
                          setCustomExtra(idx);
                          robotAudio.playChirp();
                        }}
                        className={`p-2 rounded-xl text-[10px] font-mono text-center transition-all cursor-pointer font-medium ${
                          customExtra === idx
                            ? 'bg-orox-orange text-black font-extrabold shadow-sm'
                            : 'bg-[#181a24] text-slate-300 hover:bg-[#222534] border border-white/5'
                        }`}
                      >
                        {name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Bottom Bar: Quick Hardware Callout */}
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>90HZ LOW-PERSISTENCE OLED GLASS</span>
            </div>
            <span className="text-orox-amber font-bold">100% PROTOCOL COMPATIBLE</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FaceStudio;
