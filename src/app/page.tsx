import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { QuickBuyWidget } from "@/components/QuickBuyWidget";

export const metadata: Metadata = {
  title: "Buckets | Buy the basket. Own the category.",
  description:
    "Buckets lets you invest in curated baskets of top stocks and trending themes across the market. Simple. Smart. Diversified.",
};

export default function Home() {
  return (
    <div className="hero-gradient min-h-screen flex flex-col selection:bg-accent selection:text-primary">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 gap-12">
        <div className="text-center max-w-2xl">
          <h1 className="font-sans text-headline-lg-mobile text-primary mb-4 leading-[1.1]">
            Buy the basket.
            <br />
            Own the category.
          </h1>
          <p className="text-body-lg text-on-surface-variant">
            Enter an amount and pick a bucket to get started.
          </p>
        </div>
        <QuickBuyWidget />
      </main>
    </div>
  );
}
