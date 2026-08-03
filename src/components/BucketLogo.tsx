import Image from "next/image";

const imageBySlug: Record<string, string> = {
  "us-market-leaders": "/Bucket%20icons/14.png",
  "magnificent-technology": "/Bucket%20icons/13.png",
  "ai-and-semiconductors": "/Bucket%20icons/15.png",
  "digital-finance": "/Bucket%20icons/16.png",
  "global-innovation-and-industry": "/Bucket%20icons/17.png",
  "pump-fun-ecosystem": "/Bucket%20icons/18.png",
  "pump-fund-builders-index": "/Bucket%20icons/19.png",
};

export function BucketLogo({
  slug,
  className = "w-10 h-10",
}: {
  slug: string;
  className?: string;
}) {
  const src = imageBySlug[slug];

  if (!src) {
    return (
      <div
        className={`rounded-full bg-surface-container-low shrink-0 ${className}`}
      />
    );
  }

  return (
    <Image
      src={src}
      alt=""
      width={64}
      height={64}
      className={`rounded-full object-cover shrink-0 ${className}`}
    />
  );
}
