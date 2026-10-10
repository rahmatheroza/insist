import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { getProjects } from "@/content/projects";
import { getSiteConfig } from "@/content/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const site = getSiteConfig(locale);
  return {
    title: locale === "id" ? "Proyek" : "Projects",
    description:
      locale === "id"
        ? `Proyek riset aktif dan selesai di ${site.name}.`
        : `Active and completed research projects at ${site.name}.`,
  };
}

const statusLabelsEn = {
  active: "Active",
  ongoing: "Ongoing",
  completed: "Completed",
} as const;

const statusLabelsId = {
  active: "Aktif",
  ongoing: "Sedang Berjalan",
  completed: "Selesai",
} as const;

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const projectList = getProjects(locale);
  const isId = locale === "id";
  const statusLabels = isId ? statusLabelsId : statusLabelsEn;

  return (
    <>
      <PageHeader
        title={isId ? "Proyek" : "Projects"}
        description={
          isId
            ? "Proyek riset terapan dan fundamental yang mencakup informatika kesehatan, green IT, infrastruktur cerdas, dan sistem enterprise."
            : "Applied and fundamental research projects spanning health informatics, green IT, smart infrastructure, and enterprise systems."
        }
      />
      <Container className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl space-y-6">
          {projectList.map((project) => (
            <article
              key={project.id}
              className="rounded-lg border border-border p-6"
            >
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="secondary">
                  {statusLabels[project.status] ?? project.status}
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
