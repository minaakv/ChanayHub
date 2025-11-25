import { Leaf, Box, TrendingUp, Users, Instagram, Linkedin, Facebook, Video } from 'lucide-react';
import { Pillar, ResourceLink, MarketTrend } from './types';

export const CONTENT_PILLARS: Pillar[] = [
  {
    id: 'p1',
    title: 'The Pure Promise',
    icon: Leaf,
    description: 'Focus on sustainability and "No Preservatives".',
    examples: [
      'Video: Raw farm ingredients -> Processing',
      'Reel: "Read the label with us" (No chemicals)',
      'Photo: Why we use Glass Packaging'
    ],
    color: 'bg-green-100 text-green-800'
  },
  {
    id: 'p2',
    title: 'The Hustle (Logistics)',
    icon: Box,
    description: 'Brand story, affordable stickers, and the "Biashara Spot".',
    examples: [
      'Timelapse: Applying stickers by hand',
      'Walkthrough: Finding the Biashara Spot',
      'Story: Packing orders for the day'
    ],
    color: 'bg-amber-100 text-amber-800'
  },
  {
    id: 'p3',
    title: 'Growth & Impact',
    icon: TrendingUp,
    description: 'Business side, appealing to investors and grant bodies.',
    examples: [
      'LinkedIn Article: Why I started Chanay',
      'Post: Economic impact on local farmers',
      'Tagging Partners: Mo Fund / MSEA'
    ],
    color: 'bg-blue-100 text-blue-800'
  },
  {
    id: 'p4',
    title: 'Social Proof',
    icon: Users,
    description: 'Customer reviews and micro-influencer content.',
    examples: [
      'Repost: Customer using the sauce',
      'Screenshot: WhatsApp review',
      'Collab: Nairobi Foodie trying the product'
    ],
    color: 'bg-purple-100 text-purple-800'
  }
];

export const KENYAN_RESOURCES: ResourceLink[] = [
  {
    title: 'Micro and Small Enterprise Authority (MSEA)',
    url: 'https://msea.go.ke/',
    description: 'The government body responsible for promoting and developing Micro and Small Enterprises in Kenya. Great for registration and legitimatization.',
    category: 'Government'
  },
  {
    title: 'Kenya Association of Manufacturers (KAM) - SME Hub',
    url: 'https://kam.co.ke/sme-hub/',
    description: 'Resources for scaling manufacturing businesses, packaging standards, and industry networking.',
    category: 'Government'
  },
  {
    title: 'Hustler Fund (Financial Inclusion)',
    url: 'https://www.hustlerfund.go.ke/',
    description: 'Access to government-backed affordable credit for small businesses and groups.',
    category: 'Funding'
  },
  {
    title: 'SomaConnect (Digital Skills)',
    url: 'https://www.somaconnect.co.ke/',
    description: 'Offers resources and training for digital marketing specifically for the Kenyan youth and business market.',
    category: 'Marketing'
  },
  {
    title: 'Kenya Bureau of Standards (KEBS) - Biashara',
    url: 'https://www.kebs.org/',
    description: 'Crucial for "Agri-processors" to get the Diamond Mark of Quality. This builds massive trust with Nairobi consumers.',
    category: 'Government'
  },
  {
    title: 'EatOut Kenya (Industry Trends)',
    url: 'https://eatout.co.ke/',
    description: 'Follow to understand food trends, what restaurants are buying, and potential B2B partnerships.',
    category: 'Community'
  }
];

export const MARKET_TRENDS: MarketTrend[] = [
  {
    trend: 'The "Clean Label" Movement',
    description: 'Consumers are rejecting chemical names they cannot pronounce.',
    kenyanContext: 'Middle-class Nairobians are shifting from supermarket mass-brands to "organic" and "farm-fresh" brands found on IG.',
    actionItem: 'Highlight the ingredients list in close-up photos. Use #MadeInKenya and #OrganicKenya.'
  },
  {
    trend: 'Eco-Conscious Packaging',
    description: 'Plastic is out; sustainable packaging is a status symbol.',
    kenyanContext: 'Since the plastic bag ban, Kenyans appreciate reusable containers. Glass jars are seen as "Premium" and "Re-usable" for spices later.',
    actionItem: 'Run a "Return the Jar" discount campaign to boost loyalty and sustainability cred.'
  },
  {
    trend: 'Video-First Discovery',
    description: 'TikTok is the new search engine for Gen Z and Millennials.',
    kenyanContext: 'Kenyan TikTok is huge for "Life Hacks" and "SMEs". Trends like "Small Business Check" often go viral.',
    actionItem: 'Use trending Kenyan audio (Gengetone or Afrobeats instrumentals) for your packaging videos.'
  },
  {
    trend: 'Trust via WhatsApp',
    description: 'Closing sales happens in DMs, not always on websites.',
    kenyanContext: 'Kenyan customers prefer to "Haggles" or ask questions via WhatsApp before paying M-PESA.',
    actionItem: 'Put a direct WhatsApp link in your Bio. Treat your WhatsApp Status as a daily catalog.'
  }
];

export const WEEKLY_SCHEDULE = [
  {
    day: 'Monday',
    theme: 'The Professional',
    platform: 'LinkedIn / FB',
    action: 'Impact & Investors. Post finished product or team. Tag partners.',
    icon: Linkedin,
    color: 'text-blue-700'
  },
  {
    day: 'Tuesday',
    theme: 'Product Education',
    platform: 'Instagram / TikTok',
    action: 'Ingredients & Sustainability. "Glass not Plastic".',
    icon: Instagram,
    color: 'text-pink-600'
  },
  {
    day: 'Wednesday',
    theme: 'Logistics & Sales',
    platform: 'Stories / WhatsApp Status',
    action: 'Share Price List. "Pick up at Biashara Spot".',
    icon: Facebook,
    color: 'text-blue-600'
  },
  {
    day: 'Thursday',
    theme: 'Collaboration Day',
    platform: 'All Platforms',
    action: 'Send product to micro-influencers. Repost user reviews.',
    icon: Users,
    color: 'text-purple-600'
  },
  {
    day: 'Friday',
    theme: 'The Experience',
    platform: 'TikTok / Reels',
    action: 'ASMR packaging video. Fun vibes. Music-driven.',
    icon: Video,
    color: 'text-red-500'
  }
];