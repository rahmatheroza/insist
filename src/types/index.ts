export interface NavItem {
  label: string;
  href: string;
}

export interface ResearchTheme {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ImpactArea {
  id: string;
  title: string;
  description: string;
  metric?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: "journal" | "conference" | "book-chapter";
  doi?: string;
  link?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: "announcement" | "event" | "achievement" | "publication";
  href: string;
}

export interface Person {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  researchInterests?: string[];
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: "active" | "completed" | "ongoing";
  tags: string[];
}

export interface SiteConfig {
  name: string;
  fullName: string;
  tagline: string;
  description: string;
  university: string;
  email: string;
  address: string;
  social: {
    github?: string;
    linkedin?: string;
    googleScholar?: string;
    researchgate?: string;
  };
}

export interface SectionProps {
  className?: string;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export interface AboutContent {
  title: string;
  subtitle: string;
  paragraphs: string[];
  highlights: { label: string; value: string }[];
}

export interface CommunityContent {
  title: string;
  description: string;
  stats: { label: string; value: string }[];
}

export interface JoinContent {
  title: string;
  description: string;
  opportunities: {
    title: string;
    description: string;
    href: string;
  }[];
}
