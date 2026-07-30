export function UsdcIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-label="USDC">
      <circle cx="16" cy="16" r="16" fill="#2775CA" />
      <path
        d="M12 9 A9 9 0 0 0 12 23"
        stroke="white"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M20 9 A9 9 0 0 1 20 23"
        stroke="white"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <text
        x="16"
        y="21.5"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="white"
        fontFamily="var(--font-sans, sans-serif)"
      >
        $
      </text>
    </svg>
  );
}
