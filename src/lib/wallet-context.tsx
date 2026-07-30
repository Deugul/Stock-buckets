"use client";

import { createContext, useCallback, useContext, useState } from "react";

const CONNECT_DELAY_MS = 900;

type WalletContextValue = {
  connected: boolean;
  walletName: string | null;
  dropdownOpen: boolean;
  connecting: boolean;
  openDropdown: () => void;
  closeDropdown: () => void;
  selectWallet: (name: string) => void;
};

const WalletContext = createContext<WalletContextValue | null>(null);

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [connected, setConnected] = useState(false);
  const [walletName, setWalletName] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [connecting, setConnecting] = useState(false);

  const openDropdown = useCallback(() => setDropdownOpen(true), []);
  const closeDropdown = useCallback(() => setDropdownOpen(false), []);

  const selectWallet = useCallback((name: string) => {
    setConnecting(true);
    setTimeout(() => {
      setWalletName(name);
      setConnected(true);
      setConnecting(false);
      setDropdownOpen(false);
    }, CONNECT_DELAY_MS);
  }, []);

  return (
    <WalletContext.Provider
      value={{
        connected,
        walletName,
        dropdownOpen,
        connecting,
        openDropdown,
        closeDropdown,
        selectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const ctx = useContext(WalletContext);
  if (!ctx) throw new Error("useWallet must be used within a WalletProvider");
  return ctx;
}
