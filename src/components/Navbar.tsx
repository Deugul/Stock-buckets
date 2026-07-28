import Link from "next/link";
import { Logo } from "@/components/Logo";

export function Navbar() {
  return (
    <header className="w-full top-0 sticky bg-white/80 backdrop-blur-md z-50">
      <nav className="flex justify-between items-center h-20 px-6 lg:px-8 max-w-container-max mx-auto">
        <div className="flex items-center gap-12">
          <Logo href="/" />
          <div className="hidden lg:flex items-center gap-8 text-body-md">
            <a className="nav-link" href="#">
              How it works
            </a>
            <a className="nav-link" href="#">
              Benefits
            </a>
            <a className="nav-link" href="#">
              About
            </a>
            <a className="nav-link" href="#">
              FAQ
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/explore"
            className="bg-white border border-outline-variant px-6 py-2.5 rounded-full text-body-md font-bold flex items-center gap-2 hover:bg-surface transition-all"
          >
            <span className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse" />
            Connect wallet
          </Link>
          <button type="button" className="lg:hidden p-2">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
