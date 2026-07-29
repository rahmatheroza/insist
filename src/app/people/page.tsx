import type { Metadata } from "next";

import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "People",
  description: `Meet the faculty, students, and alumni of ${siteConfig.name}.`,
};

export default function PeoplePage() {
  return (
    <>
      <PageHeader
        title="People"
        description="Faculty researchers, graduate students, and alumni who form the INSIST research community."
      />
      <Container className="py-16 lg:py-24">
        <p className="mx-auto max-w-2xl text-center text-muted-foreground">
          Faculty profiles, student directories, and alumni network will be
          published here. Content is structured for future CMS or Markdown
          integration.
        </p>
      </Container>
    </>
  );
}
