import Image from "next/image";
import Link from "next/link";

export function Logo({
  href,
  textClassName = "font-sans text-headline-md font-extrabold text-primary",
}: {
  href?: string;
  textClassName?: string;
}) {
  const content = (
    <>
      <Image
        src="/icm-logo.png"
        alt="ICM.FUN"
        width={32}
        height={32}
        className="w-8 h-8 object-contain"
      />
      <span className={textClassName}>ICM.FUN</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="flex items-center gap-2">
        {content}
      </Link>
    );
  }

  return <div className="flex items-center gap-2">{content}</div>;
}
