import Image from "next/image";
import Link from "next/link";

const featureCards = [
  { icon: "shield", label: "Curated & Diversified" },
  { icon: "bolt", label: "One-Click Invest" },
  { icon: "trending_up", label: "Transparent & Simple" },
  { icon: "lock_open", label: "You're in Control" },
];

export function Hero() {
  return (
    <section className="reveal relative pt-12 pb-24 md:pt-20 md:pb-32">
      <div className="max-w-container-max mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 z-10">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-on-surface px-4 py-1.5 rounded-full font-label text-label-sm mb-8">
            <span
              className="material-symbols-outlined text-[18px] text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              auto_awesome
            </span>
            Invest Smarter. Together.
          </div>
          <h1 className="font-sans text-headline-lg-mobile md:text-headline-lg text-primary mb-8 leading-[1.1]">
            Buy the basket.
            <br />
            Own the category.
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-lg mb-10 leading-relaxed opacity-80">
            Buckets lets you invest in curated baskets of top stocks and
            trending themes across the market. Simple. Smart. Diversified.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Link
              href="/buy"
              className="accent-button text-primary px-10 py-4 rounded-full text-body-md font-extrabold flex items-center gap-2"
            >
              Connect wallet
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-2 text-on-surface-variant/60 font-label text-label-sm">
            <span className="material-symbols-outlined text-[18px]">
              lock
            </span>
            Non-custodial. Secure. You&apos;re in control.
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
            {featureCards.map((feature) => (
              <div key={feature.label} className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">
                    {feature.icon}
                  </span>
                </div>
                <h4 className="font-bold text-sm">{feature.label}</h4>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6 relative flex justify-center">
          <div className="relative w-full max-w-[580px] animate-float">
            <Image
              src="/hero-image.png"
              alt="Buckets platform interface on laptop and phone"
              width={1536}
              height={1024}
              sizes="(max-width: 1024px) 90vw, 580px"
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/20 blur-[120px] rounded-full" />
        </div>
      </div>
    </section>
  );
}
