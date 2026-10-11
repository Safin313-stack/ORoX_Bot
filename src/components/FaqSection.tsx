import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { robotAudio } from '../utils/soundEffects';

const FAQS = [
  {
    q: 'When will ORoX officially ship?',
    a: 'We are currently finalizing tooling and compliance testing. Pre-orders open in Q3 2026, with initial fulfillment starting in Q4 2026. Early supporters receive priority access to grab their personal AI robot with exclusive launch pricing.',
  },
  {
    q: 'Does ORoX require a mandatory monthly subscription?',
    a: 'No! ORoX includes lifetime access to our core on-device voice companion, conversational memory, alarms, timers, and offline abilities for free. An optional Pro tier ($4.99/mo) will be available later for advanced multi-device syncing and custom third-party API integrations, but the robot is 100% usable right out of the box with zero subscription.',
  },
  {
    q: 'How does ORoX converse with almost zero latency?',
    a: 'ORoX utilizes a dual-tier neural architecture: lightweight wake-word and acoustic processing happen instantaneously on its dedicated on-device Edge NPU coprocessor, while streaming conversational tokens are transferred over low-latency neural pipelines, achieving a conversational response time under 180ms.',
  },
  {
    q: 'How does the hardware privacy kill switch work?',
    a: 'Unlike software "mute" buttons that simply tell the operating system to ignore audio, ORoX features a physical mechanical disconnect switch that breaks the electrical circuit directly between the power rail and the microphone sensors. When engaged, a bright hardware LED confirms zero electrical signal can reach the microphones.',
  },
  {
    q: 'Can ORoX operate while disconnected from Wi-Fi?',
    a: 'Yes. In offline mode, ORoX can tell time, run pomodoro timers, play local acoustic white noise, express emotional reactions to touch, and run local voice commands. Full conversational banter and web knowledge lookup require a 2.4/5GHz Wi-Fi connection.',
  },
  {
    q: 'How long does the battery last and how does charging work?',
    a: 'ORoX features a high-density lithium cell providing 4–5 hours of continuous active conversational dialogue and movement away from power. Every ORoX includes our sleek 15W Magnetic Qi Wireless Charging Dock — simply place ORoX on the dock at your desk or nightstand for uninterrupted 24/7 companion presence.',
  },
  {
    q: 'Can I swap the body armor with Action Figure characters?',
    a: 'Yes! The Action Figure Special Editions feature a modular quick-release chassis architecture. You can easily snap on custom character bodies (Spider-Hero, Sukuna Cursed Kimono, Deadpool Merc Armor, Lofi Cozy Hoodie, Iron Cyber Titanium) while keeping the same iconic ORoX squircle head and glowing OLED screen!',
  },
  {
    q: 'What is included in the box with my robot?',
    a: 'Every ORoX includes: The ORoX AI Robot, 15W Magnetic Fast Qi Charging Dock, Braided USB-C Power Cable (1.8m), Quickstart Guide, and an exclusive Collector Certificate with your device serial number.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    robotAudio.playClick();
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-orox-card border border-orox-orange/40 text-orox-amber text-xs font-mono uppercase tracking-widest mb-6 shadow-glow-orange">
          <HelpCircle className="w-3.5 h-3.5 text-orox-orange animate-pulse" />
          <span>[ COMMUNITY QUESTIONS & COMPANION SPECS ]</span>
        </div>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6 font-display">
          Frequently Asked <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orox-orange via-amber-400 to-yellow-300">
            Questions.
          </span>
        </h2>
        <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Everything you need to know about the ORoX companion robot, 4–5 hour battery backup, action figure editions, and launch timeline.
        </p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="bg-glass-card rounded-2xl border border-white/10 overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors min-h-[56px]"
              >
                <span className="text-base sm:text-lg font-bold text-white font-display">
                  {faq.q}
                </span>
                <span className={`p-2 rounded-xl bg-white/5 text-orox-orange transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-orox-orange/20' : ''}`}>
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4 animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqSection;
