import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

import { routing } from "@/i18n/routing";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { getSiteConfig } from "@/content/site";

import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const siteConfig = getSiteConfig(locale);

  return {
    title: {
      default: `${siteConfig.name} — ${siteConfig.tagline}`,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
      "INSIST",
      "Information Systems",
      "Universitas Sriwijaya",
      "Research",
      "Sustainable IS",
      "Intelligent Systems",
      "Palembang",
    ],
    authors: [{ name: siteConfig.fullName }],
    openGraph: {
      type: "website",
      locale: locale === "id" ? "id_ID" : "en_US",
      siteName: siteConfig.name,
      title: `${siteConfig.name} — ${siteConfig.tagline}`,
      description: siteConfig.description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.name} — ${siteConfig.tagline}`,
      description: siteConfig.description,
    },
    icons: {
      icon: siteConfig.logo.src,
    },
    metadataBase: new URL("https://insist.unsri.ac.id"),
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
