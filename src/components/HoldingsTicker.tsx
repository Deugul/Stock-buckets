import type { Holding } from "@/lib/buckets";

function TickerRow({
  holdings,
  estimatedUnits,
}: {
  holdings: Holding[];
  estimatedUnits: number;
}) {
  return (
    <div className="flex items-center gap-6 shrink-0 pr-6">
      {holdings.map((holding, index) => (
        <span
          key={`${holding.tokenSymbol}-${index}`}
          className="flex items-center gap-1.5 text-sm whitespace-nowrap"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="font-bold text-on-surface">
            {holding.tokenSymbol}
          </span>
          <span className="text-on-surface-variant">
            {((estimatedUnits * holding.weight) / 100).toFixed(1)} shs
          </span>
        </span>
      ))}
    </div>
  );
}

export function HoldingsTicker({
  holdings,
  estimatedUnits,
}: {
  holdings: Holding[];
  estimatedUnits: number;
}) {
  return (
    <div className="mt-3 -mx-5 px-5 py-2 border-t border-outline-variant overflow-hidden">
      <div className="flex w-max animate-marquee">
        <TickerRow holdings={holdings} estimatedUnits={estimatedUnits} />
        <TickerRow holdings={holdings} estimatedUnits={estimatedUnits} />
      </div>
    </div>
  );
}
