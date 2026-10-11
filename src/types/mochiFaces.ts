// Mochi 100 Expressions Engine
// Derived from /home/safin313/Documents/ORoX /mochi_100_faces/mochi_100_faces.ino

export const EYE_NAMES = [
  "Round",    // 0
  "Tall",     // 1
  "Joy",      // 2: ^
  "Sleepy",   // 3: flat top lid
  "Heart",    // 4: glowing hearts
  "Star",     // 5: anime 10-point stars
  "Pupil",    // 6: gaze tracking pupil
  "Cat",      // 7: feline vertical slit
  "Dizzy",    // 8: X X
  "Pixel",    // 9: squircle dot-matrix block
  "Grumpy",   // 10: angled outer-high
  "Sparkle",  // 11: 4-point diamond star
  "Droopy",   // 12: inner-high sad/pensive
  "Wink",     // 13: one Joy ^ + one Round
  "Moon",     // 14: crescent moon u
] as const;

export const MOUTH_NAMES = [
  "Smile",    // 0: smooth arc
  "Oh",       // 1: small circle/ellipse
  "Cat",      // 2: :3 cat mouth
  "Flat",     // 3: straight horizontal line
  "Grin",     // 4: wide happy open grin
  "Smirk",    // 5: asymmetric cheek smirk
  "Wavy",     // 6: wobbly sine wave
  "Tongue",   // 7: playful tongue blep
  "Dot",      // 8: cute tiny pixel dot
  "Frown",    // 9: inverted curved arc
] as const;

export const EXTRA_NAMES = [
  "None",     // 0
  "Blush",    // 1: dithered cheek blush dots
  "Tear",     // 2: anime falling tear
  "Sparkles", // 3: twinkle star sparkles
  "Sweat",    // 4: nervous sweat droplet
  "Brows",    // 5: tilted emotive eyebrows
  "Hearts",   // 6: floating hearts
  "Zzz",      // 7: drifting sleep letters
] as const;

export const ADJECTIVES = [
  "Sweet",
  "Cosmic",
  "Fluffy",
  "Sneaky",
  "Dreamy",
  "Zesty",
  "Cheeky",
  "Silky",
  "Turbo",
  "Lunar",
] as const;

export const NOUNS = [
  "Mochi",
  "Bean",
  "Pixel",
  "Boba",
  "Comet",
  "Pudding",
  "Ninja",
  "Jelly",
  "Neon",
  "Cloud",
] as const;

export type EyeIndex = number; // 0..14
export type MouthIndex = number; // 0..9
export type ExtraIndex = number; // 0..7

export interface MochiFaceConfig {
  index: number; // 0..99 (displayed as 1..100)
  id: string;
  name: string;
  adjective: string;
  noun: string;
  eyeType: number;
  mouthType: number;
  extraType: number;
  eyeName: string;
  mouthName: string;
  extraName: string;
  gap: number; // 22..30
  eyeSize: number; // 9..14
  category: 'joy' | 'kawaii' | 'cyber' | 'chill' | 'expressive';
  description: string;
  tags: string[];
}

// Procedural expression generator replicating mochi_100_faces.ino:
// setExpression(int i):
//   cur.e   = i % 15;
//   cur.m   = (i * 7 + k) % 10;
//   cur.x   = (i * 3 + (i / 10)) % 8;
//   cur.gap = 22 + (i * 13 % 9);
//   cur.s   = 9 + (i * 7 % 6);
export function getMochiFace(index: number): MochiFaceConfig {
  const i = ((index % 100) + 100) % 100;
  const k = Math.floor(i / 15);
  const eyeType = i % 15;
  const mouthType = (i * 7 + k) % 10;
  const extraType = (i * 3 + Math.floor(i / 10)) % 8;
  const gap = 22 + ((i * 13) % 9);
  const eyeSize = 9 + ((i * 7) % 6);

  const adj = ADJECTIVES[i % 10];
  const noun = NOUNS[Math.floor(i / 10)];
  const name = `${adj} ${noun}`;

  // Categorization based on features
  let category: MochiFaceConfig['category'] = 'expressive';
  if (eyeType === 4 || extraType === 1 || extraType === 6 || mouthType === 0 || mouthType === 4) {
    category = 'joy';
  } else if (eyeType === 2 || eyeType === 7 || eyeType === 13 || mouthType === 2 || mouthType === 7) {
    category = 'kawaii';
  } else if (eyeType === 8 || eyeType === 9 || eyeType === 10 || extraType === 4) {
    category = 'cyber';
  } else if (eyeType === 3 || eyeType === 14 || extraType === 7) {
    category = 'chill';
  }

  const eyeName = EYE_NAMES[eyeType];
  const mouthName = MOUTH_NAMES[mouthType];
  const extraName = EXTRA_NAMES[extraType];

  const description = `${eyeName} eyes with a ${mouthName.toLowerCase()} mouth${extraType > 0 ? ` and ${extraName.toLowerCase()} particle effects` : ''}.`;

  return {
    index: i,
    id: `face-${i + 1}`,
    name,
    adjective: adj,
    noun,
    eyeType,
    mouthType,
    extraType,
    eyeName,
    mouthName,
    extraName,
    gap,
    eyeSize,
    category,
    description,
    tags: [category, i < 12 ? 'iconic' : ''],
  };
}

// Pre-generate all 100 faces
export const ALL_100_MOCHI_FACES: MochiFaceConfig[] = Array.from({ length: 100 }, (_, idx) => getMochiFace(idx));

// Curated Top 12 iconic faces for quick showcase
export const CURATED_ICONIC_FACES: MochiFaceConfig[] = [
  getMochiFace(0),   // #1 Sweet Mochi (Round + Smile)
  getMochiFace(2),   // #3 Fluffy Pixel (Joy + Cat mouth)
  getMochiFace(4),   // #5 Dreamy Comet (Heart eyes + Grin)
  getMochiFace(7),   // #8 Silky Jelly (Cat eyes + Blep)
  getMochiFace(8),   // #9 Turbo Neon (Dizzy X + Smirk)
  getMochiFace(14),  // #15 Lunar Bean (Moon eyes + Zzz)
  getMochiFace(20),  // #21 Sweet Pixel (Sparkle + Tongue)
  getMochiFace(33),  // #34 Sneaky Boba (Wink + Cat :3)
  getMochiFace(44),  // #45 Dreamy Comet (Pupil + Blush)
  getMochiFace(66),  // #67 Cheeky Ninja (Star eyes + Smirk)
  getMochiFace(81),  // #82 Cosmic Neon (Grumpy + Sparkles)
  getMochiFace(99),  // #100 Lunar Cloud (Moon + Floating Hearts)
];

// Backwards-compatible aliases
export type MochiFaceSpec = MochiFaceConfig;
export const MOCHI_100_EXPRESSIONS: MochiFaceConfig[] = ALL_100_MOCHI_FACES;

