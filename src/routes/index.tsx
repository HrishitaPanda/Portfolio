import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/hrishita-portrait.jpg.asset.json";
import { profile } from "@/content/portfolio";
import { NextPage } from "@/components/portfolio/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hrishita Panda — Creative Technologist & CS Student" },
      { name: "description", content: "Portfolio of Hrishita Panda: Computer Science student, developer, crochet lover and sports enthusiast." },
      { property: "og:title", content: "Hrishita Panda — Creative Technologist" },
      { property: "og:description", content: "Code a little. Create a little. Play a little. Repeat." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
        {/* Hero */}
        <section id="top" className="px-5 pb-16 pt-14 md:pt-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
            <div className="fade-up">
              <p className="font-hand text-2xl text-primary">Code a little. Create a little. Play a little. Repeat.</p>
              <h1 className="mt-3 text-5xl leading-[1.05] md:text-7xl">Hi, I'm <em className="text-primary">{profile.firstName}!</em></h1>
              <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Computer Science Student · Developer · Crochet Lover · Sports Enthusiast
              </p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed">
                I'm a Computer Science student who loves turning ideas into projects, experimenting with technology, and creating things with my hands. Whether I'm building software, crocheting something from scratch, or spending time on the court, I enjoy learning, creating, and trying something new.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/projects" className="lift rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-soft">Explore My Projects</Link>
                <Link to="/contact" className="lift rounded-full border-2 border-foreground/80 px-6 py-3 font-medium">Get in Touch</Link>
              </div>
            </div>
            <div className="relative fade-up">
              <div className="absolute -inset-4 -rotate-3 rounded-[2rem] bg-blush/60" aria-hidden />
              <img src={portrait.url} width={960} height={1280} alt="Hrishita Panda smiling in a blue embroidered shirt" className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-lift" />
              <span className="absolute -bottom-5 -left-3 rotate-[-6deg] rounded-xl bg-sage px-4 py-2 font-hand text-xl shadow-soft">creative technologist ✿</span>
            </div>
          </div>
        </section>
      <NextPage to="/about" />
    </>
  );
}
