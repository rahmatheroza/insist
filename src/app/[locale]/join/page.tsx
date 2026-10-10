import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { setRequestLocale } from "next-intl/server";

import { Link } from "@/i18n/routing";
import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { getJoinContent } from "@/content/join";
import { getSiteConfig } from "@/content/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const site = getSiteConfig(locale);
  return {
    title: locale === "id" ? "Bergabung" : "Join",
    description:
      locale === "id"
        ? `Bergabunglah dengan ${site.name} sebagai mahasiswa pascasarjana, peneliti, atau mitra industri.`
        : `Join ${site.name} as a graduate student, researcher, or industry partner.`,
  };
}

export default async function JoinPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const join = getJoinContent(locale);
  const isId = locale === "id";

  return (
    <>
      <PageHeader
        title={join.title}
        description={join.description}
      />
      <Container className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
          {join.opportunities.map((opportunity) => (
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
                {isId ? "Hubungi kami" : "Contact us"}
                <ArrowRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-lg border border-border bg-insist-gray-50 p-8 text-center">
          <h2 className="text-xl font-semibold text-foreground">
            {isId ? "Siap untuk berkolaborasi?" : "Ready to get started?"}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {isId
              ? "Kirimkan email berisi minat riset, CV, dan jenis kerja sama yang Anda minati. Para peneliti kami meninjau aplikasi secara berkala."
              : "Send us an email with your research interests, CV, and preferred collaboration type. Our faculty review applications on a rolling basis."}
          </p>
          <Button asChild className="mt-6">
            <Link href="/contact">
              {isId ? "Hubungi INSIST" : "Contact INSIST"}
            </Link>
          </Button>
        </div>
      </Container>
    </>
  );
}
