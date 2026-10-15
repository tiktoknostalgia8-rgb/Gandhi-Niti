import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ProductBottleSvg } from '../components/ProductBottleSvg';
import { Plus, Minus, Trash2, ArrowRight, ShieldCheck, Tag, ShoppingBag } from 'lucide-react';

export const CartPage: React.FC = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    subtotal,
    discountAmount,
    shippingFee,
    totalAmount,
    couponCode,
    applyCoupon,
    removeCoupon
  } = useCart();

  const [inputCoupon, setInputCoupon] = useState('');
  const [couponFeedback, setCouponFeedback] = useState<{ success: boolean; message: string } | null>(null);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCoupon.trim()) return;
    const res = applyCoupon(inputCoupon);
    setCouponFeedback(res);
  };

  const freeShippingThreshold = 2500;
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - (subtotal - discountAmount));

  if (cart.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-24 text-center space-y-4 text-[#2E1B0F]">
        <div className="w-16 h-16 rounded-full bg-[#E4D2A8] border-2 border-[#B8902B] flex items-center justify-center mx-auto text-[#8A5A36]">
          <ShoppingBag className="w-8 h-8" />
        </div>
        <h1 className="font-serif text-3xl font-bold">Your Flacon Bag is Empty</h1>
        <p className="text-xs sm:text-sm text-[#5A3A22] leading-relaxed max-w-sm mx-auto">
          Explore our collection of authentic Kannauj botanical hydro-distillations or begin with the 5-vial Imperial Discovery Set.
        </p>
        <div className="pt-2">
          <a
            href="#/shop"
            className="px-6 py-2.5 text-xs font-semibold bg-[#B8902B] hover:bg-[#D9B44A] text-[#2E1B0F] border border-[#8A5A36] rounded-[2px] inline-block transition-colors"
          >
            Explore Pure Ittars
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 pb-24 text-[#2E1B0F]">
      {/* Header */}
      <div className="border-b border-[#5A3A22]/20 pb-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#B8902B]">
          Current Selection
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2E1B0F] mt-1">
          Your Flacon Chest ({cart.reduce((c, i) => c + i.quantity, 0)} {cart.length === 1 ? 'item' : 'items'})
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (8 cols): Items Table */}
        <div className="lg:col-span-8 parchment-card p-6 space-y-4">
          <div className="divide-y divide-[#5A3A22]/15">
            {cart.map((item) => (
              <div key={item.product.id} className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-20 bg-[#E4D2A8]/50 border border-[#8A5A36]/30 rounded-[2px] p-1 shrink-0 flex items-center justify-center">
                    <ProductBottleSvg
                      liquidColor={item.product.liquidColor}
                      productName={item.product.name}
                      isSet={item.product.isSet}
                    />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#2E1B0F]">{item.product.name}</h3>
                    <p className="text-xs text-[#8A5A36] font-mono">{item.product.volume} · Batch #{item.product.batchCode}</p>
                    <p className="text-xs text-[#5A3A22] italic mt-0.5 line-clamp-1">{item.product.scentNotes}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                  {/* Stepper */}
                  <div className="flex items-center border border-[#5A3A22]/40 rounded-[2px] bg-[#F1E6CC]">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="px-2.5 py-1 text-xs text-[#5A3A22] hover:text-[#2E1B0F] hover:bg-[#E4D2A8]"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="px-3 text-xs font-mono font-bold text-[#2E1B0F] tabular-nums">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="px-2.5 py-1 text-xs text-[#5A3A22] hover:text-[#2E1B0F] hover:bg-[#E4D2A8]"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <span className="font-serif font-bold text-base text-[#2E1B0F] tabular-nums min-w-20 text-right">
                    ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                  </span>

                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-[#8A5A36] hover:text-[#6B1E1E] transition-colors p-1"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (4 cols): Order Summary & Checkout */}
        <div className="lg:col-span-4 parchment-card p-6 space-y-6">
          <h2 className="font-serif text-xl font-bold text-[#2E1B0F] border-b border-[#5A3A22]/20 pb-3">
            Invoice Summary
          </h2>

          {/* Coupon */}
          <div>
            {couponCode ? (
              <div className="flex items-center justify-between p-2 rounded-[2px] bg-[#E4D2A8] border border-[#B8902B] text-xs">
                <span className="text-[#3B6E47] font-semibold">{couponCode} (10% Applied)</span>
                <button onClick={removeCoupon} className="text-xs text-[#6B1E1E] hover:underline">Remove</button>
              </div>
            ) : (
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Token (KANNAUJ10)"
                  value={inputCoupon}
                  onChange={(e) => setInputCoupon(e.target.value)}
                  className="flex-1 px-3 py-1.5 text-xs bg-[#F1E6CC] border border-[#5A3A22]/40 rounded-[2px] focus:outline-none focus:border-[#B8902B] uppercase"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 text-xs font-semibold bg-[#8A5A36] text-[#F1E6CC] hover:bg-[#5A3A22] rounded-[2px]"
                >
                  Apply
                </button>
              </form>
            )}
            {couponFeedback && (
              <p className={`text-[11px] mt-1 ${couponFeedback.success ? 'text-[#3B6E47]' : 'text-[#6B1E1E]'}`}>
                {couponFeedback.message}
              </p>
            )}
          </div>

          <div className="space-y-2 text-xs text-[#5A3A22] border-t border-[#5A3A22]/15 pt-3">
            <div className="flex justify-between">
              <span>Distillations Subtotal</span>
              <span className="font-mono text-[#2E1B0F]">₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            {discountAmount > 0 && (
              <div className="flex justify-between text-[#6B1E1E]">
                <span>10% Heritage Discount</span>
                <span className="font-mono">-₹{discountAmount.toLocaleString('en-IN')}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Kannauj Insured Courier</span>
              <span className="font-mono text-[#2E1B0F]">
                {shippingFee === 0 ? 'Complimentary (Free)' : `₹${shippingFee}`}
              </span>
            </div>
            <div className="flex justify-between text-base font-serif font-bold text-[#2E1B0F] pt-2 border-t border-[#5A3A22]/20">
              <span>Total Payable</span>
              <span className="font-mono">₹{totalAmount.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <a
            href="#/checkout"
            className="w-full py-3 bg-[#B8902B] hover:bg-[#D9B44A] text-[#2E1B0F] font-semibold text-xs rounded-[2px] border border-[#8A5A36] transition-all flex items-center justify-center gap-2 text-center shadow-xs"
          >
            <span>Proceed to Checkout</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
