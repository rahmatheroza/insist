import Link from "next/link";
import { Github, GraduationCap, Linkedin, Mail, MapPin } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { Separator } from "@/components/ui/separator";
import { navItems, siteConfig } from "@/content/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-insist-gray-50">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo imageClassName="h-16 sm:h-20" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              {siteConfig.fullName} at {siteConfig.university}. Advancing
              intelligent and sustainable information systems through research,
              collaboration, and impact.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Mail className="size-4 shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-foreground transition-colors"
                >
                  {siteConfig.email}
                </a>
              </span>
              <span className="inline-flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                {siteConfig.address}
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Navigate</h3>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Connect</h3>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.social.github && (
                <li>
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Github className="size-4" />
                    GitHub
                  </a>
                </li>
              )}
              {siteConfig.social.linkedin && (
                <li>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Linkedin className="size-4" />
                    LinkedIn
                  </a>
                </li>
              )}
              {siteConfig.social.googleScholar && (
                <li>
                  <a
                    href={siteConfig.social.googleScholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <GraduationCap className="size-4" />
                    Google Scholar
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} {siteConfig.name} &mdash; {siteConfig.university}.
            All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with rigor. Designed for impact.
          </p>
        </div>
      </Container>
    </footer>
  );
}
