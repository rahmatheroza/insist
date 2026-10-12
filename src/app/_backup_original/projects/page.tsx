import type { Metadata } from "next";

import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/content/projects";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description: `Active and completed research projects at ${siteConfig.name}.`,
};

const statusLabels = {
  active: "Active",
  ongoing: "Ongoing",
  completed: "Completed",
} as const;

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projects"
        description="Applied and fundamental research projects spanning health informatics, green IT, smart infrastructure, and enterprise systems."
      />
      <Container className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl space-y-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-lg border border-border p-6"
            >
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="secondary">
                  {statusLabels[project.status]}
                </Badge>
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="muted">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h2 className="mt-3 text-lg font-semibold leading-snug text-foreground">
                {project.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </>
  );
}
