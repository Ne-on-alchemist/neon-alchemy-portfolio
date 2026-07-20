import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Neon Alchemist — Websites That Turn Visitors Into Customers" },
      {
        name: "description",
        content:
          "Conversion-focused web designer for international clients. Strategic design and clean code that drives measurable results.",
      },
      { property: "og:title", content: "Neon Alchemist — Conversion-Focused Web Design" },
      {
        property: "og:description",
        content: "Strategic design and clean code for businesses that want results.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#0a0a0f]/80 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:py-6">
        <a href="#top" className="text-lg font-bold tracked cyan-text-glow" style={{ color: "#00f0ff" }}>
          Neon<span className="text-white/90">/</span>Alchemist
        </a>
        <div className="hidden items-center gap-10 md:flex">
          {[
            { href: "#work", label: "Work" },
            { href: "#about", label: "About" },
            { href: "#contact", label: "Contact" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracked text-white/70 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="group relative inline-flex items-center gap-2 rounded-full border px-5 py-2 text-xs font-semibold tracked transition-all duration-300"
          style={{ borderColor: "#ff00ff", color: "#ff00ff" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#00f0ff";
            e.currentTarget.style.borderColor = "#00f0ff";
            e.currentTarget.style.color = "#0a0a0f";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.borderColor = "#ff00ff";
            e.currentTarget.style.color = "#ff00ff";
          }}
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="mesh-blob mesh-blob-1" />
      <div className="mesh-blob mesh-blob-2" />
      <div className="mesh-blob mesh-blob-3" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-32 pb-20">
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 reveal">
          <span className="relative flex h-2 w-2">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
              style={{ backgroundColor: "#00f0ff" }}
            />
            <span
              className="relative inline-flex h-2 w-2 rounded-full"
              style={{ backgroundColor: "#00f0ff" }}
            />
          </span>
          <span className="text-[11px] tracked text-white/70">
            Available for projects · Q1 2026
          </span>
        </div>

        <h1 className="headline reveal max-w-5xl text-5xl text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Websites That Turn <br className="hidden md:block" />
          Visitors Into{" "}
          <span className="text-gradient">Customers</span>.
        </h1>

        <p
          className="reveal mt-8 max-w-2xl text-lg leading-relaxed md:text-xl"
          style={{ color: "#a0a0b0" }}
        >
          Strategic design and clean code for businesses that want results — not just
          pretty pages.
        </p>

        <div className="reveal mt-12 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="group inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-semibold tracked transition-all duration-300 magenta-glow"
            style={{ backgroundColor: "#00f0ff", color: "#0a0a0f" }}
          >
            View My Work
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contact"
            className="text-sm tracked text-white/60 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            Or start a conversation
          </a>
        </div>

        <div className="reveal mt-24 grid max-w-3xl grid-cols-3 gap-8 border-t border-white/10 pt-8">
          {[
            { k: "40+", v: "Projects shipped" },
            { k: "2.8x", v: "Avg. conversion lift" },
            { k: "12", v: "Countries served" },
          ].map((s) => (
            <div key={s.v}>
              <div
                className="text-3xl font-bold md:text-4xl"
                style={{ color: "#00f0ff" }}
              >
                {s.k}
              </div>
              <div className="mt-1 text-xs tracked" style={{ color: "#a0a0b0" }}>
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracked text-white/40">
        Scroll ↓
      </div>
    </section>
  );
}

const projects = [
  {
    name: "Bistro Landing",
    category: "Restaurant",
    metric: "+40% bookings",
    thumb: "thumb-1",
  },
  {
    name: "SaaS Launch",
    category: "Product Page",
    metric: "3× conversion",
    thumb: "thumb-2",
  },
  {
    name: "Shop Local",
    category: "E-commerce",
    metric: "+150% revenue",
    thumb: "thumb-3",
  },
];

function Portfolio() {
  return (
    <section id="work" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div
              className="reveal mb-4 text-xs tracked"
              style={{ color: "#00f0ff" }}
            >
              — 01 / Portfolio
            </div>
            <h2 className="headline reveal text-4xl md:text-6xl">Selected Work</h2>
          </div>
          <p
            className="reveal max-w-sm text-sm leading-relaxed"
            style={{ color: "#a0a0b0" }}
          >
            A handful of recent projects where design decisions moved real business
            metrics.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className="reveal group relative overflow-hidden rounded-2xl glass transition-transform duration-500 hover:-translate-y-2"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className={`thumb aspect-[4/3] w-full ${p.thumb}`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="rounded-full bg-black/60 px-5 py-2 text-xs tracked backdrop-blur-md">
                    View Case Study →
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className="rounded-full border px-2.5 py-0.5 text-[10px] tracked"
                    style={{ borderColor: "rgba(0,240,255,0.35)", color: "#00f0ff" }}
                  >
                    {p.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white">{p.name}</h3>
                <div
                  className="mt-4 flex items-center justify-between border-t border-white/10 pt-4 text-sm"
                  style={{ color: "#a0a0b0" }}
                >
                  <span>Outcome</span>
                  <span className="font-semibold" style={{ color: "#ff00ff" }}>
                    {p.metric}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const skills = [
    "UI/UX",
    "Web Development",
    "SEO",
    "CRO",
    "Responsive",
    "Performance",
  ];
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:gap-20">
        <div>
          <div
            className="reveal mb-4 text-xs tracked"
            style={{ color: "#00f0ff" }}
          >
            — 02 / About
          </div>
          <h2 className="headline reveal text-4xl md:text-6xl">
            Design-Driven. <br />
            <span className="text-gradient">Results-Focused.</span>
          </h2>
          <p
            className="reveal mt-8 text-lg leading-relaxed"
            style={{ color: "#a0a0b0" }}
          >
            I'm Neon, a web designer specializing in conversion-focused design and
            performance optimization. I help businesses turn visitors into customers.
          </p>
          <div className="reveal mt-10 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs tracked text-white/80 transition-colors hover:border-white/30"
              >
                {s}
              </span>
            ))}
          </div>

          <dl className="reveal mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
            <div>
              <dt className="text-xs tracked" style={{ color: "#a0a0b0" }}>
                Based in
              </dt>
              <dd className="mt-1 text-white">Remote · Worldwide</dd>
            </div>
            <div>
              <dt className="text-xs tracked" style={{ color: "#a0a0b0" }}>
                Working since
              </dt>
              <dd className="mt-1 text-white">2019</dd>
            </div>
          </dl>
        </div>

        <div className="reveal relative flex items-center justify-center">
          <GeometricViz />
        </div>
      </div>
    </section>
  );
}

function GeometricViz() {
  return (
    <div className="relative aspect-square w-full max-w-md">
      <div className="absolute inset-0 rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(0,240,255,0.15), transparent 60%)" }} />
      <svg viewBox="0 0 400 400" className="relative h-full w-full">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00f0ff" />
            <stop offset="100%" stopColor="#ff00ff" />
          </linearGradient>
          <linearGradient id="g2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff00ff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00f0ff" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        <g className="rotate-slow" style={{ transformOrigin: "200px 200px" }}>
          <polygon
            points="200,40 340,120 340,280 200,360 60,280 60,120"
            fill="none"
            stroke="url(#g1)"
            strokeWidth="1.2"
          />
          <polygon
            points="200,80 305,140 305,260 200,320 95,260 95,140"
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1"
          />
        </g>

        <g className="rotate-reverse" style={{ transformOrigin: "200px 200px" }}>
          <circle cx="200" cy="200" r="140" fill="none" stroke="url(#g2)" strokeWidth="1" strokeDasharray="2 8" />
          <circle cx="200" cy="200" r="90" fill="none" stroke="rgba(0,240,255,0.4)" strokeWidth="1" />
        </g>

        <circle cx="200" cy="200" r="6" fill="#00f0ff" />
        <circle cx="200" cy="200" r="14" fill="none" stroke="#ff00ff" strokeWidth="1" />

        {[0, 60, 120, 180, 240, 300].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const x = 200 + Math.cos(rad) * 140;
          const y = 200 + Math.sin(rad) * 140;
          return <circle key={deg} cx={x} cy={y} r="3" fill="#ff00ff" />;
        })}
      </svg>
    </div>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.currentTarget as HTMLFormElement).reset();
  }
  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          <div>
            <div
              className="reveal mb-4 text-xs tracked"
              style={{ color: "#00f0ff" }}
            >
              — 03 / Contact
            </div>
            <h2 className="headline reveal text-4xl md:text-6xl">
              Let's Build <br />
              <span className="text-gradient">Something</span>.
            </h2>
            <p
              className="reveal mt-6 text-lg"
              style={{ color: "#a0a0b0" }}
            >
              Open for projects. Response within 24 hours.
            </p>

            <div className="reveal mt-10 space-y-4">
              <a
                href="mailto:ne.on.alchemist.dev@gmail.com"
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/30"
              >
                <div>
                  <div className="text-[10px] tracked" style={{ color: "#a0a0b0" }}>
                    Email
                  </div>
                  <div className="mt-1 text-white">ne.on.alchemist.dev@gmail.com</div>
                </div>
                <span
                  className="transition-transform group-hover:translate-x-1"
                  style={{ color: "#00f0ff" }}
                >
                  →
                </span>
              </a>
              <a
                href="https://t.me/NeonAlchemist"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/30"
              >
                <div>
                  <div className="text-[10px] tracked" style={{ color: "#a0a0b0" }}>
                    Telegram
                  </div>
                  <div className="mt-1 text-white">@NeonAlchemist</div>
                </div>
                <span
                  className="transition-transform group-hover:translate-x-1"
                  style={{ color: "#ff00ff" }}
                >
                  →
                </span>
              </a>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="reveal relative rounded-2xl glass p-8"
          >
            <div className="space-y-5">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <div>
                <label className="mb-2 block text-[10px] tracked" style={{ color: "#a0a0b0" }}>
                  Project Details
                </label>
                <textarea
                  name="details"
                  required
                  rows={5}
                  maxLength={2000}
                  className="w-full resize-none rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#00f0ff]"
                  placeholder="Tell me about your project, goals, timeline…"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg px-6 py-4 text-sm font-semibold tracked transition-all duration-300 magenta-glow"
                style={{ backgroundColor: "#00f0ff", color: "#0a0a0f" }}
              >
                {sent ? "Message Sent ✓" : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-[10px] tracked" style={{ color: "#a0a0b0" }}>
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={200}
        className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#00f0ff]"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="text-xs tracked" style={{ color: "#a0a0b0" }}>
          © 2026 Neon Alchemist. All rights reserved.
        </div>
        <div className="flex items-center gap-3">
          {[
            {
              label: "GitHub",
              href: "https://github.com",
              d: "M12 .5C5.73.5.75 5.48.75 11.75c0 4.98 3.23 9.2 7.7 10.7.56.1.77-.24.77-.54 0-.27-.01-1.16-.02-2.1-3.14.68-3.8-1.34-3.8-1.34-.52-1.32-1.26-1.67-1.26-1.67-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.66 1.24 3.31.95.1-.74.4-1.24.72-1.53-2.5-.28-5.14-1.25-5.14-5.56 0-1.23.44-2.24 1.16-3.02-.12-.29-.5-1.44.11-3 0 0 .95-.3 3.12 1.15a10.8 10.8 0 015.68 0c2.17-1.45 3.12-1.15 3.12-1.15.62 1.56.23 2.71.11 3 .73.78 1.16 1.79 1.16 3.02 0 4.32-2.65 5.27-5.17 5.55.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.2.65.78.54 4.47-1.5 7.68-5.72 7.68-10.7C23.25 5.48 18.27.5 12 .5z",
            },
            {
              label: "Dribbble",
              href: "https://dribbble.com",
              d: "M12 2a10 10 0 100 20 10 10 0 000-20zm6.6 4.6a8.4 8.4 0 011.9 5.1c-.3 0-3.3-.7-6.3-.3-.1-.3-.2-.5-.4-.8 1.8-.7 3.4-1.7 4.8-4zm-1.5-1.7C15.9 6.6 14.5 7.6 13 8.2c-.9-1.7-2-3.1-2.6-3.9 3.1-.7 5.4.4 6.7.6zM8.5 4.9c.6.8 1.6 2.2 2.5 3.9-2.8.8-5.3.7-5.5.7A8.4 8.4 0 018.5 4.9zM3.6 12c0-.1.3-4.5.3-4.5.2 0 3.1.2 6.3-.8.2.4.4.9.6 1.3-2.9.8-5.5 3-6.3 4-.5-.9-.9-1.9-.9-3zm2 4.4c.6-.8 3-3 6-3.8 1 2.5 1.4 4.6 1.5 5.3a8.5 8.5 0 01-7.5-1.5zm9.6 1a24 24 0 00-1.4-5c2.7-.4 5.1.3 5.4.4a8.5 8.5 0 01-4 4.6z",
            },
            {
              label: "LinkedIn",
              href: "https://linkedin.com",
              d: "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3v9zM6.5 8.7a1.7 1.7 0 110-3.4 1.7 1.7 0 010 3.4zM19 19h-3v-4.7c0-1.1-.4-1.9-1.4-1.9-.8 0-1.3.5-1.5 1-.1.2-.1.5-.1.8V19h-3s0-8.1 0-9h3v1.3c.4-.6 1.1-1.5 2.7-1.5 2 0 3.4 1.3 3.4 4V19z",
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition-all hover:border-[#00f0ff] hover:text-[#00f0ff]"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d={s.d} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function Index() {
  useScrollReveal();
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref} className="relative min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
