export default function AboutCasinos() {
  return (
    <section
      aria-labelledby="about-heading"
      className="section-below-fold px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="about-heading"
          className="heading-glow mb-8 text-center font-[family-name:var(--font-playfair)] text-3xl font-bold sm:mb-10 sm:text-4xl"
        >
          About The Casino
        </h2>

        <article className="glass-panel rounded-2xl px-6 py-8 sm:px-8 sm:py-10">
          <p className="text-sm leading-relaxed text-zinc-300 sm:text-base sm:leading-7">
            A casino is a luxurious facility designed for high stakes gaming and
            worldclass entertainment. Frequently combined with premium hotels,
            gourmet restaurants, and elite resorts, they create an
            all encompassing getaway. From vibrant gaming floors to upscale
            retail shopping, casinos offer an unforgettable escape for travelers
            worldwide.
          </p>
          <p className="mt-5 text-sm leading-relaxed text-zinc-300 sm:mt-6 sm:text-base sm:leading-7">
            A casino is a premier entertainment destination dedicated to
            exciting gaming and gambling. Often integrated with luxury hotels,
            world-class resorts, and fine dining, they offer a complete immersive
            experience. Beyond the gaming floor, casinos feature exclusive
            retail shopping and live entertainment, making them top tourist
            attractions.
          </p>
        </article>
      </div>
    </section>
  );
}
