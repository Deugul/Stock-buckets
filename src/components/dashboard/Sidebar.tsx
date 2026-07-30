import Link from "next/link";
import { Logo } from "@/components/Logo";

const navItems = [
  { label: "Buckets", icon: "grid_view", href: "#" },
  { label: "Portfolio", icon: "account_balance_wallet", href: "#" },
  { label: "Watchlist", icon: "visibility", href: "#" },
  { label: "Explore", icon: "explore", href: "/explore" },
  { label: "Transactions", icon: "swap_horiz", href: "#" },
  { label: "Analytics", icon: "analytics", href: "#" },
  { label: "Settings", icon: "settings", href: "#" },
];

export function Sidebar({
  onNavigate,
  onClose,
}: {
  onNavigate?: () => void;
  onClose?: () => void;
} = {}) {
  return (
    <aside className="w-64 border-r border-outline-variant bg-white flex flex-col h-full lg:fixed lg:z-50">
      <div className="p-6">
        <div className="mb-8 flex items-center justify-between">
          <Logo textClassName="text-xl font-bold" />
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="lg:hidden p-1 -mr-1 rounded-full hover:bg-surface-container-low transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          )}
        </div>
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = item.label === "Explore";
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onNavigate}
                className={
                  isActive
                    ? "flex items-center gap-3 px-4 py-2.5 rounded-lg font-bold transition-colors bg-lime-accent text-black"
                    : "flex items-center gap-3 px-4 py-2.5 rounded-lg text-on-surface-variant font-medium transition-colors hover:bg-lime-accent/10"
                }
              >
                <span className="material-symbols-outlined">
                  {item.icon}
                </span>
                <span className="text-body-md">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="mt-auto p-4">
        <div className="bg-surface-container-highest rounded-xl p-4 border border-outline-variant relative overflow-hidden">
          <div className="relative z-10">
            <h4 className="font-bold text-on-surface mb-1">
              Buy the basket
            </h4>
            <p className="text-xs text-on-surface-variant mb-3">
              One click investment into 50+ diverse assets.
            </p>
            <button
              type="button"
              className="w-full bg-black text-white text-xs font-bold py-2 rounded-lg hover:bg-opacity-80 transition-all"
            >
              Invest Now
            </button>
          </div>
          <div className="absolute -right-2 -bottom-2 opacity-10">
            <span className="material-symbols-outlined text-6xl">
              shopping_basket
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
