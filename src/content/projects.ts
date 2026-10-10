import type { Project } from "@/types";

const projectsEn: Project[] = [
  {
    id: "project-1",
    title: "Green IT Maturity Assessment for Indonesian Universities",
    description:
      "Developing and validating a maturity model to help higher education institutions measure, benchmark, and improve the environmental sustainability of their information systems and digital infrastructure.",
    status: "active",
    tags: ["Sustainable IS", "Green IT", "Higher Education"],
  },
];

const projectsId: Project[] = [
  {
    id: "project-1",
    title: "Penilaian Kematangan Green IT untuk Perguruan Tinggi di Indonesia",
    description:
      "Mengembangkan dan memvalidasi model kematangan untuk membantu institusi pendidikan tinggi mengukur, melakukan benchmark, dan meningkatkan keberlanjutan lingkungan dari sistem informasi dan infrastruktur digital mereka.",
    status: "active",
    tags: ["Sistem Informasi Berkelanjutan", "Green IT", "Pendidikan Tinggi"],
  },
];

export function getProjects(locale?: string): Project[] {
  return locale === "id" ? projectsId : projectsEn;
}

export const projects: Project[] = projectsEn;
