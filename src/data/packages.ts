export type Package = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  days: string;
  price: string;
  imageKey: string;
  highlights: string[];
  itinerary: { day: string; title: string; description: string }[];
  includes: string[];
  metaDescription: string;
};

export const packages: Package[] = [
  {
    slug: "bangkok-beyond",
    title: "Bangkok & Beyond",
    tagline: "City temples, floating markets, and authentic street food",
    description:
      "Bangkok is unlike any city on earth — ancient temples share the skyline with gleaming towers, and the smell of street food drifts through every neighbourhood. This package balances the iconic landmarks with the hidden corners that only a local guide can show you. From the Grand Palace to a longtail boat through the Chao Phraya canals, every day reveals a new side of Thailand's capital.",
    days: "5–7 Days",
    price: "From $899 per person",
    imageKey: "bangkok",
    metaDescription:
      "Explore Bangkok's Grand Palace, floating markets, and street food scene with a local expert. 5–7 day package from $899 per person.",
    highlights: [
      "Grand Palace & Wat Phra Kaew",
      "Damnoen Saduak Floating Market",
      "Chao Phraya river tour by longtail boat",
      "Authentic street food tour in Yaowarat (Chinatown)",
      "Wat Pho — the Temple of the Reclining Buddha",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Orientation",
        description:
          "Private airport transfer to your hotel. Evening welcome dinner and a walk through the Asok neighbourhood to get your bearings.",
      },
      {
        day: "Day 2",
        title: "Grand Palace & Temples",
        description:
          "Morning visit to the Grand Palace complex and Wat Phra Kaew. Afternoon at Wat Pho, home of the 46-metre reclining Buddha. Optional Thai massage at the temple's training school.",
      },
      {
        day: "Day 3",
        title: "Canals & Floating Market",
        description:
          "Early start to Damnoen Saduak Floating Market before the crowds arrive. Afternoon longtail boat tour through Bangkok's historic canal network.",
      },
      {
        day: "Day 4",
        title: "Chinatown Food Tour",
        description:
          "Evening street food tour through Yaowarat — one of Bangkok's oldest and most vibrant neighbourhoods. Taste your way through seven different dishes with a local guide.",
      },
      {
        day: "Day 5",
        title: "Day Trip or Departure",
        description:
          "Optional day trip to the ancient capital Ayutthaya, or free time for shopping at Chatuchak Weekend Market. Private transfer to airport for your departure.",
      },
    ],
    includes: [
      "Private airport transfers",
      "4-star hotel accommodation",
      "Daily breakfast",
      "English-speaking guide for all tours",
      "All entrance fees",
      "Welcome dinner",
    ],
  },
  {
    slug: "northern-explorer",
    title: "Northern Thailand Explorer",
    tagline: "Temples, mountains, elephants, and hill tribes",
    description:
      "Chiang Mai is the soul of northern Thailand — a walled city surrounded by misty mountains, ancient temples, and thriving craft traditions. This package takes you beyond the city into the highlands: a responsible elephant sanctuary, a hill tribe village homestay, and a sunrise at Doi Inthanon, the highest peak in Thailand. It is the trip for travellers who want more than a beach.",
    days: "7–10 Days",
    price: "From $1,199 per person",
    imageKey: "chiang-mai",
    metaDescription:
      "Explore Chiang Mai's temples, elephant sanctuaries, and hill tribe villages on a 7–10 day northern Thailand package from $1,199.",
    highlights: [
      "Doi Suthep temple at sunrise",
      "Ethical elephant sanctuary experience",
      "Karen hill tribe village homestay",
      "Thai cooking class with a local family",
      "Doi Inthanon National Park — Thailand's highest peak",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Chiang Mai",
        description:
          "Transfer from Chiang Mai airport to your boutique hotel in the Old City. Evening stroll through the Sunday Walking Street market.",
      },
      {
        day: "Day 2",
        title: "Old City Temples",
        description:
          "Guided tour of Chiang Mai's most significant temples: Wat Chedi Luang, Wat Phra Singh, and the lesser-known Wat Suan Dok. Afternoon free for the Nimman neighbourhood cafés.",
      },
      {
        day: "Day 3",
        title: "Elephant Sanctuary",
        description:
          "Full day at a responsible, no-riding elephant sanctuary. Feed, walk with, and learn about the elephants in their natural habitat. One of the most memorable days in Thailand.",
      },
      {
        day: "Day 4",
        title: "Doi Suthep & Cooking Class",
        description:
          "Morning visit to Doi Suthep temple overlooking the city. Afternoon Thai cooking class with a local family — you take home a recipe book.",
      },
      {
        day: "Day 5–6",
        title: "Hill Tribe Homestay",
        description:
          "Drive into the highlands to a Karen village for a two-night homestay. Trek through rice terraces, learn about traditional weaving, and eat with a local family.",
      },
      {
        day: "Day 7",
        title: "Doi Inthanon & Departure",
        description:
          "Morning visit to Doi Inthanon National Park and its royal pagodas. Return to Chiang Mai for your flight.",
      },
    ],
    includes: [
      "Private transfers throughout",
      "Boutique hotel in Chiang Mai Old City",
      "Hillside homestay (2 nights)",
      "Elephant sanctuary full-day experience",
      "Thai cooking class",
      "English-speaking local guide",
      "All meals during homestay",
    ],
  },
  {
    slug: "southern-islands",
    title: "Southern Island Hopping",
    tagline: "Crystal water, hidden coves, and beachfront sunsets",
    description:
      "Thailand's southern islands are what most people picture when they dream of Southeast Asia — turquoise water, limestone karsts rising from the sea, and beaches that feel like they belong to you alone. This package island-hops through the best of the Andaman Sea and Gulf of Thailand, with speedboat transfers, snorkelling in protected marine parks, and dinners on the beach.",
    days: "10–14 Days",
    price: "From $1,499 per person",
    imageKey: "islands",
    metaDescription:
      "Island-hop through Thailand's best beaches — Phuket, Krabi, Koh Lanta, and more. 10–14 day package from $1,499 per person.",
    highlights: [
      "Phi Phi Islands speedboat day trip",
      "Maya Bay snorkelling",
      "Phang Nga Bay sea kayaking",
      "Sunset dinner cruise",
      "Koh Lanta beach days",
    ],
    itinerary: [
      {
        day: "Day 1–2",
        title: "Phuket Arrival",
        description:
          "Arrive in Phuket, check into a beachfront resort in Kata or Nai Harn. Day 2 free for beach and acclimatisation.",
      },
      {
        day: "Day 3",
        title: "Phang Nga Bay",
        description:
          "Full day sea kayaking through Phang Nga Bay's limestone caves and hidden lagoons. Includes James Bond Island.",
      },
      {
        day: "Day 4–5",
        title: "Krabi & Railay Beach",
        description:
          "Speedboat transfer to Krabi. Two nights based at Railay Beach — only accessible by boat. Rock climbing, snorkelling, and four-island tours.",
      },
      {
        day: "Day 6–8",
        title: "Koh Lanta",
        description:
          "Ferry to Koh Lanta — quieter, less developed, and beautiful. Three nights of diving, cycling, and long beach walks.",
      },
      {
        day: "Day 9–10",
        title: "Phi Phi Islands",
        description:
          "Transfer to Koh Phi Phi. Snorkelling at Maya Bay, cliff jumping at Phi Phi Leh, and a sunset dinner cruise back.",
      },
      {
        day: "Day 11",
        title: "Departure",
        description:
          "Transfer back to Phuket airport for your flight.",
      },
    ],
    includes: [
      "All island-to-island speedboat & ferry transfers",
      "Beachfront accommodation throughout",
      "Daily breakfast",
      "Phang Nga Bay sea kayak tour",
      "Phi Phi Islands snorkelling tour",
      "Sunset dinner cruise",
      "Airport transfers",
    ],
  },
  {
    slug: "medical-wellness-retreat",
    title: "Medical & Wellness Retreat",
    tagline: "World-class healthcare combined with Thai recovery and rest",
    description:
      "Thailand is one of the world's top destinations for medical tourism — with JCI-accredited hospitals, internationally trained specialists, and costs that are a fraction of Western prices. This package combines your medical consultation or procedure with dedicated recovery time at a wellness resort. Salim personally coordinates with the hospital, manages your logistics, and is available throughout your stay.",
    days: "7–14 Days",
    price: "From $1,200 + medical costs",
    imageKey: "medical",
    metaDescription:
      "Combine world-class Thai healthcare with a wellness retreat. Medical tourism packages with JCI-accredited hospitals in Bangkok from $1,200.",
    highlights: [
      "Pre-arranged consultation at JCI-accredited hospital",
      "Personal coordinator throughout your stay",
      "Recovery at a premium wellness resort",
      "Traditional Thai massage and rehabilitation",
      "Airport and hospital transfers included",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Pre-consultation",
        description:
          "Private airport transfer to your hotel near the hospital. Evening briefing with Salim on what to expect.",
      },
      {
        day: "Day 2–3",
        title: "Medical Consultation & Procedure",
        description:
          "Appointments at Bumrungrad, Samitivej, or BangPakok 9 International — depending on your specialty. Salim accompanies you and liaises with the medical team.",
      },
      {
        day: "Day 4–7",
        title: "Recovery & Wellness",
        description:
          "Transfer to a wellness resort for recovery. Daily Thai massage, healthy meals, and rest in a peaceful environment. Salim remains on call.",
      },
      {
        day: "Day 8+",
        title: "Leisure or Extended Recovery",
        description:
          "Optional sightseeing in Bangkok, or extended recovery time depending on your procedure. Flexible departure arrangements.",
      },
    ],
    includes: [
      "Hospital appointment coordination",
      "Personal coordinator (Salim) throughout",
      "Private airport and hospital transfers",
      "Wellness resort accommodation",
      "Daily Thai massage during recovery",
      "Translation and documentation support",
    ],
  },
  {
    slug: "luxury-thailand",
    title: "Luxury Thailand",
    tagline: "Five-star resorts, private tours, and bespoke experiences",
    description:
      "For travellers who want the best Thailand has to offer — private longtail boats at dawn, a table at the finest riverside restaurant in Bangkok, and a villa in Koh Samui with your own pool. Every element of this package is arranged in advance so that nothing is left to chance. You arrive, and Thailand unfolds exactly as you imagined it.",
    days: "10–14 Days",
    price: "From $3,500 per person",
    imageKey: "luxury",
    metaDescription:
      "Luxury Thailand package with five-star resorts, private tours, and bespoke experiences. 10–14 days from $3,500 per person.",
    highlights: [
      "Private chartered longtail boat tours",
      "Five-star resort in Bangkok, Chiang Mai, and Koh Samui",
      "Private Thai cooking class with a renowned chef",
      "Exclusive spa and wellness experiences",
      "Michelin-recommended restaurant reservations",
    ],
    itinerary: [
      {
        day: "Day 1–3",
        title: "Bangkok in Style",
        description:
          "Suite at Mandarin Oriental or equivalent. Private guide for temples and markets. Dinner at a riverside fine-dining restaurant.",
      },
      {
        day: "Day 4–6",
        title: "Chiang Mai — Art & Culture",
        description:
          "Private villa in the mountains. Exclusive access cooking class. Curated gallery and artisan workshop visits.",
      },
      {
        day: "Day 7–10",
        title: "Koh Samui — Beachside Villa",
        description:
          "Private pool villa on Koh Samui. Daily chartered speedboat for snorkelling and island exploration. Sunset dinner on the beach.",
      },
      {
        day: "Day 11",
        title: "Departure",
        description:
          "Private transfer to your departure airport. Departure gift from Rising Sun.",
      },
    ],
    includes: [
      "Five-star and boutique luxury accommodation",
      "All private transfers by premium vehicle",
      "Private English-speaking guide throughout",
      "All tours and entrance fees",
      "Daily breakfast + selected dinners",
      "Spa treatments",
      "24/7 concierge from Rising Sun",
    ],
  },
  {
    slug: "family-adventure",
    title: "Family Thailand Adventure",
    tagline: "Kid-friendly temples, beaches, and elephant experiences",
    description:
      "Thailand is one of the best family travel destinations in the world — safe, welcoming, affordable, and endlessly interesting for children. This package is designed around kids: paced gently, with activities that engage all ages, accommodation chosen for family comfort, and a guide who knows how to make history come alive for a ten-year-old. Parents relax; we handle the logistics.",
    days: "10–12 Days",
    price: "From $1,800 for a family of four",
    imageKey: "family",
    metaDescription:
      "Family Thailand holiday with kid-friendly activities, elephants, temples, and beaches. 10–12 day package from $1,800 for a family of four.",
    highlights: [
      "Ethical elephant sanctuary — all ages welcome",
      "Floating market boat ride",
      "Beachside resort with kids' facilities",
      "Temple visits with child-friendly guides",
      "Thai cooking class for kids",
    ],
    itinerary: [
      {
        day: "Day 1–3",
        title: "Bangkok Family Days",
        description:
          "Grand Palace, Wat Pho, and a longtail boat canal tour. Evening at Asiatique riverside market — street food, Ferris wheel, and puppet theatre.",
      },
      {
        day: "Day 4–6",
        title: "Chiang Mai — Elephants & Cooking",
        description:
          "Fly to Chiang Mai. Morning at the elephant sanctuary — children adore this. Afternoon Thai cooking class for the whole family. Evening Night Bazaar.",
      },
      {
        day: "Day 7–10",
        title: "Beach & Islands",
        description:
          "Fly to Phuket or Koh Samui. Family beach resort with pool and kids' club. Day trip to quieter islands for snorkelling. Relaxed pace.",
      },
      {
        day: "Day 11",
        title: "Departure",
        description:
          "Transfer to airport. Safe travels.",
      },
    ],
    includes: [
      "All internal flights",
      "Family rooms in 4-star hotels",
      "Private transfers throughout",
      "Elephant sanctuary (family entry)",
      "Thai cooking class for kids",
      "All tours and entrance fees",
      "English-speaking family guide",
    ],
  },
];

export const getPackageBySlug = (slug: string): Package | undefined =>
  packages.find((p) => p.slug === slug);
