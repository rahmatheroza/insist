"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { communityContent } from "@/content/home/community";
import type { SectionProps } from "@/types";

export function CommunitySection({ className }: SectionProps) {
  return (
    <section className={className} id="community">
      <Container as="section" className="py-24 lg:py-32">
        <SectionHeader
          title={communityContent.title}
          subtitle={communityContent.description}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {communityContent.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-lg border border-border p-6 text-center"
            >
              <p className="text-4xl font-bold tracking-tight text-primary">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
