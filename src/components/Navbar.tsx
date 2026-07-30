"use client";

import { useState } from "react";
import { Logo } from "@/components/Logo";
import { useWallet } from "@/lib/wallet-context";

const navLinks = ["How it works", "Benefits", "About", "FAQ"];

const wallets = [
  { name: "Phantom", className: "bg-[#AB9FF2] text-white" },
  { name: "Solflare", className: "bg-[#FC9B3D] text-white" },
  { name: "Backpack", className: "bg-black text-white" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const wallet = useWallet();

  return (
    <header className="w-full top-0 sticky bg-white/80 backdrop-blur-md z-50">
      <nav className="flex justify-between items-center h-16 sm:h-20 px-4 sm:px-6 lg:px-8 max-w-container-max mx-auto">
        <div className="flex items-center gap-12">
          <Logo href="/" />
          <div className="hidden lg:flex items-center gap-8 text-body-md">
            {navLinks.map((link) => (
              <a key={link} className="nav-link" href="#">
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="relative">
            <button
              type="button"
              onClick={() =>
                wallet.dropdownOpen
                  ? wallet.closeDropdown()
                  : wallet.openDropdown()
              }
              aria-haspopup="menu"
              aria-expanded={wallet.dropdownOpen}
              className="bg-white border border-outline-variant px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-body-md font-bold flex items-center gap-2 hover:bg-surface transition-all"
            >
              <span className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse" />
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
              <>
                <button
                  type="button"
                  aria-label="Close wallet menu"
                  onClick={wallet.closeDropdown}
                  className="fixed inset-0 z-40"
                />
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
              </>
            )}
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="lg:hidden p-2 -mr-2"
          >
            <span className="material-symbols-outlined">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden border-t border-outline-variant bg-white px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => setMobileOpen(false)}
              className="nav-link px-2 py-3 rounded-lg hover:bg-surface"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
