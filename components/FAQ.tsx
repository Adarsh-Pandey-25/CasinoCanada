const faqs = [
  {
    question: "Is Casino free to use?",
    answer:
      "Yes. Our service is 100% free for players. Never costs you extra or affects your bonus amount.",
  },
  {
    question: "Are the casinos listed safe?",
    answer:
      "Every casino we recommend holds a valid gambling license (such as MGA, UKGC, Curacao eGaming, or Anjouan). We verify licensing, encryption standards, and complaint history before featuring any operator.",
  },
  {
    question: "Can I trust your casino ratings?",
    answer:
      "Yes. Our reviews are independent and based on hands-on testing. Casinos cannot pay us for a higher rating. If a brand performs poorly, we say so.",
  },
  {
    question: "Do you recommend crypto casinos?",
    answer:
      "We review both fiat and crypto casinos. Crypto casinos often offer faster withdrawals and provably fair games, but you should only play on licensed platforms. We clearly label which sites accept Bitcoin, Ethereum, USDT, and other coins.",
  },
  {
    question: "How long do casino withdrawals take?",
    answer:
      "It depends on the method. Crypto withdrawals are often instant to 24 hours. E-wallets like Skrill or Neteller take 24–48 hours. Bank transfers and cards can take 3–7 business days. We list withdrawal speeds in every review.",
  },
];

export default function FAQ() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="section-below-fold px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="faq-heading"
          className="heading-glow mb-10 text-center font-[family-name:var(--font-playfair)] text-3xl font-bold sm:text-4xl"
        >
          Frequently Asked Questions
        </h2>

        <div className="glass-panel overflow-hidden rounded-2xl">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="faq-item group border-b border-yellow-500/10 last:border-b-0"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-black/30 [&::-webkit-details-marker]:hidden">
                <span className="text-base font-semibold text-white sm:text-lg">
                  {faq.question}
                </span>
                <span
                  className="faq-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-yellow-500/40 bg-yellow-500/10 text-xl font-light leading-none text-yellow-400 transition-transform duration-200"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="faq-answer">
                <p className="px-6 pb-5 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
