import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/content/portfolio";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { Section, NextPage } from "@/components/portfolio/SiteLayout";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Hrishita Panda" },
      { name: "description", content: "Featured projects built solo by Hrishita Panda: AI, disaster management and threat analysis." },
      { property: "og:title", content: "Projects — Hrishita Panda" },
      { property: "og:description", content: "Featured projects built solo by Hrishita Panda: AI, disaster management and threat analysis." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
        {/* Projects */}
        <Section id="projects" eyebrow="things I've built" title="Featured Projects">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => <ProjectCard key={p.name} project={p} />)}
          </div>
        </Section>
      <NextPage to="/creative" />
    </>
  );
}
