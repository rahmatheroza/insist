import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { getResearchThemes } from "@/content/research";
import { getSiteConfig } from "@/content/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const site = getSiteConfig(locale);
  return {
    title: locale === "id" ? "Riset" : "Research",
    description:
      locale === "id"
        ? `Jelajahi tema dan bidang riset di ${site.name}.`
        : `Explore research themes and areas at ${site.name}.`,
  };
}

export default async function ResearchPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const themes = getResearchThemes(locale);
  const isId = locale === "id";

  return (
    <>
      <PageHeader
        title={isId ? "Riset" : "Research"}
        description={
          isId
            ? "Riset kami mencakup sistem cerdas, SI berkelanjutan, kesehatan digital, dan topik lainnya — disatukan oleh komitmen pada keilmuan yang mendalam dan berdampak nyata."
            : "Our research spans intelligent systems, sustainable IS, digital health, and more — united by a commitment to rigorous, impact-oriented inquiry."
        }
      />
      <Container className="py-16 lg:py-24">
        <div className="grid gap-6 sm:grid-cols-2">
          {themes.map((theme) => (
            <article
              key={theme.id}
              className="rounded-lg border border-border p-6"
            >
              <h2 className="text-lg font-semibold text-foreground">
                {theme.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {theme.description}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-16 text-center text-sm text-muted-foreground">
          {isId
            ? "Halaman detail topik riset dan daftar proyek terperinci segera hadir."
            : "Detailed research pages and project listings coming soon."}
        </p>
      </Container>
    </>
  );
}
