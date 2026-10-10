import type { Metadata } from "next";
import Image from "next/image";
import { User } from "lucide-react";
import { setRequestLocale } from "next-intl/server";

import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { getPeople } from "@/content/people";
import { getSiteConfig } from "@/content/site";
import type { Person } from "@/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const site = getSiteConfig(locale);
  return {
    title: locale === "id" ? "Anggota" : "People",
    description:
      locale === "id"
        ? `Kenali dosen, mahasiswa, dan alumni dari ${site.name}.`
        : `Meet the faculty, students, and alumni of ${site.name}.`,
  };
}

const roleSectionsEn = [
  { role: "Head of Research Group", title: "Head of Research Group" },
  { role: "Senior Researcher", title: "Senior Researchers" },
  { role: "Researcher", title: "Researchers" },
];

const roleSectionsId = [
  { role: "Head of Research Group", title: "Ketua Kelompok Riset" },
  { role: "Senior Researcher", title: "Peneliti Senior" },
  { role: "Researcher", title: "Peneliti" },
];

function PersonCard({
  person,
  interestsLabel,
}: {
  person: Person;
  interestsLabel: string;
}) {
  return (
    <article className="overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary/20">
      <div className="relative aspect-square bg-insist-gray-100">
        {person.image ? (
          <Image
            src={person.image}
            alt={`${person.name} profile photo`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 400px"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            <User className="size-16 stroke-1" aria-hidden />
          </div>
        )}
      </div>
      <div className="p-4 pt-3">
        <h3 className="text-base font-semibold leading-snug text-foreground">
          {person.name}
        </h3>
        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
          {person.affiliation}
        </p>
        {person.researchInterests && person.researchInterests.length > 0 && (
          <div className="mt-3 border-t border-border pt-3">
            <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60">
              {interestsLabel}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {person.researchInterests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-md border border-border bg-muted px-2 py-0.5 text-[11px] leading-relaxed text-muted-foreground"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export default async function PeoplePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const peopleList = getPeople(locale);
  const isId = locale === "id";

  const roleSections = isId ? roleSectionsId : roleSectionsEn;
  const knownRoles = roleSections.map((s) => s.role);
  const otherPeople = peopleList.filter((p) => !knownRoles.includes(p.role));
  const interestsLabel = isId ? "Bidang Minat Riset" : "Research Interests";

  return (
    <>
      <PageHeader
        title={isId ? "Anggota" : "People"}
        description={
          isId
            ? "Dosen peneliti, mahasiswa pascasarjana, dan alumni yang membentuk komunitas riset INSIST."
            : "Faculty researchers, graduate students, and alumni who form the INSIST research community."
        }
      />
      <Container className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl space-y-16">
          {roleSections.map((section) => {
            const members = peopleList.filter((p) => p.role === section.role);
            if (members.length === 0) return null;

            return (
              <section key={section.role} className="space-y-6">
                <div className="border-b border-border pb-3">
                  <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    {section.title}
                  </h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {members.map((person) => (
                    <PersonCard
                      key={person.id}
                      person={person}
                      interestsLabel={interestsLabel}
                    />
                  ))}
                </div>
              </section>
            );
          })}

          {otherPeople.length > 0 && (
            <section className="space-y-6">
              <div className="border-b border-border pb-3">
                <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  {isId ? "Anggota" : "Members"}
                </h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {otherPeople.map((person) => (
                  <PersonCard
                    key={person.id}
                    person={person}
                    interestsLabel={interestsLabel}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      </Container>
    </>
  );
}
