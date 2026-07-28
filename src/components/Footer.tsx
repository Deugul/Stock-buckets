import { Logo } from "@/components/Logo";

const platformLinks = ["How it works", "Benefits", "About", "FAQ"];
const legalLinks = ["Terms of Service", "Privacy Policy", "Risk Disclosure"];

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-outline-variant/30 py-16">
      <div className="px-6 lg:px-8 max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <Logo href="/" />
            <p className="text-sm text-on-surface-variant leading-relaxed opacity-70">
              The next generation of social investing. Diversified
              portfolios for everyone.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-on-surface-variant/80">
              {platformLinks.map((link) => (
                <li key={link}>
                  <a className="hover:text-primary transition-colors" href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-on-surface-variant/80">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a className="hover:text-primary transition-colors" href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Social</h4>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-full bg-surface border border-outline-variant/30 flex items-center justify-center hover:bg-accent transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-primary text-[20px]">
                  share
                </span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-surface border border-outline-variant/30 flex items-center justify-center hover:bg-accent transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-primary text-[20px]">
                  forum
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-outline-variant/20 text-center">
          <p className="text-xs text-on-surface-variant/50">
            © {new Date().getFullYear()} Buckets Investment Group. All
            rights reserved. Member FINRA/SIPC.
          </p>
        </div>
      </div>
    </footer>
  );
}
