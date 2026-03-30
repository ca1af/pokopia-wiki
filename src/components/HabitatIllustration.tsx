'use client';

import { cn } from '@/lib/utils';

interface HabitatIllustrationProps {
  category: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const SIZE_MAP = {
  sm: 'w-32 h-[86px]',
  md: 'w-60 h-40',
  lg: 'w-80 h-[214px]',
};

/**
 * Maps Korean background types to internal category keys.
 */
function resolveCategory(category: string): string {
  const map: Record<string, string> = {
    '풀': 'grass',
    '물': 'water',
    '불': 'fire',
    '바위': 'rock',
    '고스트': 'ghost',
    '얼음': 'snow',
    '전기': 'electric',
    '페어리': 'flower',
    '노말': 'grass',
    '격투': 'rock',
    '비행': 'sky',
    '독': 'misc',
    '땅': 'sand',
    '에스퍼': 'dream',
    '벌레': 'grass',
    '드래곤': 'sky',
    '악': 'ghost',
    '강철': 'rock',
  };
  return map[category] || category;
}

function GrassIllustration() {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grass-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e0f7fa" />
          <stop offset="100%" stopColor="#c8e6c9" />
        </linearGradient>
        <linearGradient id="grass-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a5d6a7" />
          <stop offset="100%" stopColor="#81c784" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" rx="12" fill="url(#grass-sky)" />
      <ellipse cx="120" cy="160" rx="140" ry="50" fill="url(#grass-ground)" />
      {/* Grass blades */}
      <path d="M40 130 Q42 100 38 80 Q44 100 48 130" fill="#66bb6a" />
      <path d="M60 125 Q58 90 55 70 Q64 92 68 125" fill="#4caf50" />
      <path d="M80 128 Q84 95 78 72 Q88 96 90 128" fill="#66bb6a" />
      <path d="M160 130 Q158 98 162 78 Q155 98 152 130" fill="#4caf50" />
      <path d="M180 125 Q184 90 178 70 Q188 92 190 125" fill="#66bb6a" />
      <path d="M200 128 Q198 100 202 82 Q195 100 192 128" fill="#4caf50" />
      {/* Small flowers */}
      <circle cx="100" cy="120" r="5" fill="#f48fb1" />
      <circle cx="100" cy="120" r="2" fill="#fff59d" />
      <circle cx="140" cy="115" r="4" fill="#ce93d8" />
      <circle cx="140" cy="115" r="1.5" fill="#fff59d" />
      {/* Tiny ladybug */}
      <ellipse cx="120" cy="125" rx="4" ry="3" fill="#ef5350" />
      <circle cx="118" cy="125" r="1" fill="#212121" />
      <circle cx="122" cy="125" r="0.8" fill="#212121" />
      <line x1="120" y1="122" x2="120" y2="128" stroke="#212121" strokeWidth="0.5" />
    </svg>
  );
}

function FlowerIllustration() {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="flower-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fce4ec" />
          <stop offset="100%" stopColor="#f3e5f5" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" rx="12" fill="url(#flower-bg)" />
      <ellipse cx="120" cy="160" rx="140" ry="40" fill="#c8e6c9" />
      {/* Pink flower */}
      <circle cx="70" cy="95" r="8" fill="#f48fb1" />
      <circle cx="62" cy="95" r="6" fill="#f8bbd0" />
      <circle cx="78" cy="95" r="6" fill="#f8bbd0" />
      <circle cx="70" cy="87" r="6" fill="#f8bbd0" />
      <circle cx="70" cy="103" r="6" fill="#f8bbd0" />
      <circle cx="70" cy="95" r="3" fill="#fff59d" />
      <line x1="70" y1="103" x2="70" y2="135" stroke="#66bb6a" strokeWidth="2" />
      {/* Yellow flower */}
      <circle cx="130" cy="85" r="7" fill="#fff176" />
      <circle cx="123" cy="85" r="5" fill="#ffee58" />
      <circle cx="137" cy="85" r="5" fill="#ffee58" />
      <circle cx="130" cy="78" r="5" fill="#ffee58" />
      <circle cx="130" cy="92" r="5" fill="#ffee58" />
      <circle cx="130" cy="85" r="3" fill="#ffab40" />
      <line x1="130" y1="92" x2="130" y2="130" stroke="#66bb6a" strokeWidth="2" />
      {/* Purple flower */}
      <circle cx="180" cy="100" r="6" fill="#ce93d8" />
      <circle cx="174" cy="100" r="5" fill="#e1bee7" />
      <circle cx="186" cy="100" r="5" fill="#e1bee7" />
      <circle cx="180" cy="94" r="5" fill="#e1bee7" />
      <circle cx="180" cy="106" r="5" fill="#e1bee7" />
      <circle cx="180" cy="100" r="2.5" fill="#fff59d" />
      <line x1="180" y1="106" x2="180" y2="132" stroke="#66bb6a" strokeWidth="2" />
      {/* Butterfly */}
      <ellipse cx="108" cy="55" rx="8" ry="5" fill="#80cbc4" opacity="0.8" transform="rotate(-20 108 55)" />
      <ellipse cx="118" cy="55" rx="8" ry="5" fill="#80cbc4" opacity="0.8" transform="rotate(20 118 55)" />
      <line x1="113" y1="50" x2="113" y2="60" stroke="#4db6ac" strokeWidth="1" />
      {/* Floating petals */}
      <ellipse cx="40" cy="40" rx="4" ry="2" fill="#f8bbd0" opacity="0.6" transform="rotate(30 40 40)" />
      <ellipse cx="200" cy="30" rx="3" ry="1.5" fill="#e1bee7" opacity="0.5" transform="rotate(-20 200 30)" />
      <ellipse cx="160" cy="45" rx="3" ry="1.5" fill="#f8bbd0" opacity="0.4" transform="rotate(45 160 45)" />
    </svg>
  );
}

function WaterIllustration() {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="water-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e1f5fe" />
          <stop offset="100%" stopColor="#b3e5fc" />
        </linearGradient>
        <linearGradient id="water-pond" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4fc3f7" />
          <stop offset="100%" stopColor="#0288d1" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" rx="12" fill="url(#water-bg)" />
      {/* Pond */}
      <ellipse cx="120" cy="110" rx="90" ry="35" fill="url(#water-pond)" opacity="0.7" />
      {/* Water ripples */}
      <ellipse cx="100" cy="105" rx="20" ry="6" fill="none" stroke="#81d4fa" strokeWidth="1" opacity="0.6" />
      <ellipse cx="140" cy="115" rx="15" ry="4" fill="none" stroke="#81d4fa" strokeWidth="1" opacity="0.5" />
      <ellipse cx="120" cy="108" rx="30" ry="8" fill="none" stroke="#b3e5fc" strokeWidth="0.8" opacity="0.4" />
      {/* Lily pad */}
      <ellipse cx="80" cy="108" rx="12" ry="6" fill="#66bb6a" />
      <path d="M80 102 L80 108" stroke="#c8e6c9" strokeWidth="1" />
      {/* Small lily flower */}
      <circle cx="82" cy="103" r="3" fill="#f48fb1" />
      <circle cx="82" cy="103" r="1.2" fill="#fff59d" />
      {/* Another lily pad */}
      <ellipse cx="155" cy="112" rx="10" ry="5" fill="#4caf50" />
      <path d="M155 107 L155 112" stroke="#a5d6a7" strokeWidth="1" />
      {/* Banks */}
      <path d="M0 130 Q60 100 120 120 Q180 140 240 115 L240 160 L0 160 Z" fill="#a5d6a7" opacity="0.5" />
      {/* Small fish jumping */}
      <path d="M165 85 Q170 78 175 85 Q170 82 165 85" fill="#ffab40" />
      {/* Water drops */}
      <circle cx="168" cy="90" r="1" fill="#81d4fa" />
      <circle cx="172" cy="88" r="0.8" fill="#81d4fa" />
    </svg>
  );
}

function RockIllustration() {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rock-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#efebe9" />
          <stop offset="100%" stopColor="#d7ccc8" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" rx="12" fill="url(#rock-bg)" />
      {/* Ground */}
      <path d="M0 130 Q120 110 240 125 L240 160 L0 160 Z" fill="#a1887f" />
      {/* Large boulder */}
      <path d="M50 130 Q30 100 50 80 Q70 70 90 80 Q110 90 100 130 Z" fill="#8d6e63" />
      <path d="M55 125 Q40 100 55 85 Q70 78 85 85 Q95 95 90 125 Z" fill="#9e8e82" />
      {/* Medium boulder */}
      <path d="M140 135 Q130 110 145 100 Q160 95 175 105 Q180 120 170 135 Z" fill="#795548" />
      <path d="M145 130 Q138 112 148 104 Q158 100 168 108 Q172 118 165 130 Z" fill="#8d6e63" />
      {/* Cave entrance */}
      <path d="M90 130 Q100 80 120 70 Q140 80 150 130" fill="#4e342e" />
      <path d="M95 130 Q105 85 120 78 Q135 85 145 130" fill="#3e2723" />
      {/* Small crystals */}
      <polygon points="195,120 198,108 201,120" fill="#ce93d8" opacity="0.8" />
      <polygon points="202,122 204,112 206,122" fill="#b39ddb" opacity="0.7" />
      <polygon points="188,125 190,116 192,125" fill="#80cbc4" opacity="0.6" />
      {/* Sparkle on crystal */}
      <circle cx="198" cy="110" r="1" fill="white" opacity="0.8" />
    </svg>
  );
}

function FireIllustration() {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fire-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#263238" />
          <stop offset="100%" stopColor="#37474f" />
        </linearGradient>
        <radialGradient id="fire-glow" cx="50%" cy="70%" r="50%">
          <stop offset="0%" stopColor="#ffab40" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ffab40" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="240" height="160" rx="12" fill="url(#fire-bg)" />
      {/* Warm glow */}
      <ellipse cx="120" cy="110" rx="80" ry="50" fill="url(#fire-glow)" />
      {/* Ground */}
      <path d="M0 135 Q120 125 240 132 L240 160 L0 160 Z" fill="#4e342e" />
      {/* Campfire logs */}
      <rect x="95" y="128" width="50" height="6" rx="3" fill="#6d4c41" transform="rotate(-10 120 131)" />
      <rect x="95" y="128" width="50" height="6" rx="3" fill="#5d4037" transform="rotate(10 120 131)" />
      {/* Fire */}
      <path d="M120 70 Q135 90 130 105 Q128 115 120 120 Q112 115 110 105 Q105 90 120 70" fill="#ff7043" />
      <path d="M120 80 Q130 95 127 108 Q125 115 120 118 Q115 115 113 108 Q110 95 120 80" fill="#ffa726" />
      <path d="M120 90 Q126 100 124 110 Q122 115 120 116 Q118 115 116 110 Q114 100 120 90" fill="#ffee58" />
      {/* Sparks */}
      <circle cx="110" cy="65" r="1.5" fill="#ffab40" opacity="0.8" />
      <circle cx="130" cy="58" r="1" fill="#ff7043" opacity="0.7" />
      <circle cx="115" cy="55" r="1.2" fill="#ffa726" opacity="0.6" />
      <circle cx="125" cy="50" r="0.8" fill="#ffab40" opacity="0.5" />
      <circle cx="118" cy="48" r="1" fill="#ff7043" opacity="0.4" />
      {/* Small stones around fire */}
      <ellipse cx="90" cy="132" rx="5" ry="3" fill="#78909c" />
      <ellipse cx="150" cy="130" rx="4" ry="3" fill="#78909c" />
      <ellipse cx="100" cy="134" rx="3" ry="2" fill="#90a4ae" />
      <ellipse cx="140" cy="133" rx="4" ry="2.5" fill="#90a4ae" />
    </svg>
  );
}

function GhostIllustration() {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ghost-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1a2e" />
          <stop offset="100%" stopColor="#2d1b4e" />
        </linearGradient>
        <radialGradient id="moon-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff9c4" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#fff9c4" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="240" height="160" rx="12" fill="url(#ghost-bg)" />
      {/* Moon */}
      <circle cx="190" cy="35" r="20" fill="#fff9c4" />
      <circle cx="198" cy="30" r="18" fill="#1a1a2e" />
      <circle cx="190" cy="35" r="30" fill="url(#moon-glow)" />
      {/* Purple mist */}
      <ellipse cx="80" cy="140" rx="60" ry="15" fill="#7c4dff" opacity="0.15" />
      <ellipse cx="160" cy="135" rx="50" ry="12" fill="#b388ff" opacity="0.12" />
      <ellipse cx="120" cy="145" rx="80" ry="18" fill="#7c4dff" opacity="0.1" />
      {/* Ghost silhouette */}
      <path d="M110 60 Q110 40 120 35 Q130 40 130 60 L130 90 Q126 85 122 90 Q118 85 114 90 Q110 85 110 90 Z" fill="#b39ddb" opacity="0.6" />
      <circle cx="116" cy="55" r="2.5" fill="#1a1a2e" />
      <circle cx="124" cy="55" r="2.5" fill="#1a1a2e" />
      <ellipse cx="120" cy="65" rx="2" ry="1.5" fill="#1a1a2e" />
      {/* Stars */}
      <circle cx="40" cy="25" r="1" fill="#e1bee7" opacity="0.8" />
      <circle cx="70" cy="40" r="0.8" fill="#ce93d8" opacity="0.6" />
      <circle cx="150" cy="20" r="1.2" fill="#e1bee7" opacity="0.7" />
      <circle cx="100" cy="15" r="0.6" fill="#b39ddb" opacity="0.5" />
      {/* Ground with gravestones */}
      <path d="M0 140 Q120 130 240 138 L240 160 L0 160 Z" fill="#2d1b4e" />
      <rect x="50" y="125" width="12" height="18" rx="4" fill="#4a3560" />
      <rect x="170" y="128" width="10" height="15" rx="3" fill="#4a3560" />
    </svg>
  );
}

function SkyIllustration() {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bbdefb" />
          <stop offset="100%" stopColor="#e3f2fd" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" rx="12" fill="url(#sky-bg)" />
      {/* Fluffy clouds */}
      <ellipse cx="60" cy="50" rx="30" ry="15" fill="white" opacity="0.8" />
      <ellipse cx="45" cy="50" rx="18" ry="12" fill="white" opacity="0.9" />
      <ellipse cx="75" cy="50" rx="20" ry="12" fill="white" opacity="0.9" />
      <ellipse cx="180" cy="70" rx="25" ry="12" fill="white" opacity="0.7" />
      <ellipse cx="168" cy="70" rx="15" ry="10" fill="white" opacity="0.8" />
      <ellipse cx="192" cy="70" rx="16" ry="10" fill="white" opacity="0.8" />
      {/* Small cloud */}
      <ellipse cx="130" cy="35" rx="18" ry="8" fill="white" opacity="0.5" />
      {/* Birds */}
      <path d="M90 80 Q95 75 100 80" stroke="#546e7a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M110 90 Q115 85 120 90" stroke="#546e7a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M150 55 Q154 51 158 55" stroke="#546e7a" strokeWidth="1" fill="none" strokeLinecap="round" />
      {/* Wind streaks */}
      <line x1="30" y1="100" x2="60" y2="100" stroke="#90caf9" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
      <line x1="80" y1="115" x2="120" y2="115" stroke="#90caf9" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
      <line x1="160" y1="105" x2="200" y2="105" stroke="#90caf9" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
      {/* Gentle ground */}
      <path d="M0 145 Q60 135 120 140 Q180 145 240 138 L240 160 L0 160 Z" fill="#c8e6c9" opacity="0.5" />
    </svg>
  );
}

function FurnitureIllustration() {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="furn-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff3e0" />
          <stop offset="100%" stopColor="#ffe0b2" />
        </linearGradient>
        <radialGradient id="lamp-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff9c4" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#fff9c4" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="240" height="160" rx="12" fill="url(#furn-bg)" />
      {/* Floor */}
      <rect x="0" y="130" width="240" height="30" rx="0" fill="#d7ccc8" />
      {/* Cozy chair */}
      <path d="M50 90 Q45 85 45 100 L45 130 L55 130 L55 105 L85 105 L85 130 L95 130 L95 100 Q95 85 90 90 Q70 80 50 90" fill="#a1887f" />
      <rect x="52" y="95" width="36" height="35" rx="4" fill="#bcaaa4" />
      <rect x="55" y="100" width="30" height="10" rx="3" fill="#d7ccc8" />
      {/* Small table */}
      <rect x="115" y="110" width="40" height="4" rx="2" fill="#8d6e63" />
      <rect x="120" y="114" width="4" height="16" fill="#8d6e63" />
      <rect x="146" y="114" width="4" height="16" fill="#8d6e63" />
      {/* Cup on table */}
      <rect x="128" y="102" width="10" height="8" rx="2" fill="#ef9a9a" />
      <path d="M138 104 Q142 106 138 108" stroke="#ef9a9a" strokeWidth="1" fill="none" />
      {/* Lamp */}
      <rect x="178" y="70" width="4" height="60" fill="#8d6e63" />
      <path d="M165 70 Q180 50 195 70 Z" fill="#ffcc80" />
      <circle cx="180" cy="65" r="25" fill="url(#lamp-glow)" />
      {/* Warm light rays */}
      <line x1="180" y1="40" x2="180" y2="35" stroke="#fff9c4" strokeWidth="1" opacity="0.5" />
      <line x1="165" y1="50" x2="160" y2="45" stroke="#fff9c4" strokeWidth="1" opacity="0.4" />
      <line x1="195" y1="50" x2="200" y2="45" stroke="#fff9c4" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

function FoodIllustration() {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="food-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff8e1" />
          <stop offset="100%" stopColor="#ffecb3" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" rx="12" fill="url(#food-bg)" />
      {/* Table surface */}
      <ellipse cx="120" cy="120" rx="80" ry="25" fill="#d7ccc8" />
      {/* Plate */}
      <ellipse cx="120" cy="110" rx="40" ry="15" fill="white" />
      <ellipse cx="120" cy="110" rx="35" ry="12" fill="#fafafa" />
      {/* Food on plate */}
      <ellipse cx="112" cy="105" rx="12" ry="8" fill="#ef9a9a" />
      <ellipse cx="128" cy="107" rx="10" ry="7" fill="#a5d6a7" />
      <ellipse cx="120" cy="100" rx="8" ry="5" fill="#ffcc80" />
      {/* Steam */}
      <path d="M110 85 Q108 78 112 72" stroke="#bdbdbd" strokeWidth="1.5" fill="none" opacity="0.5" strokeLinecap="round" />
      <path d="M120 82 Q118 74 122 68" stroke="#bdbdbd" strokeWidth="1.5" fill="none" opacity="0.4" strokeLinecap="round" />
      <path d="M130 84 Q128 76 132 70" stroke="#bdbdbd" strokeWidth="1.5" fill="none" opacity="0.5" strokeLinecap="round" />
      {/* Fork */}
      <rect x="60" y="95" width="2" height="30" rx="1" fill="#90a4ae" transform="rotate(-15 61 110)" />
      <path d="M57 95 L57 85 M59 95 L59 85 M61 95 L61 85" stroke="#90a4ae" strokeWidth="1" transform="rotate(-15 59 90)" />
      {/* Spoon */}
      <rect x="178" y="95" width="2" height="28" rx="1" fill="#90a4ae" transform="rotate(15 179 110)" />
      <ellipse cx="179" cy="90" rx="5" ry="4" fill="#90a4ae" transform="rotate(15 179 90)" />
    </svg>
  );
}

function FossilIllustration() {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fossil-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#efebe9" />
          <stop offset="100%" stopColor="#d7ccc8" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" rx="12" fill="url(#fossil-bg)" />
      {/* Rock layers */}
      <path d="M0 120 Q60 115 120 120 Q180 125 240 118 L240 160 L0 160 Z" fill="#a1887f" />
      <path d="M0 135 Q80 130 160 135 Q200 138 240 133 L240 160 L0 160 Z" fill="#8d6e63" />
      {/* Amber fossil */}
      <ellipse cx="120" cy="90" rx="35" ry="30" fill="#a1887f" />
      <ellipse cx="120" cy="88" rx="28" ry="24" fill="#ffb74d" opacity="0.8" />
      <ellipse cx="120" cy="86" rx="24" ry="20" fill="#ffa726" opacity="0.6" />
      {/* Bone outline inside */}
      <path d="M105 80 L115 80 L118 75 L122 75 L125 80 L135 80 L135 85 L125 85 L122 90 L118 90 L115 85 L105 85 Z" fill="none" stroke="#5d4037" strokeWidth="1.5" opacity="0.7" />
      <circle cx="108" cy="78" r="3" fill="none" stroke="#5d4037" strokeWidth="1" opacity="0.5" />
      <circle cx="132" cy="78" r="3" fill="none" stroke="#5d4037" strokeWidth="1" opacity="0.5" />
      {/* Small fossils */}
      <path d="M55 115 Q58 108 62 112 Q65 108 68 115" stroke="#8d6e63" strokeWidth="1.5" fill="none" />
      <circle cx="180" cy="110" r="6" fill="#a1887f" />
      <path d="M177 110 Q180 106 183 110" stroke="#5d4037" strokeWidth="1" fill="none" />
      {/* Sparkle */}
      <circle cx="130" cy="78" r="1" fill="white" opacity="0.7" />
    </svg>
  );
}

function FishingIllustration() {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fish-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e1f5fe" />
          <stop offset="100%" stopColor="#b3e5fc" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" rx="12" fill="url(#fish-bg)" />
      {/* Water */}
      <path d="M0 100 Q60 95 120 100 Q180 105 240 98 L240 160 L0 160 Z" fill="#4fc3f7" opacity="0.5" />
      <path d="M0 110 Q80 105 160 110 Q200 113 240 108 L240 160 L0 160 Z" fill="#29b6f6" opacity="0.4" />
      {/* Bank */}
      <path d="M0 100 Q30 95 50 100 L50 160 L0 160 Z" fill="#a5d6a7" />
      {/* Fishing rod */}
      <line x1="40" y1="50" x2="40" y2="95" stroke="#8d6e63" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="40" y1="50" x2="140" y2="40" stroke="#8d6e63" strokeWidth="2" strokeLinecap="round" />
      {/* Fishing line */}
      <path d="M140 40 Q142 60 138 95" stroke="#90a4ae" strokeWidth="0.8" fill="none" />
      {/* Bobber */}
      <circle cx="138" cy="97" r="3" fill="#ef5350" />
      <circle cx="138" cy="100" r="2" fill="white" />
      {/* Fish jumping */}
      <path d="M175 80 Q185 70 195 80 Q190 78 185 80 Z" fill="#ffab40" />
      <circle cx="190" cy="76" r="0.8" fill="#212121" />
      {/* Water splashes */}
      <circle cx="180" cy="85" r="1" fill="#81d4fa" />
      <circle cx="190" cy="83" r="0.8" fill="#81d4fa" />
      <circle cx="185" cy="87" r="1.2" fill="#81d4fa" />
      {/* Ripples */}
      <ellipse cx="185" cy="95" rx="12" ry="3" fill="none" stroke="#81d4fa" strokeWidth="0.8" opacity="0.5" />
    </svg>
  );
}

function MusicIllustration() {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="music-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f3e5f5" />
          <stop offset="100%" stopColor="#e1bee7" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" rx="12" fill="url(#music-bg)" />
      {/* Musical notes */}
      <ellipse cx="80" cy="90" rx="8" ry="6" fill="#7c4dff" opacity="0.7" transform="rotate(-15 80 90)" />
      <rect x="87" y="55" width="2.5" height="35" fill="#7c4dff" opacity="0.7" />
      <path d="M89 55 Q100 50 89 65" fill="#7c4dff" opacity="0.7" />
      <ellipse cx="140" cy="70" rx="7" ry="5" fill="#e040fb" opacity="0.6" transform="rotate(-15 140 70)" />
      <rect x="146" y="38" width="2.5" height="32" fill="#e040fb" opacity="0.6" />
      <path d="M148 38 Q158 33 148 48" fill="#e040fb" opacity="0.6" />
      {/* Double note */}
      <ellipse cx="170" cy="100" rx="6" ry="4.5" fill="#ab47bc" opacity="0.5" transform="rotate(-15 170 100)" />
      <ellipse cx="190" cy="95" rx="6" ry="4.5" fill="#ab47bc" opacity="0.5" transform="rotate(-15 190 95)" />
      <rect x="175" y="68" width="2" height="32" fill="#ab47bc" opacity="0.5" />
      <rect x="195" y="63" width="2" height="32" fill="#ab47bc" opacity="0.5" />
      <line x1="177" y1="68" x2="197" y2="63" stroke="#ab47bc" strokeWidth="2.5" opacity="0.5" />
      {/* Small speaker */}
      <rect x="40" y="100" width="30" height="35" rx="5" fill="#78909c" />
      <circle cx="55" cy="122" r="10" fill="#546e7a" />
      <circle cx="55" cy="122" r="4" fill="#78909c" />
      <circle cx="55" cy="107" r="3" fill="#546e7a" />
      {/* Sound waves from speaker */}
      <path d="M75 110 Q80 115 75 120" stroke="#b39ddb" strokeWidth="1.5" fill="none" opacity="0.5" />
      <path d="M82 105 Q90 115 82 125" stroke="#b39ddb" strokeWidth="1.5" fill="none" opacity="0.3" />
    </svg>
  );
}

function DreamIllustration() {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dream-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ede7f6" />
          <stop offset="100%" stopColor="#e8eaf6" />
        </linearGradient>
        <linearGradient id="rainbow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ef9a9a" />
          <stop offset="20%" stopColor="#ffcc80" />
          <stop offset="40%" stopColor="#fff59d" />
          <stop offset="60%" stopColor="#a5d6a7" />
          <stop offset="80%" stopColor="#90caf9" />
          <stop offset="100%" stopColor="#ce93d8" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" rx="12" fill="url(#dream-bg)" />
      {/* Rainbow */}
      <path d="M40 140 Q120 20 200 140" stroke="url(#rainbow)" strokeWidth="6" fill="none" opacity="0.5" />
      <path d="M50 140 Q120 30 190 140" stroke="url(#rainbow)" strokeWidth="4" fill="none" opacity="0.3" />
      {/* Dreamy clouds */}
      <ellipse cx="60" cy="80" rx="25" ry="12" fill="white" opacity="0.5" />
      <ellipse cx="180" cy="70" rx="22" ry="10" fill="white" opacity="0.4" />
      <ellipse cx="120" cy="130" rx="30" ry="12" fill="white" opacity="0.3" />
      {/* Sparkly stars */}
      <polygon points="50,30 52,36 58,36 53,40 55,46 50,42 45,46 47,40 42,36 48,36" fill="#fff59d" opacity="0.8" />
      <polygon points="180,25 181.5,29 186,29 182.5,32 184,36 180,33 176,36 177.5,32 174,29 178.5,29" fill="#fff59d" opacity="0.7" />
      <polygon points="140,45 141,48 144,48 141.5,50 142.5,53 140,51 137.5,53 138.5,50 136,48 139,48" fill="#fff59d" opacity="0.6" />
      {/* Small sparkles */}
      <circle cx="90" cy="50" r="1.5" fill="#e1bee7" opacity="0.7" />
      <circle cx="160" cy="90" r="1" fill="#b3e5fc" opacity="0.6" />
      <circle cx="100" cy="110" r="1.2" fill="#f8bbd0" opacity="0.5" />
      <circle cx="70" cy="100" r="0.8" fill="#c5cae9" opacity="0.6" />
    </svg>
  );
}

function SandIllustration() {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sand-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff8e1" />
          <stop offset="100%" stopColor="#ffecb3" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" rx="12" fill="url(#sand-bg)" />
      {/* Sun */}
      <circle cx="200" cy="35" r="20" fill="#ffee58" opacity="0.7" />
      <circle cx="200" cy="35" r="15" fill="#fff59d" opacity="0.8" />
      {/* Sand dunes */}
      <path d="M0 110 Q60 85 120 100 Q180 115 240 95 L240 160 L0 160 Z" fill="#ffe082" />
      <path d="M0 125 Q80 110 160 120 Q200 125 240 115 L240 160 L0 160 Z" fill="#ffd54f" />
      {/* Shells */}
      <path d="M80 130 Q83 124 86 130 Q83 128 80 130" fill="#f8bbd0" />
      <path d="M150 122 Q154 118 158 122 Q154 120 150 122" fill="#ffccbc" />
      {/* Spiral shell */}
      <circle cx="110" cy="128" r="4" fill="#ffab91" />
      <path d="M110 124 Q114 126 112 130 Q108 128 110 124" fill="#ff8a65" />
      {/* Small starfish */}
      <polygon points="180,132 182,128 184,132 179,129 185,129" fill="#ef9a9a" opacity="0.7" />
      {/* Footprints suggestion */}
      <ellipse cx="60" cy="140" rx="3" ry="2" fill="#ffc107" opacity="0.4" />
      <ellipse cx="70" cy="137" rx="3" ry="2" fill="#ffc107" opacity="0.3" />
    </svg>
  );
}

function SnowIllustration() {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="snow-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e3f2fd" />
          <stop offset="100%" stopColor="#e8eaf6" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" rx="12" fill="url(#snow-bg)" />
      {/* Snow ground */}
      <path d="M0 115 Q60 105 120 112 Q180 119 240 108 L240 160 L0 160 Z" fill="white" />
      <path d="M0 125 Q80 120 160 125 Q200 128 240 122 L240 160 L0 160 Z" fill="#f5f5f5" />
      {/* Snowman */}
      <circle cx="160" cy="105" r="15" fill="white" stroke="#e0e0e0" strokeWidth="0.5" />
      <circle cx="160" cy="82" r="11" fill="white" stroke="#e0e0e0" strokeWidth="0.5" />
      <circle cx="160" cy="65" r="8" fill="white" stroke="#e0e0e0" strokeWidth="0.5" />
      {/* Snowman face */}
      <circle cx="157" cy="63" r="1" fill="#212121" />
      <circle cx="163" cy="63" r="1" fill="#212121" />
      <path d="M158 67 L162 66" stroke="#ff7043" strokeWidth="1.5" strokeLinecap="round" />
      {/* Buttons */}
      <circle cx="160" cy="80" r="1" fill="#212121" />
      <circle cx="160" cy="86" r="1" fill="#212121" />
      {/* Snowflakes */}
      <text x="40" y="40" fill="#90caf9" fontSize="12" opacity="0.6">*</text>
      <text x="80" y="60" fill="#90caf9" fontSize="8" opacity="0.5">*</text>
      <text x="200" y="35" fill="#90caf9" fontSize="10" opacity="0.7">*</text>
      <text x="120" y="30" fill="#90caf9" fontSize="6" opacity="0.4">*</text>
      <text x="60" y="80" fill="#b3e5fc" fontSize="9" opacity="0.5">*</text>
      <text x="190" y="70" fill="#b3e5fc" fontSize="7" opacity="0.4">*</text>
      {/* Small snow hill */}
      <ellipse cx="70" cy="130" rx="30" ry="10" fill="white" />
    </svg>
  );
}

function ElectricIllustration() {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="elec-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fffde7" />
          <stop offset="100%" stopColor="#fff9c4" />
        </linearGradient>
        <radialGradient id="elec-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffee58" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ffee58" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="240" height="160" rx="12" fill="url(#elec-bg)" />
      {/* Central glow */}
      <circle cx="120" cy="80" r="50" fill="url(#elec-glow)" />
      {/* Lightning bolt 1 */}
      <polygon points="110,30 95,75 112,75 98,120 130,65 113,65 125,30" fill="#fdd835" />
      <polygon points="112,35 100,72 114,72 102,115 128,68 114,68 124,35" fill="#ffee58" />
      {/* Lightning bolt 2 (smaller) */}
      <polygon points="160,50 152,72 160,72 153,92 170,68 162,68 168,50" fill="#fdd835" opacity="0.7" />
      {/* Sparks */}
      <circle cx="80" cy="60" r="3" fill="#fff59d" opacity="0.8" />
      <circle cx="170" cy="45" r="2" fill="#ffee58" opacity="0.7" />
      <circle cx="140" cy="100" r="2.5" fill="#fff59d" opacity="0.6" />
      <circle cx="90" cy="110" r="1.5" fill="#fdd835" opacity="0.5" />
      {/* Small zigzag sparks */}
      <path d="M60 90 L65 85 L60 80" stroke="#fdd835" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M190 100 L195 95 L190 90" stroke="#fdd835" strokeWidth="1.5" fill="none" opacity="0.5" />
      {/* Ground */}
      <path d="M0 140 Q120 130 240 138 L240 160 L0 160 Z" fill="#c8e6c9" opacity="0.4" />
    </svg>
  );
}

function TreeIllustration() {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="tree-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8f5e9" />
          <stop offset="100%" stopColor="#c8e6c9" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" rx="12" fill="url(#tree-bg)" />
      {/* Ground */}
      <path d="M0 135 Q120 125 240 132 L240 160 L0 160 Z" fill="#a5d6a7" />
      {/* Tree trunk */}
      <rect x="112" y="85" width="16" height="50" rx="3" fill="#8d6e63" />
      {/* Tree canopy */}
      <ellipse cx="120" cy="55" rx="45" ry="35" fill="#66bb6a" />
      <ellipse cx="100" cy="65" rx="25" ry="22" fill="#4caf50" />
      <ellipse cx="140" cy="65" rx="25" ry="22" fill="#4caf50" />
      <ellipse cx="120" cy="45" rx="30" ry="25" fill="#81c784" />
      {/* Shade underneath */}
      <ellipse cx="120" cy="138" rx="40" ry="8" fill="#388e3c" opacity="0.15" />
      {/* Falling leaves */}
      <ellipse cx="165" cy="75" rx="3" ry="1.5" fill="#a5d6a7" transform="rotate(30 165 75)" />
      <ellipse cx="175" cy="95" rx="2.5" ry="1.2" fill="#81c784" transform="rotate(-20 175 95)" />
      <ellipse cx="70" cy="85" rx="3" ry="1.5" fill="#a5d6a7" transform="rotate(45 70 85)" />
      <ellipse cx="60" cy="105" rx="2" ry="1" fill="#66bb6a" transform="rotate(-30 60 105)" />
      {/* Small flowers at base */}
      <circle cx="95" cy="132" r="2" fill="#f48fb1" />
      <circle cx="145" cy="130" r="2" fill="#fff59d" />
    </svg>
  );
}

function MiscIllustration() {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="misc-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f3e5f5" />
          <stop offset="100%" stopColor="#e8eaf6" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" rx="12" fill="url(#misc-bg)" />
      {/* Question mark */}
      <path d="M105 50 Q105 30 120 30 Q135 30 135 50 Q135 60 120 65 L120 75" stroke="#b39ddb" strokeWidth="6" fill="none" strokeLinecap="round" />
      <circle cx="120" cy="90" r="4" fill="#b39ddb" />
      {/* Sparkles around */}
      <polygon points="60,40 62,46 68,46 63,50 65,56 60,52 55,56 57,50 52,46 58,46" fill="#fff59d" opacity="0.7" />
      <polygon points="180,50 181.5,54 186,54 182.5,57 184,61 180,58 176,61 177.5,57 174,54 178.5,54" fill="#fff59d" opacity="0.6" />
      <polygon points="150,30 151,33 154,33 151.5,35 152.5,38 150,36 147.5,38 148.5,35 146,33 149,33" fill="#ffcc80" opacity="0.7" />
      {/* Small sparkle dots */}
      <circle cx="80" cy="80" r="2" fill="#f48fb1" opacity="0.5" />
      <circle cx="160" cy="90" r="1.5" fill="#90caf9" opacity="0.5" />
      <circle cx="90" cy="110" r="1.8" fill="#a5d6a7" opacity="0.4" />
      <circle cx="170" cy="115" r="2" fill="#ce93d8" opacity="0.5" />
      <circle cx="70" cy="120" r="1" fill="#ffcc80" opacity="0.5" />
    </svg>
  );
}

const ILLUSTRATIONS: Record<string, () => React.JSX.Element> = {
  grass: GrassIllustration,
  flower: FlowerIllustration,
  water: WaterIllustration,
  rock: RockIllustration,
  fire: FireIllustration,
  ghost: GhostIllustration,
  sky: SkyIllustration,
  furniture: FurnitureIllustration,
  food: FoodIllustration,
  fossil: FossilIllustration,
  fishing: FishingIllustration,
  music: MusicIllustration,
  dream: DreamIllustration,
  sand: SandIllustration,
  snow: SnowIllustration,
  electric: ElectricIllustration,
  tree: TreeIllustration,
  misc: MiscIllustration,
};

export function HabitatIllustration({
  category,
  className,
  size = 'md',
}: HabitatIllustrationProps) {
  const resolved = resolveCategory(category);
  const Illustration = ILLUSTRATIONS[resolved] || MiscIllustration;

  return (
    <div
      className={cn(
        'flex items-center justify-center overflow-hidden rounded-xl',
        SIZE_MAP[size],
        className,
      )}
    >
      <Illustration />
    </div>
  );
}
