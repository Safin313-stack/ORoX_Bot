import React from 'react';
import { Zap, Volume2, Shield, HeartHandshake, BatteryCharging, Sparkles, Lock } from 'lucide-react';

export const BentoFeatures: React.FC = () => {
  return (
    <section id="features" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-orox-card border border-orox-orange/40 text-orox-amber text-xs font-mono uppercase tracking-widest mb-6 shadow-glow-orange">
          <Sparkles className="w-3.5 h-3.5 text-orox-orange animate-pulse" />
          <span>[ HARDWARE & AI INNOVATION ]</span>
        </div>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6 font-display">
          Engineered to Speak. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orox-orange via-amber-400 to-yellow-300">
            Built to Truly Connect.
          </span>
        </h2>
        <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
          ORoX combines cutting-edge edge-AI compute, 4–5 hour active battery life, and friendly emotive OLED mechanics.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {/* Card 1: Large Span (Voice Speed) */}
        <div className="md:col-span-2 bg-glass-card rounded-3xl p-8 border border-white/10 shadow-glass relative overflow-hidden group hover:border-orox-orange/40 transition-all duration-300">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orox-orange/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-orox-orange/20 transition-all duration-500" />
          
          <div className="w-12 h-12 rounded-2xl bg-orox-orange/20 border border-orox-orange/50 flex items-center justify-center text-orox-orange mb-6 shadow-glow-orange">
            <Zap className="w-6 h-6" />
          </div>

          <div className="inline-block text-xs font-mono uppercase tracking-widest text-orox-amber font-semibold mb-2">
            Ultra-Low Latency Speech
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-display">
            Under 180ms Conversational Latency
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
            No robotic 3-second thinking pauses. ORoX streams voice tokens immediately, allowing natural interruptions, banter, and fluid back-and-forth dialogue just like talking to a friend beside you.
          </p>

          {/* Latency Comparison Bar */}
          <div className="bg-[#0C0D12] p-4 rounded-2xl border border-white/5 space-y-3">
            <div>
              <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                <span className="text-white font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orox-orange animate-ping" />
                  ORoX Neural Speech Pipeline
                </span>
                <span className="text-orox-amber font-bold">178 ms (Natural)</span>
              </div>
              <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-orox-orange to-amber-400 w-[18%] rounded-full shadow-[0_0_8px_#FF7A00]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono text-slate-500 mb-1">
                <span>Standard Cloud Voice Assistants</span>
                <span>1,850 ms (Awkward Lag)</span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-slate-600 w-[85%] rounded-full opacity-40" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Iconic Orange Acoustics */}
        <div className="bg-glass-card rounded-3xl p-8 border border-white/10 shadow-glass relative overflow-hidden group hover:border-orox-orange/40 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-orox-orange/20 border border-orox-orange/50 flex items-center justify-center text-orox-orange mb-6">
              <Volume2 className="w-6 h-6" />
            </div>

            <div className="text-xs font-mono uppercase tracking-widest text-orox-amber font-semibold mb-2">
              Acoustic Resonance
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-display">
              Tangerine 360° Ear Monitors
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              The high-visibility orange side capsules aren't just for looks. They house custom dual-cone dynamic drivers calibrated for warm, crisp voice fidelity.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Range: 60Hz - 22kHz</span>
            <span className="text-orox-amber font-semibold">Lossless Clarity</span>
          </div>
        </div>

        {/* Card 3: Privacy Sentinel */}
        <div className="bg-glass-card rounded-3xl p-8 border border-white/10 shadow-glass relative overflow-hidden group hover:border-orox-orange/40 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mb-6">
              <Lock className="w-6 h-6" />
            </div>

            <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold mb-2">
              Hardware Killswitch
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-display">
              Physical Privacy Sentinel
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Never worry about hidden eavesdropping. A mechanical tactile switch physically cuts power to the microphone array with LED confirmation.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-emerald-400">
            <Shield className="w-4 h-4" />
            <span>Zero Audio Storage Guarantee</span>
          </div>
        </div>

        {/* Card 4: Emotional Long-Term Memory */}
        <div className="bg-glass-card rounded-3xl p-8 border border-white/10 shadow-glass relative overflow-hidden group hover:border-orox-orange/40 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-orox-orange/20 border border-orox-orange/50 flex items-center justify-center text-orox-orange mb-6">
              <HeartHandshake className="w-6 h-6" />
            </div>

            <div className="text-xs font-mono uppercase tracking-widest text-orox-amber font-semibold mb-2">
              Continuous Empathy
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-display">
              Adaptive Memory & Humor
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              ORoX remembers your work projects, hobbies, and sense of humor. Over days and months, conversations evolve into an authentic friendship.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Local Encrypted Graph</span>
            <span className="text-orox-amber">Personalized</span>
          </div>
        </div>

        {/* Card 5: Battery & Magnetic Qi Dock */}
        <div className="bg-glass-card rounded-3xl p-8 border border-white/10 shadow-glass relative overflow-hidden group hover:border-orox-orange/40 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400 mb-6 shadow-glow-orange">
              <BatteryCharging className="w-6 h-6" />
            </div>

            <div className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold mb-2">
              DESK + MOBILE BACKUP
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-display">
              4–5 Hour Battery + Qi Dock
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Enjoy 4–5 hours of active conversational companion playtime on the go. When at your workstation, simply set ORoX onto its sleek magnetic 15W Qi charging pad for seamless 24/7 continuous desk presence.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Fast Charge 0-80%: 30m</span>
            <span className="text-amber-400 font-semibold font-mono text-[11px]">24/7 QI DESK STANDBY</span>
          </div>
        </div>

      </div>
    </section>
  );
};
