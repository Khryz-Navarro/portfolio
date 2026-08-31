import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolio";
import { Reveal } from "./Reveal";

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 border-t border-white/5">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">
            Selected work
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Projects with depth.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 80} className="h-full">
              <a
                href={project.link}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors duration-300 hover:border-emerald-400/40 hover:bg-white/[0.04]"
              >
                <div
                  className="relative aspect-[16/9] overflow-hidden"
                  style={{ background: project.thumb }}
                >
                  <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(3,3,4,0.55))]" />
                  <span className="absolute bottom-4 left-5 font-display text-5xl font-bold text-white/15 transition-colors duration-300 group-hover:text-white/25">
                    {project.index}
                  </span>
                  <span className="absolute right-5 top-4 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
                    {project.year}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-semibold text-white transition-colors duration-300 group-hover:text-emerald-300">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-400" />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-white/45"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
