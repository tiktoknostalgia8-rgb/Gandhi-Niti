import React from 'react';
import { SITE_CONFIG } from '../config';
import { SAPTANGA_ELEMENTS } from '../data/saptanga';
import { Mail, Phone, MapPin, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#2E1B0F] text-[#F1E6CC] pt-12 pb-8 border-t-2 border-[#B8902B]">
      {/* 1. SAPTANGA STRIP: "Built on the seven pillars" */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 border-b border-[#5A3A22]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#B8902B]">
              Arthashastra Foundation
            </span>
            <h4 className="font-serif text-lg font-bold text-[#F1E6CC]">
              Built on the Seven Pillars of Statecraft (सप्ताङ्ग)
            </h4>
          </div>
          <a
            href="#/saptanga"
            className="text-xs font-medium text-[#D9B44A] hover:text-white flex items-center gap-1 group"
          >
            Explore Interactive 3D Wheel
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* 7 small seal icons linking to each element's panel */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {SAPTANGA_ELEMENTS.map((elem) => (
            <a
              key={elem.id}
              href={`#/saptanga?pillar=${elem.id}`}
              className="flex items-center gap-2.5 p-2 rounded-[2px] bg-[#3D2515]/60 border border-[#8A5A36]/40 hover:border-[#B8902B] hover:bg-[#5A3A22]/50 transition-all group"
            >
              <div className="w-7 h-7 rounded-full border border-[#B8902B] flex items-center justify-center bg-[#2E1B0F] text-[11px] font-devanagari text-[#D9B44A] font-bold shrink-0 group-hover:scale-105 transition-transform">
                {elem.devanagari.slice(0, 1)}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-serif text-xs font-semibold text-[#F1E6CC] truncate">
                  {elem.name}
                </span>
                <span className="text-[10px] text-[#D9B44A]/80 font-devanagari truncate">
                  {elem.devanagari}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Fort Rampart Silhouette (SVG) */}
      <div className="w-full overflow-hidden opacity-25 my-6 pointer-events-none select-none">
        <svg viewBox="0 0 1200 45" className="w-full h-8 text-[#B8902B]" fill="currentColor">
          <path d="M0 45 L0 25 L30 25 L30 15 L50 15 L50 25 L80 25 L80 15 L100 15 L100 25 L150 25 L150 10 L180 10 L180 25 L210 25 L210 15 L230 15 L230 25 L280 25 L280 15 L300 15 L300 25 L360 25 L360 10 L390 10 L390 25 L450 25 L450 15 L470 15 L470 25 L520 25 L520 10 L560 10 L560 25 L620 25 L620 15 L640 15 L640 25 L700 25 L700 10 L730 10 L730 25 L780 25 L780 15 L800 15 L800 25 L860 25 L860 10 L890 10 L890 25 L950 25 L950 15 L970 15 L970 25 L1020 25 L1020 10 L1060 10 L1060 25 L1120 25 L1120 15 L1140 15 L1140 25 L1200 25 L1200 45 Z" />
        </svg>
      </div>

      {/* 2. FOUR COLUMNS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Brand & Ethos */}
        <div className="space-y-3">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#F1E6CC]">
              {SITE_CONFIG.brandName}
            </span>
            <span className="font-devanagari text-sm text-[#D9B44A]">
              {SITE_CONFIG.brandNameDevanagari}
            </span>
          </div>
          <p className="font-serif italic text-sm text-[#D9B44A] leading-relaxed">
            "{SITE_CONFIG.tagline}"
          </p>
          <p className="text-xs text-[#E4D2A8]/75 leading-relaxed">
            Traditional hydro-distilled botanical attars from Kannauj. Preserving the ancient Deg-Bapka copper alembic guild against cheap synthetic fragrances.
          </p>
          <div className="pt-2">
            <a
              href="#/batch-passport"
              className="inline-flex items-center gap-1.5 text-xs text-[#D9B44A] border border-[#B8902B]/40 px-2.5 py-1 rounded-[2px] hover:bg-[#B8902B]/20 transition-colors"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Verify Batch Passport</span>
            </a>
          </div>
        </div>

        {/* Column 2: Flacons & Discovery */}
        <div className="space-y-2">
          <h5 className="font-serif text-sm font-bold uppercase tracking-wider text-[#B8902B]">
            Distillations
          </h5>
          <ul className="space-y-1.5 text-xs text-[#E4D2A8]/80">
            <li><a href="#/shop" className="hover:text-[#D9B44A] transition-colors">All Pure Ittars</a></li>
            <li><a href="#/product/mitti-attar" className="hover:text-[#D9B44A] transition-colors">Mitti Attar (Petrichor Clay)</a></li>
            <li><a href="#/product/gulab-attar" className="hover:text-[#D9B44A] transition-colors">Gulab Attar (Dawn Rose)</a></li>
            <li><a href="#/product/chandan-attar" className="hover:text-[#D9B44A] transition-colors">Chandan Attar (Aged Sandalwood)</a></li>
            <li><a href="#/product/khus-attar" className="hover:text-[#D9B44A] transition-colors">Khus Attar (River Vetiver)</a></li>
            <li><a href="#/product/shamama-attar" className="hover:text-[#D9B44A] transition-colors">Shamama Attar (40 Secret Spices)</a></li>
            <li><a href="#/product/discovery-set" className="hover:text-[#D9B44A] font-semibold text-[#D9B44A] transition-colors">Imperial Discovery Set (5 x 2ml)</a></li>
          </ul>
        </div>

        {/* Column 3: The State & Research */}
        <div className="space-y-2">
          <h5 className="font-serif text-sm font-bold uppercase tracking-wider text-[#B8902B]">
            Statecraft & Story
          </h5>
          <ul className="space-y-1.5 text-xs text-[#E4D2A8]/80">
            <li><a href="#/about" className="hover:text-[#D9B44A] transition-colors">Our Story & Decline of Attar</a></li>
            <li><a href="#/saptanga" className="hover:text-[#D9B44A] transition-colors">The Saptanga Model (7 Pillars)</a></li>
            <li><a href="#/business-model" className="hover:text-[#D9B44A] transition-colors">Open Unit Economics (Kosha)</a></li>
            <li><a href="#/quiz" className="hover:text-[#D9B44A] transition-colors">Find Your Scent Quiz</a></li>
            <li><a href="#/gifting" className="hover:text-[#D9B44A] transition-colors">Corporate & Patron Gifting</a></li>
            <li><a href="#/qa" className="hover:text-[#D9B44A] font-mono text-[11px] text-[#B8902B]">Guild Route Index (/qa)</a></li>
          </ul>
        </div>

        {/* Column 4: Contact & Verification */}
        <div className="space-y-3">
          <h5 className="font-serif text-sm font-bold uppercase tracking-wider text-[#B8902B]">
            Guild Hall Contact
          </h5>
          <div className="space-y-2 text-xs text-[#E4D2A8]/85">
            <div className="flex items-start gap-2">
              <Mail className="w-4 h-4 text-[#D9B44A] shrink-0 mt-0.5" />
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="hover:text-white break-all transition-colors"
              >
                {SITE_CONFIG.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#D9B44A] shrink-0" />
              <a
                href={SITE_CONFIG.contact.phoneTel}
                className="hover:text-white font-mono transition-colors"
              >
                {SITE_CONFIG.contact.phoneFormatted}
              </a>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#D9B44A] shrink-0 mt-0.5" />
              <div>
                <p className="leading-snug">{SITE_CONFIG.contact.address}</p>
                <p className="text-[10px] text-[#B8902B] font-mono mt-0.5">{SITE_CONFIG.contact.addressNote}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. LEGAL BAR & DEMO CHECKOUT NOTICE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-[#5A3A22]/50 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#E4D2A8]/70">
        <div className="flex flex-wrap items-center gap-4">
          <span>© {new Date().getFullYear()} {SITE_CONFIG.brandName} ({SITE_CONFIG.brandNameDevanagari}).</span>
          <span className="text-[#8A5A36]">·</span>
          <span className="font-mono text-[#D9B44A] bg-[#6B1E1E]/40 px-2 py-0.5 rounded-[2px] border border-[#B8902B]/30">
            Demo checkout: no real payment is taken
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-[11px]">
          <a href="#/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          <span className="text-[#8A5A36]">·</span>
          <a href="#/terms" className="hover:text-white transition-colors">Terms of Trade</a>
          <span className="text-[#8A5A36]">·</span>
          <a href="#/returns" className="hover:text-white transition-colors">Purity & Returns (Danda)</a>
        </div>
      </div>
    </footer>
  );
};
