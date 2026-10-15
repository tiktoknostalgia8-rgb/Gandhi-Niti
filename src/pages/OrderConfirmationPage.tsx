import React from 'react';
import { useCart } from '../context/CartContext';
import { CheckCircle2, Shield, ArrowRight, Package, Truck, Printer } from 'lucide-react';
import { SaptangaTag } from '../components/SaptangaTag';

export const OrderConfirmationPage: React.FC = () => {
  const { lastOrder } = useCart();

  const orderId = lastOrder?.orderId || "GN-KNJ-2026-7841";
  const dateStr = lastOrder?.date || new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 pb-24">
      {/* Success Banner */}
      <div className="parchment-card p-8 text-center border-2 border-[#B8902B] space-y-4">
        <div className="w-16 h-16 rounded-full bg-[#E4D2A8] border-2 border-[#B8902B] flex items-center justify-center mx-auto text-[#3B6E47]">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-1">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8902B] font-bold">
            Imperial Manifest Registered
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2E1B0F]">
            Order Confirmed: {orderId}
          </h1>
          <p className="text-sm text-[#5A3A22] max-w-lg mx-auto">
            Your flacons have been reserved in the Kannauj vault. A wax-sealed dispatch notification will be transmitted to your email.
          </p>
        </div>

        <div className="inline-block p-2 bg-[#6B1E1E]/10 border border-[#6B1E1E]/30 rounded-[2px] text-xs font-mono text-[#6B1E1E]">
          Demo simulation order · No financial debit occurred
        </div>
      </div>

      {/* Manifest & Dispatch Details */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Column (7 cols): Order Breakdown */}
        <div className="md:col-span-7 parchment-card p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-[#5A3A22]/20 pb-4">
            <h2 className="font-serif text-xl font-bold text-[#2E1B0F]">Dispatch Invoice</h2>
            <span className="text-xs font-mono text-[#8A5A36]">{dateStr}</span>
          </div>

          <div className="divide-y divide-[#5A3A22]/15">
            {lastOrder ? (
              lastOrder.items.map((item) => (
                <div key={item.product.id} className="py-3 flex justify-between text-xs">
                  <div>
                    <span className="font-bold text-[#2E1B0F]">{item.product.name}</span>
                    <span className="text-[#8A5A36] block font-mono">
                      Qty: {item.quantity} · {item.product.volume} · Batch {item.product.batchCode}
                    </span>
                  </div>
                  <span className="font-mono tabular-nums text-[#2E1B0F]">
                    ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                  </span>
                </div>
              ))
            ) : (
              <div className="py-3 text-xs text-[#5A3A22]">
                <p className="font-bold">1x Imperial Discovery Set (5 x 2ml)</p>
                <p className="text-[#8A5A36] font-mono">Batch DISC-KNJ-2026-BOX</p>
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-[#5A3A22]/20 space-y-1.5 text-xs text-[#5A3A22]">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-mono text-[#2E1B0F]">₹{(lastOrder?.subtotal || 799).toLocaleString('en-IN')}</span>
            </div>
            {lastOrder && lastOrder.discount > 0 && (
              <div className="flex justify-between text-[#6B1E1E]">
                <span>Discount Applied</span>
                <span className="font-mono">-₹{lastOrder.discount.toLocaleString('en-IN')}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Insured Shipping</span>
              <span className="font-mono text-[#2E1B0F]">{lastOrder?.shippingFee === 0 ? 'Complimentary' : `₹${lastOrder?.shippingFee || 70}`}</span>
            </div>
            <div className="flex justify-between text-base font-serif font-bold text-[#2E1B0F] pt-2 border-t border-[#5A3A22]/20">
              <span>Total Debited (Illustrative)</span>
              <span className="font-mono">₹{(lastOrder?.total || 799).toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): Delivery & Durga Seal */}
        <div className="md:col-span-5 space-y-6">
          <div className="parchment-card p-6 space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#2E1B0F] border-b border-[#5A3A22]/20 pb-2">
              Patron & Delivery Destination
            </h3>
            <div className="text-xs text-[#5A3A22] space-y-1">
              <p className="font-bold text-[#2E1B0F]">{lastOrder?.shippingDetails.fullName || "Esteemed Patron"}</p>
              <p>{lastOrder?.shippingDetails.addressLine || "Kothi Mohalla, Civil Lines"}</p>
              <p>{lastOrder?.shippingDetails.city || "New Delhi"}, {lastOrder?.shippingDetails.state || "Delhi"} - {lastOrder?.shippingDetails.pincode || "110001"}</p>
              <p className="font-mono pt-1 text-[#8A5A36]">{lastOrder?.shippingDetails.phone || "+91 92667 46123"}</p>
            </div>
          </div>

          <div className="parchment-card p-6 space-y-3 bg-[#E4D2A8]/30 border border-[#B8902B]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-serif font-bold text-[#2E1B0F]">Batch Passport Security</span>
              <SaptangaTag element="durga" size="sm" showSubtitle={false} />
            </div>
            <p className="text-xs text-[#5A3A22] leading-relaxed">
              Upon receipt, scan the wax-sealed QR code to review distillation timestamps and GC-MS gas chromatography test sheets.
            </p>
            <a
              href="#/batch-passport"
              className="inline-flex items-center gap-1.5 text-xs text-[#6B1E1E] font-semibold hover:underline"
            >
              <span>Inspect Sample Batch Passport QR</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="text-center pt-2">
            <a
              href="#/shop"
              className="px-6 py-2.5 text-xs font-semibold bg-[#B8902B] hover:bg-[#D9B44A] text-[#2E1B0F] border border-[#8A5A36] rounded-[2px] inline-block transition-colors"
            >
              Return to Guild Storefront
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
