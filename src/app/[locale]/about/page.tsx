import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { getAboutContent } from "@/content/about";
import { getSiteConfig } from "@/content/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const site = getSiteConfig(locale);
  return {
    title: locale === "id" ? "Tentang" : "About",
    description:
      locale === "id"
        ? `Pelajari tentang ${site.fullName} di ${site.university}.`
        : `Learn about ${site.fullName} at ${site.university}.`,
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const about = getAboutContent(locale);

  return (
    <>
      <PageHeader
        title={about.title}
        description={about.subtitle}
      />
      <Container className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl space-y-6">
          {about.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <p className="mx-auto mt-16 max-w-3xl text-center text-sm text-muted-foreground">
          {locale === "id"
            ? "Konten halaman tentang kami selengkapnya segera hadir."
            : "Full about page content coming soon."}
        </p>
      </Container>
    </>
  );
}
