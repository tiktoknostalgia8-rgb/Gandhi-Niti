import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { ProductBottleSvg } from './ProductBottleSvg';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
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

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsCartOpen(false);
      }
    };
    if (isCartOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCartOpen, setIsCartOpen]);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCoupon.trim()) return;
    const res = applyCoupon(inputCoupon);
    setCouponFeedback(res);
  };

  const freeShippingThreshold = 2500;
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - (subtotal - discountAmount));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-label="Shopping Bag">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#2E1B0F]/60 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F1E6CC] border-l-2 border-[#B8902B] text-[#2E1B0F] flex flex-col justify-between shadow-2xl">
          {/* Header */}
          <div className="px-6 py-5 border-b border-[#5A3A22]/20 flex items-center justify-between bg-[#E4D2A8]/40">
            <div className="flex items-baseline gap-2">
              <h2 className="font-serif text-xl font-bold tracking-tight">Your Flacon Bag</h2>
              <span className="text-xs font-mono text-[#8A5A36]">
                ({cart.reduce((c, i) => c + i.quantity, 0)} {cart.length === 1 ? 'item' : 'items'})
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-[#5A3A22] hover:text-[#2E1B0F] transition-colors rounded-[2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8902B]"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free shipping progress bar */}
          <div className="px-6 py-2.5 bg-[#E4D2A8]/20 border-b border-[#5A3A22]/15 text-xs text-[#5A3A22]">
            {amountNeededForFreeShipping === 0 ? (
              <span className="text-[#3B6E47] font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#3B6E47]" />
                Complimentary Imperial Guild Shipping unlocked across India!
              </span>
            ) : (
              <span>
                Add <span className="font-bold text-[#2E1B0F]">₹{amountNeededForFreeShipping.toLocaleString('en-IN')}</span> more to qualify for complimentary shipping (Free above ₹2,500).
              </span>
            )}
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-[#5A3A22]/15">
            {cart.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <p className="font-serif text-lg text-[#5A3A22]">Your flacon chest is currently empty.</p>
                <p className="text-xs text-[#8A5A36] max-w-xs mx-auto">
                  Begin by exploring our pure hydro-distilled botanicals or try the 5-vial Imperial Discovery Set.
                </p>
                <div className="pt-2">
                  <a
                    href="#/shop"
                    onClick={() => setIsCartOpen(false)}
                    className="inline-block px-4 py-2 text-xs font-semibold text-[#2E1B0F] bg-[#B8902B] hover:bg-[#D9B44A] border border-[#8A5A36] rounded-[2px] transition-colors"
                  >
                    Explore Shop
                  </a>
                </div>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.product.id} className="py-4 flex gap-4 items-start">
                  {/* Thumbnail */}
                  <div className="w-16 h-20 bg-[#E4D2A8]/50 border border-[#8A5A36]/30 rounded-[2px] p-1 shrink-0 flex items-center justify-center">
                    <ProductBottleSvg
                      liquidColor={item.product.liquidColor}
                      productName={item.product.name}
                      isSet={item.product.isSet}
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-serif font-bold text-sm text-[#2E1B0F] leading-snug">
                          {item.product.name}
                        </h4>
                        <span className="text-[11px] font-mono text-[#8A5A36]">
                          {item.product.volume}
                        </span>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-[#8A5A36] hover:text-[#6B1E1E] transition-colors p-1"
                        aria-label={`Remove ${item.product.name} from cart`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-[#5A3A22]/40 rounded-[2px] bg-[#F1E6CC]">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs text-[#5A3A22] hover:text-[#2E1B0F] hover:bg-[#E4D2A8]"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-mono font-bold text-[#2E1B0F] tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs text-[#5A3A22] hover:text-[#2E1B0F] hover:bg-[#E4D2A8]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Line Item Total */}
                      <span className="font-serif font-bold text-sm text-[#2E1B0F] tabular-nums">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Module */}
          {cart.length > 0 && (
            <div className="px-6 py-5 border-t border-[#5A3A22]/20 bg-[#E4D2A8]/30 space-y-4">
              {/* Coupon Code Input */}
              <div>
                {couponCode ? (
                  <div className="flex items-center justify-between p-2 rounded-[2px] bg-[#F1E6CC] border border-[#B8902B] text-xs">
                    <div className="flex items-center gap-1.5 text-[#3B6E47] font-semibold">
                      <Tag className="w-3.5 h-3.5" />
                      <span>{couponCode} (10% Off Applied)</span>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="text-xs text-[#6B1E1E] hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Use token KANNAUJ10"
                      value={inputCoupon}
                      onChange={(e) => setInputCoupon(e.target.value)}
                      className="flex-1 px-3 py-1.5 text-xs bg-[#F1E6CC] border border-[#5A3A22]/40 rounded-[2px] focus:outline-none focus:border-[#B8902B] uppercase tracking-wider"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 text-xs font-semibold bg-[#8A5A36] text-[#F1E6CC] hover:bg-[#5A3A22] rounded-[2px] transition-colors"
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

              {/* Calculations breakdown */}
              <div className="space-y-1.5 text-xs text-[#5A3A22] pt-2 border-t border-[#5A3A22]/15">
                <div className="flex justify-between">
                  <span>Distillations Subtotal</span>
                  <span className="font-mono tabular-nums text-[#2E1B0F]">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#6B1E1E]">
                    <span>Heritage Discount (10%)</span>
                    <span className="font-mono tabular-nums">-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Kannauj Insured Courier</span>
                  <span className="font-mono tabular-nums text-[#2E1B0F]">
                    {shippingFee === 0 ? 'Complimentary (Free)' : `₹${shippingFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-serif font-bold text-[#2E1B0F] pt-2 border-t border-[#5A3A22]/20">
                  <span>Total Amount (Illustrative)</span>
                  <span className="font-mono tabular-nums">₹{totalAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <a
                  href="#/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full py-3 px-4 flex items-center justify-center gap-2 text-sm font-semibold text-[#2E1B0F] bg-[#B8902B] hover:bg-[#D9B44A] border border-[#8A5A36] rounded-[2px] shadow-sm transition-all text-center"
                >
                  <span>Proceed to Guild Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-[10px] text-center text-[#8A5A36] font-mono">
                  Demo checkout: no real payment is taken
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
