const reviews = [
  {
    name: "Marcus V.",
    role: "VIP Member",
    text: "Claimed my 100 free spins within minutes of signing up. The roulette tables feel like a real Vegas high limit room smooth, fast, and incredibly polished.",
  },
  {
    name: "Elena R.",
    role: "Slots Enthusiast",
    text: "I've played at dozens of online casinos, but nothing compares to this VIP experience. Withdrawals hit my wallet in under 24 hours. Absolutely trustworthy.",
  },
  {
    name: "James T.",
    role: "Blackjack Player",
    text: "The blackjack tables are flawless. Clean interface, fair play, and the 3-to-2 payouts are exactly as advertised. This is my go to casino now.",
  },
  {
    name: "Sophie L.",
    role: "Baccarat Regular",
    text: "The Baccarat tables are stunning  elegant design, instant deposits, and a lounge atmosphere that feels genuinely premium. I keep coming back.",
  },
  {
    name: "David K.",
    role: "Crypto Player",
    text: "Cashed out in USDT with zero hassle. Crypto withdrawals are fast, and the live bets feed is always sharp. Perfect for serious crypto players.",
  },
  {
    name: "Amira H.",
    role: "New Player",
    text: "As a new player, the how-to guide made everything simple. I claimed my free spins bonus on day one and was playing within minutes. Great first impression.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className="h-4 w-4 text-[#FFD700]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function PlayerReviews() {
  return (
    <section
      aria-labelledby="reviews-heading"
      className="section-below-fold px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 text-center sm:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Player Reviews
          </p>
          <h2
            id="reviews-heading"
            className="heading-glow font-[family-name:var(--font-playfair)] text-3xl font-bold sm:text-4xl"
          >
            What Players Say
          </h2>
          <p className="description-glow mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base sm:leading-7">
            Trusted by thousands of VIP players worldwide. Here&apos;s what our
            community has to say about their experience.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="glass-panel relative flex flex-col rounded-2xl p-6"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <Stars />
                <span
                  className="font-[family-name:var(--font-playfair)] text-3xl leading-none text-[#D4AF37]/60"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
              </div>

              <blockquote className="flex-1 text-sm leading-relaxed text-zinc-300 sm:text-[0.9375rem] sm:leading-7">
                <p>&ldquo;{review.text}&rdquo;</p>
              </blockquote>

              <footer className="mt-6 border-t border-yellow-500/15 pt-4">
                <cite className="not-italic">
                  <span className="block font-[family-name:var(--font-playfair)] text-base font-bold text-[#FFD700]">
                    {review.name}
                  </span>
                  <span className="mt-1 block text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                    {review.role}
                  </span>
                </cite>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
