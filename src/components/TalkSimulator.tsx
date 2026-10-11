import React, { useState, useRef, useEffect } from 'react';
import { RobotFace, RobotExpression } from './RobotFace';
import { robotAudio } from '../utils/soundEffects';
import { Send, Volume2, VolumeX, Sparkles, Bot, Play, RefreshCw, Anchor, Heart } from 'lucide-react';

interface Message {
  sender: 'user' | 'orox';
  text: string;
  expression?: RobotExpression;
  clipKey?: string;
}

const PRESET_PROMPTS = [
  {
    label: "Introduce yourself",
    prompt: "Hey ORoX, introduce yourself!",
    reply: "Beep-bloop! Hello there! I'm ORoX, your intelligent personal AI robot companion. I have dual 360° acoustic ear speakers, an emotive OLED screen face, and I'm built to talk, listen, and keep you company all day!",
    expression: 'happy' as RobotExpression,
    clipKey: 'intro',
  },
  {
    label: "Workday assistant",
    prompt: "How can you help me during deep work?",
    reply: "I run your pomodoro timers, remind you to hydrate, summarize your daily tasks, and talk through tough coding or creative problems with zero latency speech!",
    expression: 'curious' as RobotExpression,
    clipKey: 'workday',
  },
  {
    label: "Tell me a joke",
    prompt: "Tell me a joke or something fun!",
    reply: "Why was the robot never lonely? Because it was always programmed with great social algorithms! And did you know? My cute squircle head houses 100 expressive OLED micro-animations.",
    expression: 'happy' as RobotExpression,
    clipKey: 'joke',
  },
  {
    label: "Talk to Luffy",
    icon: 'anchor',
    prompt: "Luffy, what is your dream?",
    reply: "I'm Monkey D. Luffy! Kaizoku ou ni, ore wa naru! I'm gonna be King of the Pirates! Grab some meat and let's set sail on an adventure together!",
    expression: 'happy' as RobotExpression,
    clipKey: 'luffy',
    persona: 'luffy' as VoicePersona,
  },
  {
    label: "Privacy protection",
    prompt: "Is my microphone and voice data private?",
    reply: "100% private! My neural wake-word engine runs entirely on-device, and I have a physical hardware mic disconnect switch. Your thoughts stay between you and me.",
    expression: 'loving' as RobotExpression,
    clipKey: 'privacy',
  },
];

export type VoicePersona = 'chibi' | 'sweet' | 'luffy';

export const TalkSimulator: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'orox',
      text: "Beep-boop! Hello friend! I am ORoX. Tap any topic below or ask me anything — I can speak to you with my sweet, real-time cute robot voice!",
      expression: 'happy',
      clipKey: 'intro',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTalking, setIsTalking] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [voicePersona, setVoicePersona] = useState<VoicePersona>('chibi');
  const [currentExpression, setCurrentExpression] = useState<RobotExpression>('neutral');
  const chatScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages, isThinking, isTalking]);

  const getPersonaAcoustics = (persona: VoicePersona) => {
    switch (persona) {
      case 'chibi':
        return { pitch: 1.45, rate: 1.10 };
      case 'sweet':
        return { pitch: 1.35, rate: 1.05 };
      case 'luffy':
        return { pitch: 1.25, rate: 1.15 };
    }
  };

  const handleSpeakText = (
    text: string,
    expr: RobotExpression = 'talking',
    overridePersona?: VoicePersona,
    clipKey?: string
  ) => {
    if (isMuted) {
      setIsMuted(false);
      robotAudio.setMuted(false);
    }
    robotAudio.initContext();
    setIsTalking(true);
    setCurrentExpression(expr);
    const personaToUse = overridePersona || voicePersona;
    const acoustics = getPersonaAcoustics(personaToUse);
    robotAudio.speak(
      text,
      () => {
        setIsTalking(true);
      },
      () => {
        setIsTalking(false);
        setCurrentExpression('neutral');
      },
      acoustics,
      clipKey
    );
  };

  const handleSendPrompt = (
    userText: string,
    cannedReply?: string,
    cannedExpr: RobotExpression = 'happy',
    cannedClipKey?: string,
    cannedPersona?: VoicePersona
  ) => {
    if (!userText.trim()) return;

    robotAudio.playClick();
    const newMessages: Message[] = [...messages, { sender: 'user', text: userText }];
    setMessages(newMessages);
    setInput('');
    setIsThinking(true);
    setCurrentExpression('thinking');

    setTimeout(() => {
      setIsThinking(false);
      let replyText = cannedReply;
      let replyExpr = cannedExpr;
      let replyClipKey = cannedClipKey;

      if (!replyText) {
        const lower = userText.toLowerCase();
        if (lower.includes('price') || lower.includes('cost') || lower.includes('how much')) {
          replyText = "ORoX is launching at an exclusive early-bird price of $199 (retail $299). Grab your first personal AI robot now to lock in the special launch discount!";
          replyExpr = 'happy';
          replyClipKey = 'price';
        } else if (lower.includes('when') || lower.includes('release') || lower.includes('date') || lower.includes('shipping')) {
          replyText = "We are scheduled for initial shipment in Q4 2026! Be the first to grab your personal AI robot companion.";
          replyExpr = 'curious';
        } else if (lower.includes('color') || lower.includes('orange') || lower.includes('black')) {
          replyText = "I come in our signature Matte Graphite with Tangerine Audio Ears, plus upcoming Cyber Neon, Stealth Mono, and collectible Action Figure bodies!";
          replyExpr = 'loving';
          replyClipKey = 'colors';
        } else if (lower.includes('night') || lower.includes('sleep') || lower.includes('bed')) {
          replyText = "Goodnight! I'll dim my OLED display to 5% amber and guard your desk while you sleep. Sweet dreams!";
          replyExpr = 'loving';
          replyClipKey = 'night';
        } else if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
          replyText = "Hey friend! So great to meet you. I'm ready to hang out on your desk and chat whenever you need a spark of inspiration!";
          replyExpr = 'happy';
          replyClipKey = 'intro';
        } else {
          replyText = `That's a great question! As your personal AI robot companion, I process natural voice conversations with zero latency. Once we launch, I'll be able to learn your daily workflow and converse about anything!`;
          replyExpr = 'curious';
        }
      }

      setMessages((prev) => [
        ...prev,
        { sender: 'orox', text: replyText!, expression: replyExpr, clipKey: replyClipKey }
      ]);
      handleSpeakText(replyText!, replyExpr, cannedPersona, replyClipKey);
    }, 450);
  };

  const toggleSound = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    robotAudio.setMuted(nextMuted);
    if (nextMuted) {
      robotAudio.stopSpeaking();
      setIsTalking(false);
      setCurrentExpression('neutral');
    } else {
      robotAudio.playGreeting();
    }
  };

  return (
    <section id="simulator" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orox-orange/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 relative z-10">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-orox-card border border-orox-orange/40 text-orox-amber text-xs font-mono uppercase tracking-widest mb-6 shadow-glow-orange">
          <Sparkles className="w-3.5 h-3.5 text-orox-orange animate-spin" style={{ animationDuration: '6s' }} />
          <span>[ NEURAL SPEECH STREAMING SIMULATOR ]</span>
        </div>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6 font-display">
          Talk to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orox-orange via-amber-400 to-yellow-300">ORoX</span> <br className="hidden sm:inline" />
          Right Now In Browser.
        </h2>
        <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
          Experience our conversational neural engine with a cute robot voice. Turn on your audio to hear ORoX speak back to you!
        </p>
      </div>

      {/* Main Simulator Card */}
      <div className="relative z-10 bg-glass-card rounded-3xl border border-white/10 shadow-glass overflow-hidden max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Left Column: Visual Robot Station */}
        <div className="lg:col-span-5 p-8 flex flex-col items-center justify-between border-b lg:border-b-0 lg:border-r border-white/10 bg-[#0E1015]/60 relative">
          
          {/* Audio & Status Top Bar */}
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-slate-300">Cute Robot Voice Online</span>
            </div>

            <button
              onClick={toggleSound}
              className={`p-2 rounded-xl border transition-all duration-200 flex items-center gap-1.5 text-xs font-mono cursor-pointer ${
                isMuted
                  ? 'bg-rose-500/10 border-rose-500/30 text-rose-400'
                  : 'bg-orox-orange/10 border-orox-orange/40 text-orox-amber hover:bg-orox-orange/20'
              }`}
              title={isMuted ? "Unmute voice output" : "Mute voice output"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 animate-bounce" />}
              <span>{isMuted ? 'Muted' : 'Audio Active'}</span>
            </button>
          </div>

          {/* Centerpiece: Interactive Robot Screen */}
          <div className="my-8 flex flex-col items-center">
            <div className="relative">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-4 bg-orox-orange/20 rounded-[3rem] blur-xl opacity-70 animate-pulse-slow" />
              
              <RobotFace
                size="lg"
                expression={currentExpression}
                isTalking={isTalking}
                onClick={() => {
                  robotAudio.playChirp();
                  handleSpeakText("Bloop-bloop! You touched my screen! I love cute chats and hanging out on your desk.", 'loving', undefined, 'giggle');
                }}
              />
            </div>

            {/* Emotive Status Readout */}
            <div className="mt-6 flex items-center gap-3">
              <span className="text-xs font-mono text-slate-400">Current Emotion:</span>
              <span className="text-xs font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-md bg-orox-orange/15 border border-orox-orange/30 text-orox-amber font-semibold">
                {isThinking ? 'THINKING...' : isTalking ? 'VOCALIZING...' : currentExpression}
              </span>
            </div>

            {/* Audio Wave Visualizer */}
            <div className="mt-4 flex items-center justify-center gap-1.5 h-8">
              <span className={`w-1 bg-orox-orange rounded-full transition-all duration-150 ${isTalking ? 'animate-audio-bar-1' : 'h-1.5 opacity-40'}`} />
              <span className={`w-1 bg-orox-amber rounded-full transition-all duration-150 ${isTalking ? 'animate-audio-bar-2' : 'h-2 opacity-40'}`} />
              <span className={`w-1.5 bg-orox-orange rounded-full transition-all duration-150 ${isTalking ? 'animate-audio-bar-3' : 'h-3 opacity-40'}`} />
              <span className={`w-1 bg-orox-amber rounded-full transition-all duration-150 ${isTalking ? 'animate-audio-bar-4' : 'h-2 opacity-40'}`} />
              <span className={`w-1 bg-orox-orange rounded-full transition-all duration-150 ${isTalking ? 'animate-audio-bar-5' : 'h-1.5 opacity-40'}`} />
            </div>
          </div>

          {/* Cute Voice Persona Selector */}
          <div className="w-full mt-3 p-3 rounded-2xl bg-[#13161F] border border-white/10">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
              Cute Voice Persona:
            </span>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { id: 'chibi' as VoicePersona, label: 'Chibi' },
                { id: 'sweet' as VoicePersona, label: 'Sweet' },
                { id: 'luffy' as VoicePersona, label: 'Luffy', icon: 'anchor' },
              ].map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => {
                    setVoicePersona(p.id);
                    robotAudio.playChirp();
                  }}
                  className={`py-1.5 px-2 rounded-xl text-[11px] font-mono font-medium transition-all cursor-pointer text-center flex items-center justify-center gap-1 ${
                    voicePersona === p.id
                      ? 'bg-orox-orange text-black font-extrabold shadow-sm'
                      : 'bg-white/5 hover:bg-white/10 text-slate-300'
                  }`}
                >
                  <span>{p.label}</span>
                  {p.icon === 'anchor' && <Anchor className="w-3 h-3 text-amber-400 shrink-0" />}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Vocal Test Buttons */}
          <div className="w-full mt-3 space-y-2">
            <button
              type="button"
              onClick={() => {
                if (voicePersona === 'luffy') {
                  handleSpeakText(
                    "Ore wa Monkey D. Luffy! Kaizoku ou ni, ore wa naru! Grab some meat and let's set sail on an adventure together!",
                    'happy',
                    'luffy',
                    'luffy'
                  );
                } else {
                  handleSpeakText(
                    "Beep-boop! Hello friend! I am ORoX, your first personal AI robot companion with sweet acoustic neural speech!",
                    'happy',
                    voicePersona,
                    'intro'
                  );
                }
              }}
              className="w-full py-2.5 px-3.5 rounded-xl bg-orox-card hover:bg-[#20232C] border border-white/10 hover:border-orox-orange/50 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-md hover:scale-[1.01]"
            >
              <Play className="w-3.5 h-3.5 text-orox-orange fill-orox-orange" />
              <span>Test Cute Voice Synthesis</span>
            </button>

            <div className="grid grid-cols-2 gap-1.5">
              <button
                type="button"
                onClick={() =>
                  handleSpeakText(
                    "Hehe! You're doing incredible today! Keep shining bright!",
                    'loving',
                    'sweet',
                    'cheer'
                  )
                }
                className="py-2 px-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-medium text-slate-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
                <span>Sweet Cheer</span>
              </button>

              <button
                type="button"
                onClick={() =>
                  handleSpeakText(
                    "Ore wa Monkey D. Luffy! I'm gonna be King of the Pirates! Gomu Gomu no... Rocket!",
                    'happy',
                    'luffy',
                    'luffy'
                  )
                }
                className="py-2 px-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-medium text-slate-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Anchor className="w-3 h-3 text-amber-400" />
                <span>Luffy Shout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Chat Stream */}
        <div className="lg:col-span-7 flex flex-col h-[480px] sm:h-[520px] bg-[#12141A]/90 p-4 sm:p-6">
          
          {/* Chat Messages Log */}
          <div ref={chatScrollRef} className="flex-1 overflow-y-auto space-y-4 pr-1 sm:pr-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start gap-2.5 sm:gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'orox' && (
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-orox-orange/20 border border-orox-orange/50 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orox-orange" />
                  </div>
                )}
                
                <div
                  className={`max-w-[85%] sm:max-w-[82%] px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-orox-orange text-black font-semibold rounded-br-none shadow-md'
                      : 'bg-[#1C1F28] text-slate-200 border border-white/10 rounded-bl-none shadow-sm'
                  }`}
                >
                  <p>{msg.text}</p>
                  {msg.sender === 'orox' && !isMuted && (
                    <button
                      type="button"
                      onClick={() => handleSpeakText(msg.text, msg.expression || 'happy', undefined, msg.clipKey)}
                      className="mt-2 inline-flex items-center gap-1 text-[11px] font-mono text-orox-amber/80 hover:text-orox-amber transition-colors cursor-pointer"
                    >
                      <Volume2 className="w-3 h-3" />
                      <span>Replay cute speech</span>
                    </button>
                  )}
                </div>
              </div>
            ))}

            {isThinking && (
              <div className="flex items-start gap-2.5 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-orox-orange/20 border border-orox-orange/50 flex items-center justify-center shrink-0">
                  <RefreshCw className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orox-orange animate-spin" />
                </div>
                <div className="bg-[#1C1F28] px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-2xl rounded-bl-none border border-white/10 flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-mono">ORoX is processing voice tokens...</span>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-orox-orange animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-orox-amber animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-orox-orange animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Prompts Chips */}
          <div className="pt-3 pb-2 border-t border-white/5">
            <span className="text-[10px] sm:text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">Tap a sample topic:</span>
            <div className="flex flex-wrap gap-2 py-0.5">
              {PRESET_PROMPTS.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSendPrompt(item.prompt, item.reply, item.expression, item.clipKey, item.persona)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#181A22] hover:bg-orox-orange/15 border border-white/5 hover:border-orox-orange/40 text-[11px] sm:text-xs text-slate-300 hover:text-orox-amber transition-all duration-150 cursor-pointer"
                >
                  {item.icon === 'anchor' && <Anchor className="w-3 h-3 text-amber-400 shrink-0" />}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Input Field */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendPrompt(input);
            }}
            className="mt-2.5 sm:mt-3 flex items-center gap-2"
          >
            <div className="relative flex-1">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type anything to ask ORoX..."
                className="w-full bg-[#1A1D26] border border-white/10 focus:border-orox-orange focus:ring-1 focus:ring-orox-orange/50 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-all duration-200 min-h-[44px]"
              />
            </div>
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-3 sm:p-3.5 rounded-xl btn-attractive-primary text-black font-extrabold disabled:opacity-40 transition-all duration-150 flex items-center justify-center shrink-0 cursor-pointer min-h-[44px] min-w-[44px]"
              title="Send to ORoX"
            >
              <Send className="w-4 h-4 text-black" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};

export default TalkSimulator;
