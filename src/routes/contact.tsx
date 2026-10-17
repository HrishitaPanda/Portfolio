import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { profile } from "@/content/portfolio";
import { Section, NextPage } from "@/components/portfolio/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hrishita Panda" },
      { name: "description", content: "Get in touch with Hrishita Panda — email, LinkedIn or GitHub." },
      { property: "og:title", content: "Contact — Hrishita Panda" },
      { property: "og:description", content: "Get in touch with Hrishita Panda — email, LinkedIn or GitHub." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

function Page() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = encodeURIComponent(`${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Hello from your portfolio")}&body=${body}`;
    setSent(true);
  };
  return (
    <>
        {/* Contact */}
        <Section id="contact" eyebrow="say hello" title="Have an Idea? Let's Make Something!">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-lg leading-relaxed">I'm always excited to explore new ideas, build interesting projects, meet creative people, and learn something new. Whether it's a tech project, a collaboration, or just a conversation, I'd love to connect.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}`} className="lift inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-primary-foreground"><Mail className="h-4 w-4" aria-hidden /> Email me</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="lift inline-flex items-center gap-2 rounded-full border-2 px-5 py-3"><Linkedin className="h-4 w-4" aria-hidden /> LinkedIn</a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="lift inline-flex items-center gap-2 rounded-full border-2 px-5 py-3"><Github className="h-4 w-4" aria-hidden /> GitHub</a>
              </div>
            </div>
            <form onSubmit={submit} className="tape space-y-4 rounded-3xl bg-card p-7 shadow-soft">
              {[["name", "Your name", "text"], ["email", "Your email", "email"]].map(([n, l, t]) => (
                <label key={n} className="block text-sm font-medium">{l}
                  <input required name={n} type={t} className="mt-1 w-full rounded-xl border bg-background px-4 py-2.5 focus:outline-2 focus:outline-ring" />
                </label>
              ))}
              <label className="block text-sm font-medium">Message
                <textarea required name="message" rows={4} className="mt-1 w-full rounded-xl border bg-background px-4 py-2.5 focus:outline-2 focus:outline-ring" />
              </label>
              <button className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground hover:opacity-90"><Send className="h-4 w-4" aria-hidden /> Send message</button>
              {sent && <p className="font-hand text-xl text-primary">your email app should open now ♡</p>}
            </form>
          </div>
        </Section>
    </>
  );
}
