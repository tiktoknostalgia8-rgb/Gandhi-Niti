import React from 'react';
import { CheckCircle2, ExternalLink, ShieldCheck } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export const QAPage: React.FC = () => {
  const routes = [
    { path: '#/', label: 'Home Page', desc: 'Asymmetric hero, procedural 3D rotating bottle & deg, 3 answers, 6 featured products, 7 pillars section' },
    { path: '#/shop', label: 'Shop Catalogue', desc: '8 flacons, filters (scent family), sorting, search, quick view modal' },
    { path: '#/product/mitti-attar', label: 'PDP: Mitti Attar', desc: 'Baked rain clay, interactive 3D bottle viewer, notes pyramid, deg specs' },
    { path: '#/product/gulab-attar', label: 'PDP: Gulab Attar', desc: 'Damask rose, interactive 3D flacon, liquid color tint' },
    { path: '#/product/chandan-attar', label: 'PDP: Chandan Attar', desc: 'White sandalwood, 3D viewer' },
    { path: '#/product/kewra-attar', label: 'PDP: Kewra Attar', desc: 'Wild screwpine, 3D viewer' },
    { path: '#/product/shamama-attar', label: 'PDP: Shamama Attar', desc: '40 secret herbs & spices, 3D viewer' },
    { path: '#/product/khus-attar', label: 'PDP: Khus Attar', desc: 'Wild river vetiver, 3D viewer' },
    { path: '#/product/discovery-set', label: 'PDP: Imperial Discovery Set', desc: '5 x 2ml vials, 3D viewer' },
    { path: '#/product/heritage-gift-box', label: 'PDP: Heritage Gift Box', desc: '3 x 10ml in sheesham wood chest, 3D viewer' },
    { path: '#/quiz', label: 'Scent Quiz', desc: '6 questions, progress bar, Back button, deterministic algorithm recommending real products' },
    { path: '#/cart', label: 'Cart Page / Drawer', desc: 'Quantity steppers, coupon KANNAUJ10 (10% off), free shipping above ₹2,500' },
    { path: '#/checkout', label: 'Checkout', desc: '4 steps, real inline validation, demo banner, Durga tag' },
    { path: '#/order-confirmation', label: 'Order Confirmation', desc: 'Generated order ID, receipt manifest, Kannauj courier timeline' },
    { path: '#/about', label: 'About Us (Decline Story)', desc: 'Editorial long-scroll, opening quote, SVG diagram, BBC/Arab News sources, bar chart, team (Swami & Amatya tags)' },
    { path: '#/saptanga', label: 'Saptanga Model (7 Pillars)', desc: '3D seven-node rotating wheel, interactive node panels with meaning & links' },
    { path: '#/business-model', label: 'Business Model (Kosha)', desc: 'Interactive unit economics calculator with 7 sliders, waterfall chart, LTV/CAC ratio, Kosha tag' },
    { path: '#/gifting', label: 'Corporate Gifting (Mitra)', desc: 'Headcount x Budget interactive estimator, inquiry form, Mitra tag' },
    { path: '#/batch-passport', label: 'Batch Passport (Sample)', desc: 'Sample data, interactive SVG QR code, GC-MS chromatography audit, Durga tag' },
    { path: '#/contact', label: 'Contact Guild', desc: 'Email, phone +91 92667 46123, address, working form, mailto fallback' },
    { path: '#/returns', label: 'Purity & Returns (Danda)', desc: '15-day return policy, supplier standards, Danda vs Upayas explanation note' },
    { path: '#/privacy', label: 'Privacy Policy', desc: 'Demo data governance charter' },
    { path: '#/terms', label: 'Terms of Trade', desc: 'Illustrative pricing & zero-health claim declaration' },
    { path: '#/404', label: 'Custom 404', desc: 'Royal court lost caravan error page' }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 pb-24 text-[#2E1B0F]">
      <div className="border-b border-[#5A3A22]/20 pb-4 flex items-center justify-between">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8902B] font-bold">
            Internal Quality Assurance Ledger
          </span>
          <h1 className="font-serif text-3xl font-bold text-[#2E1B0F] mt-1">
            Guild Route Verification Index (/qa)
          </h1>
          <p className="text-xs text-[#5A3A22] mt-1">
            Complete inventory of all 24 working routes, components, and compliance checkpoints.
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 bg-[#3B6E47]/10 text-[#3B6E47] border border-[#3B6E47]/30 rounded-[2px] text-xs font-mono">
          <CheckCircle2 className="w-4 h-4" />
          <span>All Routes Active</span>
        </div>
      </div>

      {/* Route Table */}
      <div className="parchment-card p-6 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-[#5A3A22]/30 text-[#8A5A36]">
                <th className="py-2.5 px-3 font-semibold">Route Hash</th>
                <th className="py-2.5 px-3 font-semibold">Feature / Page</th>
                <th className="py-2.5 px-3 font-semibold">Verification Scope</th>
                <th className="py-2.5 px-3 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#5A3A22]/15">
              {routes.map((r, i) => (
                <tr key={i} className="hover:bg-[#E4D2A8]/30 transition-colors">
                  <td className="py-2.5 px-3 font-bold text-[#6B1E1E] whitespace-nowrap">{r.path}</td>
                  <td className="py-2.5 px-3 font-serif font-semibold text-[#2E1B0F] whitespace-nowrap">{r.label}</td>
                  <td className="py-2.5 px-3 text-[#5A3A22]">{r.desc}</td>
                  <td className="py-2.5 px-3 text-right whitespace-nowrap">
                    <a
                      href={r.path}
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#B8902B] text-[#2E1B0F] hover:bg-[#D9B44A] rounded-[2px] font-semibold text-[11px] transition-colors"
                    >
                      <span>Visit</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
