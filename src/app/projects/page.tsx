import type { Metadata } from "next";

import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description: `Active and completed research projects at ${siteConfig.name}.`,
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projects"
        description="Applied and fundamental research projects spanning health informatics, green IT, smart infrastructure, and enterprise systems."
      />
      <Container className="py-16 lg:py-24">
        <p className="mx-auto max-w-2xl text-center text-muted-foreground">
          Project listings with status, collaborators, and outcomes will be
          added here. Each project will link to related publications and team
          members.
        </p>
      </Container>
    </>
  );
}
