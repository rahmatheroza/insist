import type { Metadata } from "next";

import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { publications } from "@/content/publications";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Publications",
  description: `Browse publications from ${siteConfig.name} researchers.`,
};

const typeLabels = {
  journal: "Journal",
  conference: "Conference",
  "book-chapter": "Book Chapter",
} as const;

export default function PublicationsPage() {
  return (
    <>
      <PageHeader
        title="Publications"
        description="Peer-reviewed journal articles, conference papers, and book chapters from INSIST researchers."
      />
      <Container className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl space-y-6">
          {publications.map((pub) => (
            <article
              key={pub.id}
              className="rounded-lg border border-border p-6"
            >
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="muted">{typeLabels[pub.type]}</Badge>
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
          Full publication database with filtering and BibTeX export coming soon.
        </p>
      </Container>
    </>
  );
}
