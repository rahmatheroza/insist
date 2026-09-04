"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { impactAreas } from "@/content/home/impact";
import type { SectionProps } from "@/types";

export function ImpactAreasSection({ className }: SectionProps) {
  return (
    <section
      className={`bg-insist-gray-50 ${className ?? ""}`}
      id="impact"
    >
      <Container as="section" className="py-24 lg:py-32">
        <SectionHeader
          title="Impact Areas"
          subtitle="Our research extends beyond publications — it shapes practice, policy, and communities."
          align="center"
          className="mx-auto"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {impactAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              {area.metric && (
                <p className="text-3xl font-bold tracking-tight text-primary">
                  {area.metric}
                </p>
              )}
              <h3 className="mt-3 text-base font-semibold text-foreground">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
