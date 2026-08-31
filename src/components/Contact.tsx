import { ArrowUp, Mail } from "lucide-react";
import { profile, socials } from "../data/portfolio";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <>
      <section id="contact" className="scroll-mt-24 border-t border-white/5">
        <div className="mx-auto w-full max-w-4xl px-6 py-28 text-center sm:py-36">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">
              Contact
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Let's build something{" "}
              <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                worth remembering
              </span>
              .
            </h2>
            <p className="mx-auto mt-6 max-w-lg leading-relaxed text-white/60">
              Have a project in mind, a role to fill, or just want to talk
              shaders? My inbox is always open — I'll get back to you within a
              day.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-7 py-3.5 font-display text-sm font-semibold text-[#030304] shadow-[0_0_44px_-10px_rgba(52,211,153,0.65)] transition-all duration-300 hover:bg-emerald-300 hover:shadow-[0_0_54px_-8px_rgba(52,211,153,0.8)]"
              >
                <Mail className="h-4 w-4" />
                {profile.email}
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="rounded-full border border-white/10 p-2.5 text-white/50 transition-colors duration-300 hover:border-emerald-400/40 hover:text-emerald-300"
                >
                  <social.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/5">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-white/40 sm:flex-row">
          <p>© 2026 {profile.name}. All rights reserved.</p>
          <p className="font-mono">Built with React, Three.js &amp; Tailwind CSS</p>
          <a
            href="#top"
            aria-label="Back to top"
            className="rounded-full border border-white/10 p-2.5 text-white/50 transition-colors duration-300 hover:border-emerald-400/40 hover:text-emerald-300"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </footer>
    </>
  );
}
