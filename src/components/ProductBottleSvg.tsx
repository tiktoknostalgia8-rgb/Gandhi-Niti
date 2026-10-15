import React from 'react';

interface ProductBottleSvgProps {
  liquidColor: string;
  isSet?: boolean;
  productName: string;
  className?: string;
}

export const ProductBottleSvg: React.FC<ProductBottleSvgProps> = ({
  liquidColor,
  isSet = false,
  productName,
  className = ""
}) => {
  // Unique gradient ID per render
  const gradId = `liquid-grad-${productName.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;

  if (isSet && productName.includes("Discovery")) {
    // 5 Discovery vials in a handcrafted row
    return (
      <div className={`relative flex items-center justify-center p-6 ${className}`}>
        {/* Mehrab Arch Backdrop */}
        <div className="absolute inset-2 bg-[#E4D2A8]/35 border border-[#B8902B]/30 mehrab-arch pointer-events-none" />
        
        <svg
          viewBox="0 0 200 160"
          className="w-full h-44 drop-shadow-sm transition-transform duration-300 group-hover:-translate-y-1.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Wooden base tray */}
          <rect x="25" y="130" width="150" height="12" rx="2" fill="#5A3A22" stroke="#2E1B0F" strokeWidth="1" />
          <line x1="30" y1="134" x2="170" y2="134" stroke="#8A5A36" strokeWidth="0.8" />
          <circle cx="100" cy="136" r="2" fill="#B8902B" />

          {/* 5 mini sample vials */}
          {[-48, -24, 0, 24, 48].map((offset, idx) => {
            const vialColors = ["#C48B57", "#D65D6E", "#3B6E47", "#E5C85A", "#87321A"];
            const vialColor = vialColors[idx];
            const cx = 100 + offset;
            return (
              <g key={idx} transform={`translate(${offset}, 0)`}>
                {/* Vial Cap */}
                <rect x="94" y="55" width="12" height="10" rx="1.5" fill="#2E1B0F" stroke="#5A3A22" strokeWidth="0.8" />
                <rect x="96" y="52" width="8" height="3" rx="0.5" fill="#B8902B" />
                {/* Amber Glass Body */}
                <rect x="93" y="66" width="14" height="64" rx="2" fill="#F1E6CC" stroke="#5A3A22" strokeWidth="1" />
                {/* Liquid Fill */}
                <rect x="95" y="78" width="10" height="50" rx="1" fill={vialColor} fillOpacity="0.85" />
                {/* Mini label band */}
                <rect x="94" y="90" width="12" height="14" fill="#E4D2A8" stroke="#8A5A36" strokeWidth="0.5" />
                <line x1="96" y1="96" x2="104" y2="96" stroke="#2E1B0F" strokeWidth="0.8" />
              </g>
            );
          })}
        </svg>
      </div>
    );
  }

  if (isSet && productName.includes("Heritage")) {
    // Royal Casket Chest with 3 flacons
    return (
      <div className={`relative flex items-center justify-center p-6 ${className}`}>
        <div className="absolute inset-2 bg-[#E4D2A8]/35 border border-[#B8902B]/30 mehrab-arch pointer-events-none" />
        <svg
          viewBox="0 0 200 160"
          className="w-full h-44 drop-shadow-sm transition-transform duration-300 group-hover:-translate-y-1.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Casket lid open silhouette */}
          <path d="M30 45 L170 45 L180 90 L20 90 Z" fill="#5A3A22" stroke="#2E1B0F" strokeWidth="1.2" />
          {/* Silk lining */}
          <rect x="35" y="75" width="130" height="55" rx="2" fill="#E4D2A8" stroke="#B8902B" strokeWidth="1" />
          
          {/* Three Royal Flacons */}
          {[-32, 0, 32].map((offset, idx) => {
            const trioColors = ["#D65D6E", "#E2BA6D", "#87321A"];
            return (
              <g key={idx} transform={`translate(${offset}, 0)`}>
                {/* Dome Brass Cap */}
                <path d="M93 68 Q100 60 107 68 Z" fill="#B8902B" stroke="#5A3A22" strokeWidth="0.8" />
                <rect x="96" y="68" width="8" height="6" fill="#D9B44A" stroke="#5A3A22" strokeWidth="0.6" />
                {/* Faceted Bottle */}
                <rect x="92" y="75" width="16" height="46" rx="2" fill="#F1E6CC" stroke="#5A3A22" strokeWidth="1" />
                <rect x="94" y="84" width="12" height="35" rx="1" fill={trioColors[idx]} fillOpacity="0.85" />
                {/* Gold filigree line */}
                <circle cx="100" cy="100" r="2.5" fill="#B8902B" stroke="#2E1B0F" strokeWidth="0.5" />
              </g>
            );
          })}

          {/* Casket base */}
          <rect x="25" y="90" width="150" height="42" rx="2" fill="#3D2515" stroke="#2E1B0F" strokeWidth="1.2" />
          {/* Brass latch */}
          <rect x="95" y="88" width="10" height="12" rx="1" fill="#B8902B" stroke="#2E1B0F" strokeWidth="0.8" />
          <circle cx="100" cy="94" r="1.5" fill="#2E1B0F" />
        </svg>
      </div>
    );
  }

  // Standard 10 ml Roll-on Bottle with Kannauj mehrab arch
  return (
    <div className={`relative flex items-center justify-center p-6 ${className}`}>
      {/* Mehrab Arch Backdrop */}
      <div className="absolute inset-3 bg-[#E4D2A8]/30 border border-[#B8902B]/25 mehrab-arch pointer-events-none" />

      <svg
        viewBox="0 0 160 180"
        className="w-full h-44 drop-shadow-sm transition-transform duration-300 group-hover:-translate-y-2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={liquidColor} stopOpacity="0.5" />
            <stop offset="60%" stopColor={liquidColor} stopOpacity="0.85" />
            <stop offset="100%" stopColor={liquidColor} stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id="goldCapGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8A5A36" />
            <stop offset="25%" stopColor="#D9B44A" />
            <stop offset="60%" stopColor="#B8902B" />
            <stop offset="100%" stopColor="#5A3A22" />
          </linearGradient>
        </defs>

        {/* Soft shadow on parchment floor */}
        <ellipse cx="80" cy="155" rx="36" ry="6" fill="#2E1B0F" fillOpacity="0.12" />

        {/* Roll-on Ball (visible through transparent collar) */}
        <circle cx="80" cy="40" r="7" fill="#E4D2A8" stroke="#8A5A36" strokeWidth="0.8" />
        <ellipse cx="78" cy="38" rx="2" ry="1.5" fill="#FFFFFF" fillOpacity="0.6" />

        {/* Outer Fluted Cylindrical Cap (Tilted or resting over bottle) */}
        <g id="gold-cap">
          <rect x="66" y="16" width="28" height="28" rx="2" fill="url(#goldCapGrad)" stroke="#5A3A22" strokeWidth="0.9" />
          {/* Vertical fluting ridges */}
          <line x1="72" y1="18" x2="72" y2="42" stroke="#5A3A22" strokeWidth="0.6" strokeOpacity="0.6" />
          <line x1="77" y1="18" x2="77" y2="42" stroke="#5A3A22" strokeWidth="0.6" strokeOpacity="0.6" />
          <line x1="83" y1="18" x2="83" y2="42" stroke="#5A3A22" strokeWidth="0.6" strokeOpacity="0.6" />
          <line x1="88" y1="18" x2="88" y2="42" stroke="#5A3A22" strokeWidth="0.6" strokeOpacity="0.6" />
          {/* Cap crest ring */}
          <path d="M68 18 H92" stroke="#D9B44A" strokeWidth="1" />
        </g>

        {/* Gold Neck Collar */}
        <rect x="71" y="44" width="18" height="6" fill="#B8902B" stroke="#8A5A36" strokeWidth="0.8" />
        <rect x="70" y="50" width="20" height="3" fill="#D9B44A" stroke="#5A3A22" strokeWidth="0.7" />

        {/* Glass Bottle Body with Thick Base */}
        <rect
          x="62"
          y="53"
          width="36"
          height="96"
          rx="3"
          fill="#F1E6CC"
          fillOpacity="0.75"
          stroke="#5A3A22"
          strokeWidth="1.2"
        />

        {/* Liquid Reservoir */}
        <rect
          x="65"
          y="66"
          width="30"
          height="76"
          rx="2"
          fill={`url(#${gradId})`}
          stroke={liquidColor}
          strokeWidth="0.5"
        />

        {/* Liquid meniscus surface */}
        <path d="M65 66 Q80 68 95 66" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.6" fill="none" />

        {/* Paper Scent Band / Label */}
        <rect x="63" y="84" width="34" height="32" fill="#E4D2A8" stroke="#8A5A36" strokeWidth="0.6" />
        {/* Sanskrit & Brand marks on bottle */}
        <line x1="68" y1="92" x2="92" y2="92" stroke="#5A3A22" strokeWidth="0.8" />
        <circle cx="80" cy="100" r="3" stroke="#B8902B" strokeWidth="0.6" fill="none" />
        <line x1="72" y1="108" x2="88" y2="108" stroke="#8A5A36" strokeWidth="0.6" strokeDasharray="1 1" />

        {/* Glass Highlights */}
        <line x1="65" y1="56" x2="65" y2="144" stroke="#FFFFFF" strokeWidth="0.9" strokeOpacity="0.6" />
        <rect x="63" y="142" width="34" height="6" fill="#5A3A22" fillOpacity="0.12" />
      </svg>
    </div>
  );
};
