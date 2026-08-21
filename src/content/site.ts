import type {
  AboutContent,
  CommunityContent,
  HeroContent,
  ImpactArea,
  JoinContent,
  NavItem,
  NewsItem,
  Publication,
  ResearchTheme,
  SiteConfig,
} from "@/types";

export const siteConfig: SiteConfig = {
  name: "INSIST",
  fullName: "Intelligent and Sustainable Information Systems Research Group",
  tagline: "Impact-driven Information Systems Research",
  description:
    "INSIST is a research community at Universitas Sriwijaya advancing intelligent and sustainable information systems through rigorous scholarship, interdisciplinary collaboration, and real-world impact.",
  university: "Universitas Sriwijaya",
  email: "insist@unsri.ac.id",
  address: "Fakultas Ilmu Komputer, Universitas Sriwijaya, Palembang, Indonesia",
  logo: {
    src: "/images/logo_insist.png",
    alt: "INSIST — Intelligent and Sustainable Information Systems",
    width: 1025,
    height: 1024,
    showWordmark: false,
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

export const heroContent: HeroContent = {
  headline: "Intelligent & Sustainable Information Systems",
  subheadline: "Research that matters for society, industry, and the planet.",
  description:
    "We design, analyze, and deploy information systems that are intelligent by design and sustainable by principle — bridging academic rigor with practical impact across health, education, governance, and enterprise.",
  primaryCta: { label: "Explore Our Research", href: "/research" },
  secondaryCta: { label: "Join the Community", href: "/join" },
};

export const aboutContent: AboutContent = {
  title: "About INSIST",
  subtitle: "A research community built on curiosity, collaboration, and consequence.",
  paragraphs: [
    "INSIST (Intelligent and Sustainable Information Systems) is a research group within the Faculty of Computer Science at Universitas Sriwijaya. We investigate how information systems can be designed to be both intelligent — leveraging data, AI, and analytics — and sustainable — considering environmental, social, and economic dimensions.",
    "Our work spans from theoretical foundations in IS design science to applied research in digital health, smart cities, and enterprise systems. We publish in leading journals and conferences while maintaining strong ties with industry partners and public institutions across Sumatra and beyond.",
    "We believe that excellent research is measured not only by citations, but by the positive change it creates in communities, organizations, and policy.",
  ],
  highlights: [
    { label: "Founded", value: "2018" },
    { label: "Faculty", value: "Computer Science" },
    { label: "Focus", value: "IS & Sustainability" },
    { label: "Location", value: "Palembang, ID" },
  ],
};

export const researchThemes: ResearchTheme[] = [
  {
    id: "intelligent-systems",
    title: "Intelligent Systems & AI",
    description:
      "Machine learning, knowledge discovery, and intelligent decision support embedded in enterprise and public-sector information systems.",
    icon: "Brain",
  },
  {
    id: "sustainable-is",
    title: "Sustainable Information Systems",
    description:
      "Green IT, circular economy informatics, and frameworks for measuring the environmental and social footprint of digital systems.",
    icon: "Leaf",
  },
  {
    id: "digital-health",
    title: "Digital Health Informatics",
    description:
      "Electronic health records, telemedicine platforms, and health analytics for improving care delivery in resource-constrained settings.",
    icon: "HeartPulse",
  },
  {
    id: "data-analytics",
    title: "Data Analytics & Decision Support",
    description:
      "Business intelligence, predictive analytics, and data-driven policy support for organizations and government agencies.",
    icon: "BarChart3",
  },
  {
    id: "smart-infrastructure",
    title: "Smart Infrastructure & IoT",
    description:
      "Sensor networks, urban informatics, and intelligent infrastructure for smart cities and regional development.",
    icon: "Network",
  },
  {
    id: "is-design",
    title: "IS Design & Engineering",
    description:
      "Design science research, method engineering, and rigorous evaluation of information system artifacts and processes.",
    icon: "Layers",
  },
];

export const impactAreas: ImpactArea[] = [
  {
    id: "academic",
    title: "Academic Excellence",
    description:
      "Peer-reviewed publications in Q1/Q2 journals and A*/A conferences, advancing the global IS knowledge base.",
    metric: "50+ publications",
  },
  {
    id: "industry",
    title: "Industry Collaboration",
    description:
      "Joint research projects, technology transfer, and consulting with SMEs and enterprises across South Sumatra.",
    metric: "15+ partners",
  },
  {
    id: "community",
    title: "Community Engagement",
    description:
      "Workshops, seminars, and outreach programs that democratize access to technology and digital literacy.",
    metric: "30+ events/year",
  },
  {
    id: "policy",
    title: "Policy & Governance",
    description:
      "Evidence-based recommendations for digital transformation in regional government and public institutions.",
    metric: "5+ policy briefs",
  },
];

export const featuredPublications: Publication[] = [
  {
    id: "pub-1",
    title:
      "A Design Framework for Sustainable Enterprise Information Systems in Emerging Economies",
    authors: "Rahman, A., Sari, D., Wijaya, B.",
    venue: "Information Systems Journal",
    year: 2025,
    type: "journal",
    doi: "10.1111/isj.12345",
  },
  {
    id: "pub-2",
    title:
      "Predictive Analytics for Hospital Resource Allocation: A Case Study in South Sumatra",
    authors: "Putra, M., Hidayat, R., Chen, L.",
    venue: "PACIS 2024 Proceedings",
    year: 2024,
    type: "conference",
  },
  {
    id: "pub-3",
    title:
      "Green IT Maturity Assessment Model for Indonesian Higher Education Institutions",
    authors: "Susanto, K., Anggraini, S., Rahman, A.",
    venue: "Journal of Cleaner Production",
    year: 2024,
    type: "journal",
    doi: "10.1016/j.jclepro.2024.141234",
  },
];

export const latestNews: NewsItem[] = [
  {
    id: "news-1",
    title: "INSIST Researchers Present at PACIS 2025 in Bali",
    excerpt:
      "Three papers accepted at the Pacific Asia Conference on Information Systems, covering digital health and sustainable IS topics.",
    date: "2025-07-15",
    category: "event",
    href: "/news/pacis-2025",
  },
  {
    id: "news-2",
    title: "New MoU Signed with RSUD Palembang for Digital Health Research",
    excerpt:
      "A two-year collaboration to develop predictive analytics tools for hospital resource management in regional healthcare.",
    date: "2025-06-28",
    category: "announcement",
    href: "/news/rsud-mou",
  },
  {
    id: "news-3",
    title: "INSIST Welcomes Five New Master's Research Students",
    excerpt:
      "The 2025 cohort brings expertise in machine learning, health informatics, and green computing to the research community.",
    date: "2025-06-10",
    category: "achievement",
    href: "/news/new-students-2025",
  },
];

export const communityContent: CommunityContent = {
  title: "Our Community",
  description:
    "INSIST brings together faculty researchers, graduate students, and alumni who share a commitment to rigorous, impact-oriented information systems research. We foster an open, collaborative culture where ideas are tested, refined, and shared.",
  stats: [
    { label: "Faculty Researchers", value: "12" },
    { label: "Graduate Students", value: "25+" },
    { label: "Alumni in Academia & Industry", value: "40+" },
    { label: "Active Collaborations", value: "8" },
  ],
};

export const joinContent: JoinContent = {
  title: "Join INSIST",
  description:
    "Whether you are a prospective graduate student, visiting researcher, or industry partner — we welcome collaborators who share our vision for intelligent and sustainable information systems.",
  opportunities: [
    {
      title: "Graduate Programs",
      description:
        "Pursue an S2 or S3 degree in Information Systems with INSIST faculty as supervisors. Research topics span all our thematic areas.",
      href: "/join#graduate",
    },
    {
      title: "Research Collaboration",
      description:
        "Co-author papers, co-supervise students, or initiate joint grant proposals with our faculty and international partners.",
      href: "/join#collaboration",
    },
    {
      title: "Industry Partnership",
      description:
        "Engage INSIST for applied research, system prototyping, or technology evaluation tailored to your organization's needs.",
      href: "/join#industry",
    },
  ],
};
