import type { JoinContent } from "@/types";

const joinContentEn: JoinContent = {
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

const joinContentId: JoinContent = {
  title: "Bergabung dengan INSIST",
  description:
    "Baik Anda calon mahasiswa pascasarjana, peneliti tamu, maupun mitra industri — kami menyambut kolaborator yang memiliki visi serupa dalam memajukan sistem informasi cerdas dan berkelanjutan.",
  opportunities: [
    {
      title: "Program Pascasarjana",
      description:
        "Raih gelar S2 atau S3 di bidang Sistem Informasi bersama dosen peneliti INSIST sebagai pembimbing. Topik riset mencakup seluruh bidang tema kami.",
      href: "/join#graduate",
    },
    {
      title: "Kolaborasi Riset",
      description:
        "Menulis publikasi ilmiah bersama, membimbing mahasiswa bersama, atau mengajukan proposal hibah riset gabungan bersama peneliti kami.",
      href: "/join#collaboration",
    },
    {
      title: "Kemitraan Industri",
      description:
        "Jalin kerja sama dengan INSIST untuk riset terapan, pembuatan purwarupa sistem, atau evaluasi kelayakan teknologi yang dirancang sesuai kebutuhan organisasi Anda.",
      href: "/join#industry",
    },
  ],
};

export function getJoinContent(locale?: string): JoinContent {
  return locale === "id" ? joinContentId : joinContentEn;
}

export const joinContent: JoinContent = joinContentEn;
