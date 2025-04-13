import {
  BinaryRainBackground,
  SoftGradientWavesBackground,
  MinimalDotsGridBackground,
  GradientWithBlobBackground,
  HexagonGridBackground,
  GridFinanceBackground,
  LaserRaysBackground,
  SolarSystemBackground,
  MultiverseBackground,
  RBGInfinityBeamsBackground,
  SubtleIsometricGridBackground,
  SubtleTopographyBackground,
} from "@/components/backgrounds/backgrounds";

export type BackgroundType = {
  id: string;
  name: string;
  component: React.ReactElement;
  code: string;
};

export const backgrounds: BackgroundType[] = [
  {
    id: "solar-system",
    name: "Solar System",
    component: <SolarSystemBackground />,
    code: `// Solar System Background
const orbits = [
  { radius: 40, duration: 4, color: '#7FDBFF', size: 5 },
  { radius: 65, duration: 6, color: '#FFDC00', size: 3 },
  { radius: 90, duration: 9, color: '#2ECC40', size: 6 },
  { radius: 115, duration: 12, color: '#B10DC9', size: 7 },
  { radius: 140, duration: 16, color: '#FF4136', size: 10 },
  { radius: 165, duration: 20, color: '#FF851B', size: 9 },
  { radius: 190, duration: 24, color: '#AAAAAA', size: 11 },
  { radius: 215, duration: 30, color: '#F012BE', size: 9 },
];

<div className="absolute inset-0 overflow-hidden z-[-1] bg-white dark:bg-black">
  {/* 🟣 Unique nebula gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff] via-[#e0dfff] to-[#f4faff] dark:from-[#3a007d] dark:via-[#1c004a] dark:to-[#0e001f] opacity-90" />

  {/* ✨ Stars */}
  <div className="absolute inset-0">
    {[...Array(120)].map((_, i) => (
      <div
        key={i}
        className="absolute w-[1px] h-[1px] bg-black/20 dark:bg-white opacity-40 animate-pulse"
        style={{
          top: \`\${Math.random() * 100}%\`,
          left: \`\${Math.random() * 100}%\`,
          animationDuration: \`\${1 + Math.random() * 2}s\`,
          opacity: Math.random(),
        }}
      />
    ))}
  </div>

  {/* 🌞 SVG Solar System */}
  <svg
    className="absolute inset-0 w-full h-full"
    viewBox="0 0 500 500"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <radialGradient id="sun-glow" r="50%">
        <stop offset="0%" stopColor="#ffcc00" stopOpacity="1" />
        <stop offset="100%" stopColor="#ffcc00" stopOpacity="0" />
      </radialGradient>

      {/* Glow filter for planets */}
      <filter id="planet-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Sun */}
    <circle cx="250" cy="250" r="30" fill="#ffcc00" />
    <circle cx="250" cy="250" r="90" fill="url(#sun-glow)" />

    {/* Orbits */}
    {orbits.map((orbit, i) => (
      <circle
        key={\`orbit-\${i}\`}
        cx="250"
        cy="250"
        r={orbit.radius}
        fill="none"
        strokeDasharray="2 4"
        className="stroke-gray-300 dark:stroke-white/10"
      />
    ))}

    {/* Glowing Planets */}
    {orbits.map((orbit, i) => (
      <g key={\`planet-\${i}\`}>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 250 250"
          to="360 250 250"
          dur={\`\${orbit.duration}s\`}
          repeatCount="indefinite"
        />
        <circle
          cx={250 + orbit.radius}
          cy={250}
          r={orbit.size}
          fill={orbit.color}
          stroke="white"
          strokeWidth="0.3"
          filter="url(#planet-glow)"
        />
      </g>
    ))}
  </svg>

  {/* 💫 Space overlays */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(128,0,255,0.07),transparent_70%)] pointer-events-none mix-blend-screen" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(0,200,255,0.06),transparent_70%)] pointer-events-none mix-blend-screen" />

  {/* 🌀 Soft glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.04),transparent_60%)] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.02),transparent_60%)] blur-3xl mix-blend-soft-light pointer-events-none" />

  {/* Frame halo */}
  <div className="absolute inset-0 border border-black/5 dark:border-white/10 rounded-xl blur pointer-events-none" />
</div>`,
  },
  {
    id: "laser-rays",
    name: "Laser Rays",
    component: <LaserRaysBackground />,
    code: `// Laser Rays Background
<div className="absolute inset-0 bg-black overflow-hidden z-[-1]">
  <svg
    className="absolute inset-0 h-full w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="laser-beam" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0ff" stopOpacity="1" />
        <stop offset="50%" stopColor="#0ff" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#0ff" stopOpacity="0" />
      </linearGradient>
  
      <pattern
        id="laserPattern"
        width="60"
        height="100%"
        patternUnits="userSpaceOnUse"
      >
        <rect
          x="25"
          width="10"
          height="100%"
          fill="url(#laser-beam)"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 -100%"
            to="0 100%"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </rect>
      </pattern>
    </defs>
  
  <rect width="100%" height="100%" fill="url(#laserPattern)" />
  </svg>
  
  {/* Glow pulse layer */}
  <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.08),transparent_70%)]" />
  
  {/* Optional neon edge glow */}
  <div className="pointer-events-none absolute inset-0 border-2 border-cyan-500/10 rounded-xl blur-sm" />
</div>`
  },
  {
    id: "multiverse",
    name: "Multiverse",
    component: <MultiverseBackground />,
    code: `// Multiverse Background
const universes = Array.from({ length: 12 }, () => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  r: 12 + Math.random() * 20,
  color: \`hsl(\${Math.floor(Math.random() * 360)}, 100%, 70%)\`,
  duration: 8 + Math.random() * 6,
}));

  <div className="absolute inset-0 overflow-hidden z-[-1]">
    {/* 🌌 Space background gradient for light/dark */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#e6f0ff] via-[#f7faff] to-[#dceeff] dark:from-[#050d1a] dark:via-[#0a0034] dark:to-[#001f1f] opacity-90" />

    {/* ✨ Starfield */}
    <div className="absolute inset-0">
      {[...Array(180)].map((_, i) => (
        <div
          key={i}
          className="absolute w-[1px] h-[1px] bg-black/20 dark:bg-white opacity-40 animate-pulse"
          style={{
            top: \`\${Math.random() * 100}%\`,
            left: \`\${Math.random() * 100}%\`,
            animationDuration: \`\${1.5 + Math.random() * 2}s\`,
            opacity: Math.random(),
          }}
        />
      ))}
    </div>

    {/* 🌀 Universes scattered around */}
    {universes.map((uni, i) => (
      <div
        key={i}
        className="absolute rounded-full shadow-xl border border-black/10 dark:border-white/10"
        style={{
          width: \`\${uni.r * 2}px\`,
          height: \`\${uni.r * 2}px\`,
          left: \`\${uni.x}%\`,
          top: \`\${uni.y}%\`,
          background: \`radial-gradient(circle at 30% 30%, \${uni.color}, \${typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches ? '#444' : '#000'})\`,
          animation: \`floatY \${uni.duration}s ease-in-out infinite alternate\`,
          transformOrigin: 'center',
        }}
      />
    ))}

    {/* 🌠 Wormholes */}
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className="absolute w-20 h-20 rounded-full blur-xl opacity-30 animate-ping mix-blend-overlay"
        style={{
          top: \`\${Math.random() * 80 + 10}%\`,
          left: \`\${Math.random() * 80 + 10}%\`,
          background: \`conic-gradient(from 0deg, #0ff, #f0f, #0ff)\`,
          animationDuration: \`\${6 + i * 2}s\`,
        }}
      />
    ))}

    {/* 💫 Nebula-like overlays */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(0,255,255,0.07),transparent_60%)] mix-blend-screen pointer-events-none" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_85%,rgba(255,0,255,0.04),transparent_60%)] mix-blend-screen pointer-events-none" />

    {/* 🌟 Soft glow for depth */}
    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.04),transparent_70%)] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.02),transparent_70%)] blur-2xl mix-blend-soft-light pointer-events-none" />

    {/* Frame blur & boundary effect */}
    <div className="absolute inset-0 border border-black/5 dark:border-white/10 rounded-xl blur pointer-events-none" />

    {/* Animations */}
    <style jsx>{\`
      @keyframes floatY {
        0% {
          transform: translateY(0px) scale(1);
        }
        100% {
          transform: translateY(-20px) scale(1.03);
        }
      }
    \`}</style>
  </div>`
  },
  {
    id: "rbg-infinity-beams",
    name: "RBG Infinity Beams",
    component: <RBGInfinityBeamsBackground />,
    code: `// Solar System Background`
  },
  {
    id: "subtle-topography-bacground",
    name: "Subtle Topography",
    component: <SubtleTopographyBackground />,
    code: `// Subtle Topography Background
<div className="absolute inset-0 bg-white dark:bg-gray-950">
  <svg
    className="absolute inset-0 h-full w-full opacity-[0.15] dark:opacity-[0.07] animate-noise"
    xmlns="http://www.w3.org/2000/svg"
  >
    <filter id="noise">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.65"
        numOctaves="3"
        stitchTiles="stitch"
        result="turbulence"
      />
      <feDisplacementMap
        in="turbulence"
        scale="5"
        xChannelSelector="R"
        yChannelSelector="G"
      />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noise)" />
  </svg>

  <div
    className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(153,246,228,0.15),transparent_40%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.12),transparent_40%)] animate-gradient1"
  />
  <div
    className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(253,224,71,0.08),transparent_40%)] dark:bg-[radial-gradient(circle_at_70%_60%,rgba(250,204,21,0.08),transparent_40%)] animate-gradient2"
  />

  <style jsx>{\`
    @keyframes noise {
      0% {
        filter: url('#noise') baseFrequency="0.65";
      }
      100% {
        filter: url('#noise') baseFrequency="0.8";
      }
    }

    @keyframes moveGradient1 {
      0% {
        background-position: 30% 20%;
      }
      100% {
        background-position: 70% 60%;
      }
    }

    @keyframes moveGradient2 {
      0% {
        background-position: 70% 60%;
      }
      100% {
        background-position: 30% 80%;
      }
    }

    .animate-noise {
      animation: noise 30s infinite linear;
    }

    .animate-gradient1 {
      animation: moveGradient1 15s infinite alternate ease-in-out;
    }

    .animate-gradient2 {
      animation: moveGradient2 15s infinite alternate ease-in-out;
    }
  \`}</style>
</div>`
  },
  {
    id: "binary-rain",
    name: "Binary Rain",
    component: <BinaryRainBackground />,
    code: `// Binary Rain Background

<div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
  <div className="absolute inset-0 opacity-5 dark:opacity-10">
    {/* Static binary elements with CSS animations */}
    <div className="animate-binary-fade absolute left-[10%] top-[15%] font-mono text-xs text-gray-900 dark:text-gray-200">0</div>
    <div className="animate-binary-fade absolute left-[20%] top-[25%] font-mono text-xs text-gray-900 dark:text-gray-200" style={{ animationDelay: "1.5s" }}>1</div>
    <div className="animate-binary-fade absolute left-[30%] top-[45%] font-mono text-xs text-gray-900 dark:text-gray-200" style={{ animationDelay: "2.2s" }}>0</div>
    <div className="animate-binary-fade absolute left-[40%] top-[65%] font-mono text-xs text-gray-900 dark:text-gray-200" style={{ animationDelay: "0.7s" }}>1</div>
    <div className="animate-binary-fade absolute left-[50%] top-[85%] font-mono text-xs text-gray-900 dark:text-gray-200" style={{ animationDelay: "3.1s" }}>0</div>
    <div className="animate-binary-fade absolute left-[60%] top-[35%] font-mono text-xs text-gray-900 dark:text-gray-200" style={{ animationDelay: "1.8s" }}>1</div>
    <div className="animate-binary-fade absolute left-[70%] top-[55%] font-mono text-xs text-gray-900 dark:text-gray-200" style={{ animationDelay: "2.5s" }}>0</div>
    <div className="animate-binary-fade absolute left-[80%] top-[75%] font-mono text-xs text-gray-900 dark:text-gray-200" style={{ animationDelay: "0.9s" }}>1</div>
    <div className="animate-binary-fade absolute left-[90%] top-[5%] font-mono text-xs text-gray-900 dark:text-gray-200" style={{ animationDelay: "1.2s" }}>0</div>
    <div className="animate-binary-fade absolute left-[15%] top-[30%] font-mono text-xs text-gray-900 dark:text-gray-200" style={{ animationDelay: "2.8s" }}>1</div>
    <div className="animate-binary-fade absolute left-[25%] top-[50%] font-mono text-xs text-gray-900 dark:text-gray-200" style={{ animationDelay: "1.1s" }}>0</div>
    <div className="animate-binary-fade absolute left-[35%] top-[70%] font-mono text-xs text-gray-900 dark:text-gray-200" style={{ animationDelay: "3.4s" }}>1</div>
    <div className="animate-binary-fade absolute left-[45%] top-[90%] font-mono text-xs text-gray-900 dark:text-gray-200" style={{ animationDelay: "0.5s" }}>0</div>
    <div className="animate-binary-fade absolute left-[55%] top-[10%] font-mono text-xs text-gray-900 dark:text-gray-200" style={{ animationDelay: "2.1s" }}>1</div>
    <div className="animate-binary-fade absolute left-[65%] top-[40%] font-mono text-xs text-gray-900 dark:text-gray-200" style={{ animationDelay: "1.7s" }}>0</div>
    <div className="animate-binary-fade absolute left-[75%] top-[60%] font-mono text-xs text-gray-900 dark:text-gray-200" style={{ animationDelay: "2.9s" }}>1</div>
    <div className="animate-binary-fade absolute left-[85%] top-[80%] font-mono text-xs text-gray-900 dark:text-gray-200" style={{ animationDelay: "0.3s" }}>0</div>
    <div className="animate-binary-fade absolute left-[95%] top-[20%] font-mono text-xs text-gray-900 dark:text-gray-200" style={{ animationDelay: "1.4s" }}>1</div>
  </div>

  {/* Tech-themed radial gradients */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_30%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_30%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.1),transparent_30%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.15),transparent_30%)]" />
  </div>

  {/* Circuit Lines */}
  <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-20">
    <svg width="100%" height="100%" className="absolute">
      <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <path
          d="M0 50h40c5.5 0 10 4.5 10 10s4.5 10 10 10h40M50 0v40c0 5.5 4.5 10 10 10s10 4.5 10 10v40"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-gray-400 dark:text-gray-600"
        />
      </pattern>
      <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
    </svg>
  </div>
</div>`,
  },
  {
    id: "soft-gradient-waves",
    name: "Soft Gradient Waves",
    component: <SoftGradientWavesBackground />,
    code: `// Soft Gradient Waves

<div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
  <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-blue-950/20" />
  <svg
    className="absolute bottom-0 left-0 right-0 w-full opacity-30"
    viewBox="0 0 1200 200"
    preserveAspectRatio="none"
  >
    <path
      d="M0,100 C300,20 600,180 1200,100 L1200,200 L0,200 Z"
      className="fill-blue-200 dark:fill-blue-800/30"
    />
    <path
      d="M0,120 C500,60 700,180 1200,120 L1200,200 L0,200 Z"
      className="fill-blue-300 dark:fill-blue-700/30"
    />
    <path
      d="M0,150 C400,100 800,180 1200,150 L1200,200 L0,200 Z"
      className="fill-blue-400 dark:fill-blue-600/30"
    />
  </svg>
</div>`,
  },
  {
    id: "minimal-dots-grid",
    name: "Minimal Dots Grid",
    component: <MinimalDotsGridBackground />,
    code: `// Minimal Dots Grid
  
<div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: \`
        radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
        radial-gradient(circle, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
      \`,
      backgroundSize: "40px 40px, 20px 20px",
      backgroundPosition: "0 0, 20px 20px",
    }}
  />
</div>`,
  },  
  {
    id: "grid-finance",
    name: "Grid Finance",
    component: <GridFinanceBackground />,
    code: `// Grid Finance Background

<div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
  <div className="absolute inset-0 opacity-5 dark:opacity-10">
    <svg width="100%" height="100%">
      <pattern
        id="grid-finance"
        x="0"
        y="0"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M 40 0 L 0 0 0 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-gray-500 dark:text-gray-400"
        />
      </pattern>
      <rect width="100%" height="100%" fill="url(#grid-finance)" />
    </svg>
  </div>
</div>`,
  },
  {
    id: "gradient-with-blob",
    name: "Gradient with Blob",
    component: <GradientWithBlobBackground />,
    code: `// Gradient with Blob

<div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-950 dark:to-gray-900">
  <div className="absolute -right-1/4 top-0 aspect-square w-1/2 rounded-full bg-gradient-to-br from-emerald-200/40 to-teal-300/40 blur-3xl dark:from-emerald-800/20 dark:to-teal-700/20" />
  <div className="absolute -bottom-1/4 -left-1/4 aspect-square w-1/2 rounded-full bg-gradient-to-br from-blue-200/40 to-indigo-300/40 blur-3xl dark:from-blue-800/20 dark:to-indigo-700/20" />
</div>`,
  },
  {
    id: "hexagon-grid",
    name: "Hexagon Grid",
    component: <HexagonGridBackground />,
    code: `// Hexagon Grid Background

<div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
  <svg
    className="absolute inset-0 h-full w-full opacity-10 dark:opacity-20"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <pattern
      id="hexagon-pattern"
      x="0"
      y="0"
      width="16"
      height="28"
      patternUnits="userSpaceOnUse"
    >
      <path
        d="M8 2L14 8L14 20L8 26L2 20L2 8L8 2Z"
        className="stroke-gray-400 dark:stroke-gray-600"
        strokeWidth="0.5"
        fill="none"
      />
    </pattern>
    <rect
      x="0"
      y="0"
      width="100%"
      height="100%"
      fill="url(#hexagon-pattern)"
    />
  </svg>
</div>`,
  },
];