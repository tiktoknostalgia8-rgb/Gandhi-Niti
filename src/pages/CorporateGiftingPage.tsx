import React, { useState, useMemo } from 'react';
import { SaptangaTag } from '../components/SaptangaTag';
import { SITE_CONFIG } from '../config';
import { Handshake, Gift, Calculator, Send, CheckCircle2, PackageCheck } from 'lucide-react';

export const CorporateGiftingPage: React.FC = () => {
  // Estimator State
  const [headcount, setHeadcount] = useState<number>(50);
  const [budgetPerHead, setBudgetPerHead] = useState<number>(1500);

  // Form State
  const [formData, setFormData] = useState({
    organizationName: '',
    contactName: '',
    email: '',
    phone: '',
    estimatedDate: '',
    specialRequirements: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Estimator Calculations
  const estimate = useMemo(() => {
    const totalIndicative = headcount * budgetPerHead;

    let suggestedTier = "";
    let tierDescription = "";

    if (budgetPerHead < 1000) {
      suggestedTier = "Imperial Discovery Set (5 x 2ml)";
      tierDescription = "Handmade wooden case containing all 5 classical profiles with tasting blotters and personalized wax seal.";
    } else if (budgetPerHead < 2500) {
      suggestedTier = "Bespoke Royal Duo (2 x 10ml Roll-Ons)";
      tierDescription = "Pairing of Mitti Attar (Rain Clay) and Gulab Attar (Dawn Rose) in custom engraved parchment casing.";
    } else {
      suggestedTier = "Heritage Royal Casket (3 x 10ml flacons)";
      tierDescription = "Solid sheesham wood chest lined in raw tussar silk, containing Chandan, Shamama, and Gulab with custom brass monogram plate.";
    }

    return {
      totalIndicative,
      suggestedTier,
      tierDescription
    };
  }, [headcount, budgetPerHead]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!formData.organizationName.trim()) errs.organizationName = 'Organization / Guild name required.';
    if (!formData.contactName.trim()) errs.contactName = 'Contact person name required.';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid corporate email required.';
    if (!formData.phone.trim()) errs.phone = 'Phone number required for courier samples.';

    if (Object.keys(errs).length > 0) {
      setFormErrors(errs);
      return;
    }

    setFormErrors({});
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 pb-24 text-[#2E1B0F]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#5A3A22]/20 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B8902B] font-bold">
              Pillar VII: Mitra (The Allies)
            </span>
            <span className="text-[#8A5A36]">·</span>
            <span className="text-xs font-mono text-[#8A5A36]">Diplomatic & Corporate Patronage</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2E1B0F]">
            Corporate Patronage & Gifting
          </h1>
          <p className="text-sm text-[#5A3A22] max-w-2xl mt-1 leading-relaxed">
            Replace disposable corporate swag with living Indian heritage. Sponsor authentic Kannauj hydro-distillation batches for your leadership summits, distinguished clients, and festive milestones.
          </p>
        </div>

        <div className="shrink-0">
          <SaptangaTag element="mitra" size="md" />
        </div>
      </div>

      {/* Alliance Status Note */}
      <div className="p-3 bg-[#E4D2A8]/30 border border-[#5A3A22]/20 rounded-[2px] text-xs text-[#5A3A22] flex items-center justify-between">
        <span>Corporate gifting cohorts and cooperative logistics partnerships are currently marked <strong className="text-[#6B1E1E] font-mono">[Planned Guild Expansion]</strong>.</span>
        <span className="text-[10px] font-mono text-[#8A5A36]">Custom Batches Available</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (6 cols): Interactive Estimator */}
        <div className="lg:col-span-6 parchment-card p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-[#5A3A22]/20 pb-3">
            <h2 className="font-serif text-xl font-bold text-[#2E1B0F] flex items-center gap-2">
              <Calculator className="w-4 h-4 text-[#B8902B]" />
              <span>Gifting Budget & Volume Estimator</span>
            </h2>
            <span className="text-xs font-mono text-[#8A5A36] uppercase">Indicative</span>
          </div>

          <div className="space-y-6 text-xs">
            {/* Slider 1: Headcount */}
            <div>
              <div className="flex justify-between font-mono mb-1.5">
                <span className="font-semibold text-[#2E1B0F]">Recipient Headcount</span>
                <span className="font-bold text-[#6B1E1E] text-sm">{headcount} Patrons</span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={headcount}
                onChange={(e) => setHeadcount(Number(e.target.value))}
                className="w-full accent-[#B8902B]"
              />
              <div className="flex justify-between text-[10px] text-[#8A5A36] mt-0.5">
                <span>10 (Executive Board)</span>
                <span>250 (Annual Summit)</span>
                <span>500+ (Enterprise)</span>
              </div>
            </div>

            {/* Slider 2: Budget per Head */}
            <div>
              <div className="flex justify-between font-mono mb-1.5">
                <span className="font-semibold text-[#2E1B0F]">Target Budget Per Recipient (INR)</span>
                <span className="font-bold text-[#6B1E1E] text-sm">₹{budgetPerHead.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="600"
                max="5000"
                step="100"
                value={budgetPerHead}
                onChange={(e) => setBudgetPerHead(Number(e.target.value))}
                className="w-full accent-[#B8902B]"
              />
              <div className="flex justify-between text-[10px] text-[#8A5A36] mt-0.5">
                <span>₹600 (Token of Esteem)</span>
                <span>₹2,500 (Bespoke Pair)</span>
                <span>₹5,000 (Royal Casket)</span>
              </div>
            </div>

            {/* Dynamic Suggestion Box */}
            <div className="p-4 bg-[#E4D2A8]/40 border-l-3 border-[#B8902B] rounded-r-[2px] space-y-2">
              <span className="text-[10px] font-mono uppercase text-[#8A5A36] tracking-wider block">
                Recommended Configuration
              </span>
              <h3 className="font-serif text-lg font-bold text-[#2E1B0F]">
                {estimate.suggestedTier}
              </h3>
              <p className="text-xs text-[#5A3A22] leading-relaxed">
                {estimate.tierDescription}
              </p>
              <div className="pt-2 border-t border-[#5A3A22]/15 flex items-baseline justify-between text-xs font-mono">
                <span>Total Indicative Investment:</span>
                <span className="font-bold text-base text-[#2E1B0F]">
                  ₹{estimate.totalIndicative.toLocaleString('en-IN')} <span className="text-[10px] text-[#8A5A36]">(Indicative)</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (6 cols): Inquiry Form */}
        <div className="lg:col-span-6 parchment-card p-6 sm:p-8 space-y-6">
          <div className="border-b border-[#5A3A22]/20 pb-3">
            <h2 className="font-serif text-xl font-bold text-[#2E1B0F] flex items-center gap-2">
              <Gift className="w-4 h-4 text-[#B8902B]" />
              <span>Patron Guild Inquiry Form</span>
            </h2>
            <p className="text-xs text-[#5A3A22] mt-0.5">
              Receive a formal quote and complimentary sensory sample kit for your committee.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-6 bg-[#3B6E47]/10 border border-[#3B6E47]/40 rounded-[2px] text-center space-y-3">
              <CheckCircle2 className="w-8 h-8 text-[#3B6E47] mx-auto" />
              <h3 className="font-serif text-xl font-bold text-[#2E1B0F]">Inquiry Transmitted</h3>
              <p className="text-xs text-[#5A3A22] leading-relaxed">
                Our co-founders will review your cohort specifications ({headcount} units at ~₹{budgetPerHead} budget) and reply within 24 hours with an official quotation.
              </p>
              <a
                href={`mailto:${SITE_CONFIG.contact.email}?subject=Corporate%20Gifting%20Inquiry%20-%20${encodeURIComponent(formData.organizationName)}`}
                className="inline-block text-xs text-[#6B1E1E] underline font-mono pt-2"
              >
                Or email direct: {SITE_CONFIG.contact.email}
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-[#5A3A22] mb-1">Company / Organization *</label>
                <input
                  type="text"
                  placeholder="e.g. Apex Heritage Foundation / Royal Bank"
                  value={formData.organizationName}
                  onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                  className="w-full px-3 py-2 bg-[#F1E6CC] border border-[#5A3A22]/40 rounded-[2px] focus:outline-none focus:border-[#B8902B]"
                />
                {formErrors.organizationName && <p className="text-[11px] text-[#6B1E1E] mt-0.5">{formErrors.organizationName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#5A3A22] mb-1">Contact Name *</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-3 py-2 bg-[#F1E6CC] border border-[#5A3A22]/40 rounded-[2px] focus:outline-none focus:border-[#B8902B]"
                  />
                  {formErrors.contactName && <p className="text-[11px] text-[#6B1E1E] mt-0.5">{formErrors.contactName}</p>}
                </div>
                <div>
                  <label className="block font-semibold text-[#5A3A22] mb-1">Corporate Email *</label>
                  <input
                    type="email"
                    placeholder="name@organization.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 bg-[#F1E6CC] border border-[#5A3A22]/40 rounded-[2px] focus:outline-none focus:border-[#B8902B]"
                  />
                  {formErrors.email && <p className="text-[11px] text-[#6B1E1E] mt-0.5">{formErrors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#5A3A22] mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-[#F1E6CC] border border-[#5A3A22]/40 rounded-[2px] focus:outline-none focus:border-[#B8902B]"
                  />
                  {formErrors.phone && <p className="text-[11px] text-[#6B1E1E] mt-0.5">{formErrors.phone}</p>}
                </div>
                <div>
                  <label className="block font-semibold text-[#5A3A22] mb-1">Required Delivery Date</label>
                  <input
                    type="text"
                    placeholder="e.g. Diwali 2026 / Dec Summit"
                    value={formData.estimatedDate}
                    onChange={(e) => setFormData({ ...formData, estimatedDate: e.target.value })}
                    className="w-full px-3 py-2 bg-[#F1E6CC] border border-[#5A3A22]/40 rounded-[2px] focus:outline-none focus:border-[#B8902B]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#5A3A22] mb-1">Customization or Specific Notes</label>
                <textarea
                  rows={3}
                  placeholder="Mention custom wax seal initials, wooden box engraving, or specific botanical flacon preferences..."
                  value={formData.specialRequirements}
                  onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
                  className="w-full px-3 py-2 bg-[#F1E6CC] border border-[#5A3A22]/40 rounded-[2px] focus:outline-none focus:border-[#B8902B]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#B8902B] hover:bg-[#D9B44A] text-[#2E1B0F] font-semibold text-xs rounded-[2px] border border-[#8A5A36] transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Gifting Inquiry (Indicative ₹{estimate.totalIndicative.toLocaleString('en-IN')})</span>
              </button>

              <p className="text-[10px] text-center text-[#8A5A36] font-mono">
                Fallback: customersupport.gandhiniti@gmail.com · Tel: +91 92667 46123
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
