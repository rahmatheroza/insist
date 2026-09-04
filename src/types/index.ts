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
  /** Path under /public, e.g. "/images/people/jane-doe.jpg" */
  image?: string;
  /** Original image width in pixels (required for portrait photos) */
  imageWidth?: number;
  /** Original image height in pixels (required for portrait photos) */
  imageHeight?: number;
  researchInterests?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: "active" | "completed" | "ongoing";
  tags: string[];
}

export interface SiteLogo {
  /** Path under /public, e.g. "/images/logo.png" */
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Set false if the image already includes the INSIST wordmark */
  showWordmark?: boolean;
  /** Tailwind classes controlling on-screen logo size */
  className?: string;
}

export interface SiteConfig {
  name: string;
  fullName: string;
  tagline: string;
  description: string;
  university: string;
  email: string;
  address: string;
  logo: SiteLogo;
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
