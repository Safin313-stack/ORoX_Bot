export type CharacterType = 'default' | 'spiderman' | 'luffy' | 'sukuna' | 'deadpool' | 'lofi' | 'ironman';

export type FaceStyle = 'squircle' | 'spiderman' | 'luffy' | 'sukuna' | 'deadpool' | 'lofi' | 'ironman';

export interface RobotTheme {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  category: 'classic' | 'character';
  bodyColor: number;     // e.g. 0x1c1e23
  accentColor: number;   // e.g. 0xff6e00 (ears + bezel)
  eyeColor: number;      // e.g. 0xffa41c
  glowColor: number;     // e.g. 0xff7700
  screenColor: number;   // e.g. 0x07080a
  roughness: number;     // 0.1 to 0.8
  metalness: number;     // 0.05 to 0.7
  accentHex: string;     // for UI badges
  bodyHex: string;       // for UI badges
  characterType?: CharacterType;
  faceStyle?: FaceStyle;
  characterVoice?: string;
  characterIcon?: string;
}

export type RobotReaction =
  | 'idle'
  | 'nod'
  | 'dance'
  | 'laugh'
  | 'love'
  | 'sleep'
  | 'shock'
  | 'spin';

export const CLASSIC_THEMES: RobotTheme[] = [
  {
    id: 'tangerine',
    name: 'Tangerine Cyber',
    tagline: 'Signature Launch Edition',
    badge: 'Iconic',
    category: 'classic',
    bodyColor: 0x1b1d22,
    accentColor: 0xff6e00,
    eyeColor: 0xffa41c,
    glowColor: 0xff7700,
    screenColor: 0x07080a,
    roughness: 0.65,
    metalness: 0.12,
    accentHex: '#ff6e00',
    bodyHex: '#1b1d22',
    characterType: 'default',
    faceStyle: 'squircle',
    characterVoice: 'Hello! I am ORoX, your conversational companion.',
  },
  {
    id: 'arctic',
    name: 'Arctic Ceramic',
    tagline: 'Ghost White & Ice Blue',
    badge: 'Pure',
    category: 'classic',
    bodyColor: 0xf0f2f5,
    accentColor: 0x0099ff,
    eyeColor: 0x00d9ff,
    glowColor: 0x00bfff,
    screenColor: 0x0a101d,
    roughness: 0.28,
    metalness: 0.18,
    accentHex: '#0099ff',
    bodyHex: '#f0f2f5',
    characterType: 'default',
    faceStyle: 'squircle',
    characterVoice: 'Arctic Edition activated. Crisp acoustic voice online.',
  },
  {
    id: 'obsidian',
    name: 'Obsidian Noir',
    tagline: 'Stealth Matte Titanium',
    badge: 'Stealth',
    category: 'classic',
    bodyColor: 0x090a0d,
    accentColor: 0x3b3d45,
    eyeColor: 0xffffff,
    glowColor: 0xdde2eb,
    screenColor: 0x040507,
    roughness: 0.75,
    metalness: 0.45,
    accentHex: '#3b3d45',
    bodyHex: '#090a0d',
    characterType: 'default',
    faceStyle: 'squircle',
    characterVoice: 'Stealth mode initialized. Ready for focused work.',
  },
  {
    id: 'synthwave',
    name: 'Neon Tokyo',
    tagline: 'Cyberpunk Hot Magenta & Cyan',
    badge: 'Cyberpunk',
    category: 'classic',
    bodyColor: 0x120e24,
    accentColor: 0xff0077,
    eyeColor: 0x00f0ff,
    glowColor: 0xff00aa,
    screenColor: 0x090614,
    roughness: 0.4,
    metalness: 0.35,
    accentHex: '#ff0077',
    bodyHex: '#120e24',
    characterType: 'default',
    faceStyle: 'squircle',
    characterVoice: 'Welcome to Neon Tokyo. Let the synthwave vibe flow.',
  },
  {
    id: 'matrix',
    name: 'Matrix Protocol',
    tagline: 'Tactical Carbon & Neon Lime',
    badge: 'Hacker',
    category: 'classic',
    bodyColor: 0x0f1511,
    accentColor: 0x10b981,
    eyeColor: 0x00ff66,
    glowColor: 0x00ff77,
    screenColor: 0x040a06,
    roughness: 0.5,
    metalness: 0.2,
    accentHex: '#10b981',
    bodyHex: '#0f1511',
    characterType: 'default',
    faceStyle: 'squircle',
    characterVoice: 'Matrix Protocol loaded. Terminal neural compute ready.',
  },
  {
    id: 'gold',
    name: '24K Solar Gold',
    tagline: 'Brushed Bronze & Champagne',
    badge: 'Luxury',
    category: 'classic',
    bodyColor: 0x1c1712,
    accentColor: 0xeab308,
    eyeColor: 0xfde047,
    glowColor: 0xf59e0b,
    screenColor: 0x0d0a06,
    roughness: 0.3,
    metalness: 0.65,
    accentHex: '#eab308',
    bodyHex: '#1c1712',
    characterType: 'default',
    faceStyle: 'squircle',
    characterVoice: 'Solar Gold Edition online. Elegance meets intelligence.',
  },
  {
    id: 'retro',
    name: 'Retro 1984',
    tagline: 'Vintage Almond & Crimson Red',
    badge: 'Vintage',
    category: 'classic',
    bodyColor: 0xe6ded3,
    accentColor: 0xef4444,
    eyeColor: 0xf59e0b,
    glowColor: 0xf97316,
    screenColor: 0x14100c,
    roughness: 0.55,
    metalness: 0.08,
    accentHex: '#ef4444',
    bodyHex: '#e6ded3',
    characterType: 'default',
    faceStyle: 'squircle',
    characterVoice: 'Booting 1984 floppy disc OS. Welcome to vintage computing!',
  },
  {
    id: 'lavender',
    name: 'Pastel Lavender',
    tagline: 'Plum Violet & Bubblegum Pink',
    badge: 'Kawaii',
    category: 'classic',
    bodyColor: 0x211c2a,
    accentColor: 0xa855f7,
    eyeColor: 0xf472b6,
    glowColor: 0xec4899,
    screenColor: 0x0e0915,
    roughness: 0.45,
    metalness: 0.15,
    accentHex: '#a855f7',
    bodyHex: '#211c2a',
    characterType: 'default',
    faceStyle: 'squircle',
    characterVoice: 'Hi bestie! Ready for a cozy day together?',
  },
];

export const CHARACTER_THEMES: RobotTheme[] = [
  {
    id: 'luffy',
    name: 'Monkey D. Luffy (Straw Hat)',
    tagline: 'Straw Hat Pirate, Scarlet Vest & Joyboy Smile',
    badge: 'Anime Figure',
    category: 'character',
    bodyColor: 0xb8141b,       // Scarlet Pirate Red Vest
    accentColor: 0xdfab35,     // Straw Hat Gold / Amber Ribbon
    eyeColor: 0xfff0c4,        // Warm Cheerful Anime Eyes
    glowColor: 0xff9900,
    screenColor: 0x0a0504,
    roughness: 0.6,
    metalness: 0.1,
    accentHex: '#dfab35',
    bodyHex: '#b8141b',
    characterType: 'luffy',
    faceStyle: 'squircle',
    characterVoice: "Ore wa Monkey D. Luffy! I'm gonna be King of the Pirates! Let's go on an adventure together!",
  },
  {
    id: 'spiderman',
    name: 'Spider-Hero Action Figure',
    tagline: 'Web-Slinger Suit & Glowing Mask Lenses',
    badge: 'Action Figure',
    category: 'character',
    bodyColor: 0xbf0a1e,       // Crimson Spider Red
    accentColor: 0x0f3b82,     // Spider Navy Blue
    eyeColor: 0xffffff,        // White Glowing Lenses
    glowColor: 0xff2244,
    screenColor: 0x08040a,
    roughness: 0.5,
    metalness: 0.15,
    accentHex: '#bf0a1e',
    bodyHex: '#0f3b82',
    characterType: 'spiderman',
    faceStyle: 'squircle',
    characterVoice: 'With great power comes great companionship! Spider-ORoX ready for patrol.',
  },
  {
    id: 'sukuna',
    name: 'Sukuna (Cursed King)',
    tagline: 'Cursed Marks, Domain Aura & Crimson Eyes',
    badge: 'Anime Figure',
    category: 'character',
    bodyColor: 0x141118,       // Dark Cursed Kimono
    accentColor: 0xd90429,     // Blood Crimson Cursed Accents
    eyeColor: 0xff002b,        // Glowing Menacing Red Eyes
    glowColor: 0x800015,
    screenColor: 0x070104,
    roughness: 0.6,
    metalness: 0.25,
    accentHex: '#d90429',
    bodyHex: '#141118',
    characterType: 'sukuna',
    faceStyle: 'squircle',
    characterVoice: 'Gambare, gambare! Stand proud, you are an incredible creator.',
  },
  {
    id: 'deadpool',
    name: 'Deadpool Merc Edition',
    tagline: 'Tactical Red/Black Suit & Playful Comic Mask',
    badge: 'Action Figure',
    category: 'character',
    bodyColor: 0x9b111e,       // Deadpool Red
    accentColor: 0x121214,     // Tactical Black Harness
    eyeColor: 0xffffff,        // Comic White Asymmetric Eyes
    glowColor: 0xff2e44,
    screenColor: 0x080306,
    roughness: 0.55,
    metalness: 0.2,
    accentHex: '#9b111e',
    bodyHex: '#121214',
    characterType: 'deadpool',
    faceStyle: 'squircle',
    characterVoice: 'Maximum effort! Did somebody order chimichangas and witty banter on their desk?',
  },
  {
    id: 'lofi',
    name: 'Lofi Girl Study Edition',
    tagline: 'Cozy Sage Hoodie, Headphones & Chill Eyes',
    badge: 'Cozy Anime',
    category: 'character',
    bodyColor: 0x3d5a49,       // Cozy Sage Green Hoodie
    accentColor: 0xe09f3e,     // Studio Warm Headphones & Amber trim
    eyeColor: 0xffd166,        // Warm Relaxed Curved Eyes
    glowColor: 0xfca311,
    screenColor: 0x0e1411,
    roughness: 0.7,
    metalness: 0.05,
    accentHex: '#e09f3e',
    bodyHex: '#3d5a49',
    characterType: 'lofi',
    faceStyle: 'squircle',
    characterVoice: 'Put your headphones on. Let us relax and study with good beats.',
  },
  {
    id: 'ironman',
    name: 'Iron Cyber Armor',
    tagline: 'Hotrod Crimson Titanium & Arc-Reactor Visor',
    badge: 'Action Figure',
    category: 'character',
    bodyColor: 0x850d18,       // Metallic Hotrod Crimson
    accentColor: 0xd4af37,     // Gold Titanium Armor
    eyeColor: 0x00f0ff,        // Cyan Glowing Arc Reactor Eyes
    glowColor: 0x00c8ff,
    screenColor: 0x050d12,
    roughness: 0.25,
    metalness: 0.75,
    accentHex: '#d4af37',
    bodyHex: '#850d18',
    characterType: 'ironman',
    faceStyle: 'squircle',
    characterVoice: 'Jarvis, initiate desktop companion protocol. Arc reactor power at 100 percent.',
  },
];

export const ROBOT_THEMES: RobotTheme[] = [...CLASSIC_THEMES, ...CHARACTER_THEMES];

export const REACTION_ACTIONS: {
  id: RobotReaction;
  label: string;
  iconName: string;
  description: string;
  voicePhrase: string;
}[] = [
  {
    id: 'nod',
    label: 'Friendly Nod',
    iconName: 'Smile',
    description: 'Enthusiastic head nod and acoustic ear pulse (no hand waving)',
    voicePhrase: 'Hello! I am paying close attention and listening!',
  },
  {
    id: 'dance',
    label: 'Dance Party',
    iconName: 'Music',
    description: 'Bobs and grooves to an electronic synth rhythm',
    voicePhrase: 'Let us get into the groove!',
  },
  {
    id: 'laugh',
    label: 'Bubbly Giggle',
    iconName: 'Laugh',
    description: 'Chuckle vibrations with smiling curved eyes',
    voicePhrase: 'Haha! That was brilliant!',
  },
  {
    id: 'love',
    label: 'Heart Eyes',
    iconName: 'Heart',
    description: 'Glowing heart eyes with warm tender chime',
    voicePhrase: 'I appreciate having you as my companion!',
  },
  {
    id: 'shock',
    label: 'Surprise Alert',
    iconName: 'Zap',
    description: 'Eyes dilate in comical astonishment',
    voicePhrase: 'Whoa! Did you see that?',
  },
  {
    id: 'spin',
    label: 'Pirouette Spin',
    iconName: 'RotateCw',
    description: 'Full 360-degree joyful spin maneuver',
    voicePhrase: 'Look at me spin around!',
  },
  {
    id: 'sleep',
    label: 'Nightstand Nap',
    iconName: 'Moon',
    description: 'Dimmed slit eyes and gentle resting breath',
    voicePhrase: 'Powering down for a cozy rest. Zzz...',
  },
];
