import { ArrowRight, ChevronDown, Mail } from "lucide-react";
import { StructureFlowCollection } from "@designcodeio/threeui";
import { profile } from "../data/portfolio";

export function Scene() {
  return (
    <div className="shader-frame">
      <StructureFlowCollection
        variant="emerald-horizon"
        speed={1.0}
        waveScale={1.0}
        variation={1.0}
        hue={0}
        glow={1.0}
        vignette={1.0}
      />
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col overflow-hidden">
      <Scene />
      <div className="hero-veil" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 pb-24 pt-28 text-center">
        <p className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-300/90 backdrop-blur-sm">
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {profile.availability}
        </p>

        <h1 className="mt-8 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Student developer crafting{" "}
          <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
            immersive
          </span>{" "}
          experiences for the modern web.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 font-display text-sm font-semibold text-[#030304] shadow-[0_0_44px_-10px_rgba(52,211,153,0.65)] transition-all duration-300 hover:bg-emerald-300 hover:shadow-[0_0_54px_-8px_rgba(52,211,153,0.8)]"
          >
            View selected work
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-display text-sm font-semibold text-white/80 transition-colors duration-300 hover:border-emerald-400/50 hover:text-emerald-300"
          >
            <Mail className="h-4 w-4" />
            Get in touch
          </a>
        </div>
      </div>

      <a
        href="#work"
        aria-label="Scroll to work"
        className="relative z-10 mx-auto mb-8 text-white/40 transition-colors hover:text-emerald-300"
      >
        <ChevronDown className="h-6 w-6 motion-safe:animate-bounce" />
      </a>
    </section>
  );
}
