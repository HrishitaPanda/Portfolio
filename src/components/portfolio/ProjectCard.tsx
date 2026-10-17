import { useState } from "react";
import { ChevronDown, Github, ExternalLink, Code2 } from "lucide-react";
import type { Project } from "@/content/portfolio";

const tintBg = { lavender: "bg-lavender", blush: "bg-blush", sage: "bg-sage" } as const;

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const id = project.name.replace(/\W+/g, "-").toLowerCase();
  return (
    <article className="lift flex flex-col overflow-hidden rounded-3xl border bg-card shadow-soft">
      {project.image ? (
        <img src={project.image} alt={`${project.name} screenshot`} loading="lazy" className="aspect-video w-full object-cover" />
      ) : (
        <div className={`flex aspect-video items-center justify-center ${tintBg[project.tint]}`} role="img" aria-label="Project screenshot placeholder">
          <Code2 className="h-12 w-12 text-foreground/40" aria-hidden />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="text-2xl leading-tight">{project.name}</h3>
        <p className="text-muted-foreground">{project.description}</p>
        <ul className="flex flex-wrap gap-2" aria-label="Technologies">
          {project.tech.map((t) => (
            <li key={t} className="rounded-full bg-muted px-3 py-1 text-xs font-medium">{t}</li>
          ))}
        </ul>
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={id}
          className="mt-auto inline-flex items-center gap-1 self-start text-sm font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-ring"
        >
          {open ? "Show less" : "Read more"}
          <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
        </button>
        {open && (
          <div id={id} className="fade-up space-y-3 border-t pt-4 text-sm">
            <p><strong>Problem it solves:</strong> {project.problem}</p>
            <div>
              <strong>Highlights:</strong>
              <ul className="mt-1 list-disc space-y-1 pl-5">
                {project.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </div>
            <p><strong>My role:</strong> {project.role}</p>
          </div>
        )}
        {(project.github || project.demo) && (
          <div className="flex gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full border px-4 py-2 text-sm hover:bg-muted">
                <Github className="h-4 w-4" aria-hidden /> GitHub
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground">
                <ExternalLink className="h-4 w-4" aria-hidden /> Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
