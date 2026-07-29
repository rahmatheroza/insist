"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { heroContent, siteConfig } from "@/content/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <Container as="section" className="py-24 sm:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="mb-6 text-sm font-medium tracking-wide text-insist-emerald uppercase">
            {siteConfig.university}
          </p>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {heroContent.headline}
          </h1>
          <p className="mt-6 text-xl font-medium leading-snug text-foreground/80 sm:text-2xl">
            {heroContent.subheadline}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {heroContent.description}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg">
              <Link href={heroContent.primaryCta.href}>
                {heroContent.primaryCta.label}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={heroContent.secondaryCta.href}>
                {heroContent.secondaryCta.label}
              </Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
