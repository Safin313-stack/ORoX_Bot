import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { robotAudio } from '../utils/soundEffects';
import { CheckCircle2, Ticket, Clock, ArrowRight, Copy, Check } from 'lucide-react';
import { RobotTheme, ROBOT_THEMES } from '../types/robotCustomizer';

interface WaitlistSectionProps {
  preselectedTheme?: RobotTheme;
}

export const WaitlistSection: React.FC<WaitlistSectionProps> = ({ preselectedTheme }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [colorEdition, setColorEdition] = useState(preselectedTheme ? preselectedTheme.id : 'tangerine');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [copiedTicket, setCopiedTicket] = useState(false);

  useEffect(() => {
    if (preselectedTheme) {
      setColorEdition(preselectedTheme.id);
    }
  }, [preselectedTheme]);

  // Countdown timer simulation (48 days from current)
  const [timeLeft, setTimeLeft] = useState({
    days: 48,
    hours: 14,
    minutes: 32,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    robotAudio.playGreeting();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const generatedTicket = `OROX-VIP-${randomNum}`;
    setTicketId(generatedTicket);
    setIsSubmitted(true);

    // Confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF7A00', '#FFA033', '#FFB340', '#FFFFFF'],
      });
    } catch {
      // Confetti fallback
    }
  };

  const copyTicketCode = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(ticketId);
      setCopiedTicket(true);
      setTimeout(() => setCopiedTicket(false), 2000);
    }
  };

  const activeThemeObj = ROBOT_THEMES.find((t) => t.id === colorEdition) || ROBOT_THEMES[0];

  return (
    <section id="waitlist" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background radial accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[150px] pointer-events-none opacity-20 transition-colors duration-700"
        style={{ backgroundColor: activeThemeObj.accentHex }}
      />

      <div className="bg-glass-card rounded-3xl sm:rounded-[2.5rem] border border-white/10 shadow-glow-orange-lg p-5 sm:p-10 md:p-14 max-w-5xl mx-auto relative overflow-hidden">
        
        {/* Subtle decorative glow line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-700"
          style={{
            backgroundImage: `linear-gradient(to right, transparent, ${activeThemeObj.accentHex}, transparent)`,
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Offer & Countdown */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-orox-card border border-orox-orange/40 text-orox-amber text-xs font-pixel uppercase tracking-widest mb-6 shadow-glow-orange">
              <span
                className="w-2.5 h-2.5 rounded-full animate-ping shrink-0"
                style={{ backgroundColor: activeThemeObj.accentHex }}
              />
              <span className="truncate">[ 06 // BATCH 01 FOUNDING RESERVATION ]</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6 font-display">
              Be the First to <br className="hidden sm:inline" />
              <span
                className="text-transparent bg-clip-text transition-all duration-500"
                style={{
                  backgroundImage: `linear-gradient(to right, ${activeThemeObj.accentHex}, #FFA033, #FFD54F)`,
                }}
              >
                Welcome ORoX Home.
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              Join the VIP Waitlist today to secure your priority production slot and claim exclusive founding backer perks before public launch.
            </p>

            {/* Countdown Clock */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                <Clock className="w-3.5 h-3.5 text-orox-orange shrink-0" />
                <span>Production Batch 01 Closes In:</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2.5 max-w-md">
                {[
                  { label: 'Days', val: timeLeft.days },
                  { label: 'Hours', val: timeLeft.hours },
                  { label: 'Mins', val: timeLeft.minutes },
                  { label: 'Secs', val: timeLeft.seconds },
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#0C0E14] border border-white/10 rounded-xl sm:rounded-2xl p-2 sm:p-3 text-center">
                    <span className="block text-xl sm:text-2xl md:text-3xl font-extrabold font-mono text-white">
                      {String(item.val).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Perks list */}
            <div className="space-y-3">
              {[
                { text: 'Lock in $199 Founding Price ($100 off $299 retail)' },
                { text: 'Complimentary Magnetic Qi Charging Dock ($49 value)' },
                { text: 'Serialized Founding Backer laser engraving on base' },
              ].map((perk, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{perk.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Form or Generated VIP Pass */}
          <div className="lg:col-span-6 bg-[#0E1017] rounded-3xl p-6 sm:p-8 border border-white/10 relative shadow-inner">
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 font-display">Reserve Your Spot</h3>
                  <p className="text-xs text-slate-400">No payment required now. You will be notified 48h before pre-orders open.</p>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-[#181B24] border border-white/10 focus:border-orox-orange focus:ring-1 focus:ring-orox-orange rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className="w-full bg-[#181B24] border border-white/10 focus:border-orox-orange focus:ring-1 focus:ring-orox-orange rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-all"
                  />
                </div>

                {/* Edition Choice (All 8 custom themes!) */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 flex items-center justify-between">
                    <span>Preferred Colorway Edition</span>
                    <span className="text-white font-semibold">{activeThemeObj.name}</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-h-36 overflow-y-auto pr-1">
                    {ROBOT_THEMES.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setColorEdition(item.id)}
                        className={`p-2 rounded-xl border text-center transition-all cursor-pointer ${
                          colorEdition === item.id
                            ? 'border-white bg-white/15 text-white shadow-md'
                            : 'border-white/5 bg-[#14161F] text-slate-400 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center justify-center -space-x-1 mb-1">
                          <span
                            className="w-3 h-3 rounded-full border border-black inline-block"
                            style={{ backgroundColor: item.bodyHex }}
                          />
                          <span
                            className="w-3 h-3 rounded-full border border-black inline-block"
                            style={{ backgroundColor: item.accentHex }}
                          />
                        </div>
                        <span className="block text-[10px] font-medium truncate">{item.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl text-black font-extrabold text-xs sm:text-sm font-pixel uppercase tracking-widest flex items-center justify-center gap-2.5 btn-attractive-primary cursor-pointer min-h-[52px]"
                >
                  <span>CLAIM VIP EARLY ACCESS & PASS</span>
                  <ArrowRight className="w-4 h-4 text-black shrink-0" />
                </button>

                <p className="text-[11px] text-slate-500 text-center font-mono">
                  🔒 We respect your inbox. Unsubscribe anytime.
                </p>
              </form>
            ) : (
              /* Holographic VIP Ticket Pass */
              <div className="space-y-6 text-center animate-fade-in">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono">
                  <Check className="w-3.5 h-3.5" />
                  <span>Reservation Confirmed!</span>
                </div>

                <div
                  className="bg-gradient-to-br from-[#1C1F2B] to-[#12141C] border-2 rounded-2xl p-4 sm:p-6 shadow-glow-orange relative overflow-hidden transition-all duration-500"
                  style={{ borderColor: activeThemeObj.accentHex }}
                >
                  <div
                    className="absolute top-0 right-0 text-black text-[9px] sm:text-[10px] font-mono font-bold px-2.5 sm:px-3 py-0.5 rounded-bl-lg uppercase max-w-[70%] truncate"
                    style={{ backgroundColor: activeThemeObj.accentHex }}
                  >
                    Batch 01 • {activeThemeObj.name}
                  </div>

                  <Ticket className="w-7 h-7 sm:w-8 sm:h-8 mx-auto mb-2 mt-2" style={{ color: activeThemeObj.accentHex }} />
                  <div className="text-[11px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider">
                    ORoX Founding Backer Ticket
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold font-mono text-white tracking-wider sm:tracking-widest my-2 break-all sm:break-normal">
                    {ticketId}
                  </div>
                  <div className="text-xs font-medium truncate px-2" style={{ color: activeThemeObj.accentHex }}>
                    Reserved for: {name || 'VIP Guest'} ({email})
                  </div>

                  {/* Simulated barcode */}
                  <div className="mt-4 pt-4 border-t border-white/10 flex justify-center items-center gap-1 opacity-70 overflow-hidden max-w-full">
                    {Array.from({ length: 22 }).map((_, i) => (
                      <span
                        key={i}
                        className={`bg-white h-5 sm:h-6 shrink-0 ${i % 3 === 0 ? 'w-1' : i % 2 === 0 ? 'w-0.5' : 'w-1.5'}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={copyTicketCode}
                    className="py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    {copiedTicket ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedTicket ? 'Copied Pass!' : 'Copy Ticket Code'}</span>
                  </button>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="py-2.5 px-4 rounded-xl text-slate-400 hover:text-white text-xs font-mono transition-colors"
                  >
                    Register another
                  </button>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  A verification email has been dispatched to <span className="text-white font-medium">{email}</span>. You will receive private early ordering access for the <span className="text-white font-semibold">{activeThemeObj.name}</span> edition 48 hours before public launch!
                </p>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
