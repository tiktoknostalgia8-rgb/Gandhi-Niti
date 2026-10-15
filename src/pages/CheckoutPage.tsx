import React, { useState } from 'react';
import { useCart, PlacedOrder } from '../context/CartContext';
import { SaptangaTag } from '../components/SaptangaTag';
import { ShieldCheck, ArrowRight, ArrowLeft, Check, Lock, AlertCircle } from 'lucide-react';

export const CheckoutPage: React.FC = () => {
  const {
    cart,
    subtotal,
    discountAmount,
    shippingFee,
    totalAmount,
    couponCode,
    clearCart,
    setLastOrder
  } = useCart();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    addressLine: '',
    city: '',
    state: 'Uttar Pradesh',
    pincode: '',
    paymentMethod: 'upi', // upi | card | cod
    upiId: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
    notes: ''
  });

  // Validation Errors State
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required.';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) errs.email = 'Valid email is required for tracking.';
    if (!formData.phone.trim() || !/^\+?[0-9]{10,13}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errs.phone = 'Valid phone number required for courier dispatch.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs: Record<string, string> = {};
    if (!formData.addressLine.trim()) errs.addressLine = 'Street address / premises required.';
    if (!formData.city.trim()) errs.city = 'City / Town required.';
    if (!formData.pincode.trim() || !/^[0-9]{6}$/.test(formData.pincode.trim())) {
      errs.pincode = 'Valid 6-digit Indian Postal Code required.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep3 = () => {
    const errs: Record<string, string> = {};
    if (formData.paymentMethod === 'upi') {
      if (!formData.upiId.trim() || !formData.upiId.includes('@')) {
        errs.upiId = 'Please enter a valid demo Virtual Payment Address (e.g., patron@okhdfcbank).';
      }
    } else if (formData.paymentMethod === 'card') {
      if (!formData.cardNumber.trim() || formData.cardNumber.replace(/\s/g, '').length < 15) {
        errs.cardNumber = 'Valid 16-digit card number required.';
      }
      if (!formData.cardExpiry.trim()) errs.cardExpiry = 'Expiry MM/YY required.';
      if (!formData.cardCvv.trim() || formData.cardCvv.length < 3) errs.cardCvv = 'CVV required.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
    else if (step === 3 && validateStep3()) setStep(4);
  };

  const handlePlaceOrder = () => {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const orderId = `GN-KNJ-2026-${randomSuffix}`;

    const newOrder: PlacedOrder = {
      orderId,
      date: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      items: [...cart],
      subtotal,
      discount: discountAmount,
      shippingFee,
      total: totalAmount,
      shippingDetails: {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        addressLine: formData.addressLine,
        city: formData.city,
        state: formData.state,
        pincode: formData.pincode
      },
      paymentMethod: formData.paymentMethod.toUpperCase()
    };

    setLastOrder(newOrder);
    clearCart();
    window.location.hash = '#/order-confirmation';
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="font-serif text-3xl font-bold text-[#2E1B0F]">Your Bag is Empty</h1>
        <p className="text-xs text-[#5A3A22]">Please select your ittar flacons before entering the checkout pavilion.</p>
        <a
          href="#/shop"
          className="inline-block px-6 py-2.5 text-xs font-semibold bg-[#B8902B] text-[#2E1B0F] border border-[#8A5A36] rounded-[2px]"
        >
          Return to Shop
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-24">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-mono text-[#8A5A36]" aria-label="Breadcrumb">
        <a href="#/" className="hover:text-[#2E1B0F]">Home</a>
        <span>/</span>
        <a href="#/shop" className="hover:text-[#2E1B0F]">Shop</a>
        <span>/</span>
        <span className="text-[#2E1B0F] font-semibold">Secure Checkout</span>
      </nav>

      {/* Mandatory Demo Banner & Durga Saptanga Tag */}
      <div className="p-4 bg-[#6B1E1E]/10 border-2 border-[#6B1E1E] rounded-[3px] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-bold text-[#6B1E1E]">
          <Lock className="w-4 h-4 shrink-0" />
          <span>Demo checkout: no real payment is taken · Simulated Kannauj Order Gateway</span>
        </div>
        <SaptangaTag element="durga" size="sm" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (7 cols): Step Form */}
        <div className="lg:col-span-7 parchment-card p-6 sm:p-8 space-y-6">
          {/* Step Stepper Header */}
          <div className="grid grid-cols-4 gap-2 text-xs font-mono border-b border-[#5A3A22]/20 pb-4">
            <div className={`text-center pb-1 ${step >= 1 ? 'font-bold text-[#2E1B0F] border-b-2 border-[#B8902B]' : 'text-[#8A5A36]'}`}>
              1. Patron
            </div>
            <div className={`text-center pb-1 ${step >= 2 ? 'font-bold text-[#2E1B0F] border-b-2 border-[#B8902B]' : 'text-[#8A5A36]'}`}>
              2. Delivery
            </div>
            <div className={`text-center pb-1 ${step >= 3 ? 'font-bold text-[#2E1B0F] border-b-2 border-[#B8902B]' : 'text-[#8A5A36]'}`}>
              3. Payment
            </div>
            <div className={`text-center pb-1 ${step >= 4 ? 'font-bold text-[#2E1B0F] border-b-2 border-[#B8902B]' : 'text-[#8A5A36]'}`}>
              4. Review
            </div>
          </div>

          {/* STEP 1: PATRON DETAILS */}
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="font-serif text-xl font-bold text-[#2E1B0F]">Step 1: Patron Identification</h2>
              <div>
                <label className="block text-xs font-semibold text-[#5A3A22] mb-1">Full Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Maharani Gayatri / Raghavendra Roy"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-[#F1E6CC] border border-[#5A3A22]/40 rounded-[2px] focus:outline-none focus:border-[#B8902B]"
                />
                {errors.fullName && <p className="text-[11px] text-[#6B1E1E] mt-1">{errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#5A3A22] mb-1">Email Address *</label>
                  <input
                    type="email"
                    placeholder="patron@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-[#F1E6CC] border border-[#5A3A22]/40 rounded-[2px] focus:outline-none focus:border-[#B8902B]"
                  />
                  {errors.email && <p className="text-[11px] text-[#6B1E1E] mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5A3A22] mb-1">Mobile Contact *</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-[#F1E6CC] border border-[#5A3A22]/40 rounded-[2px] focus:outline-none focus:border-[#B8902B]"
                  />
                  {errors.phone && <p className="text-[11px] text-[#6B1E1E] mt-1">{errors.phone}</p>}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: DELIVERY ADDRESS */}
          {step === 2 && (
            <div className="space-y-4">
              <h2 className="font-serif text-xl font-bold text-[#2E1B0F]">Step 2: Insured Delivery Address</h2>
              <div>
                <label className="block text-xs font-semibold text-[#5A3A22] mb-1">Street Address / Haveli / Apartment *</label>
                <input
                  type="text"
                  placeholder="Plot No., House Name, Roadway"
                  value={formData.addressLine}
                  onChange={(e) => setFormData({ ...formData, addressLine: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-[#F1E6CC] border border-[#5A3A22]/40 rounded-[2px] focus:outline-none focus:border-[#B8902B]"
                />
                {errors.addressLine && <p className="text-[11px] text-[#6B1E1E] mt-1">{errors.addressLine}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#5A3A22] mb-1">City / Town *</label>
                  <input
                    type="text"
                    placeholder="e.g. Lucknow / New Delhi"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-[#F1E6CC] border border-[#5A3A22]/40 rounded-[2px] focus:outline-none focus:border-[#B8902B]"
                  />
                  {errors.city && <p className="text-[11px] text-[#6B1E1E] mt-1">{errors.city}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5A3A22] mb-1">State / UT</label>
                  <select
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-[#F1E6CC] border border-[#5A3A22]/40 rounded-[2px] focus:outline-none focus:border-[#B8902B]"
                  >
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Delhi NCT">Delhi NCT</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Other States">Other States / UTs</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5A3A22] mb-1">Postal Code (PIN) *</label>
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="e.g. 209725"
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-[#F1E6CC] border border-[#5A3A22]/40 rounded-[2px] focus:outline-none focus:border-[#B8902B]"
                  />
                  {errors.pincode && <p className="text-[11px] text-[#6B1E1E] mt-1">{errors.pincode}</p>}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: PAYMENT METHOD */}
          {step === 3 && (
            <div className="space-y-4">
              <h2 className="font-serif text-xl font-bold text-[#2E1B0F]">Step 3: Payment Gateway (Simulated Demo)</h2>
              <div className="space-y-2">
                {[
                  { id: 'upi', label: 'UPI (Instant QR / VPA)', desc: 'Google Pay, PhonePe, Paytm, BHIM' },
                  { id: 'card', label: 'Credit / Debit Card', desc: 'Visa, Mastercard, RuPay' },
                  { id: 'cod', label: 'Cash on Delivery (COD)', desc: 'Verify on arrival with Kannauj wax seal intact' }
                ].map((m) => (
                  <label
                    key={m.id}
                    className={`block p-3 border rounded-[2px] cursor-pointer transition-colors ${
                      formData.paymentMethod === m.id
                        ? 'border-[#B8902B] bg-[#E4D2A8]/50'
                        : 'border-[#5A3A22]/30 hover:border-[#B8902B]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={m.id}
                        checked={formData.paymentMethod === m.id}
                        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                        className="text-[#6B1E1E] focus:ring-[#B8902B]"
                      />
                      <div>
                        <span className="font-serif font-bold text-sm text-[#2E1B0F] block">{m.label}</span>
                        <span className="text-[11px] text-[#5A3A22]">{m.desc}</span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>

              {formData.paymentMethod === 'upi' && (
                <div className="pt-2">
                  <label className="block text-xs font-semibold text-[#5A3A22] mb-1">Demo UPI ID (VPA) *</label>
                  <input
                    type="text"
                    placeholder="patron@upi"
                    value={formData.upiId}
                    onChange={(e) => setFormData({ ...formData, upiId: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-[#F1E6CC] border border-[#5A3A22]/40 rounded-[2px] focus:outline-none focus:border-[#B8902B]"
                  />
                  {errors.upiId && <p className="text-[11px] text-[#6B1E1E] mt-1">{errors.upiId}</p>}
                </div>
              )}

              {formData.paymentMethod === 'card' && (
                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-[#5A3A22] mb-1">Card Number *</label>
                    <input
                      type="text"
                      placeholder="4111 2222 3333 4444"
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-[#F1E6CC] border border-[#5A3A22]/40 rounded-[2px] focus:outline-none focus:border-[#B8902B]"
                    />
                    {errors.cardNumber && <p className="text-[11px] text-[#6B1E1E] mt-1">{errors.cardNumber}</p>}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#5A3A22] mb-1">Expiry (MM/YY) *</label>
                      <input
                        type="text"
                        placeholder="12/28"
                        value={formData.cardExpiry}
                        onChange={(e) => setFormData({ ...formData, cardExpiry: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-[#F1E6CC] border border-[#5A3A22]/40 rounded-[2px] focus:outline-none focus:border-[#B8902B]"
                      />
                      {errors.cardExpiry && <p className="text-[11px] text-[#6B1E1E] mt-1">{errors.cardExpiry}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#5A3A22] mb-1">CVV / CVC *</label>
                      <input
                        type="password"
                        maxLength={4}
                        placeholder="•••"
                        value={formData.cardCvv}
                        onChange={(e) => setFormData({ ...formData, cardCvv: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-[#F1E6CC] border border-[#5A3A22]/40 rounded-[2px] focus:outline-none focus:border-[#B8902B]"
                      />
                      {errors.cardCvv && <p className="text-[11px] text-[#6B1E1E] mt-1">{errors.cardCvv}</p>}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* STEP 4: REVIEW & CONFIRM */}
          {step === 4 && (
            <div className="space-y-4">
              <h2 className="font-serif text-xl font-bold text-[#2E1B0F]">Step 4: Final Imperial Review</h2>
              <div className="p-4 bg-[#E4D2A8]/30 border border-[#5A3A22]/20 rounded-[2px] text-xs space-y-2">
                <p><span className="font-semibold text-[#2E1B0F]">Patron:</span> {formData.fullName} ({formData.phone}, {formData.email})</p>
                <p><span className="font-semibold text-[#2E1B0F]">Dispatch Address:</span> {formData.addressLine}, {formData.city}, {formData.state} - {formData.pincode}</p>
                <p><span className="font-semibold text-[#2E1B0F]">Payment Mode:</span> {formData.paymentMethod.toUpperCase()} (Demo)</p>
              </div>

              <div className="p-3 bg-[#3B6E47]/10 border border-[#3B6E47]/30 rounded-[2px] text-xs text-[#3B6E47]">
                <span className="font-semibold block">Batch Integrity Shield:</span>
                Every bottle will be packaged in a Kannauj cedar padded container with a hand-pressed red lac wax seal and individual Batch Passport QR documentation.
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="pt-4 border-t border-[#5A3A22]/20 flex items-center justify-between">
            {step > 1 ? (
              <button
                onClick={() => setStep((s) => (s - 1) as any)}
                className="px-4 py-2 text-xs font-semibold border border-[#5A3A22]/40 rounded-[2px] text-[#5A3A22] hover:text-[#2E1B0F] flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous Step</span>
              </button>
            ) : (
              <span />
            )}

            {step < 4 ? (
              <button
                onClick={handleNext}
                className="px-6 py-2.5 text-xs font-semibold bg-[#B8902B] hover:bg-[#D9B44A] text-[#2E1B0F] border border-[#8A5A36] rounded-[2px] flex items-center gap-2"
              >
                <span>Continue to Step {step + 1}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={handlePlaceOrder}
                className="px-6 py-3 text-xs font-semibold bg-[#6B1E1E] hover:bg-[#521515] text-[#F1E6CC] border border-[#2E1B0F] rounded-[2px] flex items-center gap-2 shadow-md"
              >
                <Lock className="w-4 h-4" />
                <span>Confirm Order (Demo Simulation)</span>
              </button>
            )}
          </div>
        </div>

        {/* Right Column (5 cols): Order Summary */}
        <div className="lg:col-span-5 parchment-card p-6 space-y-4">
          <h3 className="font-serif text-lg font-bold text-[#2E1B0F] border-b border-[#5A3A22]/20 pb-3">
            Flacon Manifest ({cart.reduce((c, i) => c + i.quantity, 0)})
          </h3>

          <div className="divide-y divide-[#5A3A22]/15 max-h-60 overflow-y-auto pr-2">
            {cart.map((item) => (
              <div key={item.product.id} className="py-2.5 flex justify-between text-xs">
                <div>
                  <span className="font-bold text-[#2E1B0F]">{item.product.name}</span>
                  <span className="text-[#8A5A36] block">Qty: {item.quantity} · {item.product.volume}</span>
                </div>
                <span className="font-mono tabular-nums text-[#2E1B0F]">
                  ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-1.5 text-xs text-[#5A3A22] pt-3 border-t border-[#5A3A22]/20">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-mono text-[#2E1B0F]">₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            {discountAmount > 0 && (
              <div className="flex justify-between text-[#6B1E1E]">
                <span>Coupon ({couponCode})</span>
                <span className="font-mono">-₹{discountAmount.toLocaleString('en-IN')}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Insured Courier Shipping</span>
              <span className="font-mono text-[#2E1B0F]">
                {shippingFee === 0 ? 'Complimentary' : `₹${shippingFee}`}
              </span>
            </div>
            <div className="flex justify-between text-base font-serif font-bold text-[#2E1B0F] pt-2 border-t border-[#5A3A22]/20">
              <span>Total Payable</span>
              <span className="font-mono">₹{totalAmount.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
