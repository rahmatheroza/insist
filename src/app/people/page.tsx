import type { Metadata } from "next";
import Image from "next/image";
import { User } from "lucide-react";

import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { people } from "@/content/people";
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
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3">
          {people.map((person) => (
            <article
              key={person.id}
              className="overflow-hidden rounded-lg border border-border"
            >
              <div className="relative aspect-[4/3] bg-insist-gray-100">
                {person.image ? (
                  <Image
                    src={person.image}
                    alt={`${person.name} profile photo`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 400px"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-muted-foreground">
                    <User className="size-16 stroke-1" aria-hidden />
                  </div>
                )}
              </div>
              <div className="p-4 pt-3">
                <h2 className="text-base font-semibold leading-snug text-foreground">
                  {person.name}
                </h2>
                <span className="mt-1.5 inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                  {person.role}
                </span>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {person.affiliation}
                </p>
                {person.researchInterests &&
                  person.researchInterests.length > 0 && (
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
          ))}
        </div>
      </Container>
    </>
  );
}
