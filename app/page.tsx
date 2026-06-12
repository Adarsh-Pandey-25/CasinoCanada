import Hero from "@/components/Hero";
import CasinoCard, { type Casino } from "@/components/CasinoCard";
import AboutCasinos from "@/components/AboutCasinos";
import FAQ from "@/components/FAQ";
import PlayerReviews from "@/components/PlayerReviews";
import Footer from "@/components/Footer";
import PlayerCountsUpdater from "@/components/PlayerCountsUpdater";

const casinos: Casino[] = [
  {
    id: 1,
    name: "Casino Slots",
    logoSrc: "/casino-logo-1.png",
    basePlayerCount: 1450,
    bonus: "200+ Free Spins",
    rating: 10,
    affiliateUrl: "#",
    badge: "Top Pick",
  },
  {
    id: 2,
    name: "Casino",
    logoSrc: "/casino-logo-2.png",
    basePlayerCount: 1280,
    bonus: "200+ Free Spins",
    rating: 9.9,
    affiliateUrl: "#",
  },
  {
    id: 3,
    name: "Casino",
    logoSrc: "/casino-logo-3.png",
    basePlayerCount: 1120,
    bonus: "200+ Free Spins",
    rating: 9.7,
    affiliateUrl: "#",
  },
  {
    id: 4,
    name: "Joker",
    logoSrc: "/casino-logo-4.png",
    basePlayerCount: 960,
    bonus: "200+ Free Spins",
    rating: 9.6,
    affiliateUrl: "#",
  },
  {
    id: 5,
    name: "Casino",
    logoSrc: "/casino-logo-5.png",
    basePlayerCount: 800,
    bonus: "200+ Free Spins",
    rating: 9.5,
    affiliateUrl: "#",
  },
];

export default function Home() {
  return (
    <>
      <main>
        <Hero />

        <section
          aria-labelledby="casinos-heading"
          className="px-4 pb-16 pt-2 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-5xl">
            <h2 id="casinos-heading" className="sr-only">
              Top Rated Canadian Online Casinos
            </h2>
            <div className="casinos-list flex flex-col gap-6">
              {casinos.map((casino, index) => (
                <CasinoCard key={casino.id} casino={casino} index={index} />
              ))}
            </div>
            <PlayerCountsUpdater
              casinos={casinos.map((c) => ({
                id: c.id,
                basePlayerCount: c.basePlayerCount,
              }))}
            />
          </div>
        </section>

        <AboutCasinos />

        <FAQ />

        <PlayerReviews />
      </main>

      <Footer />
    </>
  );
}
