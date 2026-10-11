import React, { useState } from 'react';
import { Camera, ShieldCheck, ChevronRight } from 'lucide-react';
import { robotAudio } from '../utils/soundEffects';

interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  image: string;
  description: string;
  bulletPoints: string[];
}

const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'studio',
    title: 'Precision Physical Architecture',
    subtitle: 'Industrial Design & Aesthetics',
    tag: 'Hardware Spotlight',
    image: '/orox-robot-transparent.png',
    description: 'Designed with a tactile matte graphite polycarbonate chassis and high-visibility acoustic orange ear speakers. Balanced to sit sturdily on any workspace without slipping.',
    bulletPoints: [
      'Dual 360° directional sound chambers tuned for human vocal timbre',
      'Matte soft-touch anodized exterior with zero fingerprint adhesion',
      'Integrated quad-microphone beamforming array for crystal-clear pick up',
      'Weighted silicone anti-slip base with magnetic Qi charging coils',
    ],
  },
  {
    id: 'desk',
    title: 'The Ultimate Desk Co-Pilot',
    subtitle: 'Daily Productivity & Deep Work',
    tag: 'Workspace Lifestyle',
    image: '/orox-desk.jpg',
    description: 'Place ORoX next to your laptop or workstation. Whether you need a pomodoro timer, instant code review sounding board, or gentle reminders, ORoX keeps your energy high.',
    bulletPoints: [
      'Voice-activated pomodoro timers with subtle ambient chimes',
      'Instant calendar briefing and meeting preparation notes',
      'Acts as an interactive rubber-duck debugging sounding board',
      'Distraction-free: No intrusive social feeds or popups',
    ],
  },
  {
    id: 'night',
    title: 'Calm Evening & Bedside Serenity',
    subtitle: 'Sleep Tracking & Morning Gentle Wake',
    tag: 'Nightstand Mode',
    image: '/orox-night.jpg',
    description: 'At night, ORoX enters ultra-dim nightstand mode. Enjoy soothing conversational sleep stories, binaural soundscapes, and gentle sunrise wake tones.',
    bulletPoints: [
      'OLED eyes dim to 10% amber night-light glow to preserve circadian rhythms',
      'Interactive bedtime storytelling & calming mindfulness breathing',
      'Simulated acoustic sunrise wake-up melodies instead of jarring alarms',
      'Mic auto-sleep mode ensures zero nocturnal processing',
    ],
  },
];

export const LifestyleGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('studio');

  const currentItem = GALLERY_DATA.find((item) => item.id === activeTab) || GALLERY_DATA[0];

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    robotAudio.playClick();
  };

  return (
    <section id="design" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-orox-card border border-orox-orange/40 text-orox-amber text-xs font-mono uppercase tracking-widest mb-6 shadow-glow-orange">
          <Camera className="w-3.5 h-3.5 text-orox-orange animate-pulse" />
          <span>[ INDUSTRIAL DESIGN & LIFESTYLE SHOWCASE ]</span>
        </div>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6 font-display">
          Crafted for Your Space. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orox-orange via-amber-400 to-yellow-300">
            Engineered to Perfection.
          </span>
        </h2>
        <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
          Explore ORoX in the studio and real environments. Every curve, acoustic speaker port, and glow line was purpose-built.
        </p>

        {/* Tab Switcher */}
        <div className="mt-8 inline-flex flex-wrap justify-center p-1.5 rounded-2xl bg-[#14161E] border border-white/10 gap-1.5 sm:gap-2 max-w-full">
          {GALLERY_DATA.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabChange(item.id)}
              className={`px-3.5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer min-h-[44px] flex items-center justify-center ${
                activeTab === item.id
                  ? 'bg-orox-orange text-black shadow-glow-orange'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.tag}
            </button>
          ))}
        </div>
      </div>

      {/* Main Showcase Grid */}
      <div className="bg-glass-card rounded-3xl border border-white/10 shadow-glass overflow-hidden grid grid-cols-1 lg:grid-cols-12 max-w-6xl mx-auto">
        
        {/* Left: Image Container with overlay badges */}
        <div className="lg:col-span-7 relative bg-[#090A0D] min-h-[280px] sm:min-h-[420px] lg:min-h-[480px] flex items-center justify-center overflow-hidden group">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="w-full h-full object-contain p-4 sm:p-8 transition-transform duration-700 group-hover:scale-105"
          />

          {/* Floating subtle corner badge */}
          <div className="absolute bottom-5 left-5 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orox-orange animate-pulse" />
            <span>ORoX Prototype • Real Scale</span>
          </div>
        </div>

        {/* Right: Detailed Story & Specifications */}
        <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-center bg-[#101218]">
          <div className="text-xs font-mono uppercase tracking-wider text-orox-amber font-semibold mb-2">
            {currentItem.subtitle}
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-display">
            {currentItem.title}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            {currentItem.description}
          </p>

          <div className="space-y-3 pt-4 border-t border-white/10">
            {currentItem.bulletPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-orox-orange/20 border border-orox-orange/50 flex items-center justify-center shrink-0 mt-0.5">
                  <ChevronRight className="w-3.5 h-3.5 text-orox-orange" />
                </div>
                <span className="text-xs sm:text-sm text-slate-300">{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Certified Acoustic Chambers</span>
            </div>
            <a
              href="#suggestion"
              className="text-xs font-mono font-semibold text-orox-amber hover:text-white underline underline-offset-4 transition-colors"
            >
              Grab Your Robot &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
