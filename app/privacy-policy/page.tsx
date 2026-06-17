import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Canada Casino Guide",
  description:
    "Canada Casino Guide privacy policy. Learn how we collect, use, and protect your information when you visit our Canadian online casino comparison website.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      description="How Canada Casino Guide handles your data when you browse our casino reviews and affiliate recommendations."
      showLogo={false}
    >
      <section>
        <h2 className="text-gold-solid mb-3 font-[family-name:var(--font-playfair)] text-xl font-bold">
          Who We Are
        </h2>
        <p>
          Canada Casino Guide (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
          operates an informational website that compares licensed online
          casinos available to Canadian players. This policy explains what data
          we collect and how we use it.
        </p>
      </section>

      <section>
        <h2 className="text-gold-solid mb-3 font-[family-name:var(--font-playfair)] text-xl font-bold">
          Information We Collect
        </h2>
        <p>
          We may collect limited technical data when you visit our site,
          including your IP address, browser type, device information, pages
          viewed, and referring URL. If you contact us by email, we collect the
          information you voluntarily provide.
        </p>
      </section>

      <section>
        <h2 className="text-gold-solid mb-3 font-[family-name:var(--font-playfair)] text-xl font-bold">
          Cookies and Analytics
        </h2>
        <p>
          We may use cookies and similar technologies to improve site
          performance, remember preferences, and understand how visitors use
          our content. You can control cookies through your browser settings.
          Disabling cookies may affect certain site features.
        </p>
      </section>

      <section>
        <h2 className="text-gold-solid mb-3 font-[family-name:var(--font-playfair)] text-xl font-bold">
          Affiliate Links and Third Parties
        </h2>
        <p>
          When you click an affiliate link to a casino operator, you leave our
          website and are subject to that operator&apos;s privacy policy. We do
          not control how third parties collect or process your personal data.
          Review their policies before creating an account or depositing funds.
        </p>
      </section>

      <section>
        <h2 className="text-gold-solid mb-3 font-[family-name:var(--font-playfair)] text-xl font-bold">
          How We Use Your Information
        </h2>
        <p>
          We use collected data to operate and improve the website, analyze
          traffic patterns, prevent abuse, and comply with legal obligations.
          We do not sell your personal information to third parties.
        </p>
      </section>

      <section>
        <h2 className="text-gold-solid mb-3 font-[family-name:var(--font-playfair)] text-xl font-bold">
          Data Retention and Security
        </h2>
        <p>
          We retain information only as long as necessary for the purposes
          described in this policy. We implement reasonable technical and
          organizational measures to protect data, though no online transmission
          is completely secure.
        </p>
      </section>

      <section>
        <h2 className="text-gold-solid mb-3 font-[family-name:var(--font-playfair)] text-xl font-bold">
          Your Rights
        </h2>
        <p>
          Depending on your province, you may have rights to access, correct, or
          request deletion of personal information we hold. Canadian residents
          are protected under applicable privacy legislation including PIPEDA
          where it applies. Contact us to exercise your rights.
        </p>
      </section>

      <section>
        <h2 className="text-gold-solid mb-3 font-[family-name:var(--font-playfair)] text-xl font-bold">
          Updates to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated effective date. Continued use of
          the site after changes constitutes acceptance of the revised policy.
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
