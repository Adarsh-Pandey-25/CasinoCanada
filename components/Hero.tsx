import BrandLogo from "@/components/BrandLogo";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-12 lg:px-8"
    >
      {/* Mobile: logo stacked above heading (unchanged). */}
      {/* sm/md: logo beside heading. lg+: logo pinned far-left, heading centered. */}
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:gap-8 sm:text-left lg:block lg:max-w-none lg:text-center">
        <div className="lg:absolute lg:left-8 lg:top-1/2 lg:-translate-y-1/2 xl:left-16 2xl:left-24">
          <BrandLogo className="h-24 sm:h-28 lg:h-28 xl:h-32" />
        </div>

        <div className="lg:mx-auto lg:max-w-2xl">
          <h1
            id="hero-heading"
            className="heading-glow font-[family-name:var(--font-playfair)] text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
          >
            Top Casinos in Canada
          </h1>

          <p className="description-glow mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-100 sm:mx-0 sm:mt-5 sm:text-base sm:leading-7 lg:mx-auto">
            Compare Canada&apos;s highest-rated casinos with exclusive bonuses and
            lightning-fast payouts.
          </p>
        </div>
      </div>
    </section>
  );
}
