import type { Metadata } from "next";
import { BucketsExplorer } from "@/components/dashboard/BucketsExplorer";

export const metadata: Metadata = {
  title: "Explore | Buckets Dashboard",
};

export default function ExplorePage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-headline-md font-bold mb-2">Explore Buckets</h1>
        <p className="text-on-surface-variant">
          Discover professional and community-curated portfolios.
        </p>
      </div>

      <BucketsExplorer />
    </div>
  );
}
