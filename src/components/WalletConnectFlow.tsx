"use client";

import type { Bucket } from "@/lib/buckets";
import { isBucketFullyVerified } from "@/lib/buckets";
import { useWallet } from "@/lib/wallet-context";
import { BucketLogo } from "@/components/BucketLogo";

export function WalletConnectFlow({
  bucket,
  amount,
  estimatedUnits,
  onBack,
}: {
  bucket: Bucket;
  amount: number;
  estimatedUnits: number;
  onBack: () => void;
}) {
  const { walletName } = useWallet();
  const verified = isBucketFullyVerified(bucket);

  return (
    <div className="bg-white rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-5">
        <button
          type="button"
          onClick={onBack}
          aria-label="Back"
          className="p-1 -ml-1 rounded-full hover:bg-surface-container-low transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <span className="text-sm font-bold text-on-surface">
          Review order
        </span>
      </div>

      <div className="space-y-5">
        <div className="flex items-center gap-3 p-3 bg-surface rounded-xl">
          <BucketLogo slug={bucket.slug} className="w-9 h-9" />
          <div>
            <p className="font-bold text-on-surface text-sm">
              {bucket.name}
            </p>
            <p className="text-xs text-on-surface-variant">
              Connected with {walletName}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-on-surface-variant">Amount</span>
            <span className="font-bold text-on-surface">
              ${amount.toFixed(2)} USDC
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-on-surface-variant">Estimated shares</span>
            <span className="font-bold text-on-surface">
              {estimatedUnits.toFixed(2)} shs
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-on-surface-variant">Platform fee</span>
            <span className="font-bold text-on-surface">$0.00</span>
          </div>
          <div className="flex justify-between items-end pt-2 border-t border-outline-variant">
            <span className="font-bold text-on-surface">Total</span>
            <span className="text-2xl font-bold text-accent">
              ${amount.toFixed(2)}
            </span>
          </div>
        </div>

        {verified ? (
          <button
            type="button"
            className="accent-button w-full py-4 rounded-full text-primary font-extrabold text-lg"
          >
            Confirm Investment
          </button>
        ) : (
          <button
            type="button"
            disabled
            title="Investing is disabled until every holding's Solana mint address is verified in the asset registry."
            className="w-full py-4 rounded-full bg-surface-container text-on-surface-variant font-extrabold text-lg cursor-not-allowed"
          >
            Investing Unavailable
          </button>
        )}

        {!verified && (
          <div className="p-3 bg-amber-50 rounded-xl flex gap-2 items-start border border-amber-100">
            <span className="material-symbols-outlined text-sm text-amber-600">
              gpp_maybe
            </span>
            <p className="text-[11px] leading-relaxed text-amber-800">
              This basket&apos;s constituents have not been verified against
              the Solana mint-address registry yet, so investing is blocked
              per the asset-verification policy.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
