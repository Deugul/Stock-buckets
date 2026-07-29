"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { buckets } from "@/lib/buckets";
import { bucketDisplay } from "@/lib/bucketDisplay";
import { HoldingsTicker } from "@/components/HoldingsTicker";

export function QuickBuyWidget() {
  const router = useRouter();
  const [amount, setAmount] = useState("1000");
  const [selectedSlug, setSelectedSlug] = useState(buckets[0].slug);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const selectedBucket = buckets.find((b) => b.slug === selectedSlug) ?? buckets[0];
  const selectedMeta = bucketDisplay[selectedBucket.slug];
  const numericAmount = parseFloat(amount) || 0;
  const estimatedUnits = numericAmount / selectedMeta.price;

  function handleContinue() {
    router.push(`/explore/${selectedSlug}?amount=${encodeURIComponent(amount)}`);
  }

  return (
    <div className="relative w-full max-w-md mx-auto glass-card rounded-[2rem] p-4 shadow-2xl border-white/50">
      <div className="bg-white rounded-2xl p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-bold text-on-surface">Amount</span>
          <span className="flex items-center gap-1 text-xs text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px]">
              account_balance_wallet
            </span>
            Enter USDC value
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-on-surface">$</span>
          <input
            type="number"
            min="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="w-full text-right text-4xl font-bold text-on-surface bg-transparent border-none focus:outline-none focus:ring-0"
          />
        </div>
      </div>

      <div className="flex justify-center -my-3 relative z-10">
        <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center border-4 border-white">
          <span className="material-symbols-outlined text-[20px] text-primary">
            arrow_downward
          </span>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 relative">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-bold text-on-surface">Bucket</span>
          <span className="text-xs text-on-surface-variant">
            ≈ {estimatedUnits.toFixed(2)} units
          </span>
        </div>
        <button
          type="button"
          onClick={() => setDropdownOpen((v) => !v)}
          aria-haspopup="listbox"
          aria-expanded={dropdownOpen}
          className="w-full flex items-center justify-between gap-3 bg-white border border-outline-variant hover:bg-surface-container-low transition-colors rounded-full pl-2 pr-4 py-2"
        >
          <span className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px] text-white">
                {selectedMeta.icon}
              </span>
            </span>
            <span className="font-bold text-on-surface">
              {selectedBucket.name}
            </span>
          </span>
          <span className="material-symbols-outlined text-on-surface-variant">
            expand_more
          </span>
        </button>

        {dropdownOpen && (
          <>
            <button
              type="button"
              aria-label="Close bucket list"
              onClick={() => setDropdownOpen(false)}
              className="fixed inset-0 z-10 cursor-default"
            />
            <ul
              role="listbox"
              className="absolute left-5 right-5 top-full mt-2 z-20 bg-white rounded-2xl border border-outline-variant shadow-xl overflow-hidden max-h-72 overflow-y-auto"
            >
              {buckets.map((bucket) => {
                const meta = bucketDisplay[bucket.slug];
                return (
                  <li key={bucket.slug}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={bucket.slug === selectedSlug}
                      onClick={() => {
                        setSelectedSlug(bucket.slug);
                        setDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-surface-container-low transition-colors ${
                        bucket.slug === selectedSlug ? "bg-surface" : ""
                      }`}
                    >
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${meta.iconClass}`}
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          {meta.icon}
                        </span>
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="block font-bold text-sm text-on-surface truncate">
                          {bucket.name}
                        </span>
                        <span className="block text-xs text-on-surface-variant">
                          {bucket.tag}
                        </span>
                      </span>
                      <span
                        className={`text-xs font-bold ${meta.positive ? "text-green-600" : "text-red-600"}`}
                      >
                        {meta.performance}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </>
        )}

        <HoldingsTicker
          holdings={selectedBucket.holdings}
          estimatedUnits={estimatedUnits}
        />
      </div>

      <button
        type="button"
        onClick={handleContinue}
        disabled={numericAmount <= 0}
        className="accent-button disabled:opacity-40 disabled:cursor-not-allowed w-full mt-4 py-4 rounded-full text-primary font-extrabold text-lg flex items-center justify-center gap-2"
      >
        Continue
        <span className="material-symbols-outlined text-[20px]">
          arrow_forward
        </span>
      </button>
    </div>
  );
}
