import type { NewsItem } from "@/types";

const newsEn: NewsItem[] = [
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

const newsId: NewsItem[] = [
  {
    id: "news-1",
    title: "Peneliti INSIST Mempresentasikan Makalah di PACIS 2025 Bali",
    excerpt:
      "Tiga makalah diterima pada Pacific Asia Conference on Information Systems, mencakup topik kesehatan digital dan sistem informasi berkelanjutan.",
    date: "2025-07-15",
    category: "event",
    href: "/news/pacis-2025",
  },
  {
    id: "news-2",
    title: "MoU Baru Ditandatangani Bersama RSUD Palembang untuk Riset Kesehatan Digital",
    excerpt:
      "Kerja sama dua tahun dalam pengembangan perangkat analitika prediktif untuk manajemen sumber daya rumah sakit daerah.",
    date: "2025-06-28",
    category: "announcement",
    href: "/news/rsud-mou",
  },
  {
    id: "news-3",
    title: "INSIST Menyambut Lima Mahasiswa Riset Magister Baru",
    excerpt:
      "Angkatan 2025 membawa keahlian dalam machine learning, informatika kesehatan, dan komputasi hijau ke komunitas riset.",
    date: "2025-06-10",
    category: "achievement",
    href: "/news/new-students-2025",
  },
];

export function getNews(locale?: string): NewsItem[] {
  return locale === "id" ? newsId : newsEn;
}

export const news: NewsItem[] = newsEn;
export const latestNews: NewsItem[] = newsEn;
