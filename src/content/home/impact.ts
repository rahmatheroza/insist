import type { ImpactArea } from "@/types";

const impactAreasEn: ImpactArea[] = [
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

const impactAreasId: ImpactArea[] = [
  {
    id: "academic",
    title: "Keunggulan Akademik",
    description:
      "Publikasi peer-reviewed di jurnal Q1/Q2 dan konferensi bereputasi A*/A, memajukan khazanah ilmu sistem informasi global.",
    metric: "50+ publikasi",
  },
  {
    id: "industry",
    title: "Kolaborasi Industri",
    description:
      "Proyek riset bersama, alih teknologi, dan konsultasi bagi UMKM dan korporasi di Sumatera Selatan dan sekitarnya.",
    metric: "15+ mitra",
  },
  {
    id: "community",
    title: "Pengabdian Masyarakat",
    description:
      "Lokakarya, seminar, dan program edukasi untuk mendemokratisasi akses terhadap teknologi dan literasi digital.",
    metric: "30+ kegiatan/tahun",
  },
  {
    id: "policy",
    title: "Kebijakan & Tata Kelola",
    description:
      "Rekomendasi berbasis bukti ilmiah untuk transformasi digital di instansi pemerintah daerah dan institusi publik.",
    metric: "5+ rekomendasi kebijakan",
  },
];

export function getImpactAreas(locale?: string): ImpactArea[] {
  return locale === "id" ? impactAreasId : impactAreasEn;
}

export const impactAreas: ImpactArea[] = impactAreasEn;
