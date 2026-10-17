import { createFileRoute } from "@tanstack/react-router";
import { Scissors, Trophy, Palette, Heart } from "lucide-react";
import { skills } from "@/content/portfolio";
import { Section, NextPage } from "@/components/portfolio/SiteLayout";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Hrishita Panda" },
      { name: "description", content: "Languages, frameworks, databases and tools Hrishita works with." },
      { property: "og:title", content: "Skills — Hrishita Panda" },
      { property: "og:description", content: "Languages, frameworks, databases and tools Hrishita works with." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
        {/* Skills */}
        <Section id="skills" eyebrow="skills & interests" title="What I Work With" className="bg-card/60">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([cat, list]) => (
              <div key={cat} className="lift rounded-2xl border bg-card p-6 shadow-soft">
                <h3 className="text-xl">{cat}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {list.map((s) => <li key={s} className="rounded-full bg-lavender/60 px-3 py-1 text-sm">{s}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <h3 className="mt-16 text-3xl">Beyond the Screen</h3>
          <ul className="mt-6 grid grid-cols-2 gap-5 md:grid-cols-4">
            {[[Scissors, "Crochet", "bg-blush/70"], [Palette, "Arts & Crafts", "bg-lavender/70"], [Trophy, "Sports", "bg-sage/70"], [Heart, "Creative experiments", "bg-blush/50"]].map(([Icon, label, bg], i) => {
              const I = Icon as typeof Heart;
              return (
                <li key={label as string} className={`lift flex flex-col items-center gap-3 rounded-3xl p-6 text-center shadow-soft ${bg} ${i % 2 ? "rotate-1" : "-rotate-1"}`}>
                  <I className="h-8 w-8" aria-hidden />
                  <span className="font-hand text-2xl">{label as string}</span>
                </li>
              );
            })}
          </ul>
        </Section>
      <NextPage to="/projects" />
    </>
  );
}
