"use client";

import { useEffect, useRef } from "react";
import { Logo } from "@/components/Logo";
import { useWallet } from "@/lib/wallet-context";

const wallets = [
  { name: "Phantom", className: "bg-[#AB9FF2] text-white" },
  { name: "Solflare", className: "bg-[#FC9B3D] text-white" },
  { name: "Backpack", className: "bg-black text-white" },
];

export function Navbar() {
  const wallet = useWallet();
  const { dropdownOpen, closeDropdown } = wallet;
  const walletMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dropdownOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (
        walletMenuRef.current &&
        !walletMenuRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [dropdownOpen, closeDropdown]);

  return (
    <header className="w-full top-0 sticky bg-white/80 backdrop-blur-md z-50">
      <nav className="flex justify-between items-center h-16 sm:h-20 px-4 sm:px-6 lg:px-8 max-w-container-max mx-auto">
        <div className="flex items-center gap-12">
          <Logo href="/" />
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="relative" ref={walletMenuRef}>
            <button
              type="button"
              onClick={() =>
                wallet.dropdownOpen
                  ? wallet.closeDropdown()
                  : wallet.openDropdown()
              }
              aria-haspopup="menu"
              aria-expanded={wallet.dropdownOpen}
              className="accent-button text-primary px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-body-md font-bold flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
              {wallet.connected ? (
                <span>{wallet.walletName}</span>
              ) : (
                <>
                  <span className="hidden sm:inline">Connect wallet</span>
                  <span className="sm:hidden">Connect</span>
                </>
              )}
            </button>

            {wallet.dropdownOpen && (
                <div className="absolute right-0 top-full mt-2 z-50 w-72 bg-white rounded-2xl border border-outline-variant shadow-xl p-4">
                  {wallet.connecting ? (
                    <div className="flex flex-col items-center justify-center gap-3 py-6">
                      <span className="w-8 h-8 rounded-full border-4 border-accent/30 border-t-accent animate-spin" />
                      <p className="text-sm text-on-surface-variant">
                        Connecting…
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <p className="text-sm font-bold text-on-surface mb-1">
                        Connect a wallet
                      </p>
                      {wallets.map((w) => (
                        <button
                          key={w.name}
                          type="button"
                          onClick={() => wallet.selectWallet(w.name)}
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors"
                        >
                          <span
                            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${w.className}`}
                          >
                            <span className="material-symbols-outlined text-[16px]">
                              account_balance_wallet
                            </span>
                          </span>
                          <span className="font-bold text-sm text-on-surface">
                            {w.name}
                          </span>
                        </button>
                      ))}
                      <p className="text-xs text-on-surface-variant pt-1">
                        Preview only — real wallet connection isn&apos;t live
                        yet.
                      </p>
                    </div>
                  )}
                </div>
            )}
          </div>
        </div>
      </nav>

    </header>
  );
}
