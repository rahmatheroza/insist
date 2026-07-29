import type { Metadata } from "next";

import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { aboutContent, siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.fullName} at ${siteConfig.university}.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About INSIST"
        description={aboutContent.subtitle}
      />
      <Container className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl space-y-6">
          {aboutContent.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <p className="mx-auto mt-16 max-w-3xl text-center text-sm text-muted-foreground">
          Full about page content coming soon.
        </p>
      </Container>
    </>
  );
}
