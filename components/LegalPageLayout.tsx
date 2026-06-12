import Link from "next/link";
import Footer from "@/components/Footer";

interface LegalPageLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({
  title,
  description,
  children,
}: LegalPageLayoutProps) {
  return (
    <>
      <main className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#FFD700] transition-colors hover:text-[#fff8dc]"
          >
            <span aria-hidden="true">&larr;</span>
            Back to Top Casinos
          </Link>

          <header className="mb-8 text-center sm:mb-10">
            <h1 className="heading-glow font-[family-name:var(--font-playfair)] text-3xl font-bold sm:text-4xl">
              {title}
            </h1>
            <p className="description-glow mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
              {description}
            </p>
          </header>

          <article className="glass-panel rounded-2xl px-6 py-8 sm:px-8 sm:py-10">
            <div className="legal-content space-y-6 text-sm leading-relaxed text-zinc-300 sm:text-base sm:leading-7">
              {children}
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
