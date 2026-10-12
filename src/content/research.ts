import type { ResearchTheme } from "@/types";

const researchThemesEn: ResearchTheme[] = [
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

const researchThemesId: ResearchTheme[] = [
  {
    id: "intelligent-systems",
    title: "Sistem Cerdas & Kecerdasan Buatan (AI)",
    description:
      "Pembelajaran mesin, knowledge discovery, dan sistem pendukung keputusan cerdas yang terintegrasi pada sistem informasi sektor publik dan korporat.",
    icon: "Brain",
  },
  {
    id: "sustainable-is",
    title: "Sistem Informasi Berkelanjutan",
    description:
      "Green IT, informatika ekonomi sirkular, dan kerangka kerja evaluasi jejak lingkungan serta sosial dari sistem digital.",
    icon: "Leaf",
  },
  {
    id: "digital-health",
    title: "Informatika Kesehatan Digital",
    description:
      "Rekam medis elektronik, platform telemedisin, dan analitik kesehatan untuk meningkatkan mutu pelayanan kesehatan di berbagai wilayah.",
    icon: "HeartPulse",
  },
  {
    id: "data-analytics",
    title: "Analitika Data & Pendukung Keputusan",
    description:
      "Business intelligence, analitik prediktif, dan perumusan kebijakan berbasis data bagi organisasi dan lembaga pemerintah.",
    icon: "BarChart3",
  },
  {
    id: "smart-infrastructure",
    title: "Infrastruktur Cerdas & IoT",
    description:
      "Jaringan sensor, informatika perkotaan, dan infrastruktur cerdas untuk mewujudkan smart city dan pembangunan daerah.",
    icon: "Network",
  },
  {
    id: "is-design",
    title: "Desain & Rekayasa Sistem Informasi",
    description:
      "Riset ilmu desain (design science research), method engineering, dan evaluasi ketat terhadap artefak serta proses sistem informasi.",
    icon: "Layers",
  },
];

export function getResearchThemes(locale?: string): ResearchTheme[] {
  return locale === "id" ? researchThemesId : researchThemesEn;
}

export const researchThemes: ResearchTheme[] = researchThemesEn;
