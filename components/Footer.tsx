import Link from "next/link";

const legalLinks = [
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms and Conditions" },
] as const;

export default function Footer() {
  return (
    <footer className="glass-panel mt-4 border-t border-yellow-500/25 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <nav aria-label="Legal">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-[#FFD700] transition-colors hover:text-[#fff8dc]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-6 text-sm text-zinc-400">
          &copy; {new Date().getFullYear()} Canada Casino Guide. All rights
          reserved.
        </p>
        <p className="mt-3 text-xs leading-relaxed text-zinc-500">
          Gambling involves risk. Please play responsibly. 19+ in most Canadian
          provinces. This site contains affiliate links.
        </p>
      </div>
    </footer>
  );
}
