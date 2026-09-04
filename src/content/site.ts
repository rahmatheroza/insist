import type { NavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "INSIST",
  fullName: "Intelligent and Sustainable Information Systems Research Group",
  tagline: "Impact-driven Information Systems Research",
  description:
    "INSIST is a research community at Universitas Sriwijaya advancing intelligent and sustainable information systems through rigorous scholarship, interdisciplinary collaboration, and real-world impact.",
  university: "Universitas Sriwijaya",
  email: "insistreserch@unsri.ac.id",
  address: "Fakultas Ilmu Komputer, Universitas Sriwijaya, Palembang, Indonesia",
  logo: {
    src: "/images/logo_insist1.png",
    alt: "INSIST — Intelligent and Sustainable Information Systems",
    width: 1025,
    height: 1024,
    showWordmark: false,
    className: "h-16 w-auto sm:h-[4.5rem]",
  },
  social: {
    github: "https://github.com/insist-unsri",
    linkedin: "https://linkedin.com/company/insist-unsri",
    googleScholar: "https://scholar.google.com",
    researchgate: "https://researchgate.net",
  },
};

export const navItems: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "People", href: "/people" },
  { label: "Projects", href: "/projects" },
  { label: "Publications", href: "/publications" },
  { label: "News", href: "/news" },
  { label: "Join", href: "/join" },
  { label: "Contact", href: "/contact" },
];
