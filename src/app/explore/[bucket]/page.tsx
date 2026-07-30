import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buckets, getBucket, isBucketFullyVerified } from "@/lib/buckets";
import { bucketDisplay } from "@/lib/bucketDisplay";
import { PerformanceCard } from "@/components/dashboard/PerformanceCard";
import { HoldingsCard } from "@/components/dashboard/HoldingsCard";
import { InvestPanel } from "@/components/dashboard/InvestPanel";

export function generateStaticParams() {
  return buckets.map((bucket) => ({ bucket: bucket.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ bucket: string }>;
}): Promise<Metadata> {
  const { bucket: slug } = await params;
  const bucket = getBucket(slug);
  if (!bucket) return {};
  return { title: `${bucket.name} | Buckets Investment Group` };
}

function rebalanceCadence(indexRules: string | null): string {
  if (!indexRules) return "Not specified";
  const match = indexRules.match(/(Quarterly|Monthly|Annual(?:ly)?)[^.]*rebalance/i);
  return match ? match[0] : indexRules.split(".")[0];
}

export default async function BucketDetailPage({
  params,
}: {
  params: Promise<{ bucket: string }>;
}) {
  const { bucket: slug } = await params;
  const bucket = getBucket(slug);
  if (!bucket) notFound();

  const meta = bucketDisplay[bucket.slug];
  const verified = isBucketFullyVerified(bucket);

  return (
    <div className="p-4 sm:p-8 max-w-[1200px] mx-auto">
      <div className="flex items-center gap-2 text-on-surface-variant mb-6 text-sm">
        <Link href="/explore" className="hover:text-on-surface">
          Explore
        </Link>
        <span className="material-symbols-outlined text-sm">
          chevron_right
        </span>
        <span className="text-on-surface font-semibold">{bucket.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-lime-accent text-black text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  {bucket.tag}
                </span>
                <span className="text-on-surface-variant font-label text-label-sm">
                  BUCKET ID: {bucket.bucketId}
                </span>
              </div>
              <h1 className="text-headline-lg-mobile md:text-headline-lg mb-2">
                {bucket.name}
              </h1>
              {bucket.nameUnconfirmed && (
                <p className="flex items-center gap-2 text-amber-600 text-xs font-bold mb-2">
                  <span className="material-symbols-outlined text-[16px]">
                    warning
                  </span>
                  Name unconfirmed — not present in the source document
                </p>
              )}
              <p className="text-on-surface-variant max-w-xl">
                {bucket.description}
              </p>
            </div>
            <div className="text-right">
              <div className="font-label text-label-sm text-on-surface-variant mb-1 uppercase tracking-widest">
                Price
              </div>
              <div className="text-3xl font-bold mb-1">
                ${meta.price.toFixed(2)}
              </div>
              <div
                className={`font-bold text-label-md flex items-center justify-end px-3 py-1 rounded-full text-sm ${
                  meta.positive
                    ? "bg-black/90 text-lime-accent"
                    : "bg-red-600/90 text-white"
                }`}
              >
                <span className="material-symbols-outlined text-sm mr-1">
                  {meta.positive ? "trending_up" : "trending_down"}
                </span>
                {meta.performance}
              </div>
            </div>
          </div>

          <PerformanceCard chartPath={meta.chartPath} />
          <HoldingsCard holdings={bucket.holdings} />

          <div className="bg-white rounded-2xl p-6 border border-outline-variant shadow-sm">
            <h4 className="font-bold mb-4">About this bucket</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
              {bucket.riskTier ?? "Risk tier not specified in the source document."}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-surface rounded-lg">
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">
                  Risk tier
                </p>
                <p className="font-bold text-sm">
                  {bucket.riskTier ? bucket.riskTier.split(".")[0] : "Unrated"}
                </p>
              </div>
              <div className="p-3 bg-surface rounded-lg">
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">
                  Rebalance
                </p>
                <p className="font-bold text-sm">
                  {rebalanceCadence(bucket.indexRules)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-4 sticky top-24">
          <InvestPanel price={meta.price} verified={verified} />
        </aside>
      </div>
    </div>
  );
}
