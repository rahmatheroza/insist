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

export default function HomePage() {
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
