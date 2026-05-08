export type Package = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  days: string;
  price: string;
  imageKey: string;
  destinations: string[];
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
      "Bangkok is unlike any city on earth. Ancient temples share the skyline with gleaming towers, and the smell of street food drifts through every neighbourhood. This package balances the iconic landmarks with the hidden corners that only a local guide can show you. From the Grand Palace to a longtail boat through the Chao Phraya canals, every day reveals a new side of Thailand's capital.",
    days: "5-7 Days",
    price: "From $899 per person",
    imageKey: "bangkok",
    destinations: ["Bangkok"],
    metaDescription:
      "Explore Bangkok's Grand Palace, floating markets, and street food scene with a local expert. 5-7 day package from $899 per person.",
    highlights: [
      "Grand Palace & Wat Phra Kaew",
      "Damnoen Saduak Floating Market",
      "Chao Phraya river tour by longtail boat",
      "Authentic street food tour in Yaowarat (Chinatown)",
      "Wat Pho: The Temple of the Reclining Buddha",
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
          "Evening street food tour through Yaowarat, one of Bangkok's oldest and most vibrant neighbourhoods. Taste your way through seven different dishes with a local guide.",
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
      "Chiang Mai is the soul of northern Thailand, a walled city surrounded by misty mountains, ancient temples, and thriving craft traditions. This package takes you beyond the city into the highlands: a responsible elephant sanctuary, a hill tribe village homestay, and a sunrise at Doi Inthanon, the highest peak in Thailand. It is the trip for travellers who want more than a beach.",
    days: "7-10 Days",
    price: "From $1,199 per person",
    imageKey: "chiang-mai",
    destinations: ["Chiang Mai"],
    metaDescription:
      "Explore Chiang Mai's temples, elephant sanctuaries, and hill tribe villages on a 7-10 day northern Thailand package from $1,199.",
    highlights: [
      "Doi Suthep temple at sunrise",
      "Ethical elephant sanctuary experience",
      "Karen hill tribe village homestay",
      "Thai cooking class with a local family",
      "Doi Inthanon National Park: Thailand's highest peak",
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
          "Morning visit to Doi Suthep temple overlooking the city. Afternoon Thai cooking class with a local family. You take home a recipe book.",
      },
      {
        day: "Day 5-6",
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
      "Thailand's southern islands are what most people picture when they dream of Southeast Asia: turquoise water, limestone karsts rising from the sea, and beaches that feel like they belong to you alone. This package island-hops through the best of the Andaman Sea and Gulf of Thailand, with speedboat transfers, snorkelling in protected marine parks, and dinners on the beach.",
    days: "10-14 Days",
    price: "From $1,499 per person",
    imageKey: "islands",
    destinations: ["Phuket", "Krabi"],
    metaDescription:
      "Island-hop through Thailand's best beaches: Phuket, Krabi, Koh Lanta, and more. 10-14 day package from $1,499 per person.",
    highlights: [
      "Phi Phi Islands speedboat day trip",
      "Maya Bay snorkelling",
      "Phang Nga Bay sea kayaking",
      "Sunset dinner cruise",
      "Koh Lanta beach days",
    ],
    itinerary: [
      {
        day: "Day 1-2",
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
        day: "Day 4-5",
        title: "Krabi & Railay Beach",
        description:
          "Speedboat transfer to Krabi. Two nights based at Railay Beach, only accessible by boat. Rock climbing, snorkelling, and four-island tours.",
      },
      {
        day: "Day 6-8",
        title: "Koh Lanta",
        description:
          "Ferry to Koh Lanta, quieter, less developed, and beautiful. Three nights of diving, cycling, and long beach walks.",
      },
      {
        day: "Day 9-10",
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
      "Thailand is one of the world's top destinations for medical tourism, with JCI-accredited hospitals, internationally trained specialists, and costs that are a fraction of Western prices. This package combines your medical consultation or procedure with dedicated recovery time at a wellness resort. Salim personally coordinates with the hospital, manages your logistics, and is available throughout your stay.",
    days: "7-14 Days",
    price: "From $1,200 + medical costs",
    imageKey: "medical",
    destinations: ["Bangkok"],
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
        day: "Day 2-3",
        title: "Medical Consultation & Procedure",
        description:
          "Appointments at Bumrungrad, Samitivej, or BangPakok 9 International, depending on your specialty. Salim accompanies you and liaises with the medical team.",
      },
      {
        day: "Day 4-7",
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
      "For travellers who want the best Thailand has to offer: private longtail boats at dawn, a table at the finest riverside restaurant in Bangkok, and a villa in Koh Samui with your own pool. Every element of this package is arranged in advance so that nothing is left to chance. You arrive, and Thailand unfolds exactly as you imagined it.",
    days: "10-14 Days",
    price: "From $3,500 per person",
    imageKey: "luxury",
    destinations: ["Bangkok", "Chiang Mai", "Phuket"],
    metaDescription:
      "Luxury Thailand package with five-star resorts, private tours, and bespoke experiences. 10-14 days from $3,500 per person.",
    highlights: [
      "Private chartered longtail boat tours",
      "Five-star resort in Bangkok, Chiang Mai, and Koh Samui",
      "Private Thai cooking class with a renowned chef",
      "Exclusive spa and wellness experiences",
      "Michelin-recommended restaurant reservations",
    ],
    itinerary: [
      {
        day: "Day 1-3",
        title: "Bangkok in Style",
        description:
          "Suite at Mandarin Oriental or equivalent. Private guide for temples and markets. Dinner at a riverside fine-dining restaurant.",
      },
      {
        day: "Day 4-6",
        title: "Chiang Mai: Art & Culture",
        description:
          "Private villa in the mountains. Exclusive access cooking class. Curated gallery and artisan workshop visits.",
      },
      {
        day: "Day 7-10",
        title: "Koh Samui: Beachside Villa",
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
      "Thailand is one of the best family travel destinations in the world: safe, welcoming, affordable, and endlessly interesting for children. This package is designed around kids: paced gently, with activities that engage all ages, accommodation chosen for family comfort, and a guide who knows how to make history come alive for a ten-year-old. Parents relax; we handle the logistics.",
    days: "10-12 Days",
    price: "From $1,800 for a family of four",
    imageKey: "family",
    destinations: ["Bangkok", "Chiang Mai", "Phuket"],
    metaDescription:
      "Family Thailand holiday with kid-friendly activities, elephants, temples, and beaches. 10-12 day package from $1,800 for a family of four.",
    highlights: [
      "Ethical elephant sanctuary, all ages welcome",
      "Floating market boat ride",
      "Beachside resort with kids' facilities",
      "Temple visits with child-friendly guides",
      "Thai cooking class for kids",
    ],
    itinerary: [
      {
        day: "Day 1-3",
        title: "Bangkok Family Days",
        description:
          "Grand Palace, Wat Pho, and a longtail boat canal tour. Evening at Asiatique riverside market: street food, Ferris wheel, and puppet theatre.",
      },
      {
        day: "Day 4-6",
        title: "Chiang Mai: Elephants & Cooking",
        description:
          "Fly to Chiang Mai. Morning at the elephant sanctuary. Children adore this. Afternoon Thai cooking class for the whole family. Evening Night Bazaar.",
      },
      {
        day: "Day 7-10",
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
  {
    slug: "krabi-railay",
    title: "Krabi & Railay Beach",
    tagline: "Limestone cliffs, sea kayaking, and a beach only reachable by boat",
    description:
      "Railay Beach has no road access. The only way in is by longtail boat, which keeps it quieter than anywhere else on the Andaman Coast. This package is built around Krabi's best: four-island snorkelling, sea kayaking through mangrove tunnels, rock climbing on the karst walls above the beach, and enough time to simply sit and watch the limestone towers turn gold at sunset.",
    days: "4-6 Days",
    price: "From $799 per person",
    imageKey: "krabi",
    destinations: ["Krabi"],
    metaDescription:
      "Explore Krabi's Railay Beach, four islands, and sea kayaking on a 4-6 day package from $799. Only accessible by longtail boat.",
    highlights: [
      "Railay Beach: no road access, far fewer crowds",
      "Four Islands snorkelling tour",
      "Sea kayaking through mangrove tunnels",
      "Rock climbing on the karst cliffs",
      "Emerald Cave: swim through a pitch-dark tunnel to a hidden lagoon",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Krabi",
        description:
          "Transfer from Krabi Airport to Ao Nang. Evening longtail boat to Railay Beach and check into your beachfront bungalow.",
      },
      {
        day: "Day 2",
        title: "Four Islands Snorkelling",
        description:
          "Full-day speedboat tour to Koh Poda, Koh Gai (Chicken Island), Koh Tub, and Koh Mor. Snorkelling in protected waters with coral and reef fish.",
      },
      {
        day: "Day 3",
        title: "Sea Kayaking and Mangroves",
        description:
          "Morning kayak tour through the mangrove forest and sea caves around Ao Thalane. Afternoon rock climbing introduction on the cliffs above Railay East.",
      },
      {
        day: "Day 4",
        title: "Emerald Cave and Departure",
        description:
          "Morning trip to Koh Mook's Emerald Cave. Swim through the dark tunnel to the hidden lagoon inside. Afternoon transfer back to Krabi town for your flight.",
      },
    ],
    includes: [
      "Airport transfers",
      "Beachfront bungalow accommodation",
      "Daily breakfast",
      "Four Islands speedboat tour",
      "Sea kayaking day tour",
      "Emerald Cave longtail trip",
      "English-speaking local guide",
    ],
  },
  {
    slug: "andaman-coast",
    title: "Andaman Coast Explorer",
    tagline: "Krabi, Koh Lanta, and the quieter side of southern Thailand",
    description:
      "Most visitors stay in Phuket and never make it past Phi Phi. This package goes further: a week on the Andaman Coast taking in Krabi's limestone karsts, the long beaches of Koh Lanta, and the mangrove waterways that most tourists miss entirely. It is southern Thailand at a pace that lets you actually see it.",
    days: "7-9 Days",
    price: "From $1,099 per person",
    imageKey: "koh-lanta",
    destinations: ["Krabi"],
    metaDescription:
      "Explore Krabi and Koh Lanta on a 7-9 day Andaman Coast package from $1,099. Beaches, kayaking, and island life without the crowds.",
    highlights: [
      "Railay Beach by longtail",
      "Koh Lanta: three nights on a quieter, less-developed island",
      "Kayaking through sea caves and hidden lagoons",
      "Koh Lanta Old Town: Chinese shophouses and stilted fishing village",
      "Sunset from the lighthouse at the southern tip of Koh Lanta",
    ],
    itinerary: [
      {
        day: "Day 1-2",
        title: "Krabi and Railay",
        description:
          "Arrive in Krabi. Longtail boat to Railay Beach. Two nights based at Railay for rock climbing, four-island tours, and beach time.",
      },
      {
        day: "Day 3-5",
        title: "Koh Lanta",
        description:
          "Ferry to Koh Lanta. Three nights at a mid-range beach resort on Long Beach. Snorkelling at Koh Rok, cycling the island, and dinner at Koh Lanta Old Town.",
      },
      {
        day: "Day 6",
        title: "Kayaking the Mangroves",
        description:
          "Full-day guided kayak tour through the mangrove channels on Koh Lanta's east coast. Wildlife, stillness, and some of the best light in southern Thailand.",
      },
      {
        day: "Day 7",
        title: "Departure",
        description:
          "Ferry back to Krabi. Transfer to airport for your flight.",
      },
    ],
    includes: [
      "All boat and ferry transfers",
      "Accommodation in Krabi and Koh Lanta",
      "Daily breakfast",
      "Mangrove kayak tour",
      "Koh Rok snorkelling trip",
      "Airport transfers",
    ],
  },
  {
    slug: "koh-samui-escape",
    title: "Koh Samui Island Escape",
    tagline: "White sand beaches, jungle waterfalls, and Gulf island life",
    description:
      "Koh Samui is Thailand's second-largest island and one of its most varied. The north has busy beach bars and night markets. The south and west have long stretches of sand that barely fill up even in high season. This package covers both sides: the iconic spots and the quieter ones, with day trips to the Ang Thong Marine Park and enough free time to actually relax.",
    days: "5-7 Days",
    price: "From $999 per person",
    imageKey: "koh-samui",
    destinations: ["Koh Samui"],
    metaDescription:
      "Koh Samui island holiday with beaches, Ang Thong Marine Park, and jungle waterfalls. 5-7 day package from $999 per person.",
    highlights: [
      "Ang Thong Marine National Park: snorkelling and sea kayaking",
      "Chaweng and Lamai beaches",
      "Na Muang Waterfall hike through jungle",
      "Big Buddha Temple and Grandmother and Grandfather Rocks",
      "Fisherman's Village Night Market, Bophut",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival",
        description:
          "Private transfer from Samui Airport to your hotel. Evening at Fisherman's Village Night Market in Bophut for street food and local craft stalls.",
      },
      {
        day: "Day 2",
        title: "Island Orientation",
        description:
          "Morning visit to the Big Buddha Temple at Ban Rak. Afternoon at Chaweng Beach. Sunset at Silver Beach, one of Samui's least-crowded stretches.",
      },
      {
        day: "Day 3",
        title: "Ang Thong Marine Park",
        description:
          "Full-day speedboat tour to Ang Thong National Marine Park. Snorkelling in crystal water, sea kayaking into a hidden saltwater lagoon, and a short hike with views over 42 islands.",
      },
      {
        day: "Day 4",
        title: "Jungle and Waterfalls",
        description:
          "Morning hike to Na Muang 1 and 2 waterfalls in the interior jungle. Afternoon at Lamai Beach or a Thai cooking class.",
      },
      {
        day: "Day 5",
        title: "Free Day and Departure",
        description:
          "Morning free for a final swim or spa. Private transfer to Samui Airport.",
      },
    ],
    includes: [
      "Private airport transfers",
      "Beach resort accommodation",
      "Daily breakfast",
      "Ang Thong Marine Park speedboat tour",
      "Na Muang Waterfall guided hike",
      "English-speaking guide",
    ],
  },
  {
    slug: "gulf-islands",
    title: "Gulf Islands: Samui, Phangan & Tao",
    tagline: "Three islands, three completely different experiences",
    description:
      "Koh Samui, Koh Phangan, and Koh Tao sit close together in the Gulf of Thailand but feel like different worlds. Samui is the most developed, with proper resorts and good restaurants. Phangan is wilder, with jungle interior and famous full-moon party beaches. Tao is the dive capital of Southeast Asia, with some of the cheapest and best diving certification courses in the world. This package does all three.",
    days: "9-12 Days",
    price: "From $1,399 per person",
    imageKey: "gulf-islands",
    destinations: ["Koh Samui"],
    metaDescription:
      "Island hop through Koh Samui, Koh Phangan, and Koh Tao on a 9-12 day Gulf Islands package from $1,399. Beaches, diving, and jungle.",
    highlights: [
      "Ang Thong Marine Park from Samui",
      "Koh Phangan: Haad Rin, Than Sadet waterfall, and jungle treks",
      "PADI Open Water dive course on Koh Tao",
      "Snorkelling at Shark Bay, Koh Tao",
      "Sunset at Bottle Beach, Koh Phangan",
    ],
    itinerary: [
      {
        day: "Day 1-3",
        title: "Koh Samui",
        description:
          "Arrive in Samui. Two nights based on the north coast. Ang Thong Marine Park day trip on Day 2.",
      },
      {
        day: "Day 4-6",
        title: "Koh Phangan",
        description:
          "Ferry to Koh Phangan. Three nights on the quieter northern coast. Day hike to Than Sadet waterfall, longtail to Bottle Beach, and evening at Haad Rin.",
      },
      {
        day: "Day 7-9",
        title: "Koh Tao: Diving",
        description:
          "Ferry to Koh Tao. Three days for PADI Open Water certification or fun dives for certified divers. Some of the clearest water in Thailand.",
      },
      {
        day: "Day 10",
        title: "Return and Departure",
        description:
          "High-speed ferry back to Samui. Transfer to airport for your flight.",
      },
    ],
    includes: [
      "All inter-island ferry transfers",
      "Accommodation on all three islands",
      "Daily breakfast",
      "Ang Thong Marine Park tour",
      "PADI Open Water course (Koh Tao)",
      "Airport transfers",
    ],
  },
  {
    slug: "ayutthaya-day-trip",
    title: "Ayutthaya by River from Bangkok",
    tagline: "Ancient temples, headless Buddhas, and a royal capital in ruins",
    description:
      "Ayutthaya was the capital of the Kingdom of Siam for 400 years, home to a million people when London had 500,000. It was sacked by the Burmese in 1767 and never rebuilt. Today the ruins sit in a small city two hours north of Bangkok, a UNESCO World Heritage Site that most visitors see only from a tour bus. This trip goes by river, the same way people travelled for centuries, and includes the sites most group tours skip.",
    days: "1-2 Days",
    price: "From $179 per person",
    imageKey: "ayutthaya",
    destinations: ["Ayutthaya", "Bangkok"],
    metaDescription:
      "Day trip to Ayutthaya from Bangkok by river boat. Visit UNESCO temple ruins, Wat Mahathat, and the floating market. From $179 per person.",
    highlights: [
      "River journey from Bangkok to Ayutthaya",
      "Wat Mahathat: the Buddha head in the tree roots",
      "Wat Phra Si Sanphet: the royal temple of the ancient capital",
      "Elephant kraal: the last original elephant stockade in Thailand",
      "Ayutthaya Floating Market",
    ],
    itinerary: [
      {
        day: "Day 1 Morning",
        title: "River Journey North",
        description:
          "Depart Bangkok by private car or optional river express boat. Arrive in Ayutthaya mid-morning. Briefing on the history of the city before entering the ruins.",
      },
      {
        day: "Day 1 Afternoon",
        title: "Temple Ruins",
        description:
          "Guided tour of the main temple complex: Wat Mahathat, Wat Ratchaburana, and Wat Phra Si Sanphet. Time at the museum. Lunch at a local riverside restaurant.",
      },
      {
        day: "Day 1 Evening",
        title: "Return to Bangkok",
        description:
          "Optional stop at the Ayutthaya Floating Market before your transfer back to Bangkok. Arrive by early evening.",
      },
    ],
    includes: [
      "Private return transfers Bangkok to Ayutthaya",
      "English-speaking guide",
      "All temple entrance fees",
      "Lunch",
    ],
  },
  {
    slug: "bangkok-ancient-capitals",
    title: "Bangkok and the Ancient Capitals",
    tagline: "Three days of history, from the ruins of Ayutthaya to modern Bangkok",
    description:
      "Bangkok is Thailand's fourth capital. Ayutthaya was its second. Sukhothai its first. This package connects the dots: two nights in Bangkok for the Grand Palace and street food, a full day in Ayutthaya, and an optional extension to Sukhothai or Lopburi. It is the trip for travellers who want to understand what Thailand actually is, not just see the surface of it.",
    days: "4-5 Days",
    price: "From $849 per person",
    imageKey: "bangkok-night",
    destinations: ["Ayutthaya", "Bangkok"],
    metaDescription:
      "Bangkok and Ayutthaya combined tour: Grand Palace, temple ruins, and Thai history. 4-5 day package from $849 per person.",
    highlights: [
      "Grand Palace and Wat Phra Kaew, Bangkok",
      "Full day in Ayutthaya: Wat Mahathat and Wat Phra Si Sanphet",
      "Chao Phraya river tour by longtail",
      "Lopburi: the monkey temple and Khmer ruins",
      "Bangkok street food tour, Yaowarat",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Bangkok Arrival",
        description:
          "Private airport transfer. Evening Chao Phraya river walk and dinner in the Riverside neighbourhood.",
      },
      {
        day: "Day 2",
        title: "Grand Palace and Canals",
        description:
          "Morning at the Grand Palace and Wat Pho. Afternoon longtail boat tour through Bangkok's old canal network. Evening street food tour in Yaowarat.",
      },
      {
        day: "Day 3",
        title: "Ayutthaya",
        description:
          "Full day in Ayutthaya. Guided tour of the main ruins including Wat Mahathat, Wat Ratchaburana, and the elephant kraal. Return to Bangkok by evening.",
      },
      {
        day: "Day 4",
        title: "Lopburi or Departure",
        description:
          "Optional extension to Lopburi for the Khmer-era ruins and Phra Narai palace. Or free morning in Bangkok before your flight.",
      },
    ],
    includes: [
      "Private airport transfers",
      "3-star hotel in central Bangkok",
      "Daily breakfast",
      "Full-day Ayutthaya guided tour",
      "All entrance fees",
      "Longtail canal boat tour",
      "Street food tour",
    ],
  },
];

export const getPackageBySlug = (slug: string): Package | undefined =>
  packages.find((p) => p.slug === slug);
