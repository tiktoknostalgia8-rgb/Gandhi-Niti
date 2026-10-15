import React, { useState, useMemo, useEffect } from 'react';
import { PRODUCTS, Product } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ProductBottleSvg } from '../components/ProductBottleSvg';
import { useCart } from '../context/CartContext';
import { Search, Filter, X, ArrowRight, ShieldCheck } from 'lucide-react';

export const Shop: React.FC = () => {
  const { addToCart } = useCart();
  const [selectedFamily, setSelectedFamily] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default');
  const [searchQuery, setSearchQuery] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Close Quick View on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setQuickViewProduct(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const families = ['All', 'Earth', 'Floral', 'Wood', 'Green', 'Amber & Spice'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesFamily = selectedFamily === 'All' || p.scentFamily === selectedFamily;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.scentNotes.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.devanagariName.includes(searchQuery);
      return matchesFamily && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });
  }, [selectedFamily, sortBy, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-20">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-mono text-[#8A5A36]" aria-label="Breadcrumb">
        <a href="#/" className="hover:text-[#2E1B0F] transition-colors">Home</a>
        <span>/</span>
        <span className="text-[#2E1B0F] font-semibold">Shop Distillations</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#5A3A22]/20 pb-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8902B]">
            Authentic Botanical Oils
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2E1B0F] mt-1">
            The Kannauj Guild Flacons
          </h1>
          <p className="text-sm text-[#5A3A22] max-w-xl mt-1 leading-relaxed">
            All formulations are alcohol-free, hydro-distilled in traditional copper degs over gentle wood heat, and matured in sandalwood oil. All prices labeled <span className="font-semibold italic">Illustrative</span>.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#/quiz"
            className="px-4 py-2 text-xs font-semibold text-[#2E1B0F] bg-[#E4D2A8] hover:bg-[#D9B44A] border border-[#B8902B] rounded-[2px] transition-colors whitespace-nowrap"
          >
            Take 2-Min Scent Quiz
          </a>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-4 bg-[#E4D2A8]/30 border border-[#5A3A22]/20 rounded-[3px]">
        {/* Scent Family Filters */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-serif font-bold text-[#5A3A22] mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-[#B8902B]" />
            Family:
          </span>
          {families.map((fam) => (
            <button
              key={fam}
              onClick={() => setSelectedFamily(fam)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-[2px] transition-all whitespace-nowrap ${
                selectedFamily === fam
                  ? 'bg-[#2E1B0F] text-[#F1E6CC] shadow-xs'
                  : 'bg-[#F1E6CC] text-[#5A3A22] border border-[#5A3A22]/30 hover:border-[#B8902B]'
              }`}
            >
              {fam}
            </button>
          ))}
        </div>

        {/* Search & Sort Controls */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative flex-1 sm:w-56">
            <input
              type="text"
              placeholder="Search botanical note..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#F1E6CC] border border-[#5A3A22]/40 rounded-[2px] focus:outline-none focus:border-[#B8902B]"
            />
            <Search className="w-3.5 h-3.5 text-[#8A5A36] absolute left-2.5 top-2.5 pointer-events-none" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-2 text-[#8A5A36] hover:text-[#2E1B0F]"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Sort By */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-3 py-1.5 text-xs bg-[#F1E6CC] border border-[#5A3A22]/40 rounded-[2px] focus:outline-none focus:border-[#B8902B] text-[#2E1B0F]"
          >
            <option value="default">Sort: Guild Sequence</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-20 text-center space-y-3 parchment-card p-8">
          <p className="font-serif text-xl text-[#2E1B0F]">No botanical distillations matched your search.</p>
          <p className="text-xs text-[#5A3A22]">Try resetting your filter or searching for notes like "rain", "rose", "sandalwood", or "vetiver".</p>
          <button
            onClick={() => { setSelectedFamily('All'); setSearchQuery(''); }}
            className="mt-2 px-4 py-2 text-xs font-semibold bg-[#B8902B] text-[#2E1B0F] rounded-[2px]"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          ))}
        </div>
      )}

      {/* QUICK VIEW MODAL (Closes on Esc, backdrop click) */}
      {quickViewProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2E1B0F]/70"
          role="dialog"
          aria-modal="true"
          aria-label={`Quick view: ${quickViewProduct.name}`}
          onClick={() => setQuickViewProduct(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#F1E6CC] border-2 border-[#B8902B] rounded-[3px] p-6 shadow-2xl text-[#2E1B0F] max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 p-1.5 text-[#5A3A22] hover:text-[#2E1B0F] border border-[#5A3A22]/30 rounded-[2px] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Bottle Visual */}
              <div className="bg-[#E4D2A8]/40 border border-[#8A5A36]/30 p-6 rounded-[2px] flex items-center justify-center">
                <ProductBottleSvg
                  liquidColor={quickViewProduct.liquidColor}
                  productName={quickViewProduct.name}
                  isSet={quickViewProduct.isSet}
                />
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#8A5A36] uppercase">
                    <span>{quickViewProduct.scentFamily}</span>
                    <span>·</span>
                    <span>{quickViewProduct.volume}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#2E1B0F] mt-1">
                    {quickViewProduct.name}
                  </h3>
                  <span className="font-devanagari text-sm text-[#8A5A36]">
                    {quickViewProduct.devanagariName}
                  </span>
                </div>

                <p className="text-xs text-[#5A3A22] leading-relaxed">
                  {quickViewProduct.description}
                </p>

                <div className="p-3 bg-[#E4D2A8]/30 border border-[#5A3A22]/20 rounded-[2px] text-xs space-y-1">
                  <p><span className="font-semibold text-[#2E1B0F]">Alembic:</span> {quickViewProduct.copperDegNumber}</p>
                  <p><span className="font-semibold text-[#2E1B0F]">Distillation:</span> {quickViewProduct.distillationHours} continuous hours</p>
                  <p><span className="font-semibold text-[#2E1B0F]">Base:</span> {quickViewProduct.carrierBase}</p>
                </div>

                <div className="pt-2 flex items-baseline justify-between border-t border-[#5A3A22]/20">
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-2xl font-bold text-[#2E1B0F]">
                      ₹{quickViewProduct.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] text-[#8A5A36] font-mono uppercase">
                      ({quickViewProduct.priceLabel})
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#8A5A36]">{quickViewProduct.batchCode}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={`#/product/${quickViewProduct.id}`}
                    onClick={() => setQuickViewProduct(null)}
                    className="py-2.5 px-3 text-xs font-semibold text-[#2E1B0F] bg-transparent border border-[#5A3A22] hover:border-[#B8902B] rounded-[2px] text-center transition-colors"
                  >
                    Full PDP & 3D Flacon
                  </a>
                  <button
                    onClick={() => {
                      addToCart(quickViewProduct, 1);
                      setQuickViewProduct(null);
                    }}
                    className="py-2.5 px-3 text-xs font-semibold text-[#2E1B0F] bg-[#B8902B] hover:bg-[#D9B44A] border border-[#8A5A36] rounded-[2px] text-center transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
