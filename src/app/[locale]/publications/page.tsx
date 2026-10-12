import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { publications } from "@/content/publications";
import { getSiteConfig } from "@/content/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const site = getSiteConfig(locale);
  return {
    title: locale === "id" ? "Publikasi" : "Publications",
    description:
      locale === "id"
        ? `Jelajahi publikasi ilmiah dari para peneliti ${site.name}.`
        : `Browse publications from ${site.name} researchers.`,
  };
}

const typeLabelsEn = {
  journal: "Journal",
  conference: "Conference",
  "book-chapter": "Book Chapter",
} as const;

const typeLabelsId = {
  journal: "Jurnal",
  conference: "Konferensi",
  "book-chapter": "Book Chapter",
} as const;

export default async function PublicationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isId = locale === "id";
  const typeLabels = isId ? typeLabelsId : typeLabelsEn;

  return (
    <>
      <PageHeader
        title={isId ? "Publikasi" : "Publications"}
        description={
          isId
            ? "Artikel jurnal peer-reviewed, makalah prosiding konferensi, dan book chapter dari para peneliti INSIST."
            : "Peer-reviewed journal articles, conference papers, and book chapters from INSIST researchers."
        }
      />
      <Container className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl space-y-6">
          {publications.map((pub) => (
            <article
              key={pub.id}
              className="rounded-lg border border-border p-6"
            >
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="muted">{typeLabels[pub.type] ?? pub.type}</Badge>
                <span className="text-sm text-muted-foreground">{pub.year}</span>
              </div>
              <h2 className="mt-3 text-lg font-semibold leading-snug text-foreground">
                {pub.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{pub.authors}</p>
              <p className="mt-1 text-sm font-medium text-foreground/70">
                {pub.venue}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-16 text-center text-sm text-muted-foreground">
          {isId
            ? "Basis data publikasi lengkap dengan fitur penyaringan dan ekspor BibTeX segera hadir."
            : "Full publication database with filtering and BibTeX export coming soon."}
        </p>
      </Container>
    </>
  );
}
