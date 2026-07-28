export function CtaSection() {
  return (
    <section className="reveal py-32 text-center px-6 relative overflow-hidden">
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 blur-[150px] rounded-full" />
      <div className="max-w-3xl mx-auto space-y-10">
        <h2 className="font-sans text-headline-lg-mobile md:text-headline-lg">
          Ready to fill your first bucket?
        </h2>
        <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto">
          Join thousands of investors who are taking control of their
          financial destiny together. Setup takes less than 2 minutes.
        </p>
        <div className="flex flex-col items-center gap-6">
          <button
            type="button"
            className="accent-button text-primary px-12 py-5 rounded-full text-headline-md font-extrabold"
          >
            Get Started for Free
          </button>
          <p className="font-label text-label-sm text-on-surface-variant/60">
            No credit card required. No hidden costs.
          </p>
        </div>
      </div>
    </section>
  );
}
