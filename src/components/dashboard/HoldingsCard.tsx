import type { Holding } from "@/lib/buckets";
import { isHoldingVerified } from "@/lib/buckets";

function badgeText(h: Holding): string {
  const base = h.tokenSymbol || h.displayName;
  return base.length <= 6 ? base.toUpperCase() : base.slice(0, 4).toUpperCase();
}

export function HoldingsCard({ holdings }: { holdings: Holding[] }) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-outline-variant shadow-sm">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-headline-md font-bold">Holdings</h3>
        <span className="text-xs text-on-surface-variant">
          {holdings.length} constituent{holdings.length === 1 ? "" : "s"}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {holdings.map((h) => (
          <div
            key={h.tokenSymbol}
            className="flex items-center justify-between pb-4 border-b border-outline-variant/50"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-surface-variant flex items-center justify-center font-bold text-[10px] text-on-surface">
                {badgeText(h)}
              </div>
              <div className="min-w-0">
                <p className="font-bold truncate">{h.displayName}</p>
                <p className="text-label-sm text-on-surface-variant">
                  {h.weight}% of bucket
                  {h.role ? ` · ${h.role}` : ""}
                </p>
              </div>
            </div>
            {!isHoldingVerified(h) && (
              <span
                className="material-symbols-outlined text-[18px] text-amber-500 shrink-0"
                title="Solana mint address not yet verified"
              >
                gpp_maybe
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
