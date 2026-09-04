import type { NewsItem } from "@/types";

export const news: NewsItem[] = [
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

/** Latest news shown on the homepage */
export const latestNews = news;
