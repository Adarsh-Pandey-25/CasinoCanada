import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms and Conditions | Canada Casino Guide",
  description:
    "Terms and conditions for using Canada Casino Guide. Read the rules governing access to our Canadian online casino reviews, ratings, and affiliate content.",
  alternates: { canonical: "/terms-and-conditions" },
  robots: { index: true, follow: true },
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout
      title="Terms and Conditions"
      description="Please read these terms carefully before using Canada Casino Guide and our casino comparison services."
    >
      <section>
        <h2 className="text-gold-solid mb-3 font-[family-name:var(--font-playfair)] text-xl font-bold">
          Acceptance of Terms
        </h2>
        <p>
          By accessing or using Canada Casino Guide, you agree to be bound by
          these Terms and Conditions. If you do not agree, please do not use
          this website. We may update these terms at any time; your continued
          use constitutes acceptance of changes.
        </p>
      </section>

      <section>
        <h2 className="text-gold-solid mb-3 font-[family-name:var(--font-playfair)] text-xl font-bold">
          Eligibility
        </h2>
        <p>
          This website is intended for adults who are legally permitted to
          access online gambling information in their jurisdiction. You must
          meet the minimum legal gambling age in your province or territory
          (typically 19+, or 18+ where applicable) to use casino services
          linked from this site.
        </p>
      </section>

      <section>
        <h2 className="text-gold-solid mb-3 font-[family-name:var(--font-playfair)] text-xl font-bold">
          Nature of Our Service
        </h2>
        <p>
          Canada Casino Guide provides reviews, comparisons, and educational
          content about online casinos serving Canadian players. We are an
          affiliate marketing website, not a casino operator. All gambling
          transactions occur directly between you and the licensed operator you
          choose.
        </p>
      </section>

      <section>
        <h2 className="text-gold-solid mb-3 font-[family-name:var(--font-playfair)] text-xl font-bold">
          Intellectual Property
        </h2>
        <p>
          All content on this website — including text, graphics, logos, and
          layout — is owned by or licensed to Canada Casino Guide and protected
          by copyright laws. You may not reproduce, distribute, or commercially
          exploit our content without prior written permission.
        </p>
      </section>

      <section>
        <h2 className="text-gold-solid mb-3 font-[family-name:var(--font-playfair)] text-xl font-bold">
          User Conduct
        </h2>
        <p>
          You agree not to misuse the website, attempt unauthorized access,
          scrape content at scale, introduce malware, or use the site for any
          unlawful purpose. We reserve the right to restrict access to users
          who violate these terms.
        </p>
      </section>

      <section>
        <h2 className="text-gold-solid mb-3 font-[family-name:var(--font-playfair)] text-xl font-bold">
          Third-Party Links
        </h2>
        <p>
          Our site contains links to external casino operators and partners. We
          are not responsible for the content, policies, or practices of
          third-party websites. Your use of external sites is at your own risk
          and subject to their terms and conditions.
        </p>
      </section>

      <section>
        <h2 className="text-gold-solid mb-3 font-[family-name:var(--font-playfair)] text-xl font-bold">
          Disclaimer of Warranties
        </h2>
        <p>
          The website and all content are provided on an &quot;as is&quot; and
          &quot;as available&quot; basis without warranties of any kind, express
          or implied. We do not guarantee uninterrupted access, error-free
          content, or specific gambling outcomes.
        </p>
      </section>

      <section>
        <h2 className="text-gold-solid mb-3 font-[family-name:var(--font-playfair)] text-xl font-bold">
          Governing Law
        </h2>
        <p>
          These terms are governed by the laws of Canada and the applicable
          province in which disputes arise, without regard to conflict of law
          principles. Any disputes shall be resolved in the courts of competent
          jurisdiction in Canada.
        </p>
        <p className="mt-3 text-zinc-500">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-CA", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </section>
    </LegalPageLayout>
  );
}
