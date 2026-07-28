const logos = [
  "COINDESK",
  "CoinMarketCap",
  "Decrypt",
  "yahoo! finance",
  "BENZINGA",
  "THE BLOCK",
];

export function LogoBar() {
  return (
    <section className="reveal py-16 bg-white overflow-hidden">
      <div className="max-w-container-max mx-auto px-6 lg:px-8">
        <p className="text-center font-label text-label-sm text-on-surface-variant/60 mb-10 uppercase tracking-widest font-bold">
          Trusted by forward-thinking investors
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          {logos.map((logo) => (
            <span
              key={logo}
              className="font-sans text-headline-md font-black tracking-tighter"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
