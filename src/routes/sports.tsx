import { createFileRoute } from "@tanstack/react-router";
import { Trophy } from "lucide-react";
import { sports, sportsPhotos } from "@/content/portfolio";
import { Section, NextPage } from "@/components/portfolio/SiteLayout";
import { PhotoCard } from "@/components/portfolio/Placeholder";

export const Route = createFileRoute("/sports")({
  head: () => ({
    meta: [
      { title: "Sports — Hrishita Panda" },
      { name: "description", content: "Badminton and basketball — how Hrishita stays active." },
      { property: "og:title", content: "Sports — Hrishita Panda" },
      { property: "og:description", content: "Badminton and basketball — how Hrishita stays active." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
        {/* Sports */}
        <Section id="sports" eyebrow="sports & staying active" title="Different Field, Same Passion">
          <div className="grid gap-10 max-w-3xl">
            <div className="rounded-3xl bg-sage/60 p-8 shadow-soft">
              <Trophy className="h-8 w-8 text-primary" aria-hidden />
              <p className="mt-4 text-lg leading-relaxed">{sports.about}</p>
              <p className="mt-6 font-hand text-2xl">sports I love</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {sports.favorites.map((s) => <li key={s} className="rounded-full bg-card px-4 py-1.5 text-sm shadow-soft">{s}</li>)}
              </ul>
            </div>
          </div>
        </Section>
      <div className="mx-auto max-w-6xl px-5 pb-16">
        <p className="font-hand text-2xl text-primary">from the court</p>
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sportsPhotos.map((item, i) => <PhotoCard key={item.caption} item={item} i={i} />)}
        </div>
      </div>
      <NextPage to="/contact" />
    </>
  );
}
