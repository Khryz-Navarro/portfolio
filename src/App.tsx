import "@designcodeio/threeui/style.css";
import "./App.css";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { profile, socials } from "./data/portfolio";

function Rails() {
  return (
    <>
      <div className="fixed bottom-0 left-8 z-40 hidden flex-col items-center gap-5 after:h-24 after:w-px after:bg-white/20 after:content-[''] lg:flex">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            className="text-white/45 transition-all duration-300 hover:-translate-y-0.5 hover:text-emerald-300"
          >
            <social.icon className="h-5 w-5" />
          </a>
        ))}
      </div>
      <div className="fixed bottom-0 right-8 z-40 hidden flex-col items-center gap-5 after:h-24 after:w-px after:bg-white/20 after:content-[''] lg:flex">
        <a
          href={`mailto:${profile.email}`}
          className="font-mono text-xs tracking-[0.2em] text-white/45 transition-colors duration-300 [writing-mode:vertical-rl] hover:text-emerald-300"
        >
          {profile.email}
        </a>
      </div>
    </>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <Rails />
      <main>
        <Hero />
        <Work />
        <About />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
