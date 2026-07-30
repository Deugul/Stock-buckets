import Link from "next/link";
import { buckets } from "@/lib/buckets";
import { bucketDisplay } from "@/lib/bucketDisplay";
import { riskLabel, riskBadgeClass } from "@/lib/bucketRisk";

export function BucketsTable() {
  return (
    <div className="bg-white rounded-xl border border-outline-variant overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[720px]">
        <thead className="bg-surface-container-low border-b border-outline-variant">
          <tr>
            <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">
              Bucket Name
            </th>
            <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">
              Strategy
            </th>
            <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">
              1Y Performance
            </th>
            <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">
              Risk Level
            </th>
            <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider text-right">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-outline-variant">
          {buckets.map((bucket) => {
            const meta = bucketDisplay[bucket.slug];
            const risk = riskLabel(bucket.riskTier);
            return (
              <tr
                key={bucket.slug}
                className="hover:bg-surface-container-lowest transition-colors group"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${meta.iconClass}`}
                    >
                      <span className="material-symbols-outlined">
                        {meta.icon}
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
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-on-surface">
                    {bucket.tag}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-24 h-8">
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
                      className={`text-sm font-bold ${meta.positive ? "text-green-600" : "text-red-600"}`}
                    >
                      {meta.performance}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 text-xs font-bold rounded-full ${riskBadgeClass[risk] ?? riskBadgeClass.Unrated}`}
                  >
                    {risk}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <Link
                    href={`/explore/${bucket.slug}`}
                    className="text-primary font-bold text-sm hover:underline"
                  >
                    View
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
      <div className="px-6 py-4 bg-surface-container-lowest border-t border-outline-variant flex items-center justify-between">
        <p className="text-xs text-on-surface-variant font-medium">
          Showing {buckets.length} of {buckets.length} investment pools
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            className="p-1 border border-outline-variant rounded-lg hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-sm">
              chevron_left
            </span>
          </button>
          <button
            type="button"
            className="p-1 border border-outline-variant rounded-lg hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-sm">
              chevron_right
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
