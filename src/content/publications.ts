import type { Publication } from "@/types";

export const publications: Publication[] = [
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

/** Featured publications shown on the homepage */
export const featuredPublications = publications;
