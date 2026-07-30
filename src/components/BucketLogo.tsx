import { bucketDisplay } from "@/lib/bucketDisplay";

// Simplified, non-trademarked stand-in marks for each bucket's largest-weight
// holding — not official brand assets, just a recognizable colored glyph so
// each bucket reads at a glance.

function SpyMark() {
  return (
    <svg viewBox="0 0 24 24" className="w-[55%] h-[55%]" fill="none">
      <path
        d="M5 17V11M11 17V7M17 17V13"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function NvidiaMark() {
  return (
    <svg viewBox="0 0 24 24" className="w-[55%] h-[55%]" fill="none">
      <path
        d="M6 8c0-1.1.9-2 2-2h2c4.4 0 8 3.6 8 8v2c0 1.1-.9 2-2 2h-2c0-4.4-3.6-8-8-8V8z"
        fill="#76B900"
      />
    </svg>
  );
}

function VisaMark() {
  return (
    <svg viewBox="0 0 24 24" className="w-[60%] h-[60%]" fill="none">
      <path
        d="M9 6 L7 18 M14 6 L16.5 14 L19 6 M4.5 6 L6.5 13 L9 6"
        stroke="white"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TeslaMark() {
  return (
    <svg viewBox="0 0 24 24" className="w-[52%] h-[52%]" fill="none">
      <path d="M12 7v11" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
      <path
        d="M5 6.5c1.7 1.7 4.2 2.5 7 2.5s5.3-.8 7-2.5"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

const logoBySlug: Record<
  string,
  { Mark: () => React.ReactElement; bgClass: string }
> = {
  "us-market-leaders": { Mark: SpyMark, bgClass: "bg-[#1B3A6B]" },
  "magnificent-technology": { Mark: NvidiaMark, bgClass: "bg-black" },
  "ai-and-semiconductors": { Mark: NvidiaMark, bgClass: "bg-black" },
  "digital-finance": { Mark: VisaMark, bgClass: "bg-[#1A1F71]" },
  "global-innovation-and-industry": { Mark: TeslaMark, bgClass: "bg-black" },
};

export function BucketLogo({
  slug,
  className = "w-10 h-10",
}: {
  slug: string;
  className?: string;
}) {
  const entry = logoBySlug[slug];

  if (!entry) {
    const meta = bucketDisplay[slug];
    return (
      <div
        className={`rounded-full flex items-center justify-center shrink-0 ${meta.iconClass} ${className}`}
      >
        <span className="material-symbols-outlined">{meta.icon}</span>
      </div>
    );
  }

  const { Mark, bgClass } = entry;
  return (
    <div
      className={`rounded-full flex items-center justify-center shrink-0 ${bgClass} ${className}`}
    >
      <Mark />
    </div>
  );
}
