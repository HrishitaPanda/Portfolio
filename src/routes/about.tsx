import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import portrait from "@/assets/hrishita-portrait.jpg.asset.json";
import { profile } from "@/content/portfolio";
import { Section, NextPage } from "@/components/portfolio/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About me — Hrishita Panda" },
      { name: "description", content: "Who Hrishita is — a 21-year-old CS student who codes, crochets and plays." },
      { property: "og:title", content: "About me — Hrishita Panda" },
      { property: "og:description", content: "Who Hrishita is — a 21-year-old CS student who codes, crochets and plays." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
        {/* About */}
        <Section id="about" eyebrow="hello everyone!" title="A little about me">
          <div className="grid gap-10 md:grid-cols-5">
            <div className="space-y-5 text-lg leading-relaxed md:col-span-3">
              <p>I'm {profile.name}, a {profile.age}-year-old Computer Science student. Over the past three years I've gone from writing my first small programs to building full applications — and I've loved every curious, messy, rewarding step of it.</p>
              <p>What excites me most is experimenting: picking up a new technology, poking at it, and turning an idea into something that actually works. I'm a hands-on problem solver — I learn best by building.</p>
              <p>That same instinct follows me away from the screen. Crochet, arts and crafts are where I play with colours and textures, and sports keep me active and grounded. I enjoy working with a team just as much as getting lost in my own creative projects.</p>
            </div>
            <div className="space-y-5 md:col-span-2">
              <img src={portrait.url} width={960} height={1280} alt="Hrishita Panda smiling in a blue embroidered shirt" className="rotate-1 rounded-[2rem] shadow-lift" />
            </div>
            <ul className="grid content-start gap-3 md:col-span-3">
              {["Curious & eager to learn", "Creative & imaginative", "Hands-on problem solver", "Loves experimenting & building", "Team player & independent creator"].map((q, i) => (
                <li key={q} className={`flex items-center gap-3 rounded-2xl p-4 shadow-soft ${["bg-lavender/60", "bg-blush/60", "bg-sage/60"][i % 3]}`}>
                  <Sparkles className="h-4 w-4 shrink-0 text-primary" aria-hidden /> {q}
                </li>
              ))}
            </ul>
          </div>
        </Section>
      <NextPage to="/skills" />
    </>
  );
}
