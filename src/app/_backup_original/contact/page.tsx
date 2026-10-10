import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";

import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} at ${siteConfig.university}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        description="Reach out for research collaborations, graduate program inquiries, media requests, or general questions."
      />
      <Container className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              Get in Touch
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              We welcome inquiries from prospective students, visiting
              researchers, industry partners, and media. Please include relevant
              details about your interest so we can direct your message
              appropriately.
            </p>

            <dl className="mt-8 space-y-6">
              <div>
                <dt className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Mail className="size-4" />
                  Email
                </dt>
                <dd className="mt-1 pl-6">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-primary hover:text-insist-blue-light transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <MapPin className="size-4" />
                  Address
                </dt>
                <dd className="mt-1 pl-6 text-sm text-muted-foreground">
                  {siteConfig.address}
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-lg border border-border bg-insist-gray-50 p-8">
            <h2 className="text-lg font-semibold text-foreground">
              Contact Form
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A contact form with validation will be integrated here. For now,
              please email us directly at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-primary hover:text-insist-blue-light transition-colors"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
