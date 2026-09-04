// Portfolio content — edit these values to make the page yours.
import type { LucideIcon } from "lucide-react";
import { Briefcase, GitBranch, Mail } from "lucide-react";

export const profile = {
  name: "Khryz Navarro",
  firstName: "Khryz",
  role: "Full-Stack & Mobile Developer",
  tagline:
    "I'm Khryz Navarro a 4th-year Information Systems student who learns by building: full-stack web apps, mobile projects, and the occasional shader. Currently open to internships and freelance work.",
  email: "khryznavarro@gmail.com",
  availability: "Open to internships & freelance",
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export type Social = { label: string; href: string; icon: LucideIcon };

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/Khryz-Navarro", icon: GitBranch },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/khryz-navarro-5abb4b398/",
    icon: Briefcase,
  },
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
    title: "Capstone System",
    year: "2026",
    description:
      "My capstone project — a full-stack TypeScript system designed, built and documented end-to-end as the centerpiece of my IS degree.",
    tags: ["TypeScript", "Full-Stack", "Web App"],
    link: "https://github.com/Khryz-Navarro/Capstone-System",
    thumb:
      "radial-gradient(120% 130% at 15% 10%, rgba(52,211,153,0.35), transparent 52%), radial-gradient(90% 110% at 85% 90%, rgba(34,211,238,0.28), transparent 55%), #07120d",
  },
  {
    index: "02",
    title: "Apartmate",
    year: "2025",
    description:
      "An apartment management system built with Laravel Blade — listings, tenants and day-to-day operations in one place.",
    tags: ["PHP", "Laravel", "Blade", "MySQL"],
    link: "https://github.com/Khryz-Navarro/apartmate",
    thumb:
      "radial-gradient(120% 130% at 85% 15%, rgba(167,139,250,0.32), transparent 52%), radial-gradient(90% 110% at 15% 90%, rgba(52,211,153,0.26), transparent 55%), #0d0a14",
  },
  {
    index: "03",
    title: "SIMS",
    year: "2025",
    description:
      "A student information management system — my take on digitizing school records with a clean, usable interface.",
    tags: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/Khryz-Navarro/sims",
    thumb:
      "radial-gradient(120% 130% at 20% 85%, rgba(45,212,191,0.3), transparent 52%), radial-gradient(90% 110% at 80% 15%, rgba(96,165,250,0.26), transparent 55%), #081014",
  },
  {
    index: "04",
    title: "Calculator Java",
    year: "2023",
    description:
      "A desktop calculator with a Java GUI — my first taste of event-driven programming and building something people can click.",
    tags: ["Java", "GUI", "OOP"],
    link: "https://github.com/Khryz-Navarro/Calculator-Java",
    thumb:
      "radial-gradient(120% 130% at 80% 80%, rgba(251,191,36,0.22), transparent 50%), radial-gradient(100% 120% at 15% 15%, rgba(52,211,153,0.3), transparent 55%), #121006",
  },
];

export const stats = [
  { value: "4th", label: "Year Bachelor of Science in Information Systems" },
  { value: "18+", label: "GitHub repositories" },
  { value: "10+", label: "Projects built" },
];

export const stack = [
  { label: "Languages", items: ["JavaScript", "TypeScript", "PHP", "Java"] },
  { label: "Frontend", items: ["React", "Tailwind CSS", "Blade", "HTML / CSS"] },
  { label: "Backend", items: ["Node.js", "Laravel", "MySQL"] },
  { label: "Tools", items: ["Git", "GitHub", "Vite", "Figma"] },
];

export const experience = [
  {
    period: "2025 — Present",
    role: "Capstone Developer",
    org: "BS Information Systems",
    summary:
      "Designing and building my capstone system end-to-end — from requirements and database design to a working TypeScript web app.",
  },
  {
    period: "2024 — 2025",
    role: "Full-Stack Project Work",
    org: "Coursework & Side Projects",
    summary:
      "Shipped Laravel and JavaScript systems for classes and personal projects — apartment management, student records and more.",
  },
  {
    period: "2023 — 2024",
    role: "Programming Foundations",
    org: "First-Year Studies",
    summary:
      "Java, JavaScript and the fundamentals: object-oriented programming, data structures, and my first GUI applications.",
  },
];
