"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/routing";
import { Container } from "@/components/shared/container";
import { LinkArrow } from "@/components/shared/link-arrow";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { getNews } from "@/content/news";
import type { SectionProps } from "@/types";

export function LatestNewsSection({ className }: SectionProps) {
  const locale = useLocale();
  const t = useTranslations("home.news");
  const tCat = useTranslations("newsPage.categories");
  const latestNews = getNews(locale);

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case "announcement":
        return tCat("announcement");
      case "event":
        return tCat("event");
      case "achievement":
        return tCat("achievement");
      case "publication":
        return tCat("publication");
      default:
        return cat;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(
      locale === "id" ? "id-ID" : "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );
  };

  return (
    <section
      className={`bg-insist-gray-50 ${className ?? ""}`}
      id="news"
    >
      <Container as="section" className="py-24 lg:py-32">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            title={t("title")}
            subtitle={t("subtitle")}
            className="mb-0"
          />
          <LinkArrow href="/news" className="shrink-0 pb-1">
            {t("viewAll")}
          </LinkArrow>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {latestNews.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-lg border border-border bg-background p-6 transition-colors hover:border-primary/30"
              >
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">
                    {getCategoryLabel(item.category)}
                  </Badge>
                  <time
                    dateTime={item.date}
                    className="text-xs text-muted-foreground"
                  >
                    {formatDate(item.date)}
                  </time>
                </div>
                <h3 className="mt-4 text-base font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.excerpt}
                </p>
              </Link>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
