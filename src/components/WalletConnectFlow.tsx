"use client";

import { useEffect, useState } from "react";
import type { Bucket } from "@/lib/buckets";
import { isBucketFullyVerified } from "@/lib/buckets";
import type { BucketDisplay } from "@/lib/bucketDisplay";

type Phase = "select" | "connecting" | "confirm";

const wallets = [
  { name: "Phantom", className: "bg-[#AB9FF2] text-white" },
  { name: "Solflare", className: "bg-[#FC9B3D] text-white" },
  { name: "Backpack", className: "bg-black text-white" },
];

export function WalletConnectFlow({
  bucket,
  meta,
  amount,
  estimatedUnits,
  onBack,
}: {
  bucket: Bucket;
  meta: BucketDisplay;
  amount: number;
  estimatedUnits: number;
  onBack: () => void;
}) {
  const [phase, setPhase] = useState<Phase>("select");
  const [wallet, setWallet] = useState<string | null>(null);
  const verified = isBucketFullyVerified(bucket);

  useEffect(() => {
    if (phase !== "connecting") return;
    const id = setTimeout(() => setPhase("confirm"), 900);
    return () => clearTimeout(id);
  }, [phase]);

  function back() {
    if (phase === "confirm") {
      setPhase("select");
    } else {
      onBack();
    }
  }

  return (
    <div className="bg-white rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-5">
        <button
          type="button"
          onClick={back}
          disabled={phase === "connecting"}
          aria-label="Back"
          className="p-1 -ml-1 rounded-full hover:bg-surface-container-low transition-colors disabled:opacity-0"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <span className="text-sm font-bold text-on-surface">
          {phase === "select" && "Connect a wallet"}
          {phase === "connecting" && `Connecting to ${wallet}…`}
          {phase === "confirm" && "Review order"}
        </span>
      </div>

      {phase === "select" && (
        <div className="space-y-2">
          {wallets.map((w) => (
            <button
              key={w.name}
              type="button"
              onClick={() => {
                setWallet(w.name);
                setPhase("connecting");
              }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors"
            >
              <span
                className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${w.className}`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  account_balance_wallet
                </span>
              </span>
              <span className="font-bold text-on-surface">{w.name}</span>
            </button>
          ))}
          <p className="text-xs text-on-surface-variant leading-relaxed pt-2">
            Preview only — real wallet connection isn&apos;t live yet.
          </p>
        </div>
      )}

      {phase === "connecting" && (
        <div className="flex flex-col items-center justify-center gap-4 py-10">
          <span className="w-10 h-10 rounded-full border-4 border-accent/30 border-t-accent animate-spin" />
          <p className="text-sm text-on-surface-variant">
            Waiting for {wallet}…
          </p>
        </div>
      )}

      {phase === "confirm" && (
        <div className="space-y-5">
          <div className="flex items-center gap-3 p-3 bg-surface rounded-xl">
            <span
              className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${meta.iconClass}`}
            >
              <span className="material-symbols-outlined text-[18px]">
                {meta.icon}
              </span>
            </span>
            <div>
              <p className="font-bold text-on-surface text-sm">
                {bucket.name}
              </p>
              <p className="text-xs text-on-surface-variant">
                Connected with {wallet}
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
                This basket&apos;s constituents have not been verified
                against the Solana mint-address registry yet, so investing
                is blocked per the asset-verification policy.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
