import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";

import { Link } from "@/i18n/routing";
import { Container } from "@/components/shared/container";
import { Badge } from "@/components/ui/badge";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isId = locale === "id";
  return {
    title: isId
      ? "INSIST Jajaki Kolaborasi dengan Kominfo Provinsi Sumatera Selatan"
      : "INSIST Explores Collaboration with Kominfo South Sumatra Province",
    description: isId
      ? "Perwakilan INSIST berdiskusi dengan Dinas Kominfo Provinsi Sumsel mengenai kemungkinan kolaborasi dalam menyelesaikan permasalahan daerah."
      : "INSIST representatives met with the South Sumatra Provincial Communication and Informatics Office to discuss potential collaboration.",
  };
}

export default async function KominfoSumselPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isId = locale === "id";

  const title = isId
    ? "INSIST Jajaki Kolaborasi dengan Kominfo Provinsi Sumatera Selatan"
    : "INSIST Explores Collaboration with Kominfo South Sumatra Province";

  const dateFormatted = isId ? "13 Oktober 2026" : "October 13, 2026";

  return (
    <>
      {/* Back link */}
      <div className="border-b border-border bg-insist-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-4 lg:px-8">
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
                clipRule="evenodd"
              />
            </svg>
            {isId ? "Kembali ke Berita" : "Back to News"}
          </Link>
        </div>
      </div>

      <Container className="py-12 lg:py-20">
        <article className="mx-auto max-w-3xl">
          {/* Category & Date */}
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="secondary">
              {isId ? "Pengumuman" : "Announcement"}
            </Badge>
            <time
              dateTime="2026-10-13"
              className="text-sm text-muted-foreground"
            >
              {isId ? "Palembang, " : "Palembang, "}{dateFormatted}
            </time>
          </div>

          {/* Title */}
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl leading-snug">
            {title}
          </h1>

          {/* Placeholder Image */}
          <figure className="mt-8 overflow-hidden rounded-xl border border-border shadow-sm">
            <Image
              src="/images/news-kominfo-sumsel.jpg"
              alt={
                isId
                  ? "Pertemuan INSIST dengan Dinas Kominfo Provinsi Sumatera Selatan, 13 Oktober 2026"
                  : "INSIST meeting with the South Sumatra Kominfo Office, October 13, 2026"
              }
              width={900}
              height={506}
              className="w-full object-cover"
              priority
            />
            <figcaption className="bg-insist-gray-50 px-4 py-2.5 text-xs text-muted-foreground text-center">
              {isId
                ? "Dokumentasi pertemuan INSIST dengan Dinas Kominfo Provinsi Sumsel, 13 Oktober 2026"
                : "Documentation of the INSIST meeting with South Sumatra Kominfo Office, October 13, 2026"}
            </figcaption>
          </figure>

          {/* Body */}
          <div className="prose prose-neutral dark:prose-invert mt-10 max-w-none text-foreground leading-relaxed space-y-5">
            {isId ? (
              <>
                <p>
                  <strong>PALEMBANG</strong> – Perwakilan Asosiasi Riset Sistem Informasi Cerdas dan
                  Berkelanjutan (<em>Intelligent and Sustainable Information Systems</em>/INSIST) berdiskusi dengan
                  pihak Dinas Komunikasi dan Informatika (Kominfo) Provinsi Sumatera Selatan (Sumsel), mengenai
                  kemungkinan kolaborasi sebagai bentuk kontribusi INSIST, ikut menyelesaikan permasalahan yang terjadi
                  di Provinsi Sumatera Selatan melalui kepakaran INSIST di bidang Sistem Informasi Cerdas dan
                  Berkelanjutan. Pertemuan berlangsung pada <strong>Selasa, 13 Oktober 2026</strong>, di kantor Dinas
                  Kominfo Provinsi Sumsel.
                </p>

                <div>
                  <p className="font-semibold text-foreground mb-2">Perwakilan Dinas Kominfo Provinsi Sumsel:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Bapak Deswan Ahsani, S.STP., M.Si. — Sekretaris Dinas</li>
                    <li>Bapak Deddy Erwin Junaidi, S.Kom. — Kepala Bidang (Kabid) E-Government</li>
                    <li>Ibu Patricia Yulia Sitinjak, S.H., M.Si. — Mantan Kabid E-Gov yang diperbantukan di Dinas Kominfo Provinsi Sumsel</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-foreground mb-2">Perwakilan INSIST:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Bapak Apriansyah Putra, M.Kom.</li>
                    <li>Bapak Ari Wedhasmara, Ph.D.</li>
                    <li>Bapak Rahmat Izwan Heroza, Ph.D.</li>
                    <li>Juliana Nur Rosiba (Mahasiswi Universitas Sriwijaya)</li>
                    <li>Fachria Imaniar (Mahasiswi Universitas Sriwijaya)</li>
                  </ul>
                </div>

                <p>
                  Dalam pertemuan itu, INSIST menyampaikan berkenaan permasalahan-permasalahan yang dihadapi Provinsi
                  Sumatera Selatan, baik di tingkat provinsi maupun kabupaten/kota, khususnya yang berkaitan dengan
                  tata kelola data, layanan publik digital, infrastruktur teknologi informasi, keamanan informasi,
                  kesenjangan digital, serta isu lingkungan dan keberlanjutan yang dapat dijawab dengan teknologi
                  informasi. Permasalahan tersebut akan dikaji dan diwujudkan dalam bentuk Sistem Informasi Cerdas dan
                  Berkelanjutan yang bermanfaat bagi pemerintah daerah dan masyarakat.
                </p>

                <p>
                  Dinas Kominfo Provinsi Sumsel menyatakan siap berkolaborasi dengan menjadi mitra terlebih dahulu.
                  Dinas Kominfo Provinsi Sumsel juga menyarankan agar mengajak Organisasi Pemerintah Daerah lainnya
                  seperti Badan Riset dan Inovasi Daerah (BRIDA) dilibatkan, agar jaringan kerja sama lebih luas ke
                  depannya, dengan mengikutsertakan peneliti dari pihak lain.
                </p>

                <p>
                  Dalam penjelasannya, Dinas Kominfo Provinsi Sumsel menyebut perannya bersifat koordinasi,
                  banyak aplikasi berada di tingkat kota atau kabupaten, namun data dan informasi yang tersedia dikoordinasikan oleh 
                  pihak Provinsi.
                </p>

                <p>
                  Sebagai bentuk tidak lanjut dari inisiasi ini, Dinas Kominfo Provinsi Sumsel akan melakukan audiensi formal, 
                  yaitu mempertemukan Perwakilan INSIST dengan jajaran pimpinan Dinas Kominfo Provinsi Sumatera Selatan 
                  (Kepala Dinas, Sekretaris Dinas, Kabid yang terkait), dengan terlebih dahulu menunggu surat permohonan dan usulan proposal 
                  kerjasama yang diajukan oleh INSIST.
                </p>

                <p>
                  Tim Media dan Komunikasi INSIST.
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong>PALEMBANG</strong> – Representatives of the Association for Intelligent and Sustainable
                  Information Systems Research (INSIST) held a discussion with the Communication and Informatics
                  (Kominfo) Office of South Sumatra Province regarding the possibility of collaboration as a form of
                  INSIST&apos;s contribution to addressing challenges in South Sumatra Province through INSIST&apos;s
                  expertise in Intelligent and Sustainable Information Systems. The meeting took place on{" "}
                  <strong>Tuesday, October 13, 2026</strong>, at the South Sumatra Kominfo Office.
                </p>

                <div>
                  <p className="font-semibold text-foreground mb-2">South Sumatra Kominfo Office Representatives:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Mr. Deswan Ahsani, S.STP., M.Si. — Office Secretary</li>
                    <li>Mr. Deddy Erwin Junaidi, S.Kom. — Head of E-Government Division</li>
                    <li>Ms. Patricia Yulia Sitinjak, S.H., M.Si. — Former Head of E-Gov Division, seconded to South Sumatra Kominfo</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-foreground mb-2">INSIST Representatives:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Mr. Apriansyah Putra, M.Kom.</li>
                    <li>Mr. Ari Wedhasmara, Ph.D.</li>
                    <li>Mr. Rahmat Izwan Heroza, Ph.D.</li>
                    <li>Juliana Nur Rosiba (Sriwijaya University Student)</li>
                    <li>Fachria Imaniar (Sriwijaya University Student)</li>
                  </ul>
                </div>

                <p>
                  During the meeting, INSIST presented the various challenges faced by South Sumatra Province, both
                  at the provincial and district/city levels, particularly those relating to data governance, digital
                  public services, information technology infrastructure, information security, digital divide, and
                  environmental and sustainability issues that can be addressed through information technology. These
                  challenges will be studied and realized in the form of Intelligent and Sustainable Information
                  Systems that benefit local governments and communities.
                </p>

                <p>
                  The South Sumatra Kominfo Office expressed readiness to collaborate, starting as a partner. They
                  also suggested involving other Regional Government Organizations such as the Regional Research and
                  Innovation Agency (BRIDA) in order to broaden the collaborative network going forward, by including
                  researchers from other institutions.
                </p>

                <p>
                  In its explanation, the Communication and Informatics (Kominfo) Office of South Sumatra Province noted that its role is primarily coordinative
                  — many applications are managed at the city or district level, while data and information are
                  coordinated at the provincial level.
                </p>

                <p>
                  As a follow-up to this initiative, the Communication and Informatics (Kominfo) Office of South Sumatra Province will arrange a formal audience,
                  bringing INSIST representatives together with the senior leadership of the Communication and Informatics (Kominfo) Office of South Sumatra Province (including the Head of Office, Office Secretary, and relevant
                  Division Heads), pending receipt of a formal request letter and collaboration proposal submitted
                  by INSIST.
                </p>

                <p>
                  INSIST Media and Communications Team.
                </p>
              </>
            )}
          </div>

          {/* Back link bottom */}
          <div className="mt-12 border-t border-border pt-8">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-insist-blue-light transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
                  clipRule="evenodd"
                />
              </svg>
              {isId ? "Kembali ke semua berita" : "Back to all news"}
            </Link>
          </div>
        </article>
      </Container>
    </>
  );
}
