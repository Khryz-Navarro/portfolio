import { stack, stats } from "../data/portfolio";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-white/5">
      <div className="mx-auto grid w-full max-w-6xl gap-14 px-6 py-24 sm:py-32 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">
            About
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Design-minded, code-driven.
          </h2>
          <p className="mt-6 leading-relaxed text-white/60">
            I'm a front-end developer who cares about the last five percent — the
            easing curve, the loading state, the way a page feels at 120 frames
            per second. For the past five years I've helped studios and startups
            turn rough ideas into polished, production-ready interfaces.
          </p>
          <p className="mt-4 leading-relaxed text-white/60">
            My happy place is the overlap between design and engineering:
            translating a brand into motion, shaders and interaction without
            sacrificing performance or accessibility.
          </p>
        </Reveal>

        <div className="flex flex-col gap-10">
          <Reveal delay={100}>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
                >
                  <p className="font-display text-3xl font-bold text-emerald-400">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs leading-snug text-white/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="flex flex-col gap-5">
              {stack.map((group) => (
                <div key={group.label}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/35">
                    {group.label}
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs text-white/60 transition-colors hover:border-emerald-400/40 hover:text-emerald-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
