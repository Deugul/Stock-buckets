import Link from "next/link";
import { buckets } from "@/lib/buckets";
import { bucketDisplay } from "@/lib/bucketDisplay";
import { riskLabel, riskBadgeClass } from "@/lib/bucketRisk";

export function BucketsCardGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {buckets.map((bucket) => {
        const meta = bucketDisplay[bucket.slug];
        const risk = riskLabel(bucket.riskTier);
        return (
          <div
            key={bucket.slug}
            className="bg-white rounded-xl border border-outline-variant p-5 flex flex-col gap-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center ${meta.iconClass}`}
              >
                <span className="material-symbols-outlined">
                  {meta.icon}
                </span>
              </div>
              <span
                className={`px-3 py-1 text-xs font-bold rounded-full ${riskBadgeClass[risk] ?? riskBadgeClass.Unrated}`}
              >
                {risk}
              </span>
            </div>

            <div>
              <p className="font-bold text-on-surface flex items-center gap-2">
                {bucket.name}
                {bucket.nameUnconfirmed && (
                  <span
                    className="material-symbols-outlined text-[16px] text-amber-500"
                    title="Name unconfirmed — not present in source document"
                  >
                    warning
                  </span>
                )}
              </p>
              <p className="text-xs text-on-surface-variant">
                {bucket.holdings
                  .slice(0, 3)
                  .map((h) => h.tokenSymbol)
                  .join(", ")}
              </p>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-on-surface-variant">{bucket.tag}</span>
              <div className="flex items-center gap-2">
                <div className="w-16 h-6">
                  <svg className="w-full h-full" viewBox="0 0 100 20">
                    <path
                      d={meta.sparklinePath}
                      fill="none"
                      stroke={meta.positive ? "#22c55e" : "#ef4444"}
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>
                <span
                  className={`font-bold ${meta.positive ? "text-green-600" : "text-red-600"}`}
                >
                  {meta.performance}
                </span>
              </div>
            </div>

            <Link
              href={`/explore/${bucket.slug}`}
              className="mt-auto w-full text-center py-2 rounded-lg border border-outline-variant font-bold text-sm hover:bg-surface-container-low transition-colors"
            >
              View bucket
            </Link>
          </div>
        );
      })}
    </div>
  );
}
