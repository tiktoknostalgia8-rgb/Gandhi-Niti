import React from 'react';
import { ArrowRight, Compass, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center space-y-6 text-[#2E1B0F]">
      <div className="w-16 h-16 rounded-full bg-[#E4D2A8] border-2 border-[#B8902B] flex items-center justify-center mx-auto text-[#6B1E1E] font-serif text-2xl font-bold">
        404
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-[#B8902B] font-bold">
          Lost Caravan Path
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold">
          This Flacon Cannot Be Found
        </h1>
        <p className="text-xs sm:text-sm text-[#5A3A22] leading-relaxed max-w-md mx-auto">
          The requested parchment or distillates path does not exist in the GandhaNiti registry. Follow the trade roads back to the guild hall.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <a
          href="#/"
          className="px-5 py-2.5 text-xs font-semibold bg-[#B8902B] hover:bg-[#D9B44A] text-[#2E1B0F] border border-[#8A5A36] rounded-[2px] flex items-center gap-2"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Return Home</span>
        </a>
        <a
          href="#/shop"
          className="px-5 py-2.5 text-xs font-semibold bg-[#F1E6CC] hover:bg-[#E4D2A8] text-[#2E1B0F] border border-[#5A3A22]/40 rounded-[2px] flex items-center gap-2"
        >
          <span>Explore Shop</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
        <a
          href="#/quiz"
          className="px-5 py-2.5 text-xs font-semibold bg-[#F1E6CC] hover:bg-[#E4D2A8] text-[#2E1B0F] border border-[#5A3A22]/40 rounded-[2px] flex items-center gap-2"
        >
          <Compass className="w-3.5 h-3.5" />
          <span>Scent Quiz</span>
        </a>
      </div>
    </div>
  );
};
