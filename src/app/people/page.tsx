import type { Metadata } from "next";
import Image from "next/image";
import { User } from "lucide-react";

import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { people, siteConfig } from "@/content/site";

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
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
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
              <div className="p-6">
                <h2 className="text-lg font-semibold text-foreground">
                  {person.name}
                </h2>
                <p className="mt-1 text-sm font-medium text-primary">
                  {person.role}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {person.affiliation}
                </p>
                {person.researchInterests &&
                  person.researchInterests.length > 0 && (
                    <div className="mt-4">
                      <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                        Research Interests
                      </p>
                      <ul className="mt-2 space-y-1">
                        {person.researchInterests.map((interest) => (
                          <li
                            key={interest}
                            className="text-sm text-muted-foreground"
                          >
                            {interest}
                          </li>
                        ))}
                      </ul>
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
