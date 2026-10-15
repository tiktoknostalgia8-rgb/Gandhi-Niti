import React from 'react';

interface SaptangaTagProps {
  element: 'swami' | 'amatya' | 'janapada' | 'durga' | 'kosha' | 'danda' | 'mitra';
  size?: 'sm' | 'md';
  showSubtitle?: boolean;
  className?: string;
}

const SAPTANGA_META = {
  swami: {
    sanskrit: "स्वामिन्",
    name: "Swami",
    role: "Pillar I: Leadership & Vision",
    theme: "border-[#B8902B] text-[#5A3A22] bg-[#F1E6CC]"
  },
  amatya: {
    sanskrit: "अमात्य",
    name: "Amatya",
    role: "Pillar II: Ministers & Craft Advisors",
    theme: "border-[#B8902B] text-[#5A3A22] bg-[#F1E6CC]"
  },
  janapada: {
    sanskrit: "जनपद",
    name: "Janapada",
    role: "Pillar III: People, Soil & Guilds",
    theme: "border-[#B8902B] text-[#5A3A22] bg-[#F1E6CC]"
  },
  durga: {
    sanskrit: "दुर्ग",
    name: "Durga",
    role: "Pillar IV: Fortress & Batch Passport",
    theme: "border-[#B8902B] text-[#5A3A22] bg-[#F1E6CC]"
  },
  kosha: {
    sanskrit: "कोश",
    name: "Kosha",
    role: "Pillar V: Treasury & Unit Economics",
    theme: "border-[#B8902B] text-[#5A3A22] bg-[#F1E6CC]"
  },
  danda: {
    sanskrit: "दण्ड",
    name: "Danda",
    role: "Pillar VI: Purity Standards & Audits",
    theme: "border-[#B8902B] text-[#5A3A22] bg-[#F1E6CC]"
  },
  mitra: {
    sanskrit: "मित्र",
    name: "Mitra",
    role: "Pillar VII: Allies & Gifting Patrons",
    theme: "border-[#B8902B] text-[#5A3A22] bg-[#F1E6CC]"
  }
};

export const SaptangaTag: React.FC<SaptangaTagProps> = ({
  element,
  size = 'md',
  showSubtitle = true,
  className = ''
}) => {
  const meta = SAPTANGA_META[element];

  return (
    <a
      href={`#/saptanga?pillar=${element}`}
      className={`inline-flex items-center gap-2 px-2.5 py-1 rounded border border-[#B8902B]/80 bg-[#E4D2A8]/40 hover:bg-[#E4D2A8]/80 text-[#2E1B0F] transition-all group whitespace-nowrap shadow-xs ${className}`}
      title={`Saptanga Element: ${meta.name} (${meta.sanskrit}) - Click to explore full statecraft wheel`}
    >
      {/* Tiny gold seal circle with Sanskrit letter */}
      <span className="w-5 h-5 rounded-full border border-[#B8902B] flex items-center justify-center bg-[#F1E6CC] text-[10px] font-devanagari text-[#6B1E1E] font-bold shrink-0 group-hover:scale-105 transition-transform">
        {meta.sanskrit.slice(0, 1)}
      </span>
      
      <span className="font-serif font-semibold text-xs tracking-wide">
        {meta.name}
      </span>
      <span className="font-devanagari text-[11px] text-[#8A5A36]">
        ({meta.sanskrit})
      </span>

      {showSubtitle && size === 'md' && (
        <>
          <span className="text-[#8A5A36] text-xs">·</span>
          <span className="text-[11px] text-[#5A3A22] hidden sm:inline font-sans">
            {meta.role.split(':')[1]?.trim() || meta.role}
          </span>
        </>
      )}

      <span className="text-[#B8902B] text-xs transition-transform group-hover:translate-x-0.5">
        →
      </span>
    </a>
  );
};
