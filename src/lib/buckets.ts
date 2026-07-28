// Bucket + constituent data sourced from the ICM basket spec.
//
// Per the Solana Contract-Address Policy in that spec, every constituent must
// resolve to a verified Solana mint address before it can be identified as a
// real, investable asset — ticker/name alone is not sufficient, since fake
// tokens can reuse legitimate names and symbols. None of the mint addresses
// (or the other registry fields below) were supplied in the source document,
// so they are left `null` here rather than invented. `verified` is derived
// from `solanaMint` being present — every holding is currently unverified,
// and the UI must not let a user invest against unverified holdings.

export type Holding = {
  displayName: string;
  tokenSymbol: string;
  underlyingTicker: string | null;
  weight: number;
  issuer: "xStocks" | "Backpack Securities" | null;
  role: string | null;
  // Registry fields required by the Solana Contract-Address Policy.
  // Not supplied in the source spec — must come from the issuer, never guessed.
  issuerProductId: string | null;
  solanaMint: string | null;
  decimals: number | null;
  tokenProgram: string | null;
  redemptionType: string | null;
  jurisdictionStatus: string | null;
  liquidityStatus: string | null;
  verificationSource: string | null;
  lastVerifiedAt: string | null;
};

export type Bucket = {
  slug: string;
  bucketId: string;
  name: string;
  tag: string;
  description: string;
  riskTier: string | null;
  indexRules: string | null;
  /** True when the bucket's name/description was not present in the source document. */
  nameUnconfirmed?: boolean;
  holdings: Holding[];
};

function holding(
  displayName: string,
  tokenSymbol: string,
  underlyingTicker: string | null,
  weight: number,
  issuer: Holding["issuer"],
  role: string | null,
): Holding {
  return {
    displayName,
    tokenSymbol,
    underlyingTicker,
    weight,
    issuer,
    role,
    issuerProductId: null,
    solanaMint: null,
    decimals: null,
    tokenProgram: null,
    redemptionType: null,
    jurisdictionStatus: null,
    liquidityStatus: null,
    verificationSource: null,
    lastVerifiedAt: null,
  };
}

export const buckets: Bucket[] = [
  {
    slug: "us-market-leaders",
    bucketId: "USML-001",
    name: "US Market Leaders",
    tag: "Core",
    description:
      "Large, profitable companies with diversified businesses and strong institutional ownership. This is the core professional-equities basket.",
    riskTier:
      "Moderate. Lowest-beta basket in the range, but still exposed to US equity-market risk and tokenized-security structural risk.",
    indexRules:
      "Quarterly rebalance. Maximum constituent weight of 30%. SPYx remains the anchor unless it loses issuer or liquidity eligibility.",
    holdings: [
      holding("S&P 500 ETF xStock", "SPYx", "SPY", 30, "xStocks", "Diversified US-market anchor"),
      holding("Apple xStock", "AAPLx", "AAPL", 20, "xStocks", "Consumer technology leader"),
      holding("Microsoft xStock", "MSFTx", "MSFT", 20, "xStocks", "Enterprise software and cloud"),
      holding("Alphabet xStock", "GOOGLx", "GOOGL", 15, "xStocks", "Search, advertising and cloud"),
      holding("Amazon xStock", "AMZNx", "AMZN", 15, "xStocks", "E-commerce and cloud infrastructure"),
    ],
  },
  {
    slug: "magnificent-technology",
    bucketId: "MAGT-002",
    name: "Magnificent Technology",
    tag: "Growth",
    description:
      "Concentrated exposure to dominant technology platforms with high margins, strong balance sheets and substantial artificial-intelligence investment.",
    riskTier:
      "Moderate-high. Concentrated in mega-cap technology and sensitive to valuation compression, AI spending and interest rates.",
    indexRules:
      "Quarterly rebalance. Market-cap-informed weights with a 25% cap. No company may exceed 30%.",
    holdings: [
      holding("NVIDIA xStock", "NVDAx", "NVDA", 25, "xStocks", "AI-compute and semiconductor anchor"),
      holding("Microsoft xStock", "MSFTx", "MSFT", 20, "xStocks", "Enterprise AI and cloud"),
      holding("Apple xStock", "AAPLx", "AAPL", 20, "xStocks", "Premium devices and services"),
      holding("Alphabet xStock", "GOOGLx", "GOOGL", 20, "xStocks", "AI, search and cloud"),
      holding("Meta xStock", "METAx", "META", 15, "xStocks", "Digital advertising and AI platforms"),
    ],
  },
  {
    slug: "ai-and-semiconductors",
    bucketId: "AISC-003",
    name: "AI and Semiconductors",
    tag: "High Growth",
    description:
      "The infrastructure layer behind artificial intelligence, data centres, memory and advanced computing.",
    riskTier:
      "High. Cyclical semiconductor demand, export restrictions, capital expenditure cycles and rapid technological change can produce large drawdowns.",
    indexRules:
      "Monthly liquidity review and quarterly rebalance. Maximum weight of 30%. Backpack-issued constituents must retain an active conversion and redemption path.",
    holdings: [
      holding("NVIDIA xStock", "NVDAx", "NVDA", 30, "xStocks", "AI accelerator leader"),
      holding("Broadcom xStock", "AVGOx", "AVGO", 20, "xStocks", "Networking and custom AI silicon"),
      holding("AMD xStock", "AMDx", "AMD", 20, "xStocks", "Alternative compute platform"),
      holding("Micron tokenized security", "MU", "MU", 15, "Backpack Securities", "AI memory and storage"),
      holding("Sandisk tokenized security", "SNDK", "SNDK", 15, "Backpack Securities", "Flash storage infrastructure"),
    ],
  },
  {
    slug: "digital-finance",
    bucketId: "DGFN-004",
    name: "Digital Finance",
    tag: "Finance",
    description:
      "Companies powering exchanges, payments, digital brokerage and institutional financial infrastructure.",
    riskTier:
      "Moderate-high. Combines established financial businesses with higher-beta crypto and retail-brokerage exposure.",
    indexRules:
      "Quarterly rebalance. Traditional payments and banking holdings must represent at least 55% of the basket. Crypto-sensitive holdings may not exceed 40% collectively.",
    holdings: [
      holding("Visa xStock", "Vx", "V", 25, "xStocks", "Global payments network"),
      holding("Mastercard xStock", "MAx", "MA", 20, "xStocks", "Global payments network"),
      holding("JPMorgan xStock", "JPMx", "JPM", 20, "xStocks", "Banking and institutional anchor"),
      holding("Coinbase xStock", "COINx", "COIN", 20, "xStocks", "Crypto-market infrastructure"),
      holding("Robinhood tokenized security", "HOOD", "HOOD", 15, "Backpack Securities", "Digital brokerage and retail finance"),
    ],
  },
  {
    slug: "global-innovation-and-industry",
    bucketId: "GINI-005",
    name: "Global Innovation and Industry",
    tag: "Industrial",
    description:
      "A diversified growth basket covering mobility, aerospace, industrial technology, energy systems and advanced manufacturing.",
    // Not present in the source document (page break falls between the
    // holdings table and this basket's risk tier / index rules text).
    riskTier: null,
    indexRules: null,
    holdings: [
      holding("Tesla xStock", "TSLAx", "TSLA", 25, "xStocks", "Electric vehicles and energy systems"),
      holding("SpaceX tokenized security", "SPCX", "SPCX", 20, "Backpack Securities", "Aerospace and satellite infrastructure"),
      holding("Intel tokenized security", "INTC", "INTC", 20, "Backpack Securities", "US semiconductor manufacturing"),
      holding("Caterpillar xStock", "CATx", "CAT", 20, "xStocks", "Heavy industry and infrastructure"),
      holding("GE Aerospace xStock", "GEx", "GE", 15, "xStocks", "Commercial and defence aerospace"),
    ],
  },
  {
    slug: "pump-fun-ecosystem",
    bucketId: "PFUN-006",
    name: "Pump.fun Ecosystem",
    tag: "Speculative",
    // This basket's name and description were not present in the source
    // document — only its constituent table survived. "Pump.fun Ecosystem"
    // is a placeholder label inferred from the holdings, not a confirmed name.
    nameUnconfirmed: true,
    description:
      "Name and description not provided in the source document — shown here based on its constituent tokens only.",
    riskTier: null,
    indexRules: null,
    holdings: [
      holding("Pump.fun", "PUMP", null, 60, null, null),
      holding("Cupsey", "CUPSEY", null, 15, null, null),
      holding("TROLL", "TROLL", null, 15, null, null),
      holding("ANSEM", "ANSEM", null, 10, null, null),
    ],
  },
  {
    slug: "pump-fund-builders-index",
    bucketId: "PFBI-008",
    name: "Pump Fund Builders Index",
    tag: "Hackathon",
    description:
      "The twelve winning projects from the Pump Fund Build in Public Hackathon.",
    riskTier: null,
    indexRules: null,
    holdings: [
      holding("zauth", "zauth", null, 8.33, null, null),
      holding("Opal", "Opal", null, 8.33, null, null),
      holding("Pumpcade", "Pumpcade", null, 8.33, null, null),
      holding("BloxAPI", "BloxAPI", null, 8.33, null, null),
      holding("ClawPump", "ClawPump", null, 8.33, null, null),
      holding("CodecFlow", "CodecFlow", null, 8.33, null, null),
      holding("Dexter", "Dexter", null, 8.33, null, null),
      holding("Clude", "Clude", null, 8.33, null, null),
      holding("SolScanner", "SolScanner", null, 8.33, null, null),
      holding("Collector Group", "Collector Group", null, 8.33, null, null),
      holding("Daydreams", "Daydreams", null, 8.33, null, null),
      holding("AgenC", "AgenC", null, 8.33, null, null),
    ],
  },
];

export function getBucket(slug: string): Bucket | undefined {
  return buckets.find((bucket) => bucket.slug === slug);
}

export function isHoldingVerified(h: Holding): boolean {
  return h.solanaMint !== null;
}

export function isBucketFullyVerified(bucket: Bucket): boolean {
  return bucket.holdings.every(isHoldingVerified);
}
