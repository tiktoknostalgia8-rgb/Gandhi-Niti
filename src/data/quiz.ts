import { PRODUCTS, Product } from './products';

export interface QuizOption {
  id: string;
  label: string;
  sublabel: string;
  scores: Record<string, number>; // Product ID -> affinity points
}

export interface QuizQuestion {
  id: number;
  questionNumber: string;
  title: string;
  subtitle: string;
  options: QuizOption[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    questionNumber: "01",
    title: "What inner atmosphere do you seek to cultivate?",
    subtitle: "In classical Indian rasa theory, an aroma evokes a distinct bhava (emotional state).",
    options: [
      {
        id: "earthy-peace",
        label: "Grounded Peace & Rain-washed Calm",
        sublabel: "The elemental peace of wet clay and summer monsoon relief.",
        scores: { "mitti-attar": 5, "discovery-set": 2 }
      },
      {
        id: "luminous-joy",
        label: "Luminous Radiance & Dawn Dew",
        sublabel: "Uplifting botanical blossoms harvested before sunrise.",
        scores: { "gulab-attar": 5, "kewra-attar": 4, "discovery-set": 2 }
      },
      {
        id: "sacred-stillness",
        label: "Sacred Stillness & Timeless Poise",
        sublabel: "Temple woods, meditative calm, and serene self-possession.",
        scores: { "chandan-attar": 5, "heritage-gift-box": 3 }
      },
      {
        id: "invigorating-cool",
        label: "Cooling Vitality & Wild River Breezes",
        sublabel: "Refreshing natural vetiver reeds temper heat and fatigue.",
        scores: { "khus-attar": 5, "discovery-set": 2 }
      },
      {
        id: "regal-warmth",
        label: "Regal Warmth, Saffron & Mystique",
        sublabel: "Rich botanical resins, spices, and courtly winter grandeur.",
        scores: { "shamama-attar": 5, "heritage-gift-box": 3 }
      },
      {
        id: "curious-palette",
        label: "An Open Exploration of All Five Elements",
        sublabel: "Unwilling to commit without testing all legendary distillations.",
        scores: { "discovery-set": 6, "heritage-gift-box": 2 }
      }
    ]
  },
  {
    id: 2,
    questionNumber: "02",
    title: "Where will this botanical fragrance accompany you?",
    subtitle: "Select the primary sanctuary or occasion for your roll-on.",
    options: [
      {
        id: "daily-meditation",
        label: "Daily Sanctuary, Yoga & Quiet Reading",
        sublabel: "Personal reflection where aroma anchors presence.",
        scores: { "chandan-attar": 4, "mitti-attar": 3 }
      },
      {
        id: "professional-presence",
        label: "Professional Stature & Focused Meetings",
        sublabel: "Sophisticated, close-contact elegance without harsh alcohol projection.",
        scores: { "khus-attar": 4, "chandan-attar": 3, "kewra-attar": 2 }
      },
      {
        id: "courtly-festivities",
        label: "Evenings of Celebration, Festivals & Weddings",
        sublabel: "Traditional silks, festive lights, and distinguished gatherings.",
        scores: { "gulab-attar": 4, "shamama-attar": 4, "heritage-gift-box": 3 }
      },
      {
        id: "summer-transit",
        label: "Travel, Humid Commutes & Afternoon Heat",
        sublabel: "Natural cooling properties that soothe the senses on sweltering days.",
        scores: { "khus-attar": 5, "kewra-attar": 3 }
      },
      {
        id: "private-ritual",
        label: "Nighttime Wind-Down & Monsoon Evenings",
        sublabel: "Gentle restorative warmth before slumber.",
        scores: { "mitti-attar": 4, "gulab-attar": 3 }
      }
    ]
  },
  {
    id: 3,
    questionNumber: "03",
    title: "What season or climatic temper predominates?",
    subtitle: "Kannauj ittars were historically formulated according to the six seasons (Ritus).",
    options: [
      {
        id: "varsha-monsoon",
        label: "Varsha (Monsoon) & Shifting Humid Clouds",
        sublabel: "Moist soil, rain showers, and cool earthen breezes.",
        scores: { "mitti-attar": 5, "chandan-attar": 3 }
      },
      {
        id: "grishma-summer",
        label: "Grishma (Scorching High Summer Heat)",
        sublabel: "Blistering dry heat demanding authentic botanical cooling.",
        scores: { "khus-attar": 5, "kewra-attar": 4, "mitti-attar": 3 }
      },
      {
        id: "vasanta-spring",
        label: "Vasanta (Spring Bloom & Mild Sun)",
        sublabel: "Orchard blossoms, crisp mornings, and temperate days.",
        scores: { "gulab-attar": 5, "kewra-attar": 4 }
      },
      {
        id: "hemanta-winter",
        label: "Hemanta & Shishira (Crisp Autumn & Cold Winter)",
        sublabel: "Cozy woolens, fireside evenings, and warm botanical balsams.",
        scores: { "shamama-attar": 5, "chandan-attar": 4 }
      },
      {
        id: "equable-climate",
        label: "Climate-Controlled Indoors & Year-Round Versatility",
        sublabel: "Balanced year-round performance across all temperatures.",
        scores: { "discovery-set": 4, "chandan-attar": 3, "gulab-attar": 3 }
      }
    ]
  },
  {
    id: 4,
    questionNumber: "04",
    title: "Which aromatic family instinctively speaks to your memory?",
    subtitle: "Fragrance is deeply tied to childhood and ancestral reminiscence.",
    options: [
      {
        id: "scent-petrichor",
        label: "Petrichor & Baked Red Soil (Mitti)",
        sublabel: "The unmistakable scent of the first rain hitting parched Indian earth.",
        scores: { "mitti-attar": 6 }
      },
      {
        id: "scent-rose",
        label: "Imperial Damask Rose & Morning Honey (Gulab)",
        sublabel: "Fresh, velvet petals with dew, avoiding synthetic soapy notes.",
        scores: { "gulab-attar": 6 }
      },
      {
        id: "scent-wood",
        label: "Sacred Creamy Sandalwood Heartwood (Chandan)",
        sublabel: "Warm, noble, slightly sweet wood dried over decades.",
        scores: { "chandan-attar": 6 }
      },
      {
        id: "scent-vetiver",
        label: "Wild Riverbed Vetiver & Green Roots (Khus)",
        sublabel: "Crisp, deeply earthy green river grass that cools on contact.",
        scores: { "khus-attar": 6 }
      },
      {
        id: "scent-spices",
        label: "Forty-Herb Secret Royal Amber & Saffron (Shamama)",
        sublabel: "Layered, complex, dark amber and warm mountain spices.",
        scores: { "shamama-attar": 6 }
      },
      {
        id: "scent-all",
        label: "I Wish to Experience All Profiles Side-by-Side",
        sublabel: "The complete 5-vial Discovery Set is the honest starting path.",
        scores: { "discovery-set": 7 }
      }
    ]
  },
  {
    id: 5,
    questionNumber: "05",
    title: "How do you prefer your fragrance to unfold throughout the day?",
    subtitle: "Pure oil ittars develop with body warmth and have zero chemical sillage bloomers.",
    options: [
      {
        id: "gentle-skin",
        label: "Intimate Whisper (Sits Close to the Skin)",
        sublabel: "Personal, subtle, non-invasive; felt primarily during close conversations.",
        scores: { "mitti-attar": 4, "kewra-attar": 4, "discovery-set": 2 }
      },
      {
        id: "moderate-aura",
        label: "Balanced Aura (Noticeable & Dignified)",
        sublabel: "A serene halo of 2 to 3 feet that lingers gracefully without overpowering.",
        scores: { "gulab-attar": 4, "khus-attar": 4, "chandan-attar": 3 }
      },
      {
        id: "deep-rich",
        label: "Deep, Resonant & Long-Lived (Temple Richness)",
        sublabel: "Complex balsamic notes that shift and reveal new facets over 8+ hours.",
        scores: { "shamama-attar": 5, "chandan-attar": 4, "heritage-gift-box": 3 }
      }
    ]
  },
  {
    id: 6,
    questionNumber: "06",
    title: "Who is the destined keeper of this flacon?",
    subtitle: "Every flacon includes a handwritten batch card and wax seal.",
    options: [
      {
        id: "for-myself",
        label: "For Myself (A personal olfactory signature)",
        sublabel: "Seeking authentic alcohol-free botanical perfume oil.",
        scores: { "mitti-attar": 2, "gulab-attar": 2, "chandan-attar": 2, "khus-attar": 2, "discovery-set": 3 }
      },
      {
        id: "for-first-timer",
        label: "For a Beginner Exploring Traditional Ittar",
        sublabel: "Coming from modern alcohol sprays and desiring an accessible entry.",
        scores: { "discovery-set": 6, "gulab-attar": 3 }
      },
      {
        id: "for-esteemed-gift",
        label: "For a Distinguished Patron, Wedding, or Elder",
        sublabel: "Demanding heirloom craftsmanship, sheesham wood, and royal presentation.",
        scores: { "heritage-gift-box": 7, "chandan-attar": 3 }
      }
    ]
  }
];

export function calculateQuizRecommendation(answers: Record<number, string>): {
  recommendedProduct: Product;
  secondaryProduct: Product;
  scoreTally: Record<string, number>;
  diagnosticReason: string;
} {
  const tally: Record<string, number> = {
    "mitti-attar": 0,
    "gulab-attar": 0,
    "chandan-attar": 0,
    "kewra-attar": 0,
    "shamama-attar": 0,
    "khus-attar": 0,
    "discovery-set": 0,
    "heritage-gift-box": 0
  };

  QUIZ_QUESTIONS.forEach(q => {
    const selectedOptionId = answers[q.id];
    if (selectedOptionId) {
      const option = q.options.find(o => o.id === selectedOptionId);
      if (option && option.scores) {
        Object.entries(option.scores).forEach(([prodId, points]) => {
          if (tally[prodId] !== undefined) {
            tally[prodId] += points;
          }
        });
      }
    }
  });

  const sorted = Object.entries(tally).sort((a, b) => b[1] - a[1]);
  const bestId = sorted[0]?.[0] || "discovery-set";
  const secondId = sorted[1]?.[0] || "mitti-attar";

  const recommendedProduct = PRODUCTS.find(p => p.id === bestId) || PRODUCTS[0];
  const secondaryProduct = PRODUCTS.find(p => p.id === secondId) || PRODUCTS[1];

  let diagnosticReason = `Based on your chosen atmosphere, seasonal rhythm, and intensity preference, ${recommendedProduct.name} emerged as your ideal match. `;

  if (recommendedProduct.id === "mitti-attar") {
    diagnosticReason += "Your desire for grounded calm and elemental petrichor aligns with Kannauj's ancient terracotta clay hydro-distillation, capturing the first drop of monsoon rain over hot alluvial earth.";
  } else if (recommendedProduct.id === "gulab-attar") {
    diagnosticReason += "Your preference for luminous joy and dawn freshness calls for the pure Damask rose petals harvested at daybreak and captured directly in creamy sandalwood oil.";
  } else if (recommendedProduct.id === "chandan-attar") {
    diagnosticReason += "Your inclination towards sacred stillness and timeless elegance points to aged East Indian sandalwood heartwood, offering an uninterrupted contemplative aura.";
  } else if (recommendedProduct.id === "khus-attar") {
    diagnosticReason += "Your need for restorative coolness and green vitality is answered by wild riverbed vetiver roots, hydro-distilled in copper to naturally counteract heat and fatigue.";
  } else if (recommendedProduct.id === "shamama-attar") {
    diagnosticReason += "Your taste for opulent spice and resonant mystery requires our most complex masterwork: 40 secret herbs, barks, and saffron distilled sequentially over 60 days.";
  } else if (recommendedProduct.id === "heritage-gift-box") {
    diagnosticReason += "Your ceremonial requirements and celebration context warrant the royal wooden collector's casket, preserving Kannauj's three pinnacle distillations for distinguished posterity.";
  } else {
    diagnosticReason += "Because true botanical perfume is an intimate living encounter, the 5-vial Discovery Set allows you to sample every legendary fragrance profile on your own skin before committing to a full flacon.";
  }

  return {
    recommendedProduct,
    secondaryProduct,
    scoreTally: tally,
    diagnosticReason
  };
}
