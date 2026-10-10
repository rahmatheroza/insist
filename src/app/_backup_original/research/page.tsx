import type { Metadata } from "next";

import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { researchThemes } from "@/content/research";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Research",
  description: `Explore research themes and areas at ${siteConfig.name}.`,
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        title="Research"
        description="Our research spans intelligent systems, sustainable IS, digital health, and more — united by a commitment to rigorous, impact-oriented inquiry."
      />
      <Container className="py-16 lg:py-24">
        <div className="grid gap-6 sm:grid-cols-2">
          {researchThemes.map((theme) => (
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
          Detailed research pages and project listings coming soon.
        </p>
      </Container>
    </>
  );
}
