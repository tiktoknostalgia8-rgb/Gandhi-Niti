/**
 * GandhaNiti Configuration
 * All contact details, team parameters, and source citations centralized here.
 */

export interface TeamMember {
  name: string;
  role: string;
  saptangaPillar: string;
  saptangaMeaning?: string;
  tagline: string;
  bio: string;
  isPlanned?: boolean;
}

export const SITE_CONFIG = {
  brandName: "GandhaNiti",
  brandNameDevanagari: "गन्धनीति",
  tagline: "Where the empire's fragrance finds its trust.",
  heroHeadline: "Smell the Kingdom. Trust the Craft.",
  heroSubline: "Authentic Kannauj ittar, guided by a scent quiz, verified batch by batch.",
  
  contact: {
    email: "customersupport.gandhiniti@gmail.com",
    phone: "+91 92667 46123",
    phoneFormatted: "+91 92667 46123",
    phoneTel: "tel:+919266746123",
    address: "Kothi Mohalla, Bara Bazar, Distillers' Quarter, Kannauj, Uttar Pradesh 209725, India",
    addressNote: "[Registered Office Address - Kannauj Craft Cluster]",
    operatingHours: "Monday to Saturday, 9:00 AM - 6:30 PM IST",
    gstin: "09AAECG1234F1Z8 [Illustrative Demo GSTIN]"
  },

  team: {
    teamName: "GandhaNiti Heritage Guild",
    teammates: [
      {
        name: "Aryavrat Sharma",
        role: "Co-Founder & Heritage Sourcing Lead",
        saptangaPillar: "Swami",
        saptangaMeaning: "The Ruler / Leadership & Vision",
        tagline: "Preserving Kannauj's copper-deg legacy through digital transparency.",
        bio: "Dedicated to reviving traditional hydro-distillation and establishing direct lineage between multigenerational bhatthis and discerning modern fragrance connoisseurs."
      },
      {
        name: "Meera Kulkarni",
        role: "Co-Founder & Chief Product Strategist",
        saptangaPillar: "Amatya",
        saptangaMeaning: "The Minister / Operations & Scent Architecture",
        tagline: "Connecting Arthashastra market ethics with contemporary olfactory design.",
        bio: "Specializing in natural botanicals, supply-chain verification, and developing our interactive diagnostic quiz to match real individuals with genuine Kannauj distillations."
      }
    ] as TeamMember[],
    advisers: [
      {
        name: "Master Deg Distiller (Kannauj Cooperative)",
        role: "Honorary Craft Adviser",
        saptangaPillar: "Amatya",
        saptangaMeaning: "Adviser",
        tagline: "Fourth-generation deg-bapka practitioner.",
        bio: "Advises on copper thickness, fire monitoring using dry wood, and bamboo receiver seasoning.",
        isPlanned: true
      },
      {
        name: "Senior Botanical Analytical Chemist",
        role: "Quality & Chromatography Consultant",
        saptangaPillar: "Amatya",
        saptangaMeaning: "Adviser",
        tagline: "GC-MS purity validation specialist.",
        bio: "Guides testing standards to verify natural constituents and total absence of diethyl phthalate (DEP).",
        isPlanned: true
      }
    ] as TeamMember[]
  },

  // Historical and journalistic citations for the decline story
  declineSources: [
    {
      sourceName: "BBC News, 'The Soul of the Rose'",
      metric: "Active Distilleries in Kannauj",
      historicalValue: "Reported ~700 distilleries",
      currentValue: "Fewer than 100 reported in later survey",
      note: "Reported figure; date of report to verify. Reflects sharp contraction as synthetic solvents undercut wood-fired degs."
    },
    {
      sourceName: "Arab News, Kannauj Fragrance Special",
      metric: "Price Comparison: Pure Rose Oil vs Synthetic",
      historicalValue: "₹14,000 per 10 ml (Pure Damask Rose Oil)",
      currentValue: "₹400 per 10 ml (Synthetic Petroleum-derived replica)",
      note: "As reported by a master distiller; price comparison, not a macro market study. Illustrates the severe economic disadvantage faced by artisan growers."
    },
    {
      sourceName: "Live History India & Intellectual Property India",
      metric: "GI Tag & Institutional Infrastructure",
      historicalValue: "1991: FFDC established",
      currentValue: "2014: Kannauj Perfume granted Geographical Indication (GI)",
      note: "Fragrance and Flavour Development Centre (FFDC) was founded to bolster standards; GI tag formalized the heritage claim."
    },
    {
      sourceName: "The Wire, 'History of Indian Perfumery'",
      metric: "Long-standing Synthetic Influx",
      historicalValue: "Early 1930s-1940s",
      currentValue: "First recorded industrial chemical imports",
      note: "Historians note cheaper imported chemical perfumes were pressuring Indian attar makers as early as the 1930s and 1940s; the decline is long-running."
    },
    {
      sourceName: "Down To Earth & UP State Directorate",
      metric: "Bilateral Heritage & French Exchange",
      historicalValue: "Centuries of oral guild tradition",
      currentValue: "UP-Grasse Cooperation Pact",
      note: "Uttar Pradesh government initiated cross-training and knowledge exchange with Grasse, France, recognizing Kannauj as India's perfume capital."
    }
  ]
};
