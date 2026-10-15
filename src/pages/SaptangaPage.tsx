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

      {/* Comprehensive Master Comparison Table: Kautilya's Meaning vs GandhaNiti Equivalent */}
      <section className="pt-8 border-t border-[#5A3A22]/20 space-y-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8902B] font-bold">
            The Governance Ledger · कौटिलीय नीति
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2E1B0F] mt-1">
            Kautilya’s Arthashastra Framework & The GandhaNiti Equivalent
          </h3>
          <p className="text-xs sm:text-sm text-[#5A3A22] leading-relaxed max-w-2xl mt-1">
            Honest trade was treated as a duty of the state. Below is our direct operational translation of the Saptanga elements into modern ethical commerce.
          </p>
        </div>

        <div className="parchment-card p-4 sm:p-6 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="border-b-2 border-[#5A3A22]/30 text-[#8A5A36] bg-[#E4D2A8]/30">
                  <th className="py-3 px-3 font-serif font-bold text-sm text-[#2E1B0F] w-48">Element</th>
                  <th className="py-3 px-3 font-semibold text-[#5A3A22] w-64">Kautilya’s meaning</th>
                  <th className="py-3 px-3 font-semibold text-[#2E1B0F]">GandhaNiti equivalent</th>
                  <th className="py-3 px-3 font-semibold text-right w-28">Pillar Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#5A3A22]/15">
                {SAPTANGA_ELEMENTS.map((elem) => {
                  const isSelected = elem.id === selectedElement.id;
                  return (
                    <tr
                      key={elem.id}
                      onClick={() => setSelectedElement(elem)}
                      className={`cursor-pointer transition-colors ${
                        isSelected ? 'bg-[#E4D2A8]/70 border-l-3 border-[#B8902B]' : 'hover:bg-[#E4D2A8]/30'
                      }`}
                    >
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full border border-[#B8902B] flex items-center justify-center bg-[#F1E6CC] text-[10px] font-devanagari text-[#6B1E1E] font-bold shrink-0">
                            {elem.devanagari.slice(0, 1)}
                          </span>
                          <div>
                            <span className="font-serif font-bold text-sm text-[#2E1B0F] block">
                              {elem.title}
                            </span>
                            <span className="font-devanagari text-[10px] text-[#8A5A36]">
                              {elem.devanagari}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-3 text-[#5A3A22] font-sans leading-relaxed">
                        {elem.kautilyaMeaning}
                      </td>
                      <td className="py-3 px-3 text-[#2E1B0F] font-sans font-medium leading-relaxed">
                        {elem.gandhanitiEquivalent}
                      </td>
                      <td className="py-3 px-3 text-right">
                        <a
                          href={`#${elem.actionPageLink}`}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#6B1E1E] hover:underline"
                        >
                          <span>Visit</span>
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
