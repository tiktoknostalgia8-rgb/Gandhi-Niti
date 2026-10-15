export interface SaptangaElement {
  id: string;
  name: string;
  devanagari: string;
  title: string;
  kautilyaMeaning: string; // Exact table text
  gandhanitiEquivalent: string; // Exact table text
  meaningParaphrased: string;
  gandhanitiAction: string;
  actionPageLink: string;
  actionPageLabel: string;
  symbolDescription: string;
  iconName: string; // Lucide icon identifier
  quoteParaphrase: string;
}

export const SAPTANGA_ELEMENTS: SaptangaElement[] = [
  {
    id: "swami",
    name: "Swami",
    devanagari: "स्वामिन्",
    title: "1. Swami (the ruler)",
    kautilyaMeaning: "The leader with vision and competence",
    gandhanitiEquivalent: "The founder/team. You set the vision: revive Kannauj ittar for a generation that has never smelled it. Say who does what.",
    meaningParaphrased: "In Kautilya's political treatise, the ruler is the source of purpose, foresight, and moral accountability. When the head is steady in virtue, the entire kingdom remains purposeful.",
    gandhanitiAction: "Founders' leadership setting the non-negotiable vision: revive authentic Kannauj ittar for a generation that has never smelled it. Aryavrat Sharma leads heritage bhatthi sourcing and provenance; Meera Kulkarni leads product architecture, testing standards, and diagnostic systems.",
    actionPageLink: "/about#team",
    actionPageLabel: "View Founders & Leadership Division",
    symbolDescription: "The sovereign seal and crown of intent",
    iconName: "Crown",
    quoteParaphrase: "A ruler who treats the welfare of the people as his own happiness maintains the integrity of the state."
  },
  {
    id: "amatya",
    name: "Amatya",
    devanagari: "अमात्य",
    title: "2. Amatya (ministers)",
    kautilyaMeaning: "Skilled advisers and administrators who run the state",
    gandhanitiEquivalent: "Team and experts. Operations, a distiller partner as scent adviser, a designer, a developer. If you have no advisers yet, say 'we plan to onboard a Kannauj distiller as an adviser.'",
    meaningParaphrased: "The advisors, operational stewards, and specialized councillors whose technical competence and integrity execute the vision and prevent errors of governance.",
    gandhanitiAction: "Our operational council and specialized stewards. Operations, supply logistics, brand design, and web development. As we scale, we plan to onboard a multigenerational Kannauj master distiller and a senior botanical analytical chemist as formal craft advisers.",
    actionPageLink: "/about#advisers",
    actionPageLabel: "View Operational Stewards & Craft Advisers",
    symbolDescription: "The quill and seal of administrative counsel",
    iconName: "Users",
    quoteParaphrase: "Governance cannot be carried on with one wheel alone; a wise enterprise listens to capable counselors."
  },
  {
    id: "janapada",
    name: "Janapada",
    devanagari: "जनपद",
    title: "3. Janapada (people and territory)",
    kautilyaMeaning: "The population and land that sustain the state",
    gandhanitiEquivalent: "Customers and the Kannauj distiller community. Customers: young professionals, gifters, companies. Territory: Kannauj sourcing and an India-wide online market.",
    meaningParaphrased: "The fertile land, seasonal waters, hardworking peasantry, and artisanal guild populace that form the living body of the realm.",
    gandhanitiAction: "Customers and the Kannauj distiller community. Customers: discerning young professionals seeking mindful scent, heirloom gifters, and corporate patrons. Territory: direct sourcing from Kannauj's alluvial bhatthis and an India-wide online market.",
    actionPageLink: "/about#decline",
    actionPageLabel: "Read the Community & Territory Story",
    symbolDescription: "The fertile soil, riverbed silt, and blooming flora",
    iconName: "MapPin",
    quoteParaphrase: "The true wealth of a territory is its industrious people and the fertile ground that sustains their craft."
  },
  {
    id: "durga",
    name: "Durga",
    devanagari: "दुर्ग",
    title: "4. Durga (fortress)",
    kautilyaMeaning: "Defences that protect the state",
    gandhanitiEquivalent: "Protection of the brand. Batch-passport QR codes, authenticity verification, secure payments, tamper-proof packaging, and data security. This answers the fake-ittar problem.",
    meaningParaphrased: "The fortified ramparts that shield the realm from external deception, guaranteeing safety, inviolable borders, and trusted inner sanctums.",
    gandhanitiAction: "Protection of the brand and answering the fake-ittar epidemic. Individual Batch-Passport QR codes, tamper-evident red lac wax seals, secure simulated checkout, and complete GC-MS chromatography records shielding our patrons from adulterated counterfeits.",
    actionPageLink: "/batch-passport",
    actionPageLabel: "Inspect the Batch Passport Fortress",
    symbolDescription: "The stone rampart and tamper-proof wax seal",
    iconName: "ShieldCheck",
    quoteParaphrase: "A well-guarded perimeter ensures honest commerce within, preventing fraud before it crosses the gate."
  },
  {
    id: "kosha",
    name: "Kosha",
    devanagari: "कोश",
    title: "5. Kosha (treasury)",
    kautilyaMeaning: "Wealth that keeps the state running",
    gandhanitiEquivalent: "Finances. Unit economics, margins, repeat purchases, working capital, and a fair share to distillers.",
    meaningParaphrased: "The sovereign treasury, accrued not through extortion or deceptive weights, but through lawful taxation, fair exchange, and prudent reserves.",
    gandhanitiAction: "Finances and commercial viability. Transparent unit economics (68.3% gross margin, healthy contribution margin), predictable repeat purchase rates via the Discovery Set entry point, working capital discipline, and paying seasonal advance wages to artisan distillers.",
    actionPageLink: "/business-model",
    actionPageLabel: "Explore Open Unit Economics (Kosha)",
    symbolDescription: "The weighed gold coin and balanced ledger",
    iconName: "Coins",
    quoteParaphrase: "Wealth gathered through lawful and transparent means sustains both the artisan and the commonwealth."
  },
  {
    id: "danda",
    name: "Danda",
    devanagari: "दण्ड",
    title: "6. Danda (force/enforcement)",
    kautilyaMeaning: "Authority that enforces order",
    gandhanitiEquivalent: "Quality control and rules. Supplier standards, batch testing, return policy, and refusal to list unverified products. 'Our Danda is our quality enforcement.'",
    meaningParaphrased: "The sovereign enforcement of law and commercial standards that penalizes adulteration, protects fair weights, and cleanses the marketplace of fraudulent goods. (Note: this refers to the seventh element of statecraft, separate from the diplomatic four upayas).",
    gandhanitiAction: "Quality control and rules. Supplier standards, rigorous GC-MS laboratory batch testing, an equitable 15-day return policy, and outright refusal to list unverified products. 'Our Danda is our quality enforcement.'",
    actionPageLink: "/returns",
    actionPageLabel: "Read our Purity Enforcement & Quality Charter",
    symbolDescription: "The rod of standard weights and market justice",
    iconName: "Scale",
    quoteParaphrase: "When the market overseer enforces genuine weights and purity, the buyer trusts the merchant without hesitation."
  },
  {
    id: "mitra",
    name: "Mitra",
    devanagari: "मित्र",
    title: "7. Mitra (allies)",
    kautilyaMeaning: "Friendly states that support you",
    gandhanitiEquivalent: "Partners. Distillers, cooperatives, courier partners, corporate gifting clients, and influencers or craft organisations.",
    meaningParaphrased: "The steadfast allies, friendly realms, and external partners whose goodwill, mutual treaties, and shared commitments fortify the kingdom.",
    gandhanitiAction: "Partners and collaborative alliances. Multi-generational Kannauj bhatthi distillers, artisan flower cooperatives, reliable pan-India courier networks, corporate gifting benefactors, and cultural craft organizations championing Indian intangible heritage.",
    actionPageLink: "/gifting",
    actionPageLabel: "Explore Corporate & Guild Alliances",
    symbolDescription: "The joined hands of treaty and patronage",
    iconName: "Handshake",
    quoteParaphrase: "An alliance forged on shared honor and dependable exchange is a fortress that requires no stones."
  }
];
