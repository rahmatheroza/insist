"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/shared/container";
import { LinkArrow } from "@/components/shared/link-arrow";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { featuredPublications } from "@/content/site";
import type { SectionProps } from "@/types";

const typeLabels = {
  journal: "Journal",
  conference: "Conference",
  "book-chapter": "Book Chapter",
} as const;

export function FeaturedPublicationsSection({ className }: SectionProps) {
  return (
    <section className={className} id="publications">
      <Container as="section" className="py-24 lg:py-32">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            title="Featured Publications"
            subtitle="Selected recent work from INSIST researchers in leading venues."
            className="mb-0"
          />
          <LinkArrow href="/publications" className="shrink-0 pb-1">
            All publications
          </LinkArrow>
        </div>

        <div className="mt-12 space-y-6">
          {featuredPublications.map((pub, index) => (
            <motion.article
              key={pub.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group rounded-lg border border-border p-6 transition-colors hover:border-primary/30 hover:bg-insist-gray-50"
            >
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="muted">{typeLabels[pub.type]}</Badge>
                <span className="text-sm text-muted-foreground">{pub.year}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
                {pub.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{pub.authors}</p>
              <p className="mt-1 text-sm font-medium text-foreground/70">
                {pub.venue}
              </p>
              {pub.doi && (
                <p className="mt-2 text-xs text-muted-foreground">
                  DOI: {pub.doi}
                </p>
              )}
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
