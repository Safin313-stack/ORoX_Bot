import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { robotAudio } from '../utils/soundEffects';

interface NavbarProps {
  onReserveClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReserveClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMute = () => {
    const next = !isMuted;
    setIsMuted(next);
    robotAudio.setMuted(next);
    if (!next) {
      robotAudio.playChirp();
    }
  };

  const navLinks = [
    { label: '3D Themes', href: '#customizer' },
    { label: 'Talk Demo', href: '#simulator' },
    { label: 'Emotions', href: '#emotions' },
    { label: 'Design', href: '#design' },
    { label: 'Features', href: '#features' },
    { label: 'Suggestions', href: '#suggestion' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-safe ${
          scrolled
            ? 'bg-[#0A0B0E]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#"
            onClick={() => robotAudio.playChirp()}
            className="flex items-center gap-3 group shrink-0"
          >
            {/* Miniature robot head icon */}
            <div className="w-9 h-9 rounded-xl bg-[#14161E] border-2 border-orox-orange flex items-center justify-center shadow-glow-orange group-hover:scale-105 transition-transform">
              <div className="flex gap-1">
                <span className="w-1.5 h-2 bg-orox-amber rounded-xs shadow-eye-glow" />
                <span className="w-1.5 h-2 bg-orox-amber rounded-xs shadow-eye-glow" />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight text-white font-display">
                  ORoX
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-orox-orange/20 border border-orox-orange/40 text-orox-amber font-semibold">
                  AI ROBOT
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 -mt-0.5 hidden xs:inline">
                Conversational Companion
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => robotAudio.playClick()}
                className="text-sm font-medium text-slate-300 hover:text-orox-amber transition-colors duration-150 relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-orox-orange transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Sound Switch */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleMute}
              className={`p-2.5 rounded-2xl border transition-all cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center ${
                isMuted
                  ? 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                  : 'bg-orox-orange/15 border-orox-orange/40 text-orox-amber hover:bg-orox-orange/25 shadow-glow-orange hover:scale-105'
              }`}
              title={isMuted ? "Unmute Robot Sound FX" : "Mute Robot Sound FX"}
              aria-label={isMuted ? "Unmute Sound" : "Mute Sound"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-orox-amber animate-pulse" />}
            </button>

            <a
              href="#suggestion"
              onClick={() => {
                robotAudio.playGreeting();
                if (onReserveClick) onReserveClick();
              }}
              className="px-6 py-2.5 rounded-2xl text-black font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 btn-attractive-primary cursor-pointer min-h-[44px]"
            >
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>GRAB YOUR ROBOT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-black" />
            </a>
          </div>

          {/* Mobile Actions: Audio + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleMute}
              className={`p-2.5 rounded-xl border transition-all min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer ${
                isMuted
                  ? 'bg-white/5 border-white/10 text-slate-400'
                  : 'bg-orox-orange/15 border-orox-orange/30 text-orox-amber'
              }`}
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-orox-orange" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#14161F] border border-white/10 text-slate-200 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0D0F14]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 shadow-2xl animate-fade-in max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="flex flex-col space-y-1 divide-y divide-white/5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    robotAudio.playClick();
                  }}
                  className="text-base font-semibold text-slate-200 hover:text-orox-orange py-3.5 flex items-center justify-between min-h-[48px] cursor-pointer"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </div>

            <div className="pt-5 mt-4 border-t border-white/10 space-y-3">
              <a
                href="#suggestion"
                onClick={() => {
                  setMobileMenuOpen(false);
                  robotAudio.playGreeting();
                  if (onReserveClick) onReserveClick();
                }}
                className="w-full py-4 rounded-2xl text-black font-extrabold text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 btn-attractive-primary cursor-pointer min-h-[48px]"
              >
                <span>GRAB YOUR FIRST PERSONAL AI ROBOT</span>
                <ArrowUpRight className="w-4 h-4 text-black" />
              </a>

              <p className="text-center text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                OROX LAUNCHING Q4 2026 • PERSONAL AI ROBOT
              </p>
            </div>
          </div>
        )}
      </header>

      {/* Dark Backdrop Overlay when Mobile Drawer is Open */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/65 backdrop-blur-sm z-40 md:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};
