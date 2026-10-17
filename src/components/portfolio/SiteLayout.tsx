import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { profile } from "@/content/portfolio";

export const nav = [
  ["Home", "/"], ["About", "/about"], ["Skills", "/skills"], ["Projects", "/projects"],
  ["Creative", "/creative"], ["Sports", "/sports"], ["Contact", "/contact"],
] as const;

export function Section({ id, eyebrow, title, children, className = "" }: { id: string; eyebrow: string; title: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`px-5 py-16 md:py-24 fade-up ${className}`}>
      <div className="mx-auto max-w-6xl">
        <p className="font-hand text-2xl text-primary">{eyebrow}</p>
        <h1 className="mt-1 max-w-3xl text-4xl leading-tight md:text-5xl">{title}</h1>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

export function NextPage({ to }: { to: string }) {
  const label = nav.find(([, p]) => p === to)?.[0] ?? "Next";
  return (
    <div className="px-5 pb-16 text-center">
      <Link to={to} className="lift inline-flex items-center gap-2 rounded-full border-2 border-foreground/80 px-6 py-3 font-hand text-2xl">
        next: {label.toLowerCase()} <ArrowRight className="h-5 w-5" aria-hidden />
      </Link>
    </div>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [menu, setMenu] = useState(false);
  const linkCls = "rounded-full px-3 py-1.5 hover:text-primary";
  const active = { className: "bg-lavender/70 text-foreground" };
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4" aria-label="Main">
          <Link to="/" className="font-serif text-xl italic">hrishita<span className="text-primary">.</span></Link>
          <ul className="hidden gap-1 text-sm lg:flex">
            {nav.map(([l, p]) => <li key={p}><Link to={p} className={linkCls} activeProps={active} activeOptions={{ exact: true }}>{l}</Link></li>)}
          </ul>
          <button className="lg:hidden" onClick={() => setMenu(!menu)} aria-label="Toggle menu" aria-expanded={menu}>
            {menu ? <X /> : <Menu />}
          </button>
        </nav>
        {menu && (
          <ul className="flex flex-col gap-1 border-t px-5 py-4 lg:hidden">
            {nav.map(([l, p]) => <li key={p}><Link to={p} onClick={() => setMenu(false)} className={`block ${linkCls}`} activeProps={active} activeOptions={{ exact: true }}>{l}</Link></li>)}
          </ul>
        )}
      </header>
      <main id="main" className="flex-1">{children}</main>
      <footer className="border-t px-5 py-8 text-center text-sm text-muted-foreground">
        made with code, yarn & a little glitter · © {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  );
}
