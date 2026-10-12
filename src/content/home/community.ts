import type { CommunityContent } from "@/types";

const communityContentEn: CommunityContent = {
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

const communityContentId: CommunityContent = {
  title: "Komunitas Kami",
  description:
    "INSIST menyatukan dosen peneliti, mahasiswa pascasarjana, dan alumni yang memiliki komitmen pada riset sistem informasi yang ketat dan berdampak nyata. Kami membangun budaya terbuka dan kolaboratif di mana gagasan diuji, disempurnakan, dan dibagikan.",
  stats: [
    { label: "Dosen Peneliti", value: "12" },
    { label: "Mahasiswa Pascasarjana", value: "25+" },
    { label: "Alumni di Akademisi & Industri", value: "40+" },
    { label: "Kolaborasi Aktif", value: "8" },
  ],
};

export function getCommunityContent(locale?: string): CommunityContent {
  return locale === "id" ? communityContentId : communityContentEn;
}

export const communityContent: CommunityContent = communityContentEn;
