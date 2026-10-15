import React from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'compact' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  showTagline = false
}) => {
  const sealSizes = {
    sm: 32,
    md: 40,
    lg: 56
  };

  const sealDim = sealSizes[size];

  // Original SVG: teardrop ittar bottle inside a thin double-ring gold seal with a small lotus at the base
  const sealSvg = (
    <svg
      width={sealDim}
      height={sealDim}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      aria-label="GandhaNiti Royal Seal"
      role="img"
    >
      {/* Outer thin ring */}
      <circle cx="32" cy="32" r="30" stroke="#B8902B" strokeWidth="1.2" strokeOpacity="0.9" />
      
      {/* Delicate inner beaded / dashed ring */}
      <circle cx="32" cy="32" r="26.5" stroke="#B8902B" strokeWidth="0.8" strokeDasharray="2 1.5" strokeOpacity="0.7" />
      
      {/* Subtle royal background fill */}
      <circle cx="32" cy="32" r="26" fill="#F1E6CC" />

      {/* Stopper cap */}
      <rect x="29.5" y="10" width="5" height="5" rx="1" fill="#B8902B" stroke="#8A5A36" strokeWidth="0.6" />
      {/* Gold neck ring */}
      <path d="M28 15 H36 V17 H28 Z" fill="#D9B44A" stroke="#8A5A36" strokeWidth="0.5" />

      {/* Teardrop ittar bottle silhouette */}
      <path
        d="M32 17 C26 25 21 32 21 39 C21 45.075 25.925 50 32 50 C38.075 50 43 45.075 43 39 C43 32 38 25 32 17 Z"
        fill="url(#goldSealSheen)"
        stroke="#8A5A36"
        strokeWidth="1.1"
      />

      {/* Liquid level inside teardrop */}
      <path
        d="M23 40 C23 45 27 48 32 48 C37 48 41 45 41 40 C38 41.5 35 41 32 40 C28 39 25 40.5 23 40 Z"
        fill="#8A5A36"
        fillOpacity="0.35"
      />

      {/* Small lotus at the base */}
      <g transform="translate(32, 45)">
        {/* Central petal */}
        <path d="M0 -3 C-1.5 -1 -1.5 1 0 2.5 C1.5 1 1.5 -1 0 -3 Z" fill="#B8902B" />
        {/* Left petal */}
        <path d="M-1 -1.5 C-3.5 -0.5 -4 1.5 -2 2.5 C-0.5 2 -0.5 0.5 -1 -1.5 Z" fill="#B8902B" fillOpacity="0.85" />
        {/* Right petal */}
        <path d="M1 -1.5 C3.5 -0.5 4 1.5 2 2.5 C0.5 2 0.5 0.5 1 -1.5 Z" fill="#B8902B" fillOpacity="0.85" />
      </g>

      {/* Gradients */}
      <defs>
        <linearGradient id="goldSealSheen" x1="21" y1="17" x2="43" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D9B44A" />
          <stop offset="0.5" stopColor="#B8902B" />
          <stop offset="1" stopColor="#8A5A36" />
        </linearGradient>
      </defs>
    </svg>
  );

  if (variant === 'compact') {
    return sealSvg;
  }

  return (
    <div className={`flex items-center gap-3 group ${variant === 'vertical' ? 'flex-col text-center' : ''}`}>
      {sealSvg}
      <div className="flex flex-col text-left">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span className="font-serif tracking-tight text-xl md:text-2xl font-bold text-[#2E1B0F] whitespace-nowrap">
            GandhaNiti
          </span>
        </div>
        <span className="font-devanagari text-xs md:text-sm text-[#8A5A36] tracking-wider leading-tight">
          गन्धनीति
        </span>
        {showTagline && (
          <span className="text-[11px] text-[#5A3A22] italic font-serif mt-1 max-w-xs">
            Where the empire's fragrance finds its trust.
          </span>
        )}
      </div>
    </div>
  );
};
