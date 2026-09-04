"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { aboutContent } from "@/content/about";
import type { SectionProps } from "@/types";

export function AboutSection({ className }: SectionProps) {
  return (
    <section className={className} id="about">
      <Container as="section" className="py-24 lg:py-32">
        <SectionHeader
          title={aboutContent.title}
          subtitle={aboutContent.subtitle}
        />

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6 lg:col-span-3"
          >
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <dl className="grid grid-cols-2 gap-6">
              {aboutContent.highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-border bg-insist-gray-50 p-5"
                >
                  <dt className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-lg font-semibold text-foreground">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
