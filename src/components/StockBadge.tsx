import type { Holding } from "@/lib/buckets";
import { AppleLogo } from "@/components/logos/StockLogos";

// Real logos, keyed by underlying ticker. Extend as more are provided —
// holdings without an entry here fall back to a text-abbreviation badge.
const logoByTicker: Record<string, () => React.ReactElement> = {
  AAPL: () => <AppleLogo className="w-6 h-6 text-on-surface" />,
};

function badgeText(h: Holding): string {
  const base = h.tokenSymbol || h.displayName;
  return base.length <= 6 ? base.toUpperCase() : base.slice(0, 4).toUpperCase();
}

export function StockBadge({
  holding,
  className = "w-10 h-10",
}: {
  holding: Holding;
  className?: string;
}) {
  const Logo = holding.underlyingTicker
    ? logoByTicker[holding.underlyingTicker]
    : undefined;

  if (Logo) {
    return (
      <div
        className={`shrink-0 rounded-xl bg-white border border-outline-variant flex items-center justify-center ${className}`}
      >
        <Logo />
      </div>
    );
  }

  return (
    <div
      className={`shrink-0 rounded-xl bg-surface-variant flex items-center justify-center font-bold text-[10px] text-on-surface ${className}`}
    >
      {badgeText(holding)}
    </div>
  );
}
