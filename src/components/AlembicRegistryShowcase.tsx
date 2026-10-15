import React, { useState } from 'react';
import { PRODUCTS, Product } from '../data/products';
import { ProductBottleSvg } from './ProductBottleSvg';
import { useCart } from '../context/CartContext';
import { ShieldCheck, Flame, Droplets, Clock, ExternalLink, ArrowRight } from 'lucide-react';

export const AlembicRegistryShowcase: React.FC = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0]);

  return (
    <div className="h-full flex flex-col justify-between space-y-4">
      {/* Top Bar of the Tablet */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#5A3A22]/20 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#B8902B]" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#2E1B0F]">
            Kannauj Craft Cluster · Bhatthi Alembic Registry
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono text-[#8A5A36]">
          <span>Registry Node: KNJ-DEG-NORTH</span>
          <span>·</span>
          <span className="text-[#3B6E47] font-semibold">Active Distillation</span>
        </div>
      </div>

      {/* Main Body */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 flex-1 items-center">
        {/* Left: Flacon Selector & Visual (5 cols) */}
        <div className="md:col-span-5 flex flex-col items-center justify-center bg-[#E4D2A8]/30 border border-[#5A3A22]/20 p-4 rounded-[3px] relative">
          <div className="w-36 h-48 flex items-center justify-center">
            <ProductBottleSvg
              liquidColor={selectedProduct.liquidColor}
              productName={selectedProduct.name}
              isSet={selectedProduct.isSet}
            />
          </div>

          <div className="text-center mt-2">
            <h4 className="font-serif font-bold text-lg text-[#2E1B0F]">{selectedProduct.name}</h4>
            <span className="font-devanagari text-xs text-[#8A5A36]">{selectedProduct.devanagariName}</span>
            <p className="text-[11px] text-[#5A3A22] italic mt-0.5 line-clamp-1">{selectedProduct.subtitle}</p>
          </div>

          {/* Quick Flacon Selectors */}
          <div className="flex gap-1.5 mt-3 pt-2 border-t border-[#5A3A22]/20">
            {PRODUCTS.slice(0, 4).map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedProduct(p)}
                className={`px-2 py-0.5 text-[10px] font-mono rounded-[2px] transition-colors border ${
                  selectedProduct.id === p.id
                    ? 'bg-[#2E1B0F] text-[#F1E6CC] border-[#2E1B0F]'
                    : 'bg-[#F1E6CC] text-[#5A3A22] border-[#5A3A22]/30 hover:border-[#B8902B]'
                }`}
              >
                {p.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Technical Distillation Telemetry (7 cols) */}
        <div className="md:col-span-7 flex flex-col justify-between space-y-3 text-xs">
          <div>
            <div className="flex items-center justify-between border-b border-[#5A3A22]/15 pb-1 mb-2">
              <span className="font-serif font-bold text-sm text-[#2E1B0F]">
                Hydro-Distillation Specifications
              </span>
              <span className="font-mono text-[11px] text-[#B8902B] font-bold">
                Batch #{selectedProduct.batchCode}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 font-mono text-[11px]">
              <div className="p-2 bg-[#F1E6CC] border border-[#5A3A22]/20 rounded-[2px]">
                <span className="text-[#8A5A36] text-[9px] uppercase block">Copper Alembic</span>
                <span className="font-bold text-[#2E1B0F]">{selectedProduct.copperDegNumber.split('(')[0]}</span>
              </div>
              <div className="p-2 bg-[#F1E6CC] border border-[#5A3A22]/20 rounded-[2px]">
                <span className="text-[#8A5A36] text-[9px] uppercase block">Distillation Run</span>
                <span className="font-bold text-[#2E1B0F]">{selectedProduct.distillationHours} Consecutive Hours</span>
              </div>
              <div className="p-2 bg-[#F1E6CC] border border-[#5A3A22]/20 rounded-[2px]">
                <span className="text-[#8A5A36] text-[9px] uppercase block">Embers Source</span>
                <span className="font-bold text-[#2E1B0F]">Seasoned Babool Wood</span>
              </div>
              <div className="p-2 bg-[#F1E6CC] border border-[#5A3A22]/20 rounded-[2px]">
                <span className="text-[#8A5A36] text-[9px] uppercase block">Receiver Base Oil</span>
                <span className="font-bold text-[#2E1B0F]">Pure Sandalwood (Album)</span>
              </div>
            </div>
          </div>

          {/* GC-MS Purity Verification Banner */}
          <div className="p-2.5 bg-[#3B6E47]/10 border border-[#3B6E47]/30 rounded-[2px] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#3B6E47]" />
              <div>
                <span className="font-bold text-[#2E1B0F] block text-[11px]">GC-MS Purity Chromatography Passed</span>
                <span className="text-[10px] text-[#3B6E47] font-mono">0.00% Diethyl Phthalate (DEP) · 0% Alcohol</span>
              </div>
            </div>
            <span className="text-[10px] font-mono font-bold text-[#3B6E47] uppercase border border-[#3B6E47]/40 px-1.5 py-0.5 rounded-[2px]">
              Verified
            </span>
          </div>

          {/* Direct Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => addToCart(selectedProduct, 1)}
              className="w-full sm:w-auto flex-1 py-2.5 px-4 bg-[#B8902B] hover:bg-[#D9B44A] text-[#2E1B0F] font-semibold text-xs rounded-[2px] border border-[#8A5A36] transition-all text-center shadow-xs"
            >
              Add {selectedProduct.name} to Cart — ₹{selectedProduct.price.toLocaleString('en-IN')}
            </button>
            <a
              href="#/batch-passport"
              className="w-full sm:w-auto py-2.5 px-3 border border-[#5A3A22]/40 hover:border-[#B8902B] rounded-[2px] text-xs font-semibold text-[#2E1B0F] flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Inspect Full QR Passport</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Saptanga Durga Security Seal */}
      <div className="border-t border-[#5A3A22]/20 pt-2 flex items-center justify-between text-[11px] font-mono text-[#8A5A36]">
        <span>Pillar IV (Durga): Immutable Cryptographic Transparency</span>
        <span className="text-[#6B1E1E] font-semibold">Simulated Living Bhatthi</span>
      </div>
    </div>
  );
};
