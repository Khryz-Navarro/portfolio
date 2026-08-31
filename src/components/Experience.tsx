import { experience } from "../data/portfolio";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-white/5">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">
            Experience
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Where I've been.
          </h2>
        </Reveal>

        <ol className="relative mt-14 space-y-12 border-l border-white/10 pl-8">
          {experience.map((entry, i) => (
            <Reveal key={entry.period} delay={i * 80}>
              <li className="relative">
                <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-emerald-400 bg-[#030304]" />
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-300/80">
                  {entry.period}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-white">
                  {entry.role}
                  <span className="text-white/40"> · {entry.org}</span>
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/55">
                  {entry.summary}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
