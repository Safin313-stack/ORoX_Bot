import React from 'react';
import { ArrowUp, Mail, Phone, Headphones, ShieldCheck } from 'lucide-react';
import { robotAudio } from '../utils/soundEffects';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    robotAudio.playChirp();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#08090C] py-16 px-4 sm:px-6 lg:px-8 text-slate-400 text-sm relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 lg:gap-10 mb-12">
        
        {/* Col 1: Brand Info */}
        <div className="md:col-span-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-xl bg-[#14161E] border-2 border-orox-orange flex items-center justify-center shadow-glow-orange">
              <div className="flex gap-1">
                <span className="w-1.5 h-2 bg-orox-amber rounded-xs shadow-eye-glow" />
                <span className="w-1.5 h-2 bg-orox-amber rounded-xs shadow-eye-glow" />
              </div>
            </div>
            <span className="text-xl font-extrabold text-white font-display tracking-tight">ORoX</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-orox-orange/20 border border-orox-orange/30 text-orox-amber font-semibold">
              COMING SOON
            </span>
          </div>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-5">
            The intelligent conversational companion robot. Crafted with warm acoustics, glowing emotive eyes, and sub-180ms neural voice responses.
          </p>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Tooling & Prototyping Phase • Shipping Q4 2026</span>
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div className="md:col-span-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            <li>
              <a href="#customizer" className="hover:text-orox-amber transition-colors">
                3D Themes
              </a>
            </li>
            <li>
              <a href="#simulator" className="hover:text-orox-amber transition-colors">
                Voice Demo
              </a>
            </li>
            <li>
              <a href="#emotions" className="hover:text-orox-amber transition-colors">
                Face Studio
              </a>
            </li>
            <li>
              <a href="#design" className="hover:text-orox-amber transition-colors">
                Design & Build
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-orox-amber transition-colors">
                Tech Pillars
              </a>
            </li>
            <li>
              <a href="#suggestion" className="hover:text-orox-amber transition-colors">
                Suggestions
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Direct Contact Information */}
        <div className="md:col-span-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4 flex items-center gap-2">
            <Headphones className="w-3.5 h-3.5 text-orox-orange" />
            <span>Contact & Support</span>
          </h4>
          
          <ul className="space-y-3 text-xs sm:text-sm">
            {/* Contact Email */}
            <li>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-0.5">
                Official Email
              </span>
              <a
                href="mailto:oroxrobot@gmail.com"
                className="text-white hover:text-orox-amber transition-colors flex items-center gap-2 group font-medium"
                title="Send email to oroxrobot@gmail.com"
              >
                <Mail className="w-4 h-4 text-orox-orange group-hover:scale-110 transition-transform shrink-0" />
                <span className="break-all font-mono">oroxrobot@gmail.com</span>
              </a>
            </li>

            {/* Contact Phone Numbers */}
            <li>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-0.5">
                Hotline & WhatsApp
              </span>
              <div className="space-y-1.5">
                <a
                  href="tel:01763609992"
                  className="text-slate-200 hover:text-orox-amber transition-colors flex items-center gap-2 group font-mono"
                  title="Call 01763609992"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform shrink-0" />
                  <span>01763609992</span>
                </a>
                <a
                  href="tel:01939161125"
                  className="text-slate-200 hover:text-orox-amber transition-colors flex items-center gap-2 group font-mono"
                  title="Call 01939161125"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform shrink-0" />
                  <span>01939161125</span>
                </a>
              </div>
            </li>

            <li className="pt-1">
              <span className="text-[11px] font-mono text-slate-400 leading-tight block">
                Direct Robotics Inquiries, Feedback & Launch Assistance
              </span>
            </li>
          </ul>
        </div>

        {/* Col 4: Privacy & Guarantee */}
        <div className="md:col-span-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Privacy & Trust</span>
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            An AI in your personal space must be trustworthy by default. ORoX includes hardware mic isolation, local wake words, and transparent on-device processing.
          </p>
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center justify-between">
            <span>Pre-order Security</span>
            <span className="font-mono text-orox-amber font-semibold">Zero Risk • 100% Free</span>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
        <div>
          &copy; {new Date().getFullYear()} ORoX Robotics Inc. All rights reserved. • Contact: oroxrobot@gmail.com
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-slate-400 hover:text-orox-amber transition-colors cursor-pointer"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
