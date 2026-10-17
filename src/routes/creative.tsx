import { createFileRoute } from "@tanstack/react-router";
import { profile, crochetGallery } from "@/content/portfolio";
import { PhotoCard } from "@/components/portfolio/Placeholder";
import { Section, NextPage } from "@/components/portfolio/SiteLayout";

export const Route = createFileRoute("/creative")({
  head: () => ({
    meta: [
      { title: "Creative side — Hrishita Panda" },
      { name: "description", content: "Handmade crochet pieces by Hrishita — lilies, keychains, pouches and more." },
      { property: "og:title", content: "Creative side — Hrishita Panda" },
      { property: "og:description", content: "Handmade crochet pieces by Hrishita — lilies, keychains, pouches and more." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
        {/* Creative */}
        <Section id="creative" eyebrow="my creative side" title="Made With My Hands, Not Just My Code" className="bg-lavender/30">
          <p className="-mt-6 mb-6 max-w-2xl text-lg">When I'm not coding, I'm usually creating something in a completely different way. Crocheting, arts, and crafts let me slow down, experiment with colors and textures, and turn simple materials into something unique.</p>
          <a href={profile.shop} target="_blank" rel="noreferrer" className="lift mb-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-soft">Visit my crochet shop ♡</a>
          <div className="columns-2 gap-5 md:columns-3">
            {crochetGallery.map((g, i) => <PhotoCard key={i} item={g} i={i} />)}
          </div>
        </Section>
      <NextPage to="/sports" />
    </>
  );
}
