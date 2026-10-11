import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { robotAudio } from '../utils/soundEffects';
import {
  Sparkles,
  MessageSquarePlus,
  Heart,
  ThumbsUp,
  CheckCircle2,
  ArrowRight,
  Send,
  Lightbulb,
  Shield,
  Bot,
  Mail,
  Phone,
  RefreshCw,
} from 'lucide-react';
import { RobotTheme, ROBOT_THEMES } from '../types/robotCustomizer';

interface SuggestionBoxProps {
  preselectedTheme?: RobotTheme;
}

interface CommunityIdea {
  id: string;
  category: 'body' | 'voice' | 'hardware' | 'ai';
  categoryLabel: string;
  title: string;
  description: string;
  upvotes: number;
  status: 'In Engineering' | 'Community Favorite' | 'Under Review';
}

const INITIAL_COMMUNITY_IDEAS: CommunityIdea[] = [
  {
    id: '1',
    category: 'body',
    categoryLabel: 'Action Figure Body',
    title: 'Goku Super Saiyan Armor Body',
    description: 'Orange martial arts gi body with glowing golden aura energy ring and weighted boots.',
    upvotes: 428,
    status: 'In Engineering',
  },
  {
    id: '2',
    category: 'voice',
    categoryLabel: 'Cute Voice & Persona',
    title: 'Playful Chibi Anime Robot Voice',
    description: 'High-pitched cheerful chirps and cute morning wake-up lines like "Ohayo! Let\'s build something cool today!"',
    upvotes: 562,
    status: 'Community Favorite',
  },
  {
    id: '3',
    category: 'hardware',
    categoryLabel: 'Desk Hardware',
    title: 'MagSafe Angled Desk Stand with Clock Mode',
    description: 'Magnetic desk dock that tilts ORoX at a 45-degree angle so the OLED face functions as a glanceable desktop clock.',
    upvotes: 315,
    status: 'In Engineering',
  },
  {
    id: '4',
    category: 'body',
    categoryLabel: 'Action Figure Body',
    title: 'Batman Tactical Knight Armor',
    description: 'Matte black Kevlar body plating with utility belt and tiny bat wing ear fins.',
    upvotes: 289,
    status: 'Under Review',
  },
  {
    id: '5',
    category: 'ai',
    categoryLabel: 'AI Skills',
    title: 'Spotify Audio Reactive Dance Sync',
    description: 'Real-time beat matching where ORoX bobs its squircle head and pulses its acoustic ears to your music.',
    upvotes: 491,
    status: 'Community Favorite',
  },
];

const CATEGORIES = [
  { id: 'body', label: 'Action Figure Body', icon: '🎭' },
  { id: 'voice', label: 'Cute Voice & Persona', icon: '🗣️' },
  { id: 'hardware', label: 'Desk Hardware', icon: '⚡' },
  { id: 'ai', label: 'AI Skills & Routines', icon: '🧠' },
];

const QUICK_CHIPS = [
  { text: 'Dragon Ball Goku Body', cat: 'body' },
  { text: 'Cute Japanese Chibi Voice', cat: 'voice' },
  { text: 'Desktop Nightstand Clock Stand', cat: 'hardware' },
  { text: 'Naruto Sage Mode Kimono', cat: 'body' },
  { text: 'Beat-Matched Dance Routine', cat: 'ai' },
];

export const SuggestionBox: React.FC<SuggestionBoxProps> = ({ preselectedTheme }) => {
  const [selectedCat, setSelectedCat] = useState<'body' | 'voice' | 'hardware' | 'ai'>('body');
  const [authorName, setAuthorName] = useState('');
  const [authorContact, setAuthorContact] = useState('');
  const [suggestionText, setSuggestionText] = useState('');
  const [communityIdeas, setCommunityIdeas] = useState<CommunityIdea[]>(INITIAL_COMMUNITY_IDEAS);
  const [votedIds, setVotedIds] = useState<Set<string>>(new Set());
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Email capture for priority robot notification
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isEmailSubmitting, setIsEmailSubmitting] = useState(false);

  const activeTheme = preselectedTheme || ROBOT_THEMES[0];

  const handleVote = (id: string) => {
    robotAudio.playChirp();
    setCommunityIdeas((prev) =>
      prev.map((idea) => {
        if (idea.id === id) {
          const hasVoted = votedIds.has(id);
          const nextVoted = new Set(votedIds);
          if (hasVoted) {
            nextVoted.delete(id);
            return { ...idea, upvotes: idea.upvotes - 1 };
          } else {
            nextVoted.add(id);
            return { ...idea, upvotes: idea.upvotes + 1 };
          }
        }
        return idea;
      })
    );
    setVotedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleQuickChip = (text: string, cat: string) => {
    robotAudio.playClick();
    setSelectedCat(cat as 'body' | 'voice' | 'hardware' | 'ai');
    setSuggestionText((prev) => (prev ? `${prev}, ${text}` : text));
  };

  const handleSubmitSuggestion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!suggestionText.trim() || isSubmitting) return;

    setIsSubmitting(true);
    robotAudio.playGreeting();

    const catLabel =
      CATEGORIES.find((c) => c.id === selectedCat)?.label || 'Community Suggestion';

    // Dispatches directly to oroxrobot@gmail.com
    try {
      await fetch("https://formsubmit.co/ajax/oroxrobot@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New ORoX Robot Suggestion [${catLabel}]: ${authorName || 'Community Member'}`,
          name: authorName || 'Anonymous Community Member',
          contact: authorContact || 'Not provided',
          category: catLabel,
          suggestion: suggestionText,
          selectedRobotEdition: activeTheme.name,
          submittedAt: new Date().toLocaleString(),
        }),
      });
    } catch (err) {
      console.log("Suggestion mail submission processed", err);
    }

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#FF7A00', '#FFA033', '#FFD54F', '#00f0ff'],
      });
    } catch {}

    const newIdea: CommunityIdea = {
      id: String(Date.now()),
      category: selectedCat,
      categoryLabel: catLabel,
      title: authorName ? `${authorName}'s Idea` : 'New Community Suggestion',
      description: suggestionText,
      upvotes: 1,
      status: 'Under Review',
    };

    setCommunityIdeas([newIdea, ...communityIdeas]);
    setIsSubmitted(true);
    setIsSubmitting(false);

    robotAudio.speak(
      "Beep boop! Thank you for the awesome suggestion! It has been dispatched directly to oroxrobot@gmail.com and our engineering team.",
      () => {},
      () => {}
    );
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || isEmailSubmitting) return;

    setIsEmailSubmitting(true);
    robotAudio.playGreeting();

    // Sends notification to oroxrobot@gmail.com
    try {
      await fetch("https://formsubmit.co/ajax/oroxrobot@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New ORoX Priority Robot Request: ${email}`,
          email: email,
          themeInterest: activeTheme.name,
          submittedAt: new Date().toLocaleString(),
        }),
      });
    } catch (err) {
      console.log("Waitlist mail submission processed", err);
    }

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF7A00', '#FFA033', '#FFD54F'],
      });
    } catch {}

    setIsEmailSubmitting(false);
    setEmailSubmitted(true);
  };

  return (
    <section id="suggestion" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full blur-[200px] pointer-events-none transition-all duration-700 opacity-20"
        style={{ backgroundColor: activeTheme.accentHex }}
      />

      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 relative z-10">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-orox-card border border-orox-orange/40 text-orox-amber text-xs font-mono uppercase tracking-widest mb-6 shadow-glow-orange">
          <MessageSquarePlus className="w-3.5 h-3.5 text-orox-orange animate-pulse" />
          <span>[ COMMUNITY LAB & SUGGESTION BOX ]</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6 font-display">
          Shape the Future of <br className="hidden sm:inline" />
          <span
            className="text-transparent bg-clip-text transition-all duration-500"
            style={{
              backgroundImage: `linear-gradient(to right, ${activeTheme.accentHex}, #FFA033, #FFD54F)`,
            }}
          >
            ORoX Companion Robots.
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
          What action figure bodies, cute voice personas, or desk accessories should we build next? Drop your ideas directly to our engineers or upvote community concepts below!
        </p>
      </div>

      {/* Main Console: Suggestion Form + Live Ideas Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto relative z-10">
        
        {/* Left Column: Interactive Suggestion Form */}
        <div className="lg:col-span-6 bg-glass-card rounded-[2rem] p-6 sm:p-8 border border-white/15 shadow-2xl backdrop-blur-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-orox-orange" />
                <h3 className="text-lg font-bold text-white font-display">Drop a Suggestion</h3>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-orox-orange/20 border border-orox-orange/40 text-orox-amber uppercase font-semibold">
                Open to Everyone
              </span>
            </div>

            {/* Category Selector Tabs */}
            <div className="mb-5">
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 font-semibold">
                1. Select Category:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {CATEGORIES.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => {
                      setSelectedCat(c.id as any);
                      robotAudio.playClick();
                    }}
                    className={`p-3 rounded-xl border text-left text-xs font-medium flex items-center gap-2.5 transition-all cursor-pointer ${
                      selectedCat === c.id
                        ? 'bg-orox-orange/25 border-orox-orange text-white shadow-glow-orange font-bold'
                        : 'bg-[#14161E] border-white/10 text-slate-300 hover:border-white/25 hover:text-white'
                    }`}
                  >
                    <span className="text-base">{c.icon}</span>
                    <span className="truncate">{c.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Inspiration Chips */}
            <div className="mb-5">
              <span className="text-[11px] font-mono text-slate-400 block mb-2 uppercase tracking-wide">
                Quick ideas from community:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {QUICK_CHIPS.map((chip, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleQuickChip(chip.text, chip.cat)}
                    className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-[11px] text-slate-300 hover:text-orox-amber transition-colors cursor-pointer"
                  >
                    + {chip.text}
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmitSuggestion} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
                    2. Your Name (Optional):
                  </label>
                  <input
                    type="text"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="e.g. Alex, CyberFan"
                    className="w-full bg-[#11131a] border border-white/10 focus:border-orox-orange rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
                    Contact Email/Phone:
                  </label>
                  <input
                    type="text"
                    value={authorContact}
                    onChange={(e) => setAuthorContact(e.target.value)}
                    placeholder="e.g. you@gmail.com / phone"
                    className="w-full bg-[#11131a] border border-white/10 focus:border-orox-orange rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
                  3. Your Suggestion Idea:
                </label>
                <textarea
                  rows={4}
                  value={suggestionText}
                  onChange={(e) => setSuggestionText(e.target.value)}
                  placeholder="Describe your character body design, voice lines, or hardware accessory..."
                  className="w-full bg-[#11131a] border border-white/10 focus:border-orox-orange rounded-xl p-4 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={!suggestionText.trim() || isSubmitting}
                className="w-full py-4 rounded-xl btn-attractive-primary text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-40 transition-all"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 text-black animate-spin" />
                    <span>DISPATCHING TO OROXROBOT@GMAIL.COM...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-black" />
                    <span>SUBMIT SUGGESTION TO LAB</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 px-1 pt-1">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-orox-orange" />
                  <span>Delivers directly to: <strong className="text-white">oroxrobot@gmail.com</strong></span>
                </span>
                
                <a
                  href={`mailto:oroxrobot@gmail.com?subject=ORoX%20Suggestion%20[${encodeURIComponent(selectedCat)}]&body=Hi%20ORoX%20Team,%0D%0A%0D%0AMy%20suggestion%20is:%0D%0A${encodeURIComponent(suggestionText || 'My idea is...')}`}
                  className="text-orox-amber hover:underline shrink-0"
                >
                  Send via Mail App &rarr;
                </a>
              </div>

              {isSubmitted && (
                <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-xs flex items-center gap-2 animate-fade-in font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Your suggestion has been dispatched to <strong className="text-white underline">oroxrobot@gmail.com</strong> and added to the community voting pool!</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Right Column: Live Community Voting Feed */}
        <div className="lg:col-span-6 bg-glass-card rounded-[2rem] p-6 sm:p-8 border border-white/15 shadow-2xl backdrop-blur-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose-400" />
                <h3 className="text-lg font-bold text-white font-display">Community Top Ideas</h3>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                {communityIdeas.length} Active Ideas
              </span>
            </div>

            {/* List of Community Ideas with Live Upvote */}
            <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1 no-scrollbar">
              {communityIdeas.map((idea) => {
                const hasVoted = votedIds.has(idea.id);
                return (
                  <div
                    key={idea.id}
                    className="p-4 rounded-2xl bg-[#11131A] border border-white/10 hover:border-white/20 transition-all flex items-start justify-between gap-4"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-slate-300 font-semibold uppercase">
                          {idea.categoryLabel}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold ${
                            idea.status === 'In Engineering'
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                              : idea.status === 'Community Favorite'
                              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                              : 'bg-white/5 text-slate-400'
                          }`}
                        >
                          {idea.status}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-white font-display mb-1">
                        {idea.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {idea.description}
                      </p>
                    </div>

                    {/* Upvote Button */}
                    <button
                      type="button"
                      onClick={() => handleVote(idea.id)}
                      className={`px-3 py-2.5 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all cursor-pointer shrink-0 min-w-[54px] ${
                        hasVoted
                          ? 'bg-rose-500/25 border-rose-500 text-rose-300 font-bold scale-105 shadow-md'
                          : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-300 hover:text-white'
                      }`}
                      title={hasVoted ? 'Remove Upvote' : 'Upvote this idea'}
                    >
                      <ThumbsUp className={`w-4 h-4 ${hasVoted ? 'fill-rose-400 text-rose-400' : ''}`} />
                      <span className="text-xs font-mono font-bold">{idea.upvotes}</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-white/10 text-[11px] font-mono text-slate-400 text-center">
            ★ Engineers review top 5 ideas weekly for 3D modeling and prototyping
          </div>
        </div>

      </div>

      {/* Direct Robotics Engineering Contact Card */}
      <div className="mt-10 max-w-6xl mx-auto relative z-10">
        <div className="p-5 sm:p-6 rounded-3xl bg-[#12141C] border border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-11 h-11 rounded-2xl bg-orox-orange/20 border border-orox-orange/40 flex items-center justify-center text-orox-orange shrink-0 shadow-glow-orange">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-display">
                Direct Engineering & Feedback Contact
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Have custom ideas, partnership proposals, or urgent questions? Reach our team directly.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2.5 sm:gap-3 w-full md:w-auto">
            <a
              href="mailto:oroxrobot@gmail.com"
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-orox-orange/20 border border-white/10 hover:border-orox-orange/50 text-white hover:text-orox-amber transition-all flex items-center gap-2 font-mono text-xs cursor-pointer"
              title="Email oroxrobot@gmail.com"
            >
              <Mail className="w-4 h-4 text-orox-orange" />
              <span>oroxrobot@gmail.com</span>
            </a>

            <a
              href="tel:01763609992"
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/50 text-slate-200 hover:text-emerald-300 transition-all flex items-center gap-2 font-mono text-xs cursor-pointer"
              title="Call 01763609992"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>01763609992</span>
            </a>

            <a
              href="tel:01939161125"
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/50 text-slate-200 hover:text-emerald-300 transition-all flex items-center gap-2 font-mono text-xs cursor-pointer"
              title="Call 01939161125"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>01939161125</span>
            </a>
          </div>
        </div>
      </div>

      {/* Priority Drop Section: "Grab Your First Personal AI Robot" */}
      <div className="mt-12 sm:mt-14 max-w-4xl mx-auto relative z-10">
        <div className="bg-gradient-to-r from-[#171924] via-[#1c1f2c] to-[#171924] rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orox-orange/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="w-12 h-12 rounded-2xl bg-orox-orange/20 border border-orox-orange/50 flex items-center justify-center text-orox-orange mx-auto mb-4 shadow-glow-orange">
            <Bot className="w-6 h-6" />
          </div>

          <h3 className="text-2xl sm:text-4xl font-black text-white font-display mb-3">
            Grab Your First Personal AI Robot.
          </h3>
          <p className="text-slate-300 text-xs sm:text-base max-w-xl mx-auto mb-6 leading-relaxed">
            Be the very first to welcome ORoX to your desk when production ships. Receive release alerts, special pricing, and first access to new action figure armor drops!
          </p>

          {!emailSubmitted ? (
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full bg-[#0E1017] border border-white/15 focus:border-orox-orange rounded-2xl px-4 py-3.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-all min-h-[48px]"
              />
              <button
                type="submit"
                disabled={isEmailSubmitting}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl btn-attractive-primary text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer shadow-lg min-h-[48px] disabled:opacity-50"
              >
                {isEmailSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 text-black animate-spin" />
                    <span>SAVING...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-black shrink-0" />
                    <span>GRAB YOUR ROBOT</span>
                    <ArrowRight className="w-4 h-4 text-black shrink-0" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-xs sm:text-sm max-w-md mx-auto flex items-center justify-center gap-2 font-medium">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>You're on the priority list! We'll alert you at {email} the instant ORoX drops.</span>
            </div>
          )}

          <div className="mt-4 flex items-center justify-center gap-4 text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              No Spam Ever
            </span>
            <span>•</span>
            <span>Unsubscribe Anytime</span>
            <span>•</span>
            <span>100% Free Notification</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default SuggestionBox;
