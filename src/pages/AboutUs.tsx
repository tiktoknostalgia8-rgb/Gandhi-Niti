import React from 'react';
import { SITE_CONFIG } from '../config';
import { SaptangaTag } from '../components/SaptangaTag';
import { ArrowRight, Flame, Shield, Droplets, BookOpen, AlertTriangle, Users } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 pb-28 text-[#2E1B0F]">
      {/* SECTION 1: OPENING LINE */}
      <section className="space-y-4 pt-4 border-b border-[#5A3A22]/20 pb-10 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono text-[#8A5A36] uppercase tracking-wider">
          <span>Guild Chronicle</span>
          <span>·</span>
          <span>Kannauj Craft Lineage</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] text-[#2E1B0F] text-balance">
          "A scent that once travelled the Mauryan trade roads is now forgotten by the people who live along them."
        </h1>
        <p className="text-sm sm:text-base text-[#5A3A22] leading-relaxed max-w-3xl">
          For over a millennium along the banks of the Ganges, the town of Kannauj has preserved the world's most intricate method of capturing botanical soul: hydro-distillation using pure copper cauldrons, mud seals, and bamboo conduits into aged sandalwood oil. Today, that craft faces an existential crossroads.
        </p>
      </section>

      {/* SECTION 2: WHAT ITTAR IS AND HOW IT IS MADE (WITH HAND-DRAWN SVG DIAGRAM) */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#B8902B]">
              The Classical Method
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2E1B0F] mt-1">
              The Deg-Bapka Process: Fire, Mud, Bamboo & Copper
            </h2>
          </div>
          <SaptangaTag element="janapada" size="sm" />
        </div>

        <p className="text-sm text-[#5A3A22] leading-relaxed">
          Unlike modern commercial perfumes made by dissolving synthetic chemicals into volatile denatured alcohol, authentic Kannauj ittar is 100% botanical oil hydro-distilled in a closed apparatus known as the <strong className="text-[#2E1B0F]">Deg-Bapka</strong> system.
        </p>

        {/* Hand-drawn SVG Diagram of Deg-Bapka apparatus */}
        <div className="parchment-card p-6 bg-[#E4D2A8]/20 border border-[#B8902B]/40 rounded-[3px]">
          <h3 className="font-serif text-base font-bold text-[#2E1B0F] mb-4 text-center">
            Hand-Crafted Schematic: The Traditional Hydro-Distillation Alembic
          </h3>

          <div className="w-full max-w-xl mx-auto">
            <svg viewBox="0 0 500 280" className="w-full h-auto text-[#2E1B0F]" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Ground & Brick Bhatthi (Furnace) */}
              <line x1="20" y1="250" x2="480" y2="250" stroke="#5A3A22" strokeWidth="2" />
              <rect x="40" y="210" width="130" height="40" fill="#8A5A36" fillOpacity="0.3" stroke="#5A3A22" strokeWidth="1.2" />
              <text x="105" y="235" textAnchor="middle" className="text-[10px] font-mono fill-[#5A3A22]">Bhatthi (Wood Hearth)</text>

              {/* Flame embers */}
              <path d="M75 220 Q85 195 95 220 Q105 190 115 220 Q125 198 135 220 Z" fill="#BA6838" fillOpacity="0.6" />

              {/* Copper Deg (Cauldron) */}
              <path d="M50 210 C50 140 70 120 70 100 L140 100 C140 120 160 140 160 210 Z" fill="#C48B57" fillOpacity="0.4" stroke="#5A3A22" strokeWidth="1.5" />
              <text x="105" y="160" textAnchor="middle" className="text-xs font-serif font-bold fill-[#2E1B0F]">Deg (Copper Cauldron)</text>
              <text x="105" y="175" textAnchor="middle" className="text-[9px] font-mono fill-[#5A3A22]">Botanicals + Gangetic Water</text>

              {/* Sarposh (Lid) with Mud Seal */}
              <path d="M70 100 L105 80 L140 100 Z" fill="#BA6838" stroke="#5A3A22" strokeWidth="1.2" />
              <rect x="65" y="96" width="80" height="8" rx="2" fill="#8A5A36" stroke="#2E1B0F" strokeWidth="0.8" />
              <text x="105" y="70" textAnchor="middle" className="text-[9px] font-mono fill-[#8A5A36]">Sarposh & Multani Mud Seal</text>

              {/* Chonga (Hollow Bamboo Conduit) */}
              <path d="M105 80 Q180 50 250 80 Q320 110 370 170" stroke="#8A5A36" strokeWidth="4" strokeLinecap="round" fill="none" />
              <text x="240" y="65" textAnchor="middle" className="text-[10px] font-mono fill-[#5A3A22]">Chonga (Seasoned Bamboo Pipe)</text>

              {/* Gachhi (Cooling Water Tank) */}
              <rect x="310" y="160" width="140" height="90" fill="#B8902B" fillOpacity="0.15" stroke="#5A3A22" strokeWidth="1.5" />
              <text x="380" y="240" textAnchor="middle" className="text-[10px] font-mono fill-[#5A3A22]">Gachhi (Cold Water Bath)</text>

              {/* Bapka (Submerged Copper Receiver) */}
              <path d="M345 220 C345 180 355 170 355 160 L385 160 C385 170 395 180 395 220 Z" fill="#C48B57" fillOpacity="0.6" stroke="#5A3A22" strokeWidth="1.2" />
              <text x="370" y="195" textAnchor="middle" className="text-[9px] font-serif font-bold fill-[#2E1B0F]">Bapka</text>
              <text x="370" y="208" textAnchor="middle" className="text-[8px] font-mono fill-[#5A3A22]">Sandalwood Base</text>

              {/* Distillation flow arrows */}
              <path d="M140 70 Q180 60 210 65" stroke="#B8902B" strokeWidth="1.2" strokeDasharray="2 2" />
              <path d="M280 80 Q310 100 330 130" stroke="#B8902B" strokeWidth="1.2" strokeDasharray="2 2" />
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs mt-4 pt-4 border-t border-[#5A3A22]/20 text-[#5A3A22]">
            <div>
              <strong className="block text-[#2E1B0F]">1. Filling the Deg</strong>
              Fresh botanical petals or baked clay tikkis are loaded with water into the cauldron and sealed with wet earth.
            </div>
            <div>
              <strong className="block text-[#2E1B0F]">2. Gentle Wood Heat</strong>
              Distillers maintain precise fire temperatures using seasoned wood, avoiding scorched volatiles.
            </div>
            <div>
              <strong className="block text-[#2E1B0F]">3. Bamboo Transit</strong>
              Vapor travels down the bamboo chonga into the bapka submerged in cold circulating river water.
            </div>
            <div>
              <strong className="block text-[#2E1B0F]">4. Sandalwood Union</strong>
              Vapors condense directly into aged sandalwood oil, which bonds the fleeting floral molecules without synthetic fixatives.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY IT IS DECLINING */}
      <section className="space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#6B1E1E]">
          The Structural Crisis
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2E1B0F]">
          Why the World's Oldest Perfume Capital Is Shrinking
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#5A3A22] leading-relaxed">
          <div className="p-4 bg-[#F1E6CC] border border-[#5A3A22]/30 rounded-[2px] space-y-1.5">
            <h4 className="font-serif font-bold text-sm text-[#2E1B0F]">1. Influx of Petroleum Synthetics</h4>
            <p>
              Industrial chemical aroma molecules produced in bulk factories at fractions of the cost undercut smallholder farmers who hand-pluck Damask roses and wild vetiver roots.
            </p>
          </div>
          <div className="p-4 bg-[#F1E6CC] border border-[#5A3A22]/30 rounded-[2px] space-y-1.5">
            <h4 className="font-serif font-bold text-sm text-[#2E1B0F]">2. The Alcohol Spray Disconnect</h4>
            <p>
              Modern buyers expect loud chemical sillage and aerosol misting. Pure botanical ittar is an intimate, long-developing oil applied directly to skin, often misunderstood as "old-fashioned".
            </p>
          </div>
          <div className="p-4 bg-[#F1E6CC] border border-[#5A3A22]/30 rounded-[2px] space-y-1.5">
            <h4 className="font-serif font-bold text-sm text-[#2E1B0F]">3. Lack of Direct Digital Reach</h4>
            <p>
              Multi-generational bhatthi distillers in Kannauj's narrow lanes rarely control digital retail channels, leaving them vulnerable to intermediaries who dilute extracts for urban distribution.
            </p>
          </div>
          <div className="p-4 bg-[#F1E6CC] border border-[#5A3A22]/30 rounded-[2px] space-y-1.5">
            <h4 className="font-serif font-bold text-sm text-[#2E1B0F]">4. Counterfeit "Attar" Dilution</h4>
            <p>
              Marketplaces are flooded with cheap mineral oil and paraffin concoctions labeled as "attar," destroying customer trust and pricing authentic ₹14,000 pure rose distillations out of the market.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE EVIDENCE (TIMELINE & BAR CHART FROM CONFIG FILE WITH SOURCE CITATIONS) */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#B8902B]">
              Journalistic & Archival Record
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2E1B0F] mt-1">
              Documenting the Contraction
            </h2>
          </div>
          <span className="text-[11px] font-mono text-[#8A5A36]">Figures as reported · Dates to verify</span>
        </div>

        {/* Bar Chart Comparison: Pure Rose Oil vs Synthetic Replica */}
        <div className="parchment-card p-6 bg-[#E4D2A8]/20 border border-[#B8902B]/40 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#5A3A22]/20 pb-3">
            <div>
              <h3 className="font-serif font-bold text-base text-[#2E1B0F]">
                The Economic Disparity: Pure Rose Oil vs. Synthetic Substitute
              </h3>
              <p className="text-[11px] text-[#8A5A36] font-mono">
                Source: Arab News reporting from Kannauj · Price comparison as reported by a distiller; not a macro market study
              </p>
            </div>
            <span className="text-xs font-mono text-[#6B1E1E] font-bold">35x Price Gap</span>
          </div>

          <div className="space-y-4 pt-2">
            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="font-semibold text-[#2E1B0F]">Pure Hydro-Distilled Damask Rose Oil (10 ml)</span>
                <span className="font-bold text-[#6B1E1E]">₹14,000</span>
              </div>
              <div className="w-full h-5 bg-[#E4D2A8] rounded-[2px] overflow-hidden">
                <div className="h-full bg-[#6B1E1E] w-full" />
              </div>
              <p className="text-[10px] text-[#5A3A22] mt-0.5">Requires ~4,000 kg fresh Rosa damascena petals hand-harvested at dawn.</p>
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="font-semibold text-[#2E1B0F]">Petroleum-Derived Synthetic "Rose" Replica (10 ml)</span>
                <span className="font-bold text-[#3B6E47]">₹400</span>
              </div>
              <div className="w-full h-5 bg-[#E4D2A8] rounded-[2px] overflow-hidden">
                <div className="h-full bg-[#8A5A36]" style={{ width: '2.85%' }} />
              </div>
              <p className="text-[10px] text-[#5A3A22] mt-0.5">Industrial synthetic chemicals synthesized from petrochemical fractions.</p>
            </div>
          </div>
        </div>

        {/* Distillery Count Contraction */}
        <div className="parchment-card p-6 border border-[#5A3A22]/30 space-y-3">
          <h3 className="font-serif font-bold text-base text-[#2E1B0F]">
            Reported Distillery Contraction in Kannauj
          </h3>
          <p className="text-xs text-[#5A3A22]">
            Kannauj reportedly had about 700 distilleries until the late 1990s, and fewer than 100 by the time of later reporting.
            <span className="italic block mt-1 text-[#8A5A36] font-mono">
              [Reported figure, date of report to verify — Sources: BBC News, 'The Soul of the Rose'; Arab News]
            </span>
          </p>
        </div>

        {/* Timeline of Historical Milestones */}
        <div className="space-y-4 pt-2">
          <h3 className="font-serif font-bold text-lg text-[#2E1B0F]">Historical Evidence Timeline</h3>
          <div className="relative border-l-2 border-[#B8902B] ml-3 pl-6 space-y-6">
            {SITE_CONFIG.declineSources.map((item, idx) => (
              <div key={idx} className="relative">
                <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full border-2 border-[#B8902B] bg-[#F1E6CC]" />
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-xs font-bold text-[#6B1E1E]">{item.metric}</span>
                  <span className="text-xs text-[#8A5A36]">·</span>
                  <span className="text-xs font-mono text-[#5A3A22]">{item.sourceName}</span>
                </div>
                <div className="flex items-baseline gap-2 mt-1 text-xs font-serif">
                  <span className="font-bold text-[#2E1B0F]">{item.historicalValue}</span>
                  <span className="text-[#8A5A36]">→</span>
                  <span className="font-bold text-[#8A5A36]">{item.currentValue}</span>
                </div>
                <p className="text-xs text-[#5A3A22] mt-1 leading-relaxed">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* "A Fair View" Balanced Perspective Note */}
        <div className="p-4 bg-[#E4D2A8]/50 border-l-3 border-[#B8902B] rounded-r-[2px] space-y-1">
          <h4 className="font-serif font-bold text-sm text-[#2E1B0F]">A Fair View</h4>
          <p className="text-xs text-[#5A3A22] leading-relaxed">
            Some distillers dispute that the industry will disappear, and some use modern machinery or export to global luxury perfume houses. The craft is shrinking but not extinct—which is precisely why the opportunity and duty exist to preserve it through honest consumer access and transparent verification.
          </p>
        </div>

        {/* Sources List */}
        <div className="pt-2 text-[11px] font-mono text-[#8A5A36] space-y-1">
          <span className="font-bold uppercase text-[#5A3A22] block">Verified Sources:</span>
          <p>• BBC News, "The Soul of the Rose" (Reporting on Kannauj attar distillation)</p>
          <p>• Arab News, Kannauj Fragrance Special (Distiller interviews and price ratios)</p>
          <p>• Live History India & Intellectual Property India (GI tag registration 2014 & FFDC 1991)</p>
          <p>• The Wire, "History of Indian Perfumery" (Pre-independence synthetic pressures in the 1930s-40s)</p>
          <p>• Down To Earth & Uttar Pradesh Directorate of Industries (Kannauj-Grasse bilateral initiative)</p>
          <p className="italic text-[#6B1E1E] pt-1">* Note: Figures are as reported in journalism and may be dated; cited for contextual illustration.</p>
        </div>
      </section>

      {/* SECTION 5: KAUTILYA'S PRINCIPLE & BATCH PASSPORT */}
      <section className="p-8 bg-[#2E1B0F] text-[#F1E6CC] rounded-[3px] border border-[#B8902B] space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D9B44A]">
            Arthashastra Principle
          </span>
          <SaptangaTag element="durga" size="sm" />
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold">
          "Honest Trade Is a Duty of the State."
        </h2>
        <p className="text-xs sm:text-sm text-[#E4D2A8]/85 leading-relaxed">
          In Kautilya's Arthashastra (Book II), trade oversight was not merely a commercial regulation, but a moral covenant. The superintendent inspected weights, checked authenticity, and protected citizens from adulterated goods.
        </p>
        <p className="text-xs sm:text-sm text-[#E4D2A8]/85 leading-relaxed">
          At GandhaNiti, our <strong className="text-white">Batch Passport</strong> system implements this principle: every flacon contains an unalterable transparency record detailing the copper deg batch, master distiller, distillation hours, and purity verification.
        </p>
        <div className="pt-2">
          <a
            href="#/batch-passport"
            className="text-xs font-semibold text-[#D9B44A] hover:underline flex items-center gap-1.5"
          >
            <span>Review the Sample Batch Passport</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* SECTION 6: HOW WE ARE REVERSING THE DECLINE */}
      <section className="space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#B8902B]">
          The GandhaNiti Intervention
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2E1B0F]">
          Four Tangible Steps to Reverse the Loss
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#5A3A22]">
          <div className="p-4 bg-[#F1E6CC] border border-[#5A3A22]/20 rounded-[2px] space-y-1">
            <h4 className="font-serif font-bold text-sm text-[#2E1B0F]">1. Direct Online Access</h4>
            <p>Connecting verified Kannauj bhatthis directly to national and international fragrance patrons without deceptive intermediary dilution.</p>
          </div>
          <div className="p-4 bg-[#F1E6CC] border border-[#5A3A22]/20 rounded-[2px] space-y-1">
            <h4 className="font-serif font-bold text-sm text-[#2E1B0F]">2. The Imperial Discovery Set</h4>
            <p>Allowing patrons to experience 5 classical profiles on their own skin for ₹799 before committing to full flacons.</p>
          </div>
          <div className="p-4 bg-[#F1E6CC] border border-[#5A3A22]/20 rounded-[2px] space-y-1">
            <h4 className="font-serif font-bold text-sm text-[#2E1B0F]">3. Algorithmic Scent Quiz</h4>
            <p>Replacing high-pressure perfume sales with a transparent, rasa-grounded questionnaire matching real lifestyles to natural botanicals.</p>
          </div>
          <div className="p-4 bg-[#F1E6CC] border border-[#5A3A22]/20 rounded-[2px] space-y-1">
            <h4 className="font-serif font-bold text-sm text-[#2E1B0F]">4. Fair Artisan Sourcing</h4>
            <p>Guaranteeing seasonal advances to Damask rose and vetiver harvesters. <span className="font-mono text-[#8A5A36]">[Marked: Planned for cooperative expansion]</span></p>
          </div>
        </div>
      </section>

      {/* SECTION 7: TEAM (TWO CARDS OF EQUAL SIZE WITH SWAMI & AMATYA TAGS) */}
      <section id="team" className="space-y-6 pt-4 border-t border-[#5A3A22]/20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#B8902B]">
              Founders' Council
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2E1B0F] mt-1">
              Leadership & Guild Stewards
            </h2>
          </div>
          <span className="text-xs font-mono text-[#8A5A36]">{SITE_CONFIG.team.teamName}</span>
        </div>

        {/* Two Teammate Cards of EQUAL SIZE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SITE_CONFIG.team.teammates.map((teammate, idx) => (
            <div
              key={idx}
              className="parchment-card p-6 flex flex-col justify-between space-y-4 border border-[#5A3A22] rounded-[3px]"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-[#8A5A36] uppercase">{teammate.role}</span>
                  {idx === 0 ? <SaptangaTag element="swami" size="sm" /> : <SaptangaTag element="amatya" size="sm" />}
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#2E1B0F]">
                  {teammate.name}
                </h3>
                <p className="font-serif italic text-xs text-[#8A5A36] mt-0.5">
                  "{teammate.tagline}"
                </p>
                <p className="text-xs text-[#5A3A22] mt-3 leading-relaxed">
                  {teammate.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-[#5A3A22]/15 text-[11px] font-mono text-[#8A5A36]">
                Pillar: {teammate.saptangaPillar} · {SITE_CONFIG.team.teamName}
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Council (Marked Planned) */}
        <div id="advisers" className="pt-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-lg font-bold text-[#2E1B0F]">
              Craft Council & Analytical Advisors
            </h3>
            <span className="text-xs font-mono text-[#6B1E1E] bg-[#6B1E1E]/10 px-2 py-0.5 rounded-[2px]">
              Marked: Planned Guild Roles
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SITE_CONFIG.team.advisers.map((adv, i) => (
              <div key={i} className="p-4 bg-[#E4D2A8]/30 border border-[#5A3A22]/20 rounded-[2px] space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif font-bold text-sm text-[#2E1B0F]">{adv.name}</h4>
                  <span className="text-[10px] font-mono text-[#6B1E1E] border border-[#6B1E1E]/30 px-1.5 rounded-[2px]">Planned</span>
                </div>
                <p className="text-xs text-[#8A5A36]">{adv.role}</p>
                <p className="text-xs text-[#5A3A22] pt-1">{adv.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: CONTACT BLOCK & SHOP LINK */}
      <section className="pt-8 border-t border-[#5A3A22]/20 space-y-6">
        <div className="parchment-card p-8 bg-[#E4D2A8]/30 border border-[#B8902B] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif text-2xl font-bold text-[#2E1B0F]">
              Have questions for the founders?
            </h3>
            <p className="text-xs text-[#5A3A22]">
              Reach our Kannauj desk at {SITE_CONFIG.contact.email} or call {SITE_CONFIG.contact.phoneFormatted}.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="#/contact"
              className="px-5 py-2.5 text-xs font-semibold bg-[#2E1B0F] text-[#F1E6CC] rounded-[2px] transition-colors hover:bg-[#5A3A22]"
            >
              Contact Page
            </a>
            <a
              href="#/shop"
              className="px-5 py-2.5 text-xs font-semibold bg-[#B8902B] hover:bg-[#D9B44A] text-[#2E1B0F] border border-[#8A5A36] rounded-[2px] transition-colors flex items-center gap-1.5"
            >
              <span>Shop the Collection</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
