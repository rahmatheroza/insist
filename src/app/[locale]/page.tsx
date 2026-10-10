import { setRequestLocale } from "next-intl/server";
import {
  AboutSection,
  CommunitySection,
  FeaturedPublicationsSection,
  HeroSection,
  ImpactAreasSection,
  JoinSection,
  LatestNewsSection,
  ResearchThemesSection,
} from "@/components/sections";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ResearchThemesSection />
      <ImpactAreasSection />
      <FeaturedPublicationsSection />
      <LatestNewsSection />
      <CommunitySection />
      <JoinSection />
    </>
  );
}
