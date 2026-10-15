export interface Product {
  id: string;
  name: string;
  devanagariName: string;
  subtitle: string;
  price: number; // In INR (all prices labeled Illustrative)
  priceLabel: string;
  volume: string;
  scentFamily: 'Earth' | 'Floral' | 'Wood' | 'Green' | 'Amber & Spice';
  scentNotes: string; // One line
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  description: string;
  craftDetails: string;
  liquidColor: string; // Hex color for the bottle liquid
  liquidOpacity: number;
  batchCode: string;
  copperDegNumber: string;
  distillationHours: number;
  carrierBase: string;
  recommendedSeason: string;
  intensity: 'Gentle' | 'Moderate' | 'Deep';
  isSet?: boolean;
  includedItems?: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "mitti-attar",
    name: "Mitti Attar",
    devanagariName: "मिट्टी इत्र",
    subtitle: "The Petrichor of Baked River Clay",
    price: 1100,
    priceLabel: "Illustrative",
    volume: "10 ml Roll-On",
    scentFamily: "Earth",
    scentNotes: "Sun-baked Gangetic alluvial clay, petrichor, warm sandstone, pure aged sandalwood.",
    topNotes: ["Warm terracotta flakes", "First monsoon raindrop vapor"],
    heartNotes: ["Alluvial riverbed silt", "Calcined earthenware"],
    baseNotes: ["Aged East Indian Sandalwood (Santalum album)", "Subtle dry hay"],
    description: "The world's oldest hydro-distilled rain scent. Baked discs of clean unglazed river clay (tikki) are placed in sealed copper degs and slowly distilled into an aged sandalwood receiver over gentle wood embers.",
    craftDetails: "Hydro-distilled in Deg #12, Chonga bamboo receiver submerged in water bath (Gachhi) for 18 consecutive distillation cycles.",
    liquidColor: "#C48B57", // Terracotta clay amber
    liquidOpacity: 0.85,
    batchCode: "MITTI-KNJ-2026-04",
    copperDegNumber: "Deg No. 12 (400 kg capacity)",
    distillationHours: 42,
    carrierBase: "Pure East Indian Sandalwood Oil (Santalum album)",
    recommendedSeason: "Year-Round / Monsoon & Summer",
    intensity: "Moderate"
  },
  {
    id: "gulab-attar",
    name: "Gulab Attar",
    devanagariName: "गुलाब इत्र",
    subtitle: "Ruh-e-Gulab Hydro-Distilled at Dawn",
    price: 1400,
    priceLabel: "Illustrative",
    volume: "10 ml Roll-On",
    scentFamily: "Floral",
    scentNotes: "Freshly plucked Damask rose petals, morning river dew, honeyed nectar, milky sandalwood.",
    topNotes: ["Dew-kissed Rosa damascena petals", "Green calyx"],
    heartNotes: ["Warm honeyed rose heart", "Subtle clove stem"],
    baseNotes: ["Creamy Mysore sandalwood base", "Powdery botanical musk"],
    description: "Harvested between 4:00 AM and sunrise before the sun can evaporate the volatile aromatics. Approximately four tonnes of fresh Rosa damascena petals yield one kilogram of pure rose essence captured directly in sandalwood oil.",
    craftDetails: "Double hydro-distillation in tinned copper degs without synthetic solvents, hexane, or alcohol.",
    liquidColor: "#D65D6E", // Deep rose petal red-pink
    liquidOpacity: 0.88,
    batchCode: "GULAB-KNJ-2026-02",
    copperDegNumber: "Deg No. 04 (Dawn copper bath)",
    distillationHours: 36,
    carrierBase: "Traditional Sandalwood Oil Base",
    recommendedSeason: "Spring & Summer",
    intensity: "Moderate"
  },
  {
    id: "chandan-attar",
    name: "Chandan Attar",
    devanagariName: "चंदन इत्र",
    subtitle: "Sacred Aged White Sandalwood Heartwood",
    price: 1800,
    priceLabel: "Illustrative",
    volume: "10 ml Roll-On",
    scentFamily: "Wood",
    scentNotes: "Creamy santal heartwood, temple cedar, balsamic warmth, ancient bark resin.",
    topNotes: ["Crisp dry wood shavings", "Subtle sweet cardamon"],
    heartNotes: ["Milky santal resin", "Warm dry amber"],
    baseNotes: ["30-year matured Santalum album", "Earthy sweet woody foundation"],
    description: "The crown foundation of classical Indian perfumery. Sourced from sustainably managed, government-monitored plantations and steam-distilled using heavy-wall copper boilers over 72 uninterrupted hours.",
    craftDetails: "Aged in camel-hide kupi flasks for six months to eliminate moisture and allow balsamic santalols to harmonize into silk.",
    liquidColor: "#E2BA6D", // Golden sandalwood amber
    liquidOpacity: 0.9,
    batchCode: "CHAND-KNJ-2025-11",
    copperDegNumber: "Deg No. 09 (Heavy copper alembic)",
    distillationHours: 72,
    carrierBase: "Single Origin Santalum album Heartwood",
    recommendedSeason: "All Seasons / Evening Contemplation",
    intensity: "Deep"
  },
  {
    id: "kewra-attar",
    name: "Kewra Attar",
    devanagariName: "केवड़ा इत्र",
    subtitle: "Wild Screwpine Blossoms of the Coastal Delta",
    price: 1200,
    priceLabel: "Illustrative",
    volume: "10 ml Roll-On",
    scentFamily: "Floral",
    scentNotes: "Honeyed wild pandanus flower, citrus zest, green hyacinth leaf, sweet sandalwood.",
    topNotes: ["Crushed screwpine spadix", "Citrus blossom mist"],
    heartNotes: ["Honeyed green tropical nectar", "White orchard floral"],
    baseNotes: ["Mild sandalwood", "Balsamic botanical fixative"],
    description: "Wild male flowers of Pandanus odoratissimus gathered at dawn from riverbanks and estuaries. Revered for centuries in royal Mughal and Awadhi courts as a refreshing, regal botanical fragrance.",
    craftDetails: "Hydro-distilled within four hours of harvest to preserve delicate phenyl ethyl methyl ether notes.",
    liquidColor: "#E5C85A", // Radiant floral honey-gold
    liquidOpacity: 0.82,
    batchCode: "KEWRA-KNJ-2026-01",
    copperDegNumber: "Deg No. 07",
    distillationHours: 28,
    carrierBase: "Botanical Sandalwood Fixative Base",
    recommendedSeason: "Summer & Festive Evenings",
    intensity: "Gentle"
  },
  {
    id: "shamama-attar",
    name: "Shamama Attar",
    devanagariName: "शमामा इत्र",
    subtitle: "The Masterpiece of Forty Secret Herbs and Spices",
    price: 2200,
    priceLabel: "Illustrative",
    volume: "10 ml Roll-On",
    scentFamily: "Amber & Spice",
    scentNotes: "Kashmiri saffron, nutmeg, mace, agarwood resin, dry vetiver, warming roots.",
    topNotes: ["Golden saffron stigma", "Crushed mace & green cardamom"],
    heartNotes: ["Jatamansi (spikenard)", "Nagarmotha (cyperus root)", "Sugandhmantri"],
    baseNotes: ["Oakmoss", "Dark labdanum resin", "Dense sandalwood & ambergris accord"],
    description: "The secret royal formulation perfected by Kannauj perfumers. Over 40 botanical roots, barks, seeds, and spices are distilled sequentially into the same receiver pot over weeks of rhythmic heating and resting.",
    craftDetails: "Requires 60 days of sequential multi-stage deg hydro-distillation. The benchmark of Kannauj's artisanal complexity.",
    liquidColor: "#87321A", // Deep autumnal spice mahogany
    liquidOpacity: 0.95,
    batchCode: "SHAM-KNJ-2025-09",
    copperDegNumber: "Deg No. 01 (Guild Master Deg)",
    distillationHours: 140,
    carrierBase: "Complex Herbal Sandalwood Infusion",
    recommendedSeason: "Autumn & Winter",
    intensity: "Deep"
  },
  {
    id: "khus-attar",
    name: "Khus Attar",
    devanagariName: "खस इत्र",
    subtitle: "Ruh Khus from Wild Forest Vetiver Roots",
    price: 1300,
    priceLabel: "Illustrative",
    volume: "10 ml Roll-On",
    scentFamily: "Green",
    scentNotes: "Crisp emerald wild grass, cool river water, moist dark soil, green woody vetiverol.",
    topNotes: ["Crushed wild vetiver rootlets", "River spray"],
    heartNotes: ["Earthy green vetiverol", "Forest floor moss"],
    baseNotes: ["Cool mineral loam", "Smooth sandalwood undertone"],
    description: "Distilled from wild vetiver roots gathered from the riverbanks of North India. Known as the 'Oil of Tranquility' in Ayurvedic literature, giving off an extraordinary cooling green fragrance that tempers scorching heat.",
    craftDetails: "Distilled in pure copper alembics resulting in the distinctive emerald green tint derived from micro copper saponification.",
    liquidColor: "#3B6E47", // Natural emerald green
    liquidOpacity: 0.86,
    batchCode: "KHUS-KNJ-2026-03",
    copperDegNumber: "Deg No. 06",
    distillationHours: 32,
    carrierBase: "Natural Vetiver Essential Distillate & Sandalwood",
    recommendedSeason: "Late Spring & Peak Summer",
    intensity: "Moderate"
  },
  {
    id: "discovery-set",
    name: "The Imperial Discovery Set",
    devanagariName: "पंचगन्ध संकलन",
    subtitle: "5 x 2 ml Botanical Ittars in Handmade Wooden Case",
    price: 799,
    priceLabel: "Illustrative",
    volume: "5 x 2 ml Vials (10 ml total)",
    scentFamily: "Earth",
    scentNotes: "Curated spectrum: Mitti (Earth), Gulab (Rose), Khus (Green), Kewra (Blossom), Shamama (Spice).",
    topNotes: ["Mitti Attar (2 ml)", "Gulab Attar (2 ml)"],
    heartNotes: ["Khus Attar (2 ml)", "Kewra Attar (2 ml)"],
    baseNotes: ["Shamama Attar (2 ml)", "Includes 5 testing blotters & tasting card"],
    description: "Because real perfume cannot be smelled across a glass screen. Our answer to the online fragrance dilemma: experience the full palette of Kannauj's historic distillations before choosing your signature flacon.",
    craftDetails: "Hand-filled in amber glass dropper vials with glass applicator rods, accompanied by parchment olfactory notes and batch QR codes.",
    liquidColor: "#B8902B", // Royal gold
    liquidOpacity: 0.9,
    batchCode: "DISC-KNJ-2026-BOX",
    copperDegNumber: "Hand-assembled from active batches",
    distillationHours: 240,
    carrierBase: "All 5 authentic single-origin distillations",
    recommendedSeason: "All Seasons / Perfect Gifting",
    intensity: "Moderate",
    isSet: true,
    includedItems: [
      "2 ml Mitti Attar (Baked Rain Clay)",
      "2 ml Gulab Attar (Dawn Rose Petals)",
      "2 ml Khus Attar (Wild Green Vetiver)",
      "2 ml Kewra Attar (Wild Screwpine)",
      "2 ml Shamama Attar (Warm Saffron & Spices)",
      "Parchment Scent Guide & Testing Blotters"
    ]
  },
  {
    id: "heritage-gift-box",
    name: "Heritage Royal Gift Box",
    devanagariName: "राजकीय उपहार पेटिका",
    subtitle: "3 x 10 ml Masterwork Ittars in Brass-Clad Wooden Chest",
    price: 3999,
    priceLabel: "Illustrative",
    volume: "3 x 10 ml Roll-Ons",
    scentFamily: "Wood",
    scentNotes: "Trio of Chandan, Shamama, and Gulab in heavy cut-glass roll-ons with antique brass caps.",
    topNotes: ["Gulab Attar (10 ml)", "Chandan Attar (10 ml)"],
    heartNotes: ["Shamama Attar (10 ml)"],
    baseNotes: ["Hand-turned sheesham wood casket", "Raw tussar silk lining"],
    description: "The definitive collector's chest for distinguished gifting. Contains our three most revered high-concentration distillations, cradled in hand-loomed tussar silk within a Kannauj artisan-carved wooden box with brass latch.",
    craftDetails: "Each flacon bears a custom wax-sealed Saptanga seal and handwritten batch registry card authenticated by the master deg supervisor.",
    liquidColor: "#8A5A36", // Rich warm teak & spice
    liquidOpacity: 0.92,
    batchCode: "ROYAL-KNJ-2026-LTD",
    copperDegNumber: "Reserve Guild Degs",
    distillationHours: 320,
    carrierBase: "Master Reserve Distillates",
    recommendedSeason: "All Seasons / Weddings & Milestones",
    intensity: "Deep",
    isSet: true,
    includedItems: [
      "10 ml Chandan Attar (White Sandalwood)",
      "10 ml Shamama Attar (Secret 40-Spice Composition)",
      "10 ml Gulab Attar (Dawn Damask Rose)",
      "Handcrafted Sheesham Wood Chest with Brass Fitting",
      "Wax-Sealed Saptanga Certificate of Lineage"
    ]
  }
];
