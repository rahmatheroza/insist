import type { Metadata } from "next";
import Image from "next/image";
import { User } from "lucide-react";

import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { people } from "@/content/people";
import { siteConfig } from "@/content/site";
import type { Person } from "@/types";

export const metadata: Metadata = {
  title: "People",
  description: `Meet the faculty, students, and alumni of ${siteConfig.name}.`,
};

const roleSections = [
  { role: "Head of Research Group", title: "Head of Research Group" },
  { role: "Senior Researcher", title: "Senior Researchers" },
  { role: "Researcher", title: "Researchers" },
];

function PersonCard({ person }: { person: Person }) {
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
              Research Interests
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

export default function PeoplePage() {
  const knownRoles = roleSections.map((s) => s.role);
  const otherPeople = people.filter((p) => !knownRoles.includes(p.role));

  return (
    <>
      <PageHeader
        title="People"
        description="Faculty researchers, graduate students, and alumni who form the INSIST research community."
      />
      <Container className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl space-y-16">
          {roleSections.map((section) => {
            const members = people.filter((p) => p.role === section.role);
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
                    <PersonCard key={person.id} person={person} />
                  ))}
                </div>
              </section>
            );
          })}

          {otherPeople.length > 0 && (
            <section className="space-y-6">
              <div className="border-b border-border pb-3">
                <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  Members
                </h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {otherPeople.map((person) => (
                  <PersonCard key={person.id} person={person} />
                ))}
              </div>
            </section>
          )}
        </div>
      </Container>
    </>
  );
}
