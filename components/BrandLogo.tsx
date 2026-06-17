import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  /** Tailwind height/sizing utilities, e.g. "h-24 sm:h-28 lg:h-32". */
  className?: string;
}

export default function BrandLogo({ className }: BrandLogoProps) {
  return (
    <Link
      href="/"
      aria-label="Spin Win Wave — Home"
      className="inline-flex shrink-0 transition-transform duration-200 hover:scale-[1.03]"
    >
      <Image
        src="/spin-win-wave-logo.png"
        alt="Spin Win Wave"
        width={600}
        height={476}
        sizes="(max-width: 640px) 112px, (max-width: 1024px) 128px, 160px"
        loading="eager"
        className={`brand-logo w-auto ${className ?? ""}`}
      />
    </Link>
  );
}
