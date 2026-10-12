import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { news } from "@/content/news";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "News",
  description: `Latest news and announcements from ${siteConfig.name}.`,
};

const categoryLabels = {
  announcement: "Announcement",
  event: "Event",
  achievement: "Achievement",
  publication: "Publication",
} as const;

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function NewsPage() {
  return (
    <>
      <PageHeader
        title="News"
        description="Events, collaborations, achievements, and announcements from the INSIST community."
      />
      <Container className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl space-y-6">
          {news.map((item) => (
            <article
              key={item.id}
              className="rounded-lg border border-border p-6"
            >
              <div className="flex items-center gap-3">
                <Badge variant="secondary">
                  {categoryLabels[item.category]}
                </Badge>
                <time
                  dateTime={item.date}
                  className="text-xs text-muted-foreground"
                >
                  {formatDate(item.date)}
                </time>
              </div>
              <h2 className="mt-4 text-lg font-semibold text-foreground">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.excerpt}
              </p>
              <Link
                href={item.href}
                className="mt-4 inline-block text-sm font-medium text-primary hover:text-insist-blue-light transition-colors"
              >
                Read more
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-16 text-center text-sm text-muted-foreground">
          Individual news articles and an archive will be added soon.
        </p>
      </Container>
    </>
  );
}
