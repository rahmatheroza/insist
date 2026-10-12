import type { AboutContent } from "@/types";

const aboutContentEn: AboutContent = {
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

const aboutContentId: AboutContent = {
  title: "Tentang INSIST",
  subtitle: "Komunitas riset yang berlandaskan rasa ingin tahu, kolaborasi, dan dampak nyata berkelanjutan.",
  paragraphs: [
    "INSIST (Intelligent and Sustainable Information Systems) adalah kelompok riset di Fakultas Ilmu Komputer, Universitas Sriwijaya. Kami meneliti bagaimana sistem informasi dapat dirancang agar cerdas — memanfaatkan data, kecerdasan buatan, dan analitik — sekaligus berkelanjutan — mempertimbangkan aspek lingkungan, sosial, dan ekonomi.",
    "Karya riset kami mencakup landasan teoretis ilmu desain sistem informasi hingga penelitian terapan di bidang kesehatan digital, kota cerdas (smart cities), dan sistem enterprise. Kami mempublikasikan karya ilmiah di berbagai jurnal dan konferensi terkemuka serta menjalin kemitraan erat dengan industri dan institusi publik di Sumatera dan sekitarnya.",
    "Kami meyakini bahwa keunggulan riset tidak hanya diukur dari sitasi, melainkan dari perubahan positif nyata yang dihadirkan bagi masyarakat, organisasi, dan kebijakan.",
  ],
  highlights: [
    { label: "Didirikan", value: "2018" },
    { label: "Fakultas", value: "Ilmu Komputer" },
    { label: "Fokus", value: "SI & Keberlanjutan" },
    { label: "Lokasi", value: "Palembang, ID" },
  ],
};

export function getAboutContent(locale?: string): AboutContent {
  return locale === "id" ? aboutContentId : aboutContentEn;
}

export const aboutContent: AboutContent = aboutContentEn;
