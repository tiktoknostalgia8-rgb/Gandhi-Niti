import React, { useState } from 'react';
import { SITE_CONFIG } from '../config';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Hero3D } from '../components/Hero3D';
import { SaptangaTag } from '../components/SaptangaTag';
import { SAPTANGA_ELEMENTS } from '../data/saptanga';
import { ContainerScroll } from '../components/ContainerScroll';
import { AlembicRegistryShowcase } from '../components/AlembicRegistryShowcase';
import {
  ArrowRight,
  Compass,
  ShieldCheck,
  Sparkles,
  Droplets,
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Clock
} from 'lucide-react';

export const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 6);

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Olfactory Guidance / Scent Selection',
    message: ''
  });
  const [contactErrors, setContactErrors] = useState<Record<string, string>>({});
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!contactForm.name.trim()) errs.name = 'Please provide your full name.';
    if (!contactForm.email.trim() || !/^\S+@\S+\.\S+$/.test(contactForm.email)) {
      errs.email = 'A valid email is required for our response.';
    }
    if (!contactForm.message.trim() || contactForm.message.length < 10) {
      errs.message = 'Please share your query (minimum 10 characters).';
    }

    if (Object.keys(errs).length > 0) {
      setContactErrors(errs);
      return;
    }

    setContactErrors({});
    setContactSubmitted(true);
  };

  const mailtoLink = `mailto:${SITE_CONFIG.contact.email}?subject=${encodeURIComponent(contactForm.subject)}&body=${encodeURIComponent(
    `Name: ${contactForm.name}\nPhone: ${contactForm.phone}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`
  )}`;

  return (
    <div className="space-y-20 pb-20">
      {/* 1. ASYMMETRIC SPLIT HERO */}
      <section className="relative pt-6 md:pt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (7 cols): Editorial text on column grid */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tagline kicker with Sanskrit accent */}
            <div className="flex items-center gap-2">
              <span className="w-6 h-px bg-[#B8902B]" />
              <p className="font-serif italic text-sm md:text-base text-[#8A5A36] tracking-wide">
                "{SITE_CONFIG.tagline}"
              </p>
            </div>

            {/* Hero Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2E1B0F] tracking-tight leading-[1.1] text-balance">
              {SITE_CONFIG.heroHeadline}
            </h1>

            {/* Sub-line */}
            <p className="text-base sm:text-lg text-[#5A3A22] max-w-2xl leading-relaxed">
              {SITE_CONFIG.heroSubline} Hand-crafted in traditional wood-fired copper degs with bamboo receivers, hydro-distilled into pure sandalwood oil over days of silent patient heat.
            </p>

            {/* Key Trust Pillars */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-[#5A3A22]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8902B]" />
                Alcohol-Free Botanical Oil
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8902B]" />
                Kannauj Deg-Bapka Heritage
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8902B]" />
                Public Batch Passport
              </span>
            </div>

            {/* Primary Action Buttons (Squared corners, NOT pill-shaped) */}
            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="#/shop"
                className="px-6 py-3 text-sm font-semibold text-[#2E1B0F] bg-[#B8902B] hover:bg-[#D9B44A] border border-[#8A5A36] rounded-[2px] transition-all flex items-center gap-2 shadow-xs"
              >
                <span>Explore Pure Ittars</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#/quiz"
                className="px-6 py-3 text-sm font-semibold text-[#2E1B0F] bg-transparent hover:bg-[#E4D2A8]/60 border border-[#5A3A22] rounded-[2px] transition-all flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-[#8A5A36]" />
                <span>Take Scent Quiz (6 Qs)</span>
              </a>
            </div>

            {/* Saptanga tag link */}
            <div className="pt-2">
              <SaptangaTag element="swami" size="sm" />
            </div>
          </div>

          {/* Right Column (5 cols): Procedural 3D Scene */}
          <div className="lg:col-span-5 relative">
            <div className="parchment-card p-2 rounded-[3px] bg-[#E4D2A8]/20 border border-[#B8902B]/40">
              <Hero3D />
            </div>
          </div>
        </div>
      </section>

      {/* Thin Gold Ruled Divider with Lotus Accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-4 text-[#B8902B]">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#B8902B]/60 to-transparent" />
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#B8902B]" fill="currentColor">
          <path d="M12 4 C10 8 7 11 7 15 C7 18 9 20 12 20 C15 20 17 18 17 15 C17 11 14 8 12 4 Z" />
          <path d="M12 20 C8 19 5 16 5 13 C5 11 7 8 9 7 C8 10 9 14 12 16 Z" fillOpacity="0.7" />
          <path d="M12 20 C16 19 19 16 19 13 C19 11 17 8 15 7 C16 10 15 14 12 16 Z" fillOpacity="0.7" />
        </svg>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#B8902B]/60 to-transparent" />
      </div>

      {/* 2. THE THREE ANSWERS: How we solve the digital fragrance dilemma */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#8A5A36]">
            The Digital Scent Dilemma
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2E1B0F]">
            You Cannot Smell a Screen. Here Is How We Solve It.
          </h2>
          <p className="text-sm text-[#5A3A22] leading-relaxed">
            In an industry corrupted by petroleum-derived alcohol synthetics, GandhaNiti establishes three concrete instruments of truth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Discovery Set */}
          <div className="parchment-card p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-[2px] bg-[#E4D2A8] border border-[#B8902B] flex items-center justify-center text-[#6B1E1E] mb-4">
                <Droplets className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-[#8A5A36] uppercase">Answer I</span>
              <h3 className="font-serif text-xl font-bold text-[#2E1B0F] mt-1 mb-2">
                Imperial Discovery Set
              </h3>
              <p className="text-xs text-[#5A3A22] leading-relaxed">
                Test before committing. Five 2 ml vials covering the spectrum of Kannauj: Baked Clay (Mitti), Dawn Rose (Gulab), Green Vetiver (Khus), Pandanus (Kewra), and 40-Spices (Shamama).
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#5A3A22]/20 flex items-center justify-between">
              <span className="font-serif font-bold text-base">₹799 <span className="text-[10px] text-[#8A5A36] font-mono">(Illustrative)</span></span>
              <a href="#/product/discovery-set" className="text-xs font-semibold text-[#8A5A36] hover:text-[#2E1B0F] flex items-center gap-1">
                Explore Set →
              </a>
            </div>
          </div>

          {/* Card 2: Scent Quiz */}
          <div className="parchment-card p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-[2px] bg-[#E4D2A8] border border-[#B8902B] flex items-center justify-center text-[#6B1E1E] mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-[#8A5A36] uppercase">Answer II</span>
              <h3 className="font-serif text-xl font-bold text-[#2E1B0F] mt-1 mb-2">
                Deterministic Scent Quiz
              </h3>
              <p className="text-xs text-[#5A3A22] leading-relaxed">
                6 questions mapping your inner atmosphere, season, and desired projection directly to active catalog flacons. Zero generic marketing algorithms; rooted in classical rasa aesthetics.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#5A3A22]/20 flex items-center justify-between">
              <span className="text-xs font-mono text-[#5A3A22]">Takes ~2 minutes</span>
              <a href="#/quiz" className="text-xs font-semibold text-[#8A5A36] hover:text-[#2E1B0F] flex items-center gap-1">
                Start Diagnostic →
              </a>
            </div>
          </div>

          {/* Card 3: Batch Passport */}
          <div className="parchment-card p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-[2px] bg-[#E4D2A8] border border-[#B8902B] flex items-center justify-center text-[#6B1E1E] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-[#8A5A36] uppercase">Answer III</span>
              <h3 className="font-serif text-xl font-bold text-[#2E1B0F] mt-1 mb-2">
                Public Batch Passport
              </h3>
              <p className="text-xs text-[#5A3A22] leading-relaxed">
                Every bottle features a scannable QR passport showing the exact copper deg alembic, distillation hours, master distiller name, harvest date, and lab GC-MS purity certificate.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#5A3A22]/20 flex items-center justify-between">
              <SaptangaTag element="durga" size="sm" showSubtitle={false} />
              <a href="#/batch-passport" className="text-xs font-semibold text-[#8A5A36] hover:text-[#2E1B0F] flex items-center gap-1">
                View Sample →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 3D CONTAINER SCROLL SHOWCASE: THE KANNAUJ ALEMBIQ & LIVE REGISTRY */}
      <section className="relative overflow-hidden py-4">
        <ContainerScroll
          titleComponent={
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B8902B] font-bold">
                Pillar IV: Live Cauldron Traceability · दुर्गाङ्ग
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2E1B0F] tracking-tight">
                Scroll into the Kannauj Bhatthi
              </h2>
              <p className="text-xs sm:text-sm text-[#5A3A22] max-w-xl mx-auto leading-relaxed">
                Experience living hydro-distillation telemetry. Rotate perspective to inspect active copper deg alembics, wood-fired embers, and verified batch certificates.
              </p>
            </div>
          }
        >
          <AlembicRegistryShowcase />
        </ContainerScroll>
      </section>

      {/* 3. FEATURED PRODUCTS COLLECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#8A5A36] uppercase tracking-wider mb-1">
              <span>Pure Distillations</span>
              <span>·</span>
              <span>Kannauj Origin</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2E1B0F]">
              The Classical Attar Flacons
            </h2>
          </div>
          <a
            href="#/shop"
            className="text-xs font-semibold uppercase tracking-wider text-[#8A5A36] hover:text-[#2E1B0F] border-b border-[#B8902B] pb-0.5 inline-flex items-center gap-1 self-start sm:self-auto"
          >
            <span>View Full Catalogue (8 Flacons)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 3-column Grid of Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. THE SAPTANGA EDITORIAL SECTION: "A small state built on seven pillars" */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#E4D2A8]/30 border-2 border-[#B8902B] rounded-[3px] p-6 sm:p-10 relative overflow-hidden">
          {/* Subtle watermark seal */}
          <div className="absolute right-4 -bottom-10 opacity-10 pointer-events-none">
            <svg width="240" height="240" viewBox="0 0 64 64" fill="currentColor">
              <circle cx="32" cy="32" r="30" stroke="#5A3A22" strokeWidth="2" fill="none" />
              <path d="M32 10 L45 50 L19 50 Z" />
            </svg>
          </div>

          <div className="max-w-3xl space-y-3 mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B8902B] font-semibold">
              Statecraft In Olfaction · कौटिलीय अर्थशास्त्रम्
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2E1B0F]">
              A Small State Built on Seven Pillars (सप्ताङ्ग)
            </h2>
            <p className="text-sm text-[#5A3A22] leading-relaxed">
              In Book II of the Arthashastra, the Panyadhyaksha (Superintendent of Commerce) maintained that fair markets, honest weights, and unadulterated merchandise were sacred sovereign duties. GandhaNiti is structured not as an extractive brand, but as a small state governing honest trade.
            </p>
          </div>

          {/* Clean editorial layout (NOT seven identical cards) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Leadership & Counsel Split */}
            <div className="md:col-span-4 space-y-4">
              <div className="border-l-2 border-[#B8902B] pl-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif font-bold text-base text-[#2E1B0F]">1. Swami</span>
                  <span className="font-devanagari text-xs text-[#8A5A36]">(स्वामिन्)</span>
                </div>
                <p className="text-xs text-[#5A3A22] mt-0.5">
                  Leadership & Vision: Reviving Kannauj without dilution or synthetic compromise.
                </p>
                <a href="#/about#team" className="text-[11px] text-[#8A5A36] hover:text-[#2E1B0F] underline mt-1 inline-block">
                  Founders' Note →
                </a>
              </div>

              <div className="border-l-2 border-[#B8902B] pl-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif font-bold text-base text-[#2E1B0F]">2. Amatya</span>
                  <span className="font-devanagari text-xs text-[#8A5A36]">(अमात्य)</span>
                </div>
                <p className="text-xs text-[#5A3A22] mt-0.5">
                  Ministers & Craft Advisors: Deg supervisors and analytical chemists (planned roles).
                </p>
                <a href="#/about#advisers" className="text-[11px] text-[#8A5A36] hover:text-[#2E1B0F] underline mt-1 inline-block">
                  Craft Stewards →
                </a>
              </div>

              <div className="border-l-2 border-[#B8902B] pl-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif font-bold text-base text-[#2E1B0F]">3. Janapada</span>
                  <span className="font-devanagari text-xs text-[#8A5A36]">(जनपद)</span>
                </div>
                <p className="text-xs text-[#5A3A22] mt-0.5">
                  The People & Territory: Kannauj flower growers, riverbed vetiver harvesters, and consumers.
                </p>
                <a href="#/about#decline" className="text-[11px] text-[#8A5A36] hover:text-[#2E1B0F] underline mt-1 inline-block">
                  Kannauj Lineage →
                </a>
              </div>
            </div>

            {/* Defense, Treasury & Law Split */}
            <div className="md:col-span-5 space-y-4">
              <div className="border-l-2 border-[#B8902B] pl-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif font-bold text-base text-[#2E1B0F]">4. Durga</span>
                  <span className="font-devanagari text-xs text-[#8A5A36]">(दुर्ग)</span>
                </div>
                <p className="text-xs text-[#5A3A22] mt-0.5">
                  The Fortress: Tamper-evident packaging, QR batch transparency, and verified integrity.
                </p>
                <a href="#/batch-passport" className="text-[11px] text-[#8A5A36] hover:text-[#2E1B0F] underline mt-1 inline-block">
                  Batch Passport →
                </a>
              </div>

              <div className="border-l-2 border-[#B8902B] pl-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif font-bold text-base text-[#2E1B0F]">5. Kosha</span>
                  <span className="font-devanagari text-xs text-[#8A5A36]">(कोश)</span>
                </div>
                <p className="text-xs text-[#5A3A22] mt-0.5">
                  The Treasury: Transparent unit economics, fair artisan compensation, and zero deceptive markups.
                </p>
                <a href="#/business-model" className="text-[11px] text-[#8A5A36] hover:text-[#2E1B0F] underline mt-1 inline-block">
                  Unit Economics →
                </a>
              </div>

              <div className="border-l-2 border-[#B8902B] pl-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif font-bold text-base text-[#2E1B0F]">6. Danda</span>
                  <span className="font-devanagari text-xs text-[#8A5A36]">(दण्ड)</span>
                </div>
                <p className="text-xs text-[#5A3A22] mt-0.5">
                  Enforcement of Standards: GC-MS audits, non-negotiable zero-synthetic rules, and 15-day return policy.
                </p>
                <a href="#/returns" className="text-[11px] text-[#8A5A36] hover:text-[#2E1B0F] underline mt-1 inline-block">
                  Quality Audit →
                </a>
              </div>
            </div>

            {/* Pillar 7 Highlight Callout */}
            <div className="md:col-span-3 bg-[#F1E6CC] border border-[#5A3A22]/30 p-4 rounded-[2px] space-y-3">
              <div className="flex items-baseline gap-2">
                <span className="font-serif font-bold text-base text-[#6B1E1E]">7. Mitra</span>
                <span className="font-devanagari text-xs text-[#8A5A36]">(मित्र)</span>
              </div>
              <p className="text-xs text-[#5A3A22] leading-relaxed">
                The Allies: Master distiller cooperatives, reliable logistics couriers, and corporate gifting patrons who sponsor artisanal batches.
              </p>
              <div className="pt-2 border-t border-[#5A3A22]/20">
                <a
                  href="#/saptanga"
                  className="w-full py-2 px-3 text-xs font-semibold text-[#2E1B0F] bg-[#B8902B] hover:bg-[#D9B44A] border border-[#8A5A36] rounded-[2px] transition-colors block text-center"
                >
                  Explore 3D Wheel
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CRAFT EXCELLENCE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 bg-[#2E1B0F] text-[#F1E6CC] rounded-[3px] border border-[#B8902B] relative flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D9B44A]">
              Heritage Preserved
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              "Honest trade is a duty of the sovereign state."
            </h3>
            <p className="text-xs sm:text-sm text-[#E4D2A8]/85 leading-relaxed">
              Paraphrased from Kautilya's Arthashastra. By eliminating middlemen and documenting every copper cauldron distillation with cryptographic transparency, we bring Kannauj's 1,000-year legacy into the modern world.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="#/about"
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#2E1B0F] bg-[#D9B44A] hover:bg-[#B8902B] rounded-[2px] transition-colors text-center"
            >
              Read Decline Story
            </a>
            <a
              href="#/contact"
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F1E6CC] border border-[#B8902B] hover:bg-[#B8902B]/20 rounded-[2px] transition-colors text-center"
            >
              Contact Guild
            </a>
          </div>
        </div>
      </section>

      {/* 6. DIRECT GUILD CONTACT FORM (AT THE LAST OF HOME PAGE) */}
      <section id="contact-guild" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="parchment-card p-6 sm:p-10 border-2 border-[#B8902B] space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#5A3A22]/20 pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#B8902B] font-bold">
                Direct Line to the Founders · पत्र सम्प्रेषण
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2E1B0F] mt-1">
                Have a Question or Wish to Connect?
              </h2>
              <p className="text-xs sm:text-sm text-[#5A3A22] max-w-2xl mt-1 leading-relaxed">
                Whether seeking guidance selecting an ittar flacon, verifying batch provenance, inquiring about corporate gifting, or discussing Kannauj distiller partnerships.
              </p>
            </div>
            <div className="shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E4D2A8]/50 border border-[#B8902B]/40 rounded-[2px] text-xs font-mono text-[#8A5A36]">
                <Clock className="w-3.5 h-3.5 text-[#B8902B]" />
                <span>Response within 24 Hours</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Official Credentials */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 bg-[#E4D2A8]/30 border border-[#5A3A22]/20 rounded-[2px] space-y-4 text-xs">
                <h3 className="font-serif font-bold text-base text-[#2E1B0F]">
                  Kannauj Distillers’ Quarter Registry Desk
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#B8902B] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#2E1B0F] block">Electronic Mail:</span>
                      <a
                        href={`mailto:${SITE_CONFIG.contact.email}`}
                        className="text-[#6B1E1E] hover:underline font-mono"
                      >
                        {SITE_CONFIG.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#B8902B] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#2E1B0F] block">Direct Helpline (Mobile):</span>
                      <a
                        href={SITE_CONFIG.contact.phoneTel}
                        className="text-[#2E1B0F] hover:text-[#6B1E1E] font-mono font-semibold"
                      >
                        {SITE_CONFIG.contact.phoneFormatted}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#B8902B] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#2E1B0F] block">Registered Cluster Address:</span>
                      <p className="text-[#5A3A22] leading-snug">{SITE_CONFIG.contact.address}</p>
                      <span className="text-[10px] text-[#8A5A36] font-mono mt-0.5 block">{SITE_CONFIG.contact.addressNote}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#5A3A22]/15 text-[11px] text-[#8A5A36]">
                  Monitored directly by founders Aryavrat Sharma & Meera Kulkarni.
                </div>
              </div>
            </div>

            {/* Right: Working Form */}
            <div className="lg:col-span-7">
              {contactSubmitted ? (
                <div className="p-8 bg-[#3B6E47]/10 border border-[#3B6E47]/40 rounded-[2px] text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-[#3B6E47] mx-auto" />
                  <h3 className="font-serif text-2xl font-bold text-[#2E1B0F]">Dispatch Transmitted Successfully</h3>
                  <p className="text-xs text-[#5A3A22] leading-relaxed max-w-sm mx-auto">
                    Thank you, {contactForm.name}. Your inquiry has been registered. Our founders will reply to {contactForm.email} within 24 hours.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setContactForm({
                          name: '',
                          email: '',
                          phone: '',
                          subject: 'Olfactory Guidance / Scent Selection',
                          message: ''
                        });
                        setContactSubmitted(false);
                      }}
                      className="text-xs text-[#6B1E1E] underline font-mono"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-semibold text-[#5A3A22] mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Vikramaditya Sen"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-3 py-2 bg-[#F1E6CC] border border-[#5A3A22]/40 rounded-[2px] focus:outline-none focus:border-[#B8902B]"
                    />
                    {contactErrors.name && <p className="text-[11px] text-[#6B1E1E] mt-0.5">{contactErrors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-[#5A3A22] mb-1">Email Address *</label>
                      <input
                        type="email"
                        placeholder="patron@domain.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full px-3 py-2 bg-[#F1E6CC] border border-[#5A3A22]/40 rounded-[2px] focus:outline-none focus:border-[#B8902B]"
                      />
                      {contactErrors.email && <p className="text-[11px] text-[#6B1E1E] mt-0.5">{contactErrors.email}</p>}
                    </div>
                    <div>
                      <label className="block font-semibold text-[#5A3A22] mb-1">Telephone Contact (Optional)</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full px-3 py-2 bg-[#F1E6CC] border border-[#5A3A22]/40 rounded-[2px] focus:outline-none focus:border-[#B8902B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#5A3A22] mb-1">Inquiry Topic</label>
                    <select
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      className="w-full px-3 py-2 bg-[#F1E6CC] border border-[#5A3A22]/40 rounded-[2px] focus:outline-none focus:border-[#B8902B] text-[#2E1B0F]"
                    >
                      <option value="Olfactory Guidance / Scent Selection">Olfactory Guidance / Scent Selection</option>
                      <option value="Order Tracking & Batch Passport Verification">Order Tracking & Batch Passport Verification</option>
                      <option value="Corporate Gifting & Bespoke Sets">Corporate Gifting & Bespoke Sets</option>
                      <option value="Kannauj Distiller Guild Partnership">Kannauj Distiller Guild Partnership</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#5A3A22] mb-1">Message *</label>
                    <textarea
                      rows={3}
                      placeholder="Share your inquiry, bespoke requirement, or olfactory questions..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-3 py-2 bg-[#F1E6CC] border border-[#5A3A22]/40 rounded-[2px] focus:outline-none focus:border-[#B8902B]"
                    />
                    {contactErrors.message && <p className="text-[11px] text-[#6B1E1E] mt-0.5">{contactErrors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#B8902B] hover:bg-[#D9B44A] text-[#2E1B0F] font-semibold text-xs rounded-[2px] border border-[#8A5A36] transition-all flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Transmit Message to Kannauj Guild</span>
                  </button>

                  <div className="text-center pt-1">
                    <a
                      href={mailtoLink}
                      className="text-[10px] font-mono text-[#8A5A36] hover:text-[#2E1B0F] underline"
                    >
                      Or click here to send via your email client (mailto fallback)
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
