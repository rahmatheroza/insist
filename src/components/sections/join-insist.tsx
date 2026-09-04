"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { joinContent } from "@/content/join";
import type { SectionProps } from "@/types";

export function JoinSection({ className }: SectionProps) {
  return (
    <section
      className={`border-t border-border bg-primary text-primary-foreground ${className ?? ""}`}
      id="join"
    >
      <Container as="section" className="py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {joinContent.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
            {joinContent.description}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {joinContent.opportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 p-6"
            >
              <h3 className="text-lg font-semibold">{opportunity.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">
                {opportunity.description}
              </p>
              <Link
                href={opportunity.href}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary-foreground/90 transition-colors hover:text-primary-foreground"
              >
                Learn more
                <ArrowRight className="size-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <Link href="/join">Get Started</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
