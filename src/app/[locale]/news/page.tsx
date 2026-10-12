import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { Link } from "@/i18n/routing";
import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { getNews } from "@/content/news";
import { getSiteConfig } from "@/content/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const site = getSiteConfig(locale);
  return {
    title: locale === "id" ? "Berita" : "News",
    description:
      locale === "id"
        ? `Berita dan pengumuman terbaru dari ${site.name}.`
        : `Latest news and announcements from ${site.name}.`,
  };
}

const categoryLabelsEn = {
  announcement: "Announcement",
  event: "Event",
  achievement: "Achievement",
  publication: "Publication",
} as const;

const categoryLabelsId = {
  announcement: "Pengumuman",
  event: "Kegiatan",
  achievement: "Prestasi",
  publication: "Publikasi",
} as const;

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const newsItems = getNews(locale);
  const isId = locale === "id";
  const categoryLabels = isId ? categoryLabelsId : categoryLabelsEn;

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString(
      isId ? "id-ID" : "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );
  }

  return (
    <>
      <PageHeader
        title={isId ? "Berita" : "News"}
        description={
          isId
            ? "Kegiatan, kolaborasi, pencapaian, dan kabar terbaru dari komunitas INSIST."
            : "Events, collaborations, achievements, and announcements from the INSIST community."
        }
      />
      <Container className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl space-y-6">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="rounded-lg border border-border p-6"
            >
              <div className="flex items-center gap-3">
                <Badge variant="secondary">
                  {categoryLabels[item.category] ?? item.category}
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
                {isId ? "Baca selengkapnya" : "Read more"}
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-16 text-center text-sm text-muted-foreground">
          {isId
            ? "Artikel berita individu dan arsip akan segera ditambahkan."
            : "Individual news articles and an archive will be added soon."}
        </p>
      </Container>
    </>
  );
}
