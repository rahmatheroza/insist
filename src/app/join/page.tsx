import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { joinContent } from "@/content/join";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Join",
  description: `Join ${siteConfig.name} as a graduate student, researcher, or industry partner.`,
};

export default function JoinPage() {
  return (
    <>
      <PageHeader
        title="Join INSIST"
        description={joinContent.description}
      />
      <Container className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
          {joinContent.opportunities.map((opportunity) => (
            <article
              key={opportunity.title}
              id={opportunity.href.split("#")[1]}
              className="rounded-lg border border-border p-6"
            >
              <h2 className="text-lg font-semibold text-foreground">
                {opportunity.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {opportunity.description}
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-insist-blue-light transition-colors"
              >
                Contact us
                <ArrowRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-lg border border-border bg-insist-gray-50 p-8 text-center">
          <h2 className="text-xl font-semibold text-foreground">
            Ready to get started?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Send us an email with your research interests, CV, and preferred
            collaboration type. Our faculty review applications on a rolling
            basis.
          </p>
          <Button asChild className="mt-6">
            <Link href="/contact">Contact INSIST</Link>
          </Button>
        </div>
      </Container>
    </>
  );
}
