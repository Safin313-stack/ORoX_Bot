import React from 'react';
import { Cpu, Layers, Disc, Eye } from 'lucide-react';

const SPECS = [
  {
    category: 'Form & Materials',
    icon: <Layers className="w-4 h-4 text-orox-orange" />,
    items: [
      { name: 'Dimensions', value: '112 mm (H) × 98 mm (W) × 78 mm (D)' },
      { name: 'Weight', value: '345 g (12.1 oz)' },
      { name: 'Chassis Material', value: 'Matte dark graphite polycarbonate + anti-oil nano-coating' },
      { name: 'Acoustic Accents', value: 'Impact-molded Tangerine orange resonant ear chambers' },
    ],
  },
  {
    category: 'Display & Vision',
    icon: <Eye className="w-4 h-4 text-orox-orange" />,
    items: [
      { name: 'Screen Type', value: '2.4-inch Curved Ultra-Black OLED Screen' },
      { name: 'Refresh Rate', value: '90Hz Fluid Emotive Animation Engine' },
      { name: 'Peak Brightness', value: '1,000 nits (Auto-dimming for bedside mode)' },
      { name: 'Optical Cover', value: 'Curved anti-glare scratch-resistant silicate crystal' },
    ],
  },
  {
    category: 'Audio Architecture',
    icon: <Disc className="w-4 h-4 text-orox-orange" />,
    items: [
      { name: 'Acoustic Drivers', value: 'Dual 5W Neodymium dynamic drivers (10W peak)' },
      { name: 'Microphone Array', value: 'Quad-mic beamforming with neural background noise cancel' },
      { name: 'Frequency Range', value: '65 Hz - 22,000 Hz' },
      { name: 'Hardware Kill Switch', value: 'Physical mechanical disconnect switch with amber LED' },
    ],
  },
  {
    category: 'Silicon & AI Compute',
    icon: <Cpu className="w-4 h-4 text-orox-orange" />,
    items: [
      { name: 'Neural Processor', value: 'Dual-core On-Device Edge NPU (Sub-180ms inference)' },
      { name: 'Voice Pipeline', value: 'Real-time bidirectional speech-to-speech engine' },
      { name: 'Connectivity', value: 'Wi-Fi 6E (2.4/5/6 GHz), Bluetooth 5.3 LE, Thread / Matter' },
      { name: 'Battery & Dock', value: '3,800 mAh (4–5 hrs continuous run), 15W Qi Magnetic Dock included for 24/7 desk standby' },
    ],
  },
];

export const TechSpecs: React.FC = () => {
  return (
    <section id="specs" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-orox-card border border-orox-orange/40 text-orox-amber text-xs font-pixel uppercase tracking-widest mb-6 shadow-glow-orange">
          <Cpu className="w-3.5 h-3.5 text-orox-orange animate-pulse" />
          <span>[ 05 // HARDWARE & SILICON ARCHITECTURE ]</span>
        </div>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6 font-display">
          Engineered Without <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orox-orange via-amber-400 to-yellow-300">
            Any Compromise.
          </span>
        </h2>
        <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
          Designed from the inside out to combine high-performance conversational compute, 4–5 hour active battery life, and magnetic dock architecture with premium desktop presence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {SPECS.map((group, idx) => (
          <div
            key={idx}
            className="bg-glass-card rounded-3xl p-6 sm:p-8 border border-white/10 shadow-glass"
          >
            <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-white/10">
              <div className="p-2 rounded-xl bg-orox-orange/15 border border-orox-orange/30">
                {group.icon}
              </div>
              <h3 className="text-lg font-bold text-white font-display">{group.category}</h3>
            </div>

            <dl className="space-y-4">
              {group.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex flex-col sm:flex-row sm:justify-between py-1.5 border-b border-white/5 last:border-b-0 text-sm">
                  <dt className="text-slate-400 font-medium mb-1 sm:mb-0">{item.name}</dt>
                  <dd className="text-slate-200 font-mono text-xs sm:text-sm sm:text-right font-medium">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </section>
  );
};
