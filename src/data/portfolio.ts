// Portfolio content — edit these values to make the page yours.
import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const profile = {
  name: "Khryz",
  role: "Creative Front-End Developer",
  tagline:
    "I'm Khryz — a creative front-end developer who turns rough ideas into fast, expressive interfaces. React, TypeScript and WebGL are my tools of choice.",
  email: "hello@khryz.dev",
  availability: "Available for new projects",
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export type Social = { label: string; href: string; icon: LucideIcon };

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/khryz", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/khryz", icon: Linkedin },
  { label: "X", href: "https://x.com/khryz", icon: Twitter },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export type Project = {
  index: string;
  title: string;
  year: string;
  description: string;
  tags: string[];
  link: string;
  thumb: string;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "Nebula Analytics",
    year: "2025",
    description:
      "Real-time analytics dashboard streaming live metrics into interactive WebGL visualizations for a fintech scale-up.",
    tags: ["React", "TypeScript", "D3.js", "WebSockets"],
    link: "#",
    thumb:
      "radial-gradient(120% 130% at 15% 10%, rgba(52,211,153,0.35), transparent 52%), radial-gradient(90% 110% at 85% 90%, rgba(34,211,238,0.28), transparent 55%), #07120d",
  },
  {
    index: "02",
    title: "Aurora Commerce",
    year: "2024",
    description:
      "Headless storefront with sub-second page loads, 3D product previews and a conversion-obsessed checkout flow.",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "Vercel"],
    link: "#",
    thumb:
      "radial-gradient(120% 130% at 85% 15%, rgba(167,139,250,0.32), transparent 52%), radial-gradient(90% 110% at 15% 90%, rgba(52,211,153,0.26), transparent 55%), #0d0a14",
  },
  {
    index: "03",
    title: "Waveform Studio",
    year: "2024",
    description:
      "Browser-native audio workstation: multi-track editing, effects chains and MIDI — no install required.",
    tags: ["React", "Web Audio API", "Canvas", "Zustand"],
    link: "#",
    thumb:
      "radial-gradient(120% 130% at 20% 85%, rgba(45,212,191,0.3), transparent 52%), radial-gradient(90% 110% at 80% 15%, rgba(96,165,250,0.26), transparent 55%), #081014",
  },
  {
    index: "04",
    title: "Shader Playground",
    year: "2023",
    description:
      "A live GLSL playground and component gallery where animated backgrounds — like the one behind this page — are prototyped.",
    tags: ["Three.js", "GLSL", "React", "MDX"],
    link: "#",
    thumb:
      "radial-gradient(120% 130% at 80% 80%, rgba(251,191,36,0.22), transparent 50%), radial-gradient(100% 120% at 15% 15%, rgba(52,211,153,0.3), transparent 55%), #121006",
  },
];

export const stats = [
  { value: "05+", label: "Years of experience" },
  { value: "30+", label: "Projects shipped" },
  { value: "15+", label: "Happy clients" },
];

export const stack = [
  { label: "Core", items: ["React", "TypeScript", "Next.js", "Vite"] },
  { label: "Motion & 3D", items: ["Three.js", "WebGL / GLSL", "Framer Motion"] },
  { label: "Styling", items: ["Tailwind CSS", "CSS Architecture", "shadcn/ui"] },
  { label: "Backend & Tools", items: ["Node.js", "Appwrite", "PostgreSQL", "Git", "Figma"] },
];

export const experience = [
  {
    period: "2023 — Present",
    role: "Senior Front-End Developer",
    org: "Freelance",
    summary:
      "Designing and shipping immersive marketing sites and product interfaces for startups — WebGL hero scenes, design systems and performance budgets included.",
  },
  {
    period: "2021 — 2023",
    role: "Front-End Developer",
    org: "PixelWorks Studio",
    summary:
      "Built component libraries and interactive campaigns for clients in fintech and e-commerce; led the studio's move to React + TypeScript.",
  },
  {
    period: "2019 — 2021",
    role: "Junior Web Developer",
    org: "Northwind Agency",
    summary:
      "Cut my teeth on responsive builds, accessibility fixes and WordPress-to-Jamstack migrations.",
  },
];
