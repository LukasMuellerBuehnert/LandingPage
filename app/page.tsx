import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Section } from "@/components/Section";
import { Feature } from "@/components/Feature";

export default function Page() {
  return (
    <>
      <Navbar/>

      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(99,102,241,.25),transparent_60%)]" />
        <div className="container pt-20 md:pt-28 pb-16">
          <div className="max-w-2xl">
            <div className="badge">NEW • Next.js Landing</div>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
              Build a clean, fast, modern landing page
            </h1>
            <p className="mt-5 text-white/70 text-lg">
              App Router, Tailwind, accessible components. Perfect base for SaaS, portfolio, or product pages.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#cta" className="btn btn-primary">Get started</a>
              <a href="#features" className="btn btn-ghost">See features</a>
            </div>
          </div>
        </div>
      </div>

      {/* Logos placeholder */}
      <div className="container grid grid-cols-2 md:grid-cols-6 gap-6 opacity-70">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-10 rounded-xl bg-white/5 border border-white/10" />
        ))}
      </div>

      {/* Features */}
      <Section id="features" title="Everything you need to ship" subtitle="Features">
        <div className="grid md:grid-cols-3 gap-6">
          <Feature title="App Router + TS" desc="Latest Next.js with TypeScript, file-based routing, metadata, and edge-ready APIs."/>
          <Feature title="Tailwind UI kit" desc="Pre-styled components, tokens, and utilities so you can move fast without the mess."/>
          <Feature title="SEO + Performance" desc="Clean markup, semantic sections, and blazing-fast Lighthouse scores."/>
        </div>
      </Section>

      {/* Showcase */}
      <Section id="showcase" title="Show your product beautifully" subtitle="Showcase">
        <div className="grid md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="card aspect-video" />
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" title="Simple pricing" subtitle="Pricing">
        <div className="grid md:grid-cols-3 gap-6">
          {["Starter","Pro","Business"].map((tier, i) => (
            <div key={tier} className="card p-6 flex flex-col">
              <h3 className="text-xl font-semibold">{tier}</h3>
              <p className="text-white/70 mt-2 text-sm">Great for {tier.toLowerCase()} projects.</p>
              <div className="mt-6 text-4xl font-bold">{i===0 ? "Free" : "€" + (i*19)}</div>
              <ul className="mt-6 space-y-2 text-sm text-white/80">
                <li>✔ Fast build</li>
                <li>✔ Clean design</li>
                <li>✔ Easy deploy</li>
              </ul>
              <a href="#cta" className="btn btn-primary mt-8">Choose {tier}</a>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" title="Frequently asked questions" subtitle="FAQ">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            ["Can I deploy to Vercel?","Yes. This template is built for Vercel. Just push and import."],
            ["Can I add a blog?","Absolutely. Add a route under app/blog and you're set."],
            ["Is Tailwind required?","No, but it's integrated for speed and consistency."],
            ["How to customize colors?","Edit tailwind.config.ts (brand colors) and globals.css."]
          ].map(([q,a]) => (
            <div key={q as string} className="card p-6">
              <p className="font-semibold">{q}</p>
              <p className="mt-2 text-white/70 text-sm">{a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section id="cta" title="Ready to ship?">
        <div className="card p-8 flex items-center justify-between gap-6 flex-col md:flex-row">
          <div>
            <h3 className="text-2xl font-bold">Start with this template today</h3>
            <p className="text-white/70 mt-2">Deploy in minutes, then iterate quickly.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn btn-primary" href="#">Deploy to Vercel</a>
            <a className="btn btn-ghost" href="#">View on GitHub</a>
          </div>
        </div>
      </Section>

      <Footer/>
    </>
  );
}
