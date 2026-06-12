import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Disclaimer | Canada Casino Guide",
  description:
    "Read the Canada Casino Guide disclaimer. Learn about affiliate relationships, responsible gambling, and important limitations regarding our casino reviews and recommendations.",
  alternates: { canonical: "/disclaimer" },
  robots: { index: true, follow: true },
};

export default function DisclaimerPage() {
  return (
    <LegalPageLayout
      title="Disclaimer"
      description="Important information about how Canada Casino Guide operates, our affiliate relationships, and your use of this website."
    >
      <section>
        <h2 className="text-gold-solid mb-3 font-[family-name:var(--font-playfair)] text-xl font-bold">
          General Information
        </h2>
        <p>
          Canada Casino Guide is an independent affiliate and informational
          website. We are not a gambling operator and do not accept wagers,
          process payments, or manage player accounts. All casino services are
          provided by third-party licensed operators linked from this site.
        </p>
      </section>

      <section>
        <h2 className="text-gold-solid mb-3 font-[family-name:var(--font-playfair)] text-xl font-bold">
          Affiliate Disclosure
        </h2>
        <p>
          Some links on this website are affiliate links. If you register or
          deposit through these links, we may receive a commission at no extra
          cost to you. This does not influence our editorial standards — we
          only feature operators that meet our licensing, security, and fairness
          criteria.
        </p>
      </section>

      <section>
        <h2 className="text-gold-solid mb-3 font-[family-name:var(--font-playfair)] text-xl font-bold">
          Accuracy of Information
        </h2>
        <p>
          We strive to keep bonus offers, payout details, and casino information
          accurate and up to date. However, promotions change frequently.
          Always verify terms, wagering requirements, and eligibility directly
          on the operator&apos;s website before signing up or depositing.
        </p>
      </section>

      <section>
        <h2 className="text-gold-solid mb-3 font-[family-name:var(--font-playfair)] text-xl font-bold">
          Responsible Gambling
        </h2>
        <p>
          Gambling should be entertainment, not a source of income. Never wager
          more than you can afford to lose. If you or someone you know needs
          help, contact responsible gambling resources in your province such as
          ConnexOntario, Gambling Help Online, or your local support service.
          Players must be 19+ in most Canadian provinces (18+ in Alberta,
          Manitoba, and Quebec where applicable).
        </p>
      </section>

      <section>
        <h2 className="text-gold-solid mb-3 font-[family-name:var(--font-playfair)] text-xl font-bold">
          Limitation of Liability
        </h2>
        <p>
          Canada Casino Guide is provided &quot;as is&quot; without warranties of
          any kind. We are not liable for losses, disputes, or issues arising
          from your use of third-party casino websites. Your relationship is
          solely with the operator you choose to play with.
        </p>
      </section>
    </LegalPageLayout>
  );
}
