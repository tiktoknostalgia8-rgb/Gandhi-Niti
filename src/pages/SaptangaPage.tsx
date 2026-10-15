import React, { useState, useEffect } from 'react';
import { SAPTANGA_ELEMENTS, SaptangaElement } from '../data/saptanga';
import { SaptangaWheel3D } from '../components/SaptangaWheel3D';
import { ArrowRight, BookOpen, Shield, Crown, Users, MapPin, Coins, Scale, Handshake } from 'lucide-react';

export const SaptangaPage: React.FC = () => {
  const [selectedElement, setSelectedElement] = useState<SaptangaElement>(SAPTANGA_ELEMENTS[0]);

  // Check query parameter on load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes('?')) {
      const queryParams = new URLSearchParams(hash.split('?')[1]);
      const pillarParam = queryParams.get('pillar')?.toLowerCase();
      if (pillarParam) {
        const found = SAPTANGA_ELEMENTS.find(e => e.id === pillarParam);
        if (found) {
          setSelectedElement(found);
        }
      }
    }
  }, []);

  const getElementIcon = (iconName: string) => {
    switch (iconName) {
      case 'Crown': return <Crown className="w-5 h-5 text-[#B8902B]" />;
      case 'Users': return <Users className="w-5 h-5 text-[#B8902B]" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-[#B8902B]" />;
      case 'ShieldCheck': return <Shield className="w-5 h-5 text-[#B8902B]" />;
      case 'Coins': return <Coins className="w-5 h-5 text-[#B8902B]" />;
      case 'Scale': return <Scale className="w-5 h-5 text-[#B8902B]" />;
      case 'Handshake': return <Handshake className="w-5 h-5 text-[#B8902B]" />;
      default: return <BookOpen className="w-5 h-5 text-[#B8902B]" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 pb-24 text-[#2E1B0F]">
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-[#B8902B] font-bold">
          Arthashastra Political Philosophy · सप्ताङ्ग
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2E1B0F]">
          The Seven Pillars of Statecraft
        </h1>
        <p className="text-sm sm:text-base text-[#5A3A22] leading-relaxed">
          Kautilya structured a resilient commonwealth through seven interdependent limbs (Saptanga). GandhaNiti adapts this framework to protect authentic Kannauj hydro-distillation from deceptive market decay.
        </p>
      </div>

      {/* Main Grid: 3D Wheel Left, Interactive Selected Panel Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (7 cols): Procedural 3D Wheel */}
        <div className="lg:col-span-7 space-y-4">
          <div className="parchment-card p-2 bg-[#E4D2A8]/20 border border-[#B8902B]/40 relative">
            <SaptangaWheel3D
              selectedElementId={selectedElement.id}
              onSelectElement={(el) => setSelectedElement(el)}
            />
          </div>

          {/* Quick Node Selector Tabs */}
          <div className="grid grid-cols-7 gap-1.5 pt-2">
            {SAPTANGA_ELEMENTS.map((el) => {
              const isSelected = el.id === selectedElement.id;
              return (
                <button
                  key={el.id}
                  onClick={() => setSelectedElement(el)}
                  className={`p-2 rounded-[2px] text-center border transition-all ${
                    isSelected
                      ? 'bg-[#6B1E1E] text-[#F1E6CC] border-[#6B1E1E]'
                      : 'bg-[#F1E6CC] text-[#2E1B0F] border-[#5A3A22]/20 hover:border-[#B8902B]'
                  }`}
                  title={`${el.name} (${el.devanagari})`}
                >
                  <span className="font-devanagari text-xs font-bold block">{el.devanagari.slice(0, 1)}</span>
                  <span className="font-serif text-[10px] truncate block hidden sm:inline">{el.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column (5 cols): Deep Explanation Panel */}
        <div className="lg:col-span-5 parchment-card p-6 sm:p-8 space-y-6 border-2 border-[#B8902B]">
          <div className="flex items-start justify-between border-b border-[#5A3A22]/20 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase text-[#8A5A36] tracking-wider">
                  Pillar Definition
                </span>
                <span className="text-xs font-mono text-[#B8902B]">·</span>
                <span className="text-xs font-mono text-[#B8902B] font-bold">
                  {selectedElement.id.toUpperCase()}
                </span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-[#2E1B0F] mt-1 flex items-baseline gap-2">
                <span>{selectedElement.name}</span>
                <span className="font-devanagari text-lg text-[#8A5A36]">({selectedElement.devanagari})</span>
              </h2>
              <p className="font-serif italic text-xs text-[#5A3A22] mt-0.5">
                {selectedElement.title}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#E4D2A8] border border-[#B8902B] flex items-center justify-center shrink-0">
              {getElementIcon(selectedElement.iconName)}
            </div>
          </div>

          {/* Classical Meaning (Paraphrased) */}
          <div className="space-y-1.5 text-xs">
            <span className="font-bold text-[#8A5A36] uppercase text-[10px] tracking-wider block">
              1. Classical Meaning (Paraphrased from Arthashastra)
            </span>
            <p className="text-[#2E1B0F] leading-relaxed">
              {selectedElement.meaningParaphrased}
            </p>
            <p className="italic text-[#8A5A36] text-[11px] pt-1">
              "{selectedElement.quoteParaphrase}"
            </p>
          </div>

          {/* GandhaNiti Implementation */}
          <div className="space-y-1.5 text-xs pt-3 border-t border-[#5A3A22]/15">
            <span className="font-bold text-[#8A5A36] uppercase text-[10px] tracking-wider block">
              2. How GandhaNiti Implements This Pillar
            </span>
            <p className="text-[#2E1B0F] leading-relaxed">
              {selectedElement.gandhanitiAction}
            </p>
          </div>

          {/* Action Link to Live Page */}
          <div className="pt-4 border-t border-[#5A3A22]/20">
            <a
              href={`#${selectedElement.actionPageLink}`}
              className="w-full py-3 px-4 bg-[#B8902B] hover:bg-[#D9B44A] text-[#2E1B0F] font-semibold text-xs rounded-[2px] border border-[#8A5A36] transition-all flex items-center justify-center gap-2 text-center"
            >
              <span>{selectedElement.actionPageLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Comprehensive 7-Pillars Matrix Summary */}
      <div className="pt-8 border-t border-[#5A3A22]/20 space-y-6">
        <div className="max-w-2xl">
          <h3 className="font-serif text-2xl font-bold text-[#2E1B0F]">
            The Sovereign Spectrum
          </h3>
          <p className="text-xs text-[#5A3A22] leading-relaxed">
            Every operational policy at GandhaNiti traces back directly to one of these seven constitutive elements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SAPTANGA_ELEMENTS.map((elem) => (
            <div
              key={elem.id}
              className={`p-4 rounded-[2px] border transition-all cursor-pointer ${
                elem.id === selectedElement.id
                  ? 'bg-[#E4D2A8]/60 border-[#B8902B]'
                  : 'bg-[#F1E6CC] border-[#5A3A22]/20 hover:border-[#B8902B]'
              }`}
              onClick={() => setSelectedElement(elem)}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-serif font-bold text-sm text-[#2E1B0F]">
                  {elem.name} ({elem.devanagari})
                </span>
                <span className="text-[10px] font-mono text-[#8A5A36]">
                  {elem.id.toUpperCase()}
                </span>
              </div>
              <p className="text-xs text-[#5A3A22] line-clamp-2 leading-relaxed">
                {elem.gandhanitiAction}
              </p>
              <span className="text-[11px] font-semibold text-[#8A5A36] hover:text-[#2E1B0F] mt-2 block">
                Select Pillar →
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
