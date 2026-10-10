import type { HeroContent } from "@/types";

const heroContentEn: HeroContent = {
  headline: "Intelligent & Sustainable Information Systems",
  subheadline: "Research that matters for society, industry, and the planet.",
  description:
    "We design, analyze, and deploy information systems that are intelligent by design and sustainable by principle — bridging academic rigor with practical impact across health, education, governance, and enterprise.",
  primaryCta: { label: "Explore Our Research", href: "/research" },
  secondaryCta: { label: "Join the Community", href: "/join" },
};

const heroContentId: HeroContent = {
  headline: "Sistem Informasi Cerdas & Berkelanjutan",
  subheadline: "Riset bermakna bagi masyarakat, industri, dan lingkungan.",
  description:
    "Kami merancang, menganalisis, dan menerapkan sistem informasi yang cerdas secara desain dan berkelanjutan secara prinsip — menjembatani ketelitian akademis dengan dampak praktis di bidang kesehatan, pendidikan, tata kelola, dan industri.",
  primaryCta: { label: "Jelajahi Riset Kami", href: "/research" },
  secondaryCta: { label: "Bergabung dengan Komunitas", href: "/join" },
};

export function getHeroContent(locale?: string): HeroContent {
  return locale === "id" ? heroContentId : heroContentEn;
}

export const heroContent: HeroContent = heroContentEn;
