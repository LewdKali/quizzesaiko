const fs = require('fs');
const path = require('path');

const out = path.join(__dirname, '..', 'public', 'img', 'characters');
fs.mkdirSync(out, { recursive: true });

function svg({ bg, hair, skin = '#f6c9a8', accent, eyes = '#1a1520', label, extra = '' }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <defs>
    <radialGradient id="g" cx="50%" cy="35%" r="70%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="${bg}" stop-opacity="1"/>
    </radialGradient>
  </defs>
  <rect width="400" height="400" fill="url(#g)"/>
  <circle cx="70" cy="80" r="10" fill="#fff" opacity="0.55"/>
  <circle cx="330" cy="110" r="7" fill="#fff" opacity="0.45"/>
  <circle cx="300" cy="60" r="5" fill="#fff" opacity="0.4"/>
  <!-- hair back -->
  <ellipse cx="200" cy="210" rx="118" ry="130" fill="${hair}"/>
  <!-- shoulders -->
  <ellipse cx="200" cy="370" rx="120" ry="70" fill="${accent}"/>
  <!-- neck -->
  <rect x="175" y="250" width="50" height="50" rx="16" fill="${skin}"/>
  <!-- face -->
  <ellipse cx="200" cy="195" rx="88" ry="95" fill="${skin}"/>
  <!-- bangs -->
  <path d="M115 165 Q200 90 285 165 Q250 120 200 115 Q150 120 115 165Z" fill="${hair}"/>
  <!-- eyes -->
  <ellipse cx="165" cy="195" rx="18" ry="24" fill="${eyes}"/>
  <ellipse cx="235" cy="195" rx="18" ry="24" fill="${eyes}"/>
  <circle cx="171" cy="188" r="6" fill="#fff"/>
  <circle cx="241" cy="188" r="6" fill="#fff"/>
  <!-- blush -->
  <ellipse cx="140" cy="225" rx="16" ry="8" fill="#ff8fab" opacity="0.35"/>
  <ellipse cx="260" cy="225" rx="16" ry="8" fill="#ff8fab" opacity="0.35"/>
  <!-- smile -->
  <path d="M175 245 Q200 262 225 245" fill="none" stroke="#c45c6a" stroke-width="5" stroke-linecap="round"/>
  ${extra}
  <text x="200" y="385" text-anchor="middle" font-family="Nunito, Segoe UI, sans-serif" font-size="18" font-weight="800" fill="#ffffff" opacity="0.85">${label}</text>
</svg>`;
}

const chars = {
  'sailor-mercury': svg({
    bg: '#7dd3fc', hair: '#7dd3fc', accent: '#38bdf8', label: 'Mercúrio',
    extra: `<path d="M120 120 Q200 40 280 120" fill="#67e8f9"/><circle cx="200" cy="55" r="10" fill="#e0f2fe"/>`
  }),
  'sailor-mars': svg({
    bg: '#fb7185', hair: '#4c0519', accent: '#be123c', label: 'Marte',
    extra: `<polygon points="200,55 210,85 180,70 220,70 190,85" fill="#fbbf24"/>`
  }),
  'sailor-jupiter': svg({
    bg: '#4ade80', hair: '#14532d', accent: '#16a34a', label: 'Júpiter',
    extra: `<path d="M190 50 h20 v25 h-20z" fill="#86efac"/><circle cx="200" cy="45" r="12" fill="#bbf7d0"/>`
  }),
  'sailor-venus': svg({
    bg: '#fb923c', hair: '#facc15', accent: '#ea580c', label: 'Vênus',
    extra: `<circle cx="200" cy="58" r="16" fill="#fde047"/><path d="M200 42 v32 M184 58 h32" stroke="#f59e0b" stroke-width="4"/>`
  }),
  'winx-stella': svg({
    bg: '#fbbf24', hair: '#fde047', accent: '#f59e0b', label: 'Stella',
    extra: `<circle cx="200" cy="58" r="18" fill="#fff7ad"/><circle cx="200" cy="58" r="8" fill="#f59e0b"/>`
  }),
  'winx-flora': svg({
    bg: '#86efac', hair: '# thr' , accent: '#ec4899', label: 'Flora'
  }),
  'winx-musa': svg({
    bg: '#c084fc', hair: '#1e1b4b', accent: '#7c3aed', label: 'Musa',
    extra: `<path d="M170 55 q30 -20 60 0" fill="none" stroke="#e9d5ff" stroke-width="4"/><circle cx="175" cy="55" r="5" fill="#e9d5ff"/><circle cx="225" cy="55" r="5" fill="#e9d5ff"/>`
  }),
  'winx-tecna': svg({
    bg: '#67e8f9', hair: '#a78bfa', accent: '#06b6d4', label: 'Tecna',
    extra: `<rect x="175" y="48" width="50" height="22" rx="6" fill="#22d3ee" opacity="0.9"/>`
  }),
  'winx-aisha': svg({
    bg: '#34d399', hair: '#111827', accent: '#059669', skin: '#c48a5a', label: 'Aisha',
    extra: `<ellipse cx="200" cy="60" rx="28" ry="12" fill="#6ee7b7"/>`
  }),
  'spies-sam': svg({
    bg: '#22c55e', hair: '#dc2626', accent: '#16a34a', label: 'Sam',
    extra: `<rect x="120" y="300" width="160" height="70" rx="20" fill="#15803d"/>`
  }),
  'spies-clover': svg({
    bg: '#eab308', hair: '#fde047', accent: '#ca8a04', label: 'Clover'
  }),
  'spies-alex': svg({
    bg: '#ef4444', hair: '#292524', accent: '#dc2626', label: 'Alex'
  }),
  'miraculous-rena': svg({
    bg: '#f97316', hair: '#ea580c', accent: '#c2410c', label: 'Rena',
    extra: `<ellipse cx="120" cy="120" rx="22" ry="35" fill="#fb923c" transform="rotate(-20 120 120)"/><ellipse cx="280" cy="120" rx="22" ry="35" fill="#fb923c" transform="rotate(20 280 120)"/>`
  }),
  'miraculous-bee': svg({
    bg: '#facc15', hair: '#fde047', accent: '#111827', label: 'Queen Bee',
    extra: `<path d="M160 55 h80 l-10 20 h-60z" fill="#111827"/><circle cx="200" cy="48" r="10" fill="#facc15"/>`
  }),
  'barbie-fairy': svg({
    bg: '#c4b5fd', hair: '#fce7f3', accent: '#a78bfa', label: 'Fada',
    extra: `<ellipse cx="95" cy="220" rx="40" ry="55" fill="#ddd6fe" opacity="0.8"/><ellipse cx="305" cy="220" rx="40" ry="55" fill="#ddd6fe" opacity="0.8"/>`
  }),
  'barbie-spy': svg({
    bg: '#67e8f9', hair: '#fde68a', accent: '#0e7490', label: 'Espiã',
    extra: `<rect x="145" y="175" width="110" height="28" rx="10" fill="#083344" opacity="0.75"/>`
  }),
  'barbie-rock': svg({
    bg: '#fb7185', hair: '#f472b6', accent: '#be123c', label: 'Rockstar',
    extra: `<path d="M300 250 l40 60 -25 10 -15 -70z" fill="#fbbf24"/>`
  })
};

// fix flora hair typo
chars['winx-flora'] = svg({
  bg: '#86efac', hair: '#fb7185', accent: '#ec4899', label: 'Flora',
  extra: `<circle cx="200" cy="55" r="14" fill="#f9a8d4"/><circle cx="188" cy="60" r="8" fill="#86efac"/>`
});

for (const [name, content] of Object.entries(chars)) {
  fs.writeFileSync(path.join(out, `${name}.svg`), content);
  console.log('wrote', name);
}
console.log('done');
