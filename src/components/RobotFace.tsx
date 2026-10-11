import React, { useState, useEffect } from 'react';
import { MochiFaceConfig, getMochiFace } from '../types/mochiFaces';

export type LegacyRobotExpression = 'neutral' | 'happy' | 'curious' | 'talking' | 'thinking' | 'loving' | 'sleepy' | 'surprised';
export type RobotExpression = LegacyRobotExpression;

interface RobotFaceProps {
  expression?: LegacyRobotExpression;
  mochiFace?: MochiFaceConfig;
  mochiIndex?: number;
  customEye?: number;    // 0..14
  customMouth?: number;  // 0..9
  customExtra?: number;  // 0..7
  accentHex?: string;
  isTalking?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  onClick?: () => void;
}

export const RobotFace: React.FC<RobotFaceProps> = ({
  expression,
  mochiFace,
  mochiIndex,
  customEye,
  customMouth,
  customExtra,
  accentHex = '#FFA033',
  isTalking = false,
  size = 'md',
  className = '',
  onClick,
}) => {
  // Cursor gaze tracking offsets (Spring physics simulation)
  const [gaze, setGaze] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    // Natural blink cycle
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 140);
    }, 3800 + Math.random() * 2000);

    return () => clearInterval(blinkInterval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = Math.max(-1, Math.min(1, (e.clientX - cx) / (rect.width / 2)));
    const dy = Math.max(-1, Math.min(1, (e.clientY - cy) / (rect.height / 2)));
    setGaze({ x: dx * 6, y: dy * 4 });
  };

  const handleMouseLeave = () => {
    setGaze({ x: 0, y: 0 });
  };

  // Determine active Eye, Mouth, and Extra settings
  let eyeType = 0;
  let mouthType = 0;
  let extraType = 0;

  if (customEye !== undefined) {
    eyeType = customEye;
    mouthType = customMouth !== undefined ? customMouth : 0;
    extraType = customExtra !== undefined ? customExtra : 0;
  } else if (mochiFace) {
    eyeType = mochiFace.eyeType;
    mouthType = mochiFace.mouthType;
    extraType = mochiFace.extraType;
  } else if (mochiIndex !== undefined) {
    const computed = getMochiFace(mochiIndex);
    eyeType = computed.eyeType;
    mouthType = computed.mouthType;
    extraType = computed.extraType;
  } else if (expression) {
    // Map legacy expression to Mochi values
    switch (expression) {
      case 'happy':
        eyeType = 2; // Joy ^
        mouthType = 0; // Smile
        extraType = 1; // Blush
        break;
      case 'curious':
        eyeType = 6; // Pupil tracking
        mouthType = 1; // Oh
        extraType = 5; // Brows
        break;
      case 'talking':
        eyeType = 0; // Round
        mouthType = 1; // Oh pulsing
        extraType = 0;
        break;
      case 'thinking':
        eyeType = 9; // Pixel
        mouthType = 3; // Flat
        extraType = 4; // Sweat
        break;
      case 'loving':
        eyeType = 4; // Heart
        mouthType = 4; // Grin
        extraType = 6; // Floating hearts
        break;
      case 'sleepy':
        eyeType = 3; // Sleepy
        mouthType = 3; // Flat
        extraType = 7; // Zzz
        break;
      case 'surprised':
        eyeType = 11; // Sparkle / Wide
        mouthType = 1; // Oh
        extraType = 3; // Sparkles
        break;
      default:
        eyeType = 0; // Round
        mouthType = 0; // Smile
        extraType = 0;
    }
  }

  // Override mouth if robot is actively speaking
  if (isTalking) {
    mouthType = 1; // Oh pulsing
  }

  // Container dimensions
  const containerClasses = {
    sm: 'w-28 h-18 rounded-2xl p-2',
    md: 'w-48 h-32 rounded-3xl p-3',
    lg: 'w-72 h-44 rounded-[2rem] p-4',
    hero: 'w-full max-w-[340px] sm:max-w-[420px] h-48 sm:h-60 rounded-[2.5rem] p-4 sm:p-5',
  }[size];

  // SVG coordinate scales
  const glowFilterId = `glow-${eyeType}-${mouthType}`;

  return (
    <div
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-flex items-center justify-center bg-[#15161A] border-[3px] border-orox-orange shadow-glow-orange cursor-pointer transition-all duration-300 hover:scale-[1.02] select-none ${containerClasses} ${className}`}
      title="Interactive OLED Display • Move cursor to guide eyes!"
    >
      {/* Gloss screen specular highlight & scanline filter */}
      <div className="absolute inset-0 rounded-[inherit] overflow-hidden pointer-events-none z-10">
        <div className="absolute -top-16 -left-16 w-52 h-52 bg-gradient-to-br from-white/15 to-transparent rounded-full blur-xl transform rotate-12" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.35)_50%)] bg-[length:100%_4px] opacity-40" />
      </div>

      {/* Screen Inner Face (Deep OLED Pitch Black) */}
      <div className="relative w-full h-full bg-[#08090C] rounded-[inherit] flex items-center justify-center overflow-hidden">
        
        <svg
          viewBox="0 0 200 120"
          className="w-full h-full"
          style={{ filter: `drop-shadow(0 0 10px ${accentHex}99)` }}
        >
          <defs>
            <filter id={glowFilterId} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Group responding to gaze tracking */}
          <g
            style={{
              transform: `translate(${gaze.x}px, ${gaze.y}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            {/* 1. EXTRAS / PARTICLES (Rendered behind or around face) */}
            {extraType === 1 && (
              /* Dithered Anime Cheek Blush */
              <g fill="#FF4D6D" opacity="0.85">
                {/* Left Cheek */}
                <circle cx="38" cy="72" r="2.5" />
                <circle cx="44" cy="74" r="2.5" />
                <circle cx="41" cy="78" r="2.5" />
                {/* Right Cheek */}
                <circle cx="162" cy="72" r="2.5" />
                <circle cx="156" cy="74" r="2.5" />
                <circle cx="159" cy="78" r="2.5" />
              </g>
            )}

            {extraType === 2 && (
              /* Falling Anime Tear */
              <path
                d="M 148 70 C 148 65, 155 58, 155 58 C 155 58, 162 65, 162 70 C 162 74, 159 78, 155 78 C 151 78, 148 74, 148 70 Z"
                fill="#00D2FF"
                className="animate-bounce"
                opacity="0.9"
              />
            )}

            {extraType === 3 && (
              /* Twinkling Star Sparkles */
              <g fill="#FFD166" className="animate-pulse">
                <path d="M 26 24 L 28 30 L 34 32 L 28 34 L 26 40 L 24 34 L 18 32 L 24 30 Z" />
                <path d="M 174 20 L 176 25 L 181 27 L 176 29 L 174 34 L 172 29 L 167 27 L 172 25 Z" />
                <path d="M 170 88 L 172 92 L 176 94 L 172 96 L 170 100 L 168 96 L 164 94 L 168 92 Z" />
              </g>
            )}

            {extraType === 4 && (
              /* Nervous Sweat Drop */
              <path
                d="M 166 22 C 166 18, 172 12, 172 12 C 172 12, 178 18, 178 22 C 178 26, 175 28, 172 28 C 169 28, 166 26, 166 22 Z"
                fill="#48CAE4"
                opacity="0.95"
              />
            )}

            {extraType === 5 && (
              /* Emotive Eyebrows */
              <g stroke={accentHex} strokeWidth="3" strokeLinecap="round">
                <line x1="50" y1="26" x2="82" y2="22" />
                <line x1="118" y1="22" x2="150" y2="26" />
              </g>
            )}

            {extraType === 6 && (
              /* Floating Hearts */
              <g fill="#FF4D6D" className="animate-pulse">
                <path d="M 28 26 A 4 4 0 0 0 22 30 A 4 4 0 0 0 28 36 L 28 36 L 34 30 A 4 4 0 0 0 28 26 Z" transform="scale(1.2)" />
                <path d="M 150 18 A 4 4 0 0 0 144 22 A 4 4 0 0 0 150 28 L 150 28 L 156 22 A 4 4 0 0 0 150 18 Z" transform="scale(1.1)" />
              </g>
            )}

            {extraType === 7 && (
              /* Drifting Zzz */
              <g fill="#90E0EF" fontFamily="monospace" fontWeight="bold" className="animate-pulse">
                <text x="148" y="32" fontSize="12">z</text>
                <text x="160" y="24" fontSize="16">Z</text>
                <text x="176" y="16" fontSize="20">Z</text>
              </g>
            )}


            {/* 2. EYES RENDERING (15 Types from mochi_100_faces.ino) */}
            <g
              style={{
                transform: isBlinking ? 'scaleY(0.1)' : 'scaleY(1)',
                transformOrigin: '100px 52px',
                transition: 'transform 0.08s ease',
              }}
            >
              {/* EYE TYPE 0: Round with specular highlight */}
              {eyeType === 0 && (
                <g fill={accentHex}>
                  <rect x="52" y="32" width="28" height="38" rx="14" />
                  <rect x="120" y="32" width="28" height="38" rx="14" />
                  {/* Glare cutout */}
                  <rect x="56" y="36" width="6" height="6" rx="2" fill="#08090C" />
                  <rect x="124" y="36" width="6" height="6" rx="2" fill="#08090C" />
                </g>
              )}

              {/* EYE TYPE 1: Tall vertical pill */}
              {eyeType === 1 && (
                <g fill={accentHex}>
                  <rect x="54" y="26" width="24" height="46" rx="12" />
                  <rect x="122" y="26" width="24" height="46" rx="12" />
                  <rect x="58" y="30" width="6" height="7" rx="2" fill="#08090C" />
                  <rect x="126" y="30" width="6" height="7" rx="2" fill="#08090C" />
                </g>
              )}

              {/* EYE TYPE 2: Joy upward smile arc ^ */}
              {eyeType === 2 && (
                <g stroke={accentHex} strokeWidth="5.5" strokeLinecap="round" fill="none">
                  <path d="M 52 58 Q 66 32 80 58" />
                  <path d="M 120 58 Q 134 32 148 58" />
                </g>
              )}

              {/* EYE TYPE 3: Sleepy half-flat lid */}
              {eyeType === 3 && (
                <g fill={accentHex}>
                  <path d="M 52 48 Q 66 70 80 48 Z" />
                  <path d="M 120 48 Q 134 70 148 48 Z" />
                  <line x1="50" y1="46" x2="82" y2="46" stroke={accentHex} strokeWidth="3" strokeLinecap="round" />
                  <line x1="118" y1="46" x2="150" y2="46" stroke={accentHex} strokeWidth="3" strokeLinecap="round" />
                </g>
              )}

              {/* EYE TYPE 4: Glowing Heart Eyes */}
              {eyeType === 4 && (
                <g fill="#FF3366" className="animate-pulse">
                  <path d="M 66 65 C 66 65, 50 50, 50 40 A 10 10 0 0 1 66 32 A 10 10 0 0 1 82 40 C 82 50, 66 65, 66 65 Z" />
                  <path d="M 134 65 C 134 65, 118 50, 118 40 A 10 10 0 0 1 134 32 A 10 10 0 0 1 150 40 C 150 50, 134 65, 134 65 Z" />
                </g>
              )}

              {/* EYE TYPE 5: 10-Point Star Anime Eyes */}
              {eyeType === 5 && (
                <g fill="#FFD166">
                  <polygon points="66,28 70,42 84,42 73,50 77,64 66,56 55,64 59,50 48,42 62,42" />
                  <polygon points="134,28 138,42 152,42 141,50 145,64 134,56 123,64 127,50 116,42 130,42" />
                </g>
              )}

              {/* EYE TYPE 6: Tracking Gaze Pupil */}
              {eyeType === 6 && (
                <g>
                  {/* Outer White/Amber Sclera */}
                  <rect x="50" y="32" width="32" height="38" rx="16" fill={accentHex} />
                  <rect x="118" y="32" width="32" height="38" rx="16" fill={accentHex} />
                  {/* Dynamic Moving Inner Pupil */}
                  <circle cx={66 + gaze.x * 0.8} cy={51 + gaze.y * 0.8} r="8" fill="#08090C" />
                  <circle cx={134 + gaze.x * 0.8} cy={51 + gaze.y * 0.8} r="8" fill="#08090C" />
                  {/* Catchlight */}
                  <circle cx={68 + gaze.x * 0.8} cy={48 + gaze.y * 0.8} r="2.5" fill="#FFFFFF" />
                  <circle cx={136 + gaze.x * 0.8} cy={48 + gaze.y * 0.8} r="2.5" fill="#FFFFFF" />
                </g>
              )}

              {/* EYE TYPE 7: Cat vertical slit */}
              {eyeType === 7 && (
                <g fill={accentHex}>
                  <rect x="52" y="32" width="28" height="38" rx="14" />
                  <rect x="120" y="32" width="28" height="38" rx="14" />
                  {/* Vertical Slit */}
                  <rect x="64" y="34" width="4" height="34" rx="2" fill="#08090C" />
                  <rect x="132" y="34" width="4" height="34" rx="2" fill="#08090C" />
                </g>
              )}

              {/* EYE TYPE 8: Dizzy X Cross */}
              {eyeType === 8 && (
                <g stroke={accentHex} strokeWidth="5.5" strokeLinecap="round">
                  <line x1="52" y1="36" x2="80" y2="64" />
                  <line x1="80" y1="36" x2="52" y2="64" />
                  <line x1="120" y1="36" x2="148" y2="64" />
                  <line x1="148" y1="36" x2="120" y2="64" />
                </g>
              )}

              {/* EYE TYPE 9: Pixel Dot-Matrix / Squircle Block */}
              {eyeType === 9 && (
                <g fill={accentHex}>
                  <rect x="52" y="34" width="28" height="32" rx="4" />
                  <rect x="120" y="34" width="28" height="32" rx="4" />
                  {/* Pixel notch */}
                  <rect x="58" y="40" width="5" height="5" fill="#08090C" />
                  <rect x="126" y="40" width="5" height="5" fill="#08090C" />
                </g>
              )}

              {/* EYE TYPE 10: Grumpy fierce outer-high slant */}
              {eyeType === 10 && (
                <g fill={accentHex}>
                  <path d="M 50 34 L 82 46 L 82 66 L 50 56 Z" />
                  <path d="M 150 34 L 118 46 L 118 66 L 150 56 Z" />
                  <rect x="60" y="44" width="6" height="6" fill="#08090C" />
                  <rect x="128" y="44" width="6" height="6" fill="#08090C" />
                </g>
              )}

              {/* EYE TYPE 11: 4-Point Sparkle Diamond */}
              {eyeType === 11 && (
                <g fill={accentHex}>
                  <path d="M 66 26 Q 66 50 82 50 Q 66 50 66 74 Q 66 50 50 50 Q 66 50 66 26 Z" />
                  <path d="M 134 26 Q 134 50 150 50 Q 134 50 134 74 Q 134 50 118 50 Q 134 50 134 26 Z" />
                </g>
              )}

              {/* EYE TYPE 12: Droopy sad/pensive inner-high slant */}
              {eyeType === 12 && (
                <g fill={accentHex}>
                  <path d="M 50 50 L 82 36 L 82 58 L 50 68 Z" />
                  <path d="M 150 50 L 118 36 L 118 58 L 150 68 Z" />
                  <rect x="64" y="44" width="6" height="6" fill="#08090C" />
                  <rect x="124" y="44" width="6" height="6" fill="#08090C" />
                </g>
              )}

              {/* EYE TYPE 13: Wink (Left Joy ^, Right Round) */}
              {eyeType === 13 && (
                <g>
                  {/* Left Eye Joy ^ */}
                  <path d="M 52 56 Q 66 32 80 56" stroke={accentHex} strokeWidth="5.5" strokeLinecap="round" fill="none" />
                  {/* Right Eye Round */}
                  <rect x="120" y="32" width="28" height="38" rx="14" fill={accentHex} />
                  <rect x="124" y="36" width="6" height="6" rx="2" fill="#08090C" />
                </g>
              )}

              {/* EYE TYPE 14: Crescent Moon u */}
              {eyeType === 14 && (
                <g stroke={accentHex} strokeWidth="5.5" strokeLinecap="round" fill="none">
                  <path d="M 52 42 Q 66 66 80 42" />
                  <path d="M 120 42 Q 134 66 148 42" />
                </g>
              )}
            </g>


            {/* 3. MOUTH RENDERING (10 Types from mochi_100_faces.ino) */}
            <g>
              {/* MOUTH 0: Smooth Smile Arc */}
              {mouthType === 0 && (
                <path
                  d="M 88 82 Q 100 94 112 82"
                  stroke={accentHex}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                />
              )}

              {/* MOUTH 1: Speaking / Oh pulsing ellipse */}
              {mouthType === 1 && (
                <ellipse
                  cx="100"
                  cy="86"
                  rx="7"
                  ry={isTalking ? '11' : '8'}
                  fill={accentHex}
                  className={isTalking ? 'animate-pulse' : ''}
                />
              )}

              {/* MOUTH 2: Cat :3 double arc */}
              {mouthType === 2 && (
                <path
                  d="M 86 84 Q 93 92 100 86 Q 107 92 114 84"
                  stroke={accentHex}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                />
              )}

              {/* MOUTH 3: Flat deadpan bar */}
              {mouthType === 3 && (
                <line
                  x1="88"
                  y1="86"
                  x2="112"
                  y2="86"
                  stroke={accentHex}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              )}

              {/* MOUTH 4: Wide happy open grin */}
              {mouthType === 4 && (
                <g>
                  <path
                    d="M 84 82 Q 100 82 116 82 Q 100 102 84 82 Z"
                    fill={accentHex}
                  />
                  {/* Tongue inside grin */}
                  <path
                    d="M 94 92 Q 100 98 106 92 Z"
                    fill="#FF3366"
                  />
                </g>
              )}

              {/* MOUTH 5: Asymmetric cheeky smirk */}
              {mouthType === 5 && (
                <path
                  d="M 88 88 Q 102 92 114 80"
                  stroke={accentHex}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                />
              )}

              {/* MOUTH 6: Wavy nervous wave */}
              {mouthType === 6 && (
                <path
                  d="M 86 86 Q 92 80 98 86 Q 104 92 114 86"
                  stroke={accentHex}
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              )}

              {/* MOUTH 7: Playful tongue blep */}
              {mouthType === 7 && (
                <g>
                  <path
                    d="M 86 82 Q 100 92 114 82"
                    stroke={accentHex}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <rect x="96" y="85" width="8" height="9" rx="4" fill="#FF4D6D" />
                  <line x1="100" y1="87" x2="100" y2="92" stroke="#800020" strokeWidth="1" />
                </g>
              )}

              {/* MOUTH 8: Cute tiny pixel dot */}
              {mouthType === 8 && (
                <circle cx="100" cy="85" r="3" fill={accentHex} />
              )}

              {/* MOUTH 9: Frown pouting inverted arc */}
              {mouthType === 9 && (
                <path
                  d="M 88 90 Q 100 78 112 90"
                  stroke={accentHex}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                />
              )}
            </g>
          </g>
        </svg>

      </div>
    </div>
  );
};

export default RobotFace;
