// Cosmetic, illustrative-only display data (icon, mock price/trend) for a
// pre-launch product with no real market data yet. Kept separate from
// src/lib/buckets.ts so illustrative numbers are never mistaken for the
// verified basket facts (holdings, weights, risk tier, index rules).

export type BucketDisplay = {
  icon: string;
  iconClass: string;
  performance: string;
  positive: boolean;
  /** Small sparkline, scaled to a 0 0 100 20 viewBox (table row). */
  sparklinePath: string;
  /** Larger performance chart, scaled to a 0 0 800 200 viewBox (detail page). */
  chartPath: string;
  price: number;
};

export const bucketDisplay: Record<string, BucketDisplay> = {
  "us-market-leaders": {
    icon: "leaderboard",
    iconClass: "bg-blue-50 text-blue-600",
    performance: "+14.6%",
    positive: true,
    sparklinePath: "M0 15 Q 25 14, 50 14 T 75 14 T 100 13",
    chartPath: "M0,150 Q200,145 300,140 T500,110 T650,95 T800,85",
    price: 182.4,
  },
  "magnificent-technology": {
    icon: "cloud",
    iconClass: "bg-indigo-50 text-indigo-600",
    performance: "+24.8%",
    positive: true,
    sparklinePath: "M0 18 Q 10 15, 20 16 T 40 12 T 60 8 T 80 10 T 100 2",
    chartPath: "M0,180 Q150,160 300,170 T450,130 T600,90 T800,60",
    price: 248.12,
  },
  "ai-and-semiconductors": {
    icon: "memory",
    iconClass: "bg-purple-50 text-purple-600",
    performance: "+31.2%",
    positive: true,
    sparklinePath: "M0 18 L 20 14 L 40 16 L 60 6 L 80 8 L 100 2",
    chartPath: "M0,185 L160,150 L320,165 L480,80 L640,95 L800,40",
    price: 311.87,
  },
  "digital-finance": {
    icon: "payments",
    iconClass: "bg-teal-50 text-teal-600",
    performance: "+9.4%",
    positive: true,
    sparklinePath: "M0 15 L 20 12 L 40 14 L 60 10 L 80 12 L 100 8",
    chartPath: "M0,150 L160,130 L320,140 L480,110 L640,120 L800,95",
    price: 156.75,
  },
  "global-innovation-and-industry": {
    icon: "precision_manufacturing",
    iconClass: "bg-amber-50 text-amber-600",
    performance: "+6.1%",
    positive: true,
    sparklinePath: "M0 10 Q 20 12, 40 5 T 60 15 T 80 5 T 100 8",
    chartPath: "M0,120 Q200,130 350,90 T650,140 T800,90",
    price: 134.2,
  },
  "pump-fun-ecosystem": {
    icon: "casino",
    iconClass: "bg-pink-50 text-pink-600",
    performance: "-18.3%",
    positive: false,
    sparklinePath: "M0 10 L 20 18 L 40 5 L 60 15 L 80 20 L 100 12",
    chartPath: "M0,90 L160,180 L320,50 L480,150 L640,190 L800,120",
    price: 42.6,
  },
  "pump-fund-builders-index": {
    icon: "groups",
    iconClass: "bg-lime-50 text-lime-700",
    performance: "+3.0%",
    positive: true,
    sparklinePath: "M0 16 L 20 14 L 40 15 L 60 12 L 80 13 L 100 10",
    chartPath: "M0,135 L160,120 L320,130 L480,100 L640,110 L800,90",
    price: 88.1,
  },
};
