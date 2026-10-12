import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { getSiteConfig } from "@/content/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const site = getSiteConfig(locale);
  const isId = locale === "id";
  return {
    title: isId ? "Roadmap Riset" : "Research Roadmap",
    description: isId
      ? `Arah strategis riset dan peta jalan pengembangan di ${site.name}.`
      : `Strategic research trajectory and roadmap directions at ${site.name}.`,
  };
}

export default async function RoadmapPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isId = locale === "id";

  return (
    <>
      <PageHeader
        title={isId ? "Roadmap Riset" : "Research Roadmap"}
        description={
          isId
            ? "Arah strategis riset, visi jangka panjang, dan tonggak capaian kami dalam pengembangan sistem informasi cerdas dan berkelanjutan."
            : "Our strategic research trajectory, long-term vision, and milestones in intelligent and sustainable information systems."
        }
      />
      <Container className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base text-muted-foreground sm:text-lg">
            {isId
              ? "Peta jalan riset terperinci, linimasa tahapan, dan agenda capaian akan segera hadir."
              : "Detailed research roadmap timeline, focus areas, and milestone agendas coming soon."}
          </p>
        </div>
      </Container>
    </>
  );
}
