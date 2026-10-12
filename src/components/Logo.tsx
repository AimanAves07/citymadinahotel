import React from 'react';

interface LogoProps {
  variant?: 'navbar' | 'footer' | 'large' | 'icon-only';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'navbar', className = '' }) => {
  const isDarkFooter = variant === 'footer';

  // Standalone Unique City Madina Emblem Icon
  const Emblem = ({ size = 42 }: { size?: number }) => (
    <div
      className="relative flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        <defs>
          {/* Royal Gradient: Rich Violet to Purple */}
          <linearGradient id="cmRoyalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#4C1D95" />
          </linearGradient>

          {/* Golden Amber Culinary Accent */}
          <linearGradient id="cmGoldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#FDE68A" />
          </linearGradient>

          {/* Mint Teal Radiance Accent */}
          <linearGradient id="cmTealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5EEAD4" />
            <stop offset="100%" stopColor="#14B8A6" />
          </linearGradient>

          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Circular Medallion with Ornate Notches */}
        <circle
          cx="50"
          cy="50"
          r="47"
          fill={isDarkFooter ? '#1E1B38' : '#FFFFFF'}
          stroke="url(#cmRoyalGrad)"
          strokeWidth="2.5"
        />

        {/* Inner Subtle Geometric Ring */}
        <circle
          cx="50"
          cy="50"
          r="43"
          stroke="url(#cmGoldGrad)"
          strokeWidth="1"
          strokeDasharray="2 3"
          opacity="0.85"
        />

        {/* Traditional Mughal / Madina Arch (Mehrab) Silhouette */}
        <path
          d="M26 78 V48 C26 35 37 25 50 20 C63 25 74 35 74 48 V78 Z"
          fill="url(#cmRoyalGrad)"
          opacity="0.95"
        />

        {/* Decorative Inner Arch Filigree */}
        <path
          d="M31 78 V50 C31 39 40 30 50 26 C60 30 69 39 69 50 V78"
          stroke="url(#cmGoldGrad)"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />

        {/* Crest Apex: Crescent Moon and Star (Symbol of Madina heritage) */}
        <path
          d="M50 11 C47 11 44.5 12.5 44.5 15 C44.5 17.5 47 19 50 19 C52.2 19 54 18 54.8 16.5 C53 16.8 51.2 16.2 50.5 14.8 C49.8 13.4 50.2 11.8 51.5 11.2 C51 11.1 50.5 11 50 11 Z"
          fill="url(#cmGoldGrad)"
        />
        <circle cx="54.5" cy="13.5" r="1.2" fill="url(#cmGoldGrad)" />

        {/* Culinary Element: Sacred Flame & Aromatic Spice Handi (Smoky Grill & Dum Biryani) */}
        <path
          d="M50 43 C46 48 45 52 47 56 C48.5 59 51.5 59 53 56 C55 52 54 48 50 43 Z"
          fill="url(#cmGoldGrad)"
        />
        <path
          d="M50 47 C48 50 47.5 52.5 48.5 54.5 C49.2 55.8 50.8 55.8 51.5 54.5 C52.5 52.5 52 50 50 47 Z"
          fill="#FFFBEB"
        />

        {/* Distinctive Monogram: "C" and "M" in royal typography */}
        <g id="monogram">
          {/* C Curve */}
          <path
            d="M40 68 C36.5 68 34 65.5 34 62 C34 58.5 36.5 56 40 56 C42 56 43.5 56.8 44.2 58 L42 59.2 C41.5 58.5 40.8 58 40 58 C37.8 58 36.2 59.8 36.2 62 C36.2 64.2 37.8 66 40 66 C41 66 41.8 65.5 42.3 64.6 L44.3 65.8 C43.5 67.2 41.8 68 40 68 Z"
            fill="url(#cmTealGrad)"
          />
          {/* M Letter */}
          <path
            d="M48 68 V56.5 H50.2 L53 62.5 L55.8 56.5 H58 V68 H56 V60.5 L53.8 65.2 H52.2 L50 60.5 V68 H48 Z"
            fill="url(#cmTealGrad)"
          />
        </g>

        {/* Base Pedestal Ribbon / "1553" or Established 2016 Starlets */}
        <path
          d="M20 78 C30 75 70 75 80 78 C76 83 24 83 20 78 Z"
          fill="url(#cmGoldGrad)"
        />
        <circle cx="50" cy="79" r="1.5" fill="#4C1D95" />
        <circle cx="42" cy="79" r="1" fill="#4C1D95" />
        <circle cx="58" cy="79" r="1" fill="#4C1D95" />

        {/* Side Starbursts (Traditional Islamic 8-point stars) */}
        <g transform="translate(18, 48) scale(0.6)">
          <path d="M0 -5 L1.5 -1.5 L5 0 L1.5 1.5 L0 5 L-1.5 1.5 L-5 0 L-1.5 -1.5 Z" fill="url(#cmGoldGrad)" />
        </g>
        <g transform="translate(82, 48) scale(0.6)">
          <path d="M0 -5 L1.5 -1.5 L5 0 L1.5 1.5 L0 5 L-1.5 1.5 L-5 0 L-1.5 -1.5 Z" fill="url(#cmGoldGrad)" />
        </g>
      </svg>
    </div>
  );

  if (variant === 'icon-only') {
    return <Emblem size={44} />;
  }

  if (variant === 'large') {
    return (
      <div className={`flex flex-col items-center text-center gap-3 ${className}`}>
        <Emblem size={72} />
        <div>
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="h-px w-6 bg-gradient-to-r from-transparent to-[#FBBF24]" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#F59E0B]">
              Est. 2016 · Channapatna
            </span>
            <span className="h-px w-6 bg-gradient-to-l from-transparent to-[#FBBF24]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight text-[#2D2A4A]">
            CITY MADINA
          </h2>
          <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#7C3AED]">
            Restaurant & Hotel
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`flex items-center gap-3.5 group ${className}`}>
        <Emblem size={44} />
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#A78BFA] transition-colors">
              CITY MADINA
            </span>
            <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-[#A78BFA]/20 text-[#5EEAD4] border border-[#5EEAD4]/30">
              Hotel
            </span>
          </div>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#A78BFA] font-medium">
            <span>Restaurant</span>
            <span>·</span>
            <span>Channapatna</span>
          </div>
        </div>
      </div>
    );
  }

  // Default: 'navbar'
  return (
    <div className={`flex items-center gap-3 group text-left whitespace-nowrap shrink-0 ${className}`}>
      <Emblem size={42} />
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1.5">
          <span className="font-serif text-xl sm:text-2xl font-black tracking-tight text-[#2D2A4A] group-hover:text-[#7C3AED] transition-colors">
            CITY MADINA
          </span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#7C3AED] font-bold">
            Restaurant & Hotel
          </span>
          <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#5EEAD4]" />
          <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider text-[#2D2A4A]/60 font-medium">
            Channapatna
          </span>
        </div>
      </div>
    </div>
  );
};
