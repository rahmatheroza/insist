"use client";

import {
  BarChart3,
  Brain,
  HeartPulse,
  Layers,
  Leaf,
  Network,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/shared/container";
import { LinkArrow } from "@/components/shared/link-arrow";
import { SectionHeader } from "@/components/shared/section-header";
import { researchThemes } from "@/content/site";
import type { SectionProps } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Leaf,
  HeartPulse,
  BarChart3,
  Network,
  Layers,
};

export function ResearchThemesSection({ className }: SectionProps) {
  return (
    <section className={className} id="research-themes">
      <Container as="section" className="py-24 lg:py-32">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            title="Research Themes"
            subtitle="Six interconnected areas where we pursue rigorous, impact-oriented inquiry."
            className="mb-0"
          />
          <LinkArrow href="/research" className="shrink-0 pb-1">
            View all research
          </LinkArrow>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {researchThemes.map((theme, index) => {
            const Icon = iconMap[theme.icon] ?? Layers;
            return (
              <motion.article
                key={theme.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group rounded-lg border border-border p-6 transition-colors hover:border-primary/30 hover:bg-insist-gray-50"
              >
                <div className="mb-4 inline-flex size-10 items-center justify-center rounded-md bg-primary/5 text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {theme.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {theme.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
