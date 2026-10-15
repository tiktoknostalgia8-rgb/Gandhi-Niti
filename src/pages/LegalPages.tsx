import React from 'react';
import { SaptangaTag } from '../components/SaptangaTag';
import { ShieldCheck, Scale, AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config';

export const ReturnsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 pb-24 text-[#2E1B0F]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#5A3A22]/20 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B8902B] font-bold">
              Pillar VI: Danda (Enforcement of Order)
            </span>
            <span className="text-[#8A5A36]">·</span>
            <span className="text-xs font-mono text-[#8A5A36]">Commercial Standards & Returns</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2E1B0F]">
            Quality Enforcement & Returns Charter
          </h1>
          <p className="text-sm text-[#5A3A22] max-w-xl mt-1 leading-relaxed">
            Supplier verification standards, batch GC-MS chromatography audits, and zero-tolerance policy against adulteration.
          </p>
        </div>
        <SaptangaTag element="danda" size="md" />
      </div>

      {/* Mandatory Demo Policy Banner */}
      <div className="p-4 bg-[#6B1E1E]/10 border-2 border-[#6B1E1E] rounded-[3px] flex items-center justify-between text-xs text-[#6B1E1E]">
        <div className="flex items-center gap-2 font-bold">
          <Scale className="w-4 h-4" />
          <span>Demo Policy: Illustrative operational framework for academic & competition evaluation.</span>
        </div>
        <span className="font-mono text-[10px]">Article VI · Arthashastra</span>
      </div>

      {/* Mandatory Theological / Philosophical Distinction Note */}
      <div className="p-5 bg-[#E4D2A8]/40 border-l-4 border-[#B8902B] rounded-r-[2px] space-y-2 text-xs text-[#5A3A22]">
        <h4 className="font-serif font-bold text-sm text-[#2E1B0F]">
          Saptanga Danda vs. The Four Diplomatic Upayas (Important Context)
        </h4>
        <p className="leading-relaxed">
          <strong>Scholarly Note on Kautilya's Terminology:</strong> In the Saptanga model of the Arthashastra, <em>Danda</em> represents the sovereign's legitimate enforcement of order, judicial standards, and regulatory policing—the power of the state to protect fair commerce, penalize counterfeiters, and guarantee weights.
        </p>
        <p className="leading-relaxed">
          This is fundamentally separate from the <em>Upayas</em> (Sama, Dana, Bheda, Danda), which are foreign policy strategies of diplomatic conciliation, concessions, division, or military coercion. At GandhaNiti, Danda is the sovereign enforcement of pure ingredients.
        </p>
      </div>

      {/* Policy Details */}
      <div className="parchment-card p-6 sm:p-8 space-y-6 text-xs text-[#5A3A22] leading-relaxed">
        <section className="space-y-2">
          <h3 className="font-serif text-lg font-bold text-[#2E1B0F]">1. Supplier Verification & Cauldron Audits</h3>
          <p>
            GandhaNiti refuses to list or distribute any ittar that cannot be traced to a specific copper deg, master distiller, and verified wood-fired bhatthi. Before onboarding, every artisan cooperative submits distillation samples to gas chromatography mass spectrometry (GC-MS) testing.
          </p>
        </section>

        <section className="space-y-2 pt-4 border-t border-[#5A3A22]/15">
          <h3 className="font-serif text-lg font-bold text-[#2E1B0F]">2. Non-Negotiable Refusal of Synthetic Adulterants</h3>
          <p>
            Any batch detected with Diethyl Phthalate (DEP), synthetic nitro-musks, or petroleum paraffin fractions is immediately discarded. There is zero tolerance for counterfeit blends undercutting genuine botanical craft.
          </p>
        </section>

        <section className="space-y-2 pt-4 border-t border-[#5A3A22]/15">
          <h3 className="font-serif text-lg font-bold text-[#2E1B0F]">3. 15-Day Flacon Return & Replacement Policy</h3>
          <p>
            Because authentic botanical oils cannot be re-sealed once opened, we accept returns within 15 days of delivery for flacons with their original red lac wax seal intact.
          </p>
          <p>
            If a flacon arrives broken or damaged during transit, transmit a photograph to {SITE_CONFIG.contact.email} or WhatsApp +91 92667 46123 for an immediate complimentary batch replacement dispatch.
          </p>
        </section>

        <section className="space-y-2 pt-4 border-t border-[#5A3A22]/15">
          <h3 className="font-serif text-lg font-bold text-[#2E1B0F]">4. The Discovery Set Guarantee</h3>
          <p>
            To eliminate buyer hesitation without compromising opened bottles, we encourage all first-time patrons to begin with the 5 x 2ml Imperial Discovery Set (₹799) to experience the full spectrum on their own skin.
          </p>
        </section>
      </div>
    </div>
  );
};

export const PrivacyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 pb-24 text-[#2E1B0F]">
      <div className="border-b border-[#5A3A22]/20 pb-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#B8902B]">
          Data Governance
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2E1B0F] mt-1">
          Privacy Policy (Demo Charter)
        </h1>
        <p className="text-xs text-[#8A5A36] font-mono mt-1">Last Updated: October 2026 · Demo Policy</p>
      </div>

      <div className="parchment-card p-6 sm:p-8 space-y-4 text-xs text-[#5A3A22] leading-relaxed">
        <p>
          At GandhaNiti, customer privacy is treated with sovereign sanctity. This demo application does not sell, barter, or transfer personal patron records to third-party ad networks.
        </p>
        <h3 className="font-serif text-base font-bold text-[#2E1B0F] pt-2">Data Collection</h3>
        <p>
          We collect name, email address, postal destination, and telephone solely for courier dispatch, invoice generation, and Batch Passport verification.
        </p>
        <h3 className="font-serif text-base font-bold text-[#2E1B0F] pt-2">Simulated Payment Data</h3>
        <p>
          No real credit card numbers or UPI PINs are ever processed or stored on our servers. All transactions in this environment are non-commercial simulations.
        </p>
        <p className="pt-2 text-[#8A5A36] font-mono">
          Inquiries: customersupport.gandhiniti@gmail.com
        </p>
      </div>
    </div>
  );
};

export const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 pb-24 text-[#2E1B0F]">
      <div className="border-b border-[#5A3A22]/20 pb-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#B8902B]">
          Merchant Accord
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2E1B0F] mt-1">
          Terms of Trade (Demo Policy)
        </h1>
        <p className="text-xs text-[#8A5A36] font-mono mt-1">Version: 2026.1 · Demo Simulation</p>
      </div>

      <div className="parchment-card p-6 sm:p-8 space-y-4 text-xs text-[#5A3A22] leading-relaxed">
        <p>
          By interacting with the GandhaNiti digital storefront, you acknowledge that all pricing (₹1,100 to ₹3,999) is labeled <em>Illustrative</em> and intended for competitive and academic prototyping.
        </p>
        <h3 className="font-serif text-base font-bold text-[#2E1B0F] pt-2">Craft Authenticity Guarantee</h3>
        <p>
          All described distillation specifications (hydro-distillation in copper degs, bamboo conduits, sandalwood oil absorption) accurately describe traditional Kannauj perfumery techniques documented in historical guild practices.
        </p>
        <h3 className="font-serif text-base font-bold text-[#2E1B0F] pt-2">Zero Health Claims</h3>
        <p>
          GandhaNiti products are sensory perfume oils. No claims regarding medicinal cures, anxiety alleviation, or medical remedies are made.
        </p>
        <p className="pt-2 text-[#8A5A36] font-mono">
          Governing Law: Jurisdiction of Kannauj, Uttar Pradesh, India.
        </p>
      </div>
    </div>
  );
};
