export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-12 lg:px-8"
    >
      <div className="relative mx-auto max-w-3xl text-center">
        <h1
          id="hero-heading"
          className="heading-glow font-[family-name:var(--font-playfair)] text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
        >
          Top Casinos in Canada
        </h1>

        <p className="description-glow mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-100 sm:mt-5 sm:text-base sm:leading-7">
          Compare Canada&apos;s highest-rated casinos with exclusive bonuses and
          lightning-fast payouts.
        </p>
      </div>
    </section>
  );
}
