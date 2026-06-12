import Image from "next/image";
import StaticPlayerCount from "@/components/StaticPlayerCount";
import StarRating from "@/components/StarRating";

export interface Casino {
  id: number;
  name: string;
  logoSrc: string;
  basePlayerCount: number;
  bonus: string;
  rating: number;
  affiliateUrl: string;
  badge?: string;
}

interface CasinoCardProps {
  casino: Casino;
  index: number;
}

export default function CasinoCard({ casino, index }: CasinoCardProps) {
  const isTopOffer = index < 3;

  return (
    <article
      className="card-enter group relative"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {casino.badge && (
        <div className="absolute -top-3 left-6 z-10">
          <span className="badge-shimmer inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider text-black shadow-[0_0_20px_rgba(255,215,0,0.8)]">
            {casino.badge}
          </span>
        </div>
      )}

      {isTopOffer ? (
        <div className="card-glow-border">
          <div className="card-glow-border__trail" aria-hidden="true" />
          <CardContent casino={casino} isTopOffer />
        </div>
      ) : (
        <CardContent casino={casino} isTopOffer={false} />
      )}
    </article>
  );
}

function CardContent({
  casino,
  isTopOffer,
}: {
  casino: Casino;
  isTopOffer: boolean;
}) {
  return (
    <div
      className={`glass-panel glass-panel-hover relative flex flex-col gap-5 rounded-2xl p-5 sm:flex-row sm:items-center sm:gap-4 sm:p-6 lg:gap-6 ${
        isTopOffer ? "card-glow-border__inner" : ""
      }`}
    >
      <div className="flex shrink-0 items-center justify-center sm:w-44">
        <div className="logo-pod">
          <Image
            src={casino.logoSrc}
            alt={`${casino.name} logo`}
            width={160}
            height={64}
            sizes="160px"
            className="logo-pod__image h-auto max-h-14 w-auto max-w-[140px] object-contain"
          />
        </div>
      </div>

      <div className="flex shrink-0 items-center sm:w-44">
        <StaticPlayerCount
          casinoId={casino.id}
          count={casino.basePlayerCount}
        />
      </div>

      <div className="flex flex-1 items-center sm:justify-center">
        <p className="text-lg font-bold text-[#FFD700] sm:text-xl">
          {casino.bonus}
        </p>
      </div>

      <div className="flex shrink-0 items-center justify-center sm:w-32">
        <StarRating rating={casino.rating} idPrefix={`casino-${casino.id}`} />
      </div>

      <div className="flex shrink-0 sm:w-36">
        <a
          href={casino.affiliateUrl}
          target="_blank"
          rel="nofollow sponsored"
          className="block w-full rounded-xl bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-black shadow-[0_0_20px_rgba(255,215,0,0.5)] transition-transform duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.7)] active:scale-100"
        >
          Play Now
        </a>
      </div>
    </div>
  );
}
