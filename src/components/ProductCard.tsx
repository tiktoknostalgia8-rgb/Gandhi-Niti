import React from 'react';
import { Product } from '../data/products';
import { ProductBottleSvg } from './ProductBottleSvg';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative flex flex-col justify-between bg-[#F1E6CC] border border-[#5A3A22] rounded-[3px] shadow-[0_2px_8px_-2px_rgba(46,27,15,0.08)] hover:border-[#B8902B] hover:shadow-[0_6px_16px_-4px_rgba(46,27,15,0.14)] transition-all duration-300">
      {/* Thin inner gold hairline */}
      <div className="absolute inset-1 border border-[#B8902B]/30 rounded-[2px] pointer-events-none group-hover:border-[#B8902B]/70 transition-colors" />

      {/* Top category & volume line */}
      <div className="relative pt-4 px-4 flex items-center justify-between text-xs text-[#5A3A22]">
        <span className="font-serif tracking-wider uppercase text-[11px] font-semibold text-[#8A5A36]">
          {product.scentFamily}
        </span>
        <span className="tabular-nums font-mono text-[11px] text-[#5A3A22]">
          {product.volume}
        </span>
      </div>

      {/* Hand-drawn SVG bottle with faint mehrab arch */}
      <div className="relative px-2">
        <ProductBottleSvg
          liquidColor={product.liquidColor}
          productName={product.name}
          isSet={product.isSet}
        />
      </div>

      {/* Content block */}
      <div className="relative px-4 pb-4 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-serif text-lg font-bold text-[#2E1B0F] tracking-tight">
              {product.name}
            </h3>
            <span className="font-devanagari text-xs text-[#8A5A36]">
              {product.devanagariName}
            </span>
          </div>

          <p className="text-xs text-[#5A3A22] line-clamp-2 mt-1 leading-relaxed italic">
            {product.scentNotes}
          </p>
        </div>

        {/* Price & Action row */}
        <div className="mt-4 pt-3 border-t border-[#5A3A22]/20">
          <div className="flex items-baseline justify-between mb-3">
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-xl font-bold text-[#2E1B0F] tabular-nums">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              <span className="text-[10px] text-[#8A5A36] uppercase tracking-wider font-mono">
                ({product.priceLabel})
              </span>
            </div>
            <span className="text-[11px] text-[#8A5A36] font-mono">
              {product.batchCode}
            </span>
          </div>

          {/* Action buttons: squared corners 2-4px, NOT pill-shaped */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onQuickView ? onQuickView(product) : (window.location.hash = `#/product/${product.id}`)}
              className="px-3 py-2 text-xs font-semibold text-[#2E1B0F] bg-transparent border border-[#5A3A22] hover:border-[#B8902B] hover:bg-[#E4D2A8]/50 rounded-[2px] transition-all text-center"
              aria-label={`View details for ${product.name}`}
            >
              View Flacon
            </button>
            <button
              onClick={() => addToCart(product, 1)}
              className="px-3 py-2 text-xs font-semibold text-[#2E1B0F] bg-[#B8902B] hover:bg-[#D9B44A] border border-[#8A5A36] rounded-[2px] transition-all text-center shadow-xs"
              aria-label={`Add ${product.name} to cart`}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
