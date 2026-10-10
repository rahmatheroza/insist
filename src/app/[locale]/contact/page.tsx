import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { setRequestLocale } from "next-intl/server";

import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { getSiteConfig } from "@/content/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const site = getSiteConfig(locale);
  return {
    title: locale === "id" ? "Kontak" : "Contact",
    description:
      locale === "id"
        ? `Hubungi ${site.name} di ${site.university}.`
        : `Get in touch with ${site.name} at ${site.university}.`,
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const siteConfig = getSiteConfig(locale);

  const isId = locale === "id";

  return (
    <>
      <PageHeader
        title={isId ? "Kontak" : "Contact"}
        description={
          isId
            ? "Hubungi kami untuk kolaborasi riset, informasi program pascasarjana, pertanyaan media, atau kerja sama."
            : "Reach out for research collaborations, graduate program inquiries, media requests, or general questions."
        }
      />
      <Container className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              {isId ? "Hubungi Kami" : "Get in Touch"}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {isId
                ? "Kami menyambut baik pertanyaan dan komunikasi dari calon mahasiswa, peneliti tamu, mitra industri, dan media. Silakan sertakan rincian relevan agar kami dapat merespons dengan tepat."
                : "We welcome inquiries from prospective students, visiting researchers, industry partners, and media. Please include relevant details about your interest so we can direct your message appropriately."}
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
                  {isId ? "Alamat" : "Address"}
                </dt>
                <dd className="mt-1 pl-6 text-sm text-muted-foreground">
                  {siteConfig.address}
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-lg border border-border bg-insist-gray-50 p-8">
            <h2 className="text-lg font-semibold text-foreground">
              {isId ? "Formulir Kontak" : "Contact Form"}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {isId ? (
                <>
                  Formulir kontak dengan validasi akan diintegrasikan di sini.
                  Untuk saat ini, silakan hubungi kami langsung via email di{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-medium text-primary hover:text-insist-blue-light transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                  .
                </>
              ) : (
                <>
                  A contact form with validation will be integrated here. For
                  now, please email us directly at{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-medium text-primary hover:text-insist-blue-light transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                  .
                </>
              )}
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
