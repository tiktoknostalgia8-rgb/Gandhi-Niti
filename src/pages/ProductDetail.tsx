import React, { useState } from 'react';
import { PRODUCTS, Product } from '../data/products';
import { ProductBottle3D } from '../components/ProductBottle3D';
import { ProductBottleSvg } from '../components/ProductBottleSvg';
import { SaptangaTag } from '../components/SaptangaTag';
import { useCart } from '../context/CartContext';
import { ArrowLeft, ShieldCheck, Plus, Minus, Check, Clock, Droplets, Flame, Sparkles } from 'lucide-react';

interface ProductDetailProps {
  productId: string;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ productId }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'profile' | 'craft' | 'application'>('profile');
  const [addedToast, setAddedToast] = useState(false);

  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 pb-24">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-mono text-[#8A5A36]" aria-label="Breadcrumb">
        <a href="#/" className="hover:text-[#2E1B0F] transition-colors">Home</a>
        <span>/</span>
        <a href="#/shop" className="hover:text-[#2E1B0F] transition-colors">Shop</a>
        <span>/</span>
        <span className="text-[#2E1B0F] font-semibold">{product.name}</span>
      </nav>

      {/* Main PDP Grid: Left 3D Viewport, Right Purchase Module */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column (7 cols): 3D Flacon Viewer + Thumbnails */}
        <div className="lg:col-span-7 space-y-4">
          <div className="parchment-card p-3 relative overflow-hidden">
            <ProductBottle3D
              liquidColor={product.liquidColor}
              productName={product.name}
            />
          </div>

          {/* Quick Craft Badges below 3D */}
          <div className="grid grid-cols-3 gap-3 text-center text-xs font-mono">
            <div className="p-3 bg-[#E4D2A8]/30 border border-[#5A3A22]/20 rounded-[2px]">
              <span className="text-[10px] text-[#8A5A36] uppercase block">Distillation</span>
              <span className="font-bold text-[#2E1B0F]">{product.distillationHours} Hours</span>
            </div>
            <div className="p-3 bg-[#E4D2A8]/30 border border-[#5A3A22]/20 rounded-[2px]">
              <span className="text-[10px] text-[#8A5A36] uppercase block">Alembic</span>
              <span className="font-bold text-[#2E1B0F] truncate">{product.copperDegNumber.split('(')[0]}</span>
            </div>
            <div className="p-3 bg-[#E4D2A8]/30 border border-[#5A3A22]/20 rounded-[2px]">
              <span className="text-[10px] text-[#8A5A36] uppercase block">Scent Intensity</span>
              <span className="font-bold text-[#2E1B0F]">{product.intensity}</span>
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): Contiguous Purchase Module */}
        <div className="lg:col-span-5 parchment-card p-6 sm:p-8 space-y-6">
          {/* Header & Sanskrit Title */}
          <div>
            <div className="flex items-center justify-between gap-2 text-xs font-mono text-[#8A5A36]">
              <span className="uppercase tracking-wider">{product.scentFamily} Flacon</span>
              <span>{product.volume}</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2E1B0F] mt-1">
              {product.name}
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-devanagari text-base text-[#8A5A36]">
                {product.devanagariName}
              </span>
              <span className="text-[#8A5A36]">·</span>
              <span className="text-xs font-serif italic text-[#5A3A22]">
                {product.subtitle}
              </span>
            </div>
          </div>

          {/* Scent notes summary */}
          <div className="p-3.5 bg-[#E4D2A8]/40 border-l-2 border-[#B8902B] rounded-r-[2px]">
            <p className="text-xs text-[#2E1B0F] italic leading-relaxed">
              "{product.scentNotes}"
            </p>
          </div>

          {/* Pricing & Illustrative notice */}
          <div className="pt-2 border-t border-[#5A3A22]/20">
            <div className="flex items-baseline justify-between">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl font-bold text-[#2E1B0F] tabular-nums">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                <span className="text-xs font-mono text-[#8A5A36] uppercase">
                  ({product.priceLabel})
                </span>
              </div>
              <span className="text-xs font-mono text-[#3B6E47] font-semibold">
                In Guild Vault · Ready to Dispatch
              </span>
            </div>
            <p className="text-[11px] text-[#8A5A36] mt-1">
              Taxes included · Free insured courier shipping on orders over ₹2,500.
            </p>
          </div>

          {/* Quantity Stepper & Add to Cart */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-[#5A3A22]/50 rounded-[2px] bg-[#F1E6CC]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-sm text-[#5A3A22] hover:text-[#2E1B0F] hover:bg-[#E4D2A8]"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-3 text-sm font-mono font-bold text-[#2E1B0F] tabular-nums">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-sm text-[#5A3A22] hover:text-[#2E1B0F] hover:bg-[#E4D2A8]"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 py-3 px-4 bg-[#B8902B] hover:bg-[#D9B44A] border border-[#8A5A36] text-[#2E1B0F] font-semibold text-sm rounded-[2px] transition-all shadow-xs flex items-center justify-center gap-2"
              >
                {addedToast ? (
                  <>
                    <Check className="w-4 h-4 text-[#2E1B0F]" />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <span>Add Flacon to Cart — ₹{(product.price * quantity).toLocaleString('en-IN')}</span>
                )}
              </button>
            </div>

            {/* Saptanga Durga Authentication Banner */}
            <div className="pt-2 flex items-center justify-between border-t border-[#5A3A22]/15">
              <SaptangaTag element="durga" size="sm" />
              <a
                href="#/batch-passport"
                className="text-xs text-[#8A5A36] hover:text-[#2E1B0F] underline font-mono"
              >
                Verify Batch #{product.batchCode}
              </a>
            </div>
          </div>

          {/* Detailed Olfactory Tabs */}
          <div className="pt-4 border-t border-[#5A3A22]/20 space-y-3">
            <div className="flex border-b border-[#5A3A22]/20 text-xs font-semibold">
              <button
                onClick={() => setActiveTab('profile')}
                className={`pb-2 px-3 transition-colors ${activeTab === 'profile' ? 'border-b-2 border-[#B8902B] text-[#2E1B0F]' : 'text-[#8A5A36]'}`}
              >
                Notes Architecture
              </button>
              <button
                onClick={() => setActiveTab('craft')}
                className={`pb-2 px-3 transition-colors ${activeTab === 'craft' ? 'border-b-2 border-[#B8902B] text-[#2E1B0F]' : 'text-[#8A5A36]'}`}
              >
                Deg Specifications
              </button>
              <button
                onClick={() => setActiveTab('application')}
                className={`pb-2 px-3 transition-colors ${activeTab === 'application' ? 'border-b-2 border-[#B8902B] text-[#2E1B0F]' : 'text-[#8A5A36]'}`}
              >
                How to Apply
              </button>
            </div>

            {activeTab === 'profile' && (
              <div className="space-y-3 text-xs leading-relaxed">
                <div>
                  <span className="font-bold text-[#8A5A36] uppercase text-[10px] block">Top Notes</span>
                  <p className="text-[#2E1B0F]">{product.topNotes.join(', ')}</p>
                </div>
                <div>
                  <span className="font-bold text-[#8A5A36] uppercase text-[10px] block">Heart Notes</span>
                  <p className="text-[#2E1B0F]">{product.heartNotes.join(', ')}</p>
                </div>
                <div>
                  <span className="font-bold text-[#8A5A36] uppercase text-[10px] block">Base Notes</span>
                  <p className="text-[#2E1B0F]">{product.baseNotes.join(', ')}</p>
                </div>
              </div>
            )}

            {activeTab === 'craft' && (
              <div className="space-y-2 text-xs leading-relaxed text-[#5A3A22]">
                <p><span className="font-bold text-[#2E1B0F]">Alembic:</span> {product.copperDegNumber}</p>
                <p><span className="font-bold text-[#2E1B0F]">Distillation:</span> {product.craftDetails}</p>
                <p><span className="font-bold text-[#2E1B0F]">Base Fixative:</span> {product.carrierBase}</p>
                <p><span className="font-bold text-[#2E1B0F]">Recommended Season:</span> {product.recommendedSeason}</p>
              </div>
            )}

            {activeTab === 'application' && (
              <div className="text-xs text-[#5A3A22] space-y-2 leading-relaxed">
                <p>
                  1. Swipe the smooth roll-on ball lightly across warm pulse points (inner wrist, neck, collarbone).
                </p>
                <p>
                  2. Avoid rubbing wrists together briskly; allow body warmth to naturally melt and bloom the sandalwood carrier.
                </p>
                <p>
                  3. Pure alcohol-free botanical oil develops slowly over 8 to 12 hours with zero harsh chemical sillage.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Heritage Distillations */}
      <div className="pt-12 border-t border-[#5A3A22]/20 space-y-6">
        <div className="flex items-baseline justify-between">
          <h3 className="font-serif text-2xl font-bold text-[#2E1B0F]">
            Complementary Distillations
          </h3>
          <a href="#/shop" className="text-xs font-semibold text-[#8A5A36] hover:text-[#2E1B0F] underline">
            View All Flacons
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedProducts.map((p) => (
            <div
              key={p.id}
              className="parchment-card p-4 flex flex-col justify-between hover:border-[#B8902B] transition-all"
            >
              <div className="h-32 flex items-center justify-center">
                <ProductBottleSvg
                  liquidColor={p.liquidColor}
                  productName={p.name}
                  isSet={p.isSet}
                />
              </div>
              <div className="mt-3">
                <h4 className="font-serif font-bold text-base text-[#2E1B0F]">{p.name}</h4>
                <p className="text-xs text-[#5A3A22] italic line-clamp-1">{p.scentNotes}</p>
                <div className="mt-3 flex items-center justify-between border-t border-[#5A3A22]/15 pt-2">
                  <span className="font-serif font-bold text-sm">₹{p.price.toLocaleString('en-IN')}</span>
                  <a
                    href={`#/product/${p.id}`}
                    className="text-xs font-semibold text-[#8A5A36] hover:text-[#2E1B0F]"
                  >
                    View →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
