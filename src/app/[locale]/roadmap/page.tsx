import type { Metadata } from "next";
import Image from "next/image";
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
  const isId = locale === "id";
  return {
    title: isId ? "Roadmap Riset" : "Research Roadmap",
    description: isId
      ? `Peta Jalan Lima Tahunan (2027–2031+): Evolusi Lab Data dan AI ${site.name}.`
      : `Five-Year Strategic Roadmap (2027–2031+): Evolution of the ${site.name} Data and AI Lab.`,
  };
}

export default async function RoadmapPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isId = locale === "id";

  const imageSrc = isId
    ? "/images/roadmap/roadmap-id.jpeg"
    : "/images/roadmap/roadmap-en.jpeg";

  const phases = isId
    ? [
        {
          phase: "Fase 1 (2027–2028)",
          title: "Fondasi & Standardisasi",
          focus: "Konsolidasi Internal & Infrastruktur Awal",
          description:
            "Menguatkan rekam jejak riset, menyusun standar etika dan Green Software Engineering, serta membentuk resmi INSIST Data and AI Lab.",
          highlights: ["9–12 Publikasi Scopus", "6 Hak Kekayaan Intelektual (HKI)", "3–5 Mitra Kerja Sama"],
        },
        {
          phase: "Fase 2 (2029–2030)",
          title: "Skalabilitas & Ekspansi",
          focus: "Penguatan Jejaring & Living Lab",
          description:
            "Mengembangkan living lab operasional, menyelenggarakan konferensi internasional perdana, serta memenangkan hibah penelitian kompetitif.",
          highlights: ["2–3 Prototipe (TRL 6+)", "1–2 Hibah Kompetitif", "Konferensi Internasional"],
        },
        {
          phase: "Fase 3 (2031+)",
          title: "Kepemimpinan & Dampak",
          focus: "Hilirisasi Skala Penuh & Kemandirian",
          description:
            "Mencapai kemandirian pendanaan, transfer teknologi ke pemerintah (SPBE, kota cerdas) dan industri (ESG), serta komersialisasi riset.",
          highlights: ["Adopsi 1 Platform oleh Mitra", "30% Penurunan Jejak Karbon", "Komersialisasi & Spin-Off"],
        },
      ]
    : [
        {
          phase: "Phase 1 (2027–2028)",
          title: "Foundation & Standardization",
          focus: "Internal Consolidation & Core Infrastructure",
          description:
            "Establishing institutional track records, initial lab infrastructure, green software engineering standards, and baseline operational workflows.",
          highlights: ["9–12 Scopus Papers", "6 Intellectual Property Rights (IPR)", "3–5 Strategic Partners"],
        },
        {
          phase: "Phase 2 (2029–2030)",
          title: "Scalability & Expansion",
          focus: "Living Labs, Grants & Network Building",
          description:
            "Launching operational living labs, hosting the institute's inaugural international conference, and expanding regional/international collaborations.",
          highlights: ["2–3 Advanced Prototypes (TRL 6+)", "1–2 Competitive Grants", "International Conference"],
        },
        {
          phase: "Phase 3 (2031 Onwards)",
          title: "Leadership & Impact",
          focus: "Commercial Downstreaming & Financial Independence",
          description:
            "Transitioning to self-sustaining operations, transferring technology to SPBE and smart cities, and achieving widespread industry ESG adoption.",
          highlights: ["Central Platform Adoption", "30% Carbon Reduction", "Spin-Offs & Commercialization"],
        },
      ];

  return (
    <>
      <PageHeader
        title={isId ? "Roadmap Riset" : "Research Roadmap"}
        description={
          isId
            ? "Peta Jalan Lima Tahunan INSIST (2027–2031+): Evolusi Lab Data dan AI INSIST dalam mewujudkan riset sistem informasi yang cerdas, berdampak, dan berkelanjutan."
            : "INSIST Five-Year Strategic Roadmap (2027–2031+): Evolution of the INSIST Data and AI Lab toward intelligent, sustainable, and impactful information systems research."
        }
      />

      <Container className="py-12 lg:py-16">
        {/* Roadmap Infographic Card */}
        <section aria-label="Roadmap Infographic">
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-sm sm:p-4">
            <a
              href={imageSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-zoom-in"
              title={isId ? "Klik untuk melihat ukuran penuh" : "Click to view full size"}
            >
              <Image
                src={imageSrc}
                alt={isId ? "Peta Jalan Riset Lima Tahunan INSIST (2027-2031+)" : "INSIST Five-Year Strategic Roadmap (2027-2031+)"}
                width={1920}
                height={1080}
                priority
                className="h-auto w-full rounded-xl object-contain transition-transform duration-300 group-hover:scale-[1.005]"
              />
            </a>
          </div>
        </section>

        {/* Strategic Phases Overview */}
        <section className="mt-16 space-y-8" aria-label="Strategic Phases">
          <div className="border-b border-border pb-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {isId ? "Tahapan Strategis Riset" : "Strategic Roadmap Phases"}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              {isId
                ? "Tiga fase utama dalam perjalanan pengembangan riset, inovasi, dan hilirisasi INSIST."
                : "Three strategic phases guiding the development, innovation, and translation of INSIST research."}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {phases.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/40"
              >
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {item.phase}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-muted-foreground">
                      {item.focus}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-border pt-4">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
                    {isId ? "Target Utama" : "Key Deliverables"}
                  </p>
                  <ul className="space-y-1.5">
                    {item.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="flex items-center gap-2 text-xs font-medium text-foreground/80"
                      >
                        <span className="size-1.5 rounded-full bg-primary shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
