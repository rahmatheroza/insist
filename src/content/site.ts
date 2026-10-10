import type { NavItem, SiteConfig } from "@/types";

const baseSite = {
  name: "INSIST",
  university: "Universitas Sriwijaya",
  email: "insistreserch@unsri.ac.id",
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

const siteConfigEn: SiteConfig = {
  ...baseSite,
  fullName: "Intelligent and Sustainable Information Systems Research Group",
  tagline: "Impact-driven Information Systems Research",
  description:
    "INSIST is a research community at Universitas Sriwijaya advancing intelligent and sustainable information systems through rigorous scholarship, interdisciplinary collaboration, and real-world impact.",
  address: "Faculty of Computer Science, Universitas Sriwijaya, Palembang, Indonesia",
};

const siteConfigId: SiteConfig = {
  ...baseSite,
  fullName: "Kelompok Riset Sistem Informasi Cerdas dan Berkelanjutan",
  tagline: "Riset Sistem Informasi Berdampak Nyata",
  description:
    "INSIST adalah komunitas riset di Universitas Sriwijaya yang memajukan sistem informasi cerdas dan berkelanjutan melalui keilmuan mendalam, kolaborasi interdisipliner, dan dampak nyata.",
  address: "Fakultas Ilmu Komputer, Universitas Sriwijaya, Palembang, Indonesia",
};

export function getSiteConfig(locale?: string): SiteConfig {
  return locale === "id" ? siteConfigId : siteConfigEn;
}

const navItemsEn: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "People", href: "/people" },
  { label: "Projects", href: "/projects" },
  { label: "Publications", href: "/publications" },
  { label: "News", href: "/news" },
  { label: "Join", href: "/join" },
  { label: "Contact", href: "/contact" },
];

const navItemsId: NavItem[] = [
  { label: "Tentang", href: "/about" },
  { label: "Riset", href: "/research" },
  { label: "Anggota", href: "/people" },
  { label: "Proyek", href: "/projects" },
  { label: "Publikasi", href: "/publications" },
  { label: "Berita", href: "/news" },
  { label: "Bergabung", href: "/join" },
  { label: "Kontak", href: "/contact" },
];

export function getNavItems(locale?: string): NavItem[] {
  return locale === "id" ? navItemsId : navItemsEn;
}

export const siteConfig: SiteConfig = siteConfigEn;
export const navItems: NavItem[] = navItemsEn;
