export interface SaptangaElement {
  id: string;
  name: string;
  devanagari: string;
  title: string;
  meaningParaphrased: string;
  gandhanitiAction: string;
  actionPageLink: string;
  actionPageLabel: string;
  symbolDescription: string;
  iconName: string; // Lucide or custom
  quoteParaphrase: string;
}

export const SAPTANGA_ELEMENTS: SaptangaElement[] = [
  {
    id: "swami",
    name: "Swami",
    devanagari: "स्वामिन्",
    title: "The Ruler / Leadership & Vision",
    meaningParaphrased: "In Kautilya's political treatise, the ruler is the source of purpose, foresight, and moral accountability. When the head is steady in virtue, the entire kingdom remains purposeful.",
    gandhanitiAction: "Founders' commitment to reviving Kannauj's endangered artisanal distillation without diluting formulas or chasing cheap synthetic margins.",
    actionPageLink: "/about#team",
    actionPageLabel: "View Leadership & Founders' Note",
    symbolDescription: "The sovereign seal and crown of intent",
    iconName: "Crown",
    quoteParaphrase: "A ruler who treats the welfare of the people as his own happiness maintains the integrity of the state."
  },
  {
    id: "amatya",
    name: "Amatya",
    devanagari: "अमात्य",
    title: "The Ministers / Administration & Craft Advisors",
    meaningParaphrased: "The advisors, operational stewards, and specialized councillors whose technical competence and integrity execute the vision and prevent errors of governance.",
    gandhanitiAction: "Our operational council of master deg craftsmen, botanical analysts, and supply-chain stewards who safeguard distillation precision (adviser roles marked Planned).",
    actionPageLink: "/about#advisers",
    actionPageLabel: "View Operational Stewards & Craft Council",
    symbolDescription: "The quill and seal of administrative counsel",
    iconName: "Users",
    quoteParaphrase: "Governance cannot be carried on with one wheel alone; a wise enterprise listens to capable counselors."
  },
  {
    id: "janapada",
    name: "Janapada",
    devanagari: "जनपद",
    title: "The People & Territory / Land, Farmers & Distillers",
    meaningParaphrased: "The fertile land, seasonal waters, hardworking peasantry, and artisanal guild populace that form the living body of the realm.",
    gandhanitiAction: "Direct engagement with Kannauj's alluvial soil, Damask rose growers of Aligarh, wild vetiver harvesters of riverbeds, and third-generation bhatthi families.",
    actionPageLink: "/about#decline",
    actionPageLabel: "Read the Kannauj Soil & Artisan Story",
    symbolDescription: "The fertile soil, riverbed silt, and blooming flora",
    iconName: "MapPin",
    quoteParaphrase: "The true wealth of a territory is its industrious people and the fertile ground that sustains their craft."
  },
  {
    id: "durga",
    name: "Durga",
    devanagari: "दुर्ग",
    title: "The Fortress / Protection, Tamper Resistance & Verification",
    meaningParaphrased: "The fortified ramparts that shield the realm from external deception, guaranteeing safety, inviolable borders, and trusted inner sanctums.",
    gandhanitiAction: "Our public Batch Passport QR transparency system, tamper-evident wax seals, and secure cryptographic order tracking guarding against counterfeit perfumes.",
    actionPageLink: "/batch-passport",
    actionPageLabel: "Inspect the Batch Passport System",
    symbolDescription: "The stone rampart and tamper-proof wax seal",
    iconName: "ShieldCheck",
    quoteParaphrase: "A well-guarded perimeter ensures honest commerce within, preventing fraud before it crosses the gate."
  },
  {
    id: "kosha",
    name: "Kosha",
    devanagari: "कोश",
    title: "The Treasury / Fair Unit Economics & Sourcing",
    meaningParaphrased: "The sovereign treasury, accrued not through extortion or deceptive weights, but through lawful taxation, fair exchange, and prudent reserves.",
    gandhanitiAction: "Open unit-economics calculator, paying fair advance wages to seasonal flower farmers, and charging an honest price without inflated luxury markups.",
    actionPageLink: "/business-model",
    actionPageLabel: "Explore the Open Unit Economics Calculator",
    symbolDescription: "The weighed gold coin and balanced ledger",
    iconName: "Coins",
    quoteParaphrase: "Wealth gathered through lawful and transparent means sustains both the artisan and the commonwealth."
  },
  {
    id: "danda",
    name: "Danda",
    devanagari: "दण्ड",
    title: "Enforcement of Order / Standards, Audits & Refusal of Fakes",
    meaningParaphrased: "The sovereign enforcement of law and commercial standards that penalizes adulteration, protects fair weights, and cleanses the marketplace of fraudulent goods. (Note: this refers to the seventh element of statecraft, separate from the diplomatic four upayas).",
    gandhanitiAction: "Strict laboratory GC-MS audits, non-negotiable zero-synthetic policy, outright refusal to list unverified concoctions, and a straightforward 15-day return policy.",
    actionPageLink: "/returns",
    actionPageLabel: "Read our Purity Enforcement & Returns Policy",
    symbolDescription: "The rod of standard weights and market justice",
    iconName: "Scale",
    quoteParaphrase: "When the market overseer enforces genuine weights and purity, the buyer trusts the merchant without hesitation."
  },
  {
    id: "mitra",
    name: "Mitra",
    devanagari: "मित्र",
    title: "The Allies / Cooperatives, Logistics & Patrons",
    meaningParaphrased: "The steadfast allies, friendly realms, and external partners whose goodwill, mutual treaties, and shared commitments fortify the kingdom.",
    gandhanitiAction: "Collaborations with Kannauj artisan cooperatives, trusted heritage couriers, and corporate gifting patrons who sponsor artisanal batches for their organizations.",
    actionPageLink: "/gifting",
    actionPageLabel: "Explore Corporate Patronage & Gifting",
    symbolDescription: "The joined hands of treaty and patronage",
    iconName: "Handshake",
    quoteParaphrase: "An alliance forged on shared honor and dependable exchange is a fortress that requires no stones."
  }
];
