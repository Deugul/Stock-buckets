export function riskLabel(riskTier: string | null): string {
  if (!riskTier) return "Unrated";
  return riskTier.split(".")[0].trim();
}

export const riskBadgeClass: Record<string, string> = {
  Moderate: "bg-green-50 text-green-600 border border-green-100",
  "Moderate-high": "bg-surface-container",
  High: "bg-red-50 text-red-600 border border-red-100",
  Unrated: "bg-surface-container text-on-surface-variant",
};
