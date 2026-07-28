"use client";

import { useState } from "react";

export function InvestPanel({
  price,
  verified,
}: {
  price: number;
  verified: boolean;
}) {
  const [amount, setAmount] = useState("1000");
  const [autoInvest, setAutoInvest] = useState(true);
  const [message, setMessage] = useState<string | null>(null);

  const numericAmount = parseFloat(amount) || 0;
  const estimatedShares = (numericAmount / price).toFixed(2);

  return (
    <div className="bg-black text-white rounded-2xl p-8 shadow-xl overflow-hidden relative border border-white/10">
      <div className="absolute top-0 right-0 w-32 h-32 bg-lime-accent/20 blur-3xl -mr-16 -mt-16 rounded-full" />
      <h3 className="text-headline-md font-bold mb-8 relative z-10">
        Invest Now
      </h3>
      <div className="space-y-6 relative z-10">
        <div>
          <label className="block text-label-sm font-label text-white/60 mb-3 uppercase tracking-widest">
            Amount to Invest
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-headline-md text-white">
              $
            </span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full h-16 pl-10 pr-4 bg-white/10 border border-white/20 rounded-xl text-white text-2xl focus:border-lime-accent focus:ring-0 transition-all"
            />
          </div>
        </div>

        <div className="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-xl">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-lime-accent">
              sync
            </span>
            <div>
              <p className="font-bold">Auto-Invest</p>
              <p className="text-xs text-white/50">Monthly recurring</p>
            </div>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={autoInvest}
            onClick={() => setAutoInvest((v) => !v)}
            className={`relative w-12 h-6 rounded-full transition-colors ${autoInvest ? "bg-lime-accent" : "bg-white/20"}`}
          >
            <span
              className={`absolute top-[4px] h-4 w-4 rounded-full bg-white transition-all ${autoInvest ? "left-[26px]" : "left-[4px]"}`}
            />
          </button>
        </div>

        <div className="space-y-4 pt-4 border-t border-white/10">
          <div className="flex justify-between text-sm">
            <span className="text-white/60">Estimated shares</span>
            <span className="font-bold">{estimatedShares} shs</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-white/60">Platform fee</span>
            <span className="font-bold">$0.00</span>
          </div>
          <div className="flex justify-between items-end pt-2">
            <span className="text-lg font-bold">Total</span>
            <span className="text-3xl font-bold text-lime-accent">
              ${numericAmount.toFixed(2)}
            </span>
          </div>
        </div>

        {verified ? (
          <button
            type="button"
            onClick={() =>
              setMessage(
                "Preview only — wallet connection and on-chain settlement aren't live yet.",
              )
            }
            className="w-full py-5 bg-lime-accent text-black rounded-xl font-extrabold text-lg transition-all hover:scale-[1.02] active:scale-95"
          >
            Confirm Investment
          </button>
        ) : (
          <button
            type="button"
            disabled
            title="Investing is disabled until every holding's Solana mint address is verified in the asset registry."
            className="w-full py-5 bg-white/10 text-white/40 rounded-xl font-extrabold text-lg cursor-not-allowed"
          >
            Investing Unavailable
          </button>
        )}

        {message && (
          <p className="text-xs text-white/60 leading-relaxed">{message}</p>
        )}

        {verified ? (
          <div className="p-4 bg-white/5 rounded-xl flex gap-3 items-start border border-white/10">
            <span className="material-symbols-outlined text-sm text-lime-accent">
              info
            </span>
            <p className="text-[11px] leading-relaxed text-white/60">
              Market is currently closed. Order will execute at market open
              (9:30 AM EST).
            </p>
          </div>
        ) : (
          <div className="p-4 bg-amber-500/10 rounded-xl flex gap-3 items-start border border-amber-500/20">
            <span className="material-symbols-outlined text-sm text-amber-400">
              gpp_maybe
            </span>
            <p className="text-[11px] leading-relaxed text-white/70">
              This basket&apos;s constituents have not been verified against
              the Solana mint-address registry yet. Per the asset-verification
              policy, investing is blocked until every holding resolves to a
              confirmed issuer contract — ticker symbols alone are not
              sufficient, since fake tokens can reuse legitimate names.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
