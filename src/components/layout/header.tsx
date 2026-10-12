"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/routing";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { getNavItems } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const locale = useLocale();
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navItems = getNavItems(locale);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex min-h-20 max-w-6xl items-center justify-between px-6 py-2 lg:px-8">
        <Logo />

        <nav
          ref={dropdownRef}
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main"
        >
          {navItems.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isParentActive =
              pathname === item.href ||
              (item.children && item.children.some((c) => pathname === c.href));
            const isDropdownOpen = activeDropdown === item.label;

            if (hasChildren) {
              return (
                <div
                  key={item.href}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        isParentActive
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                      onClick={() => setActiveDropdown(null)}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "size-3.5 transition-transform duration-200",
                          isDropdownOpen ? "rotate-180" : "group-hover:rotate-180"
                        )}
                      />
                    </Link>
                  </div>

                  {/* Dropdown Menu */}
                  <div
                    className={cn(
                      "absolute left-0 top-full pt-1.5 z-50 transition-all duration-200",
                      isDropdownOpen
                        ? "visible opacity-100 translate-y-0"
                        : "invisible opacity-0 -translate-y-1 pointer-events-none group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
                    )}
                  >
                    <div className="w-48 rounded-xl border border-border/80 bg-background/95 p-1.5 shadow-xl backdrop-blur supports-[backdrop-filter]:bg-background/90">
                      {item.children?.map((child) => {
                        const isChildActive = pathname === child.href;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setActiveDropdown(null)}
                            className={cn(
                              "block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                              isChildActive
                                ? "bg-accent text-primary font-semibold"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            )}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Button asChild size="sm" variant="default">
            <Link href="/join">{t("joinUs")}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-border bg-background px-6 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isParentActive =
                pathname === item.href ||
                (item.children && item.children.some((c) => pathname === c.href));

              if (hasChildren) {
                return (
                  <div key={item.href} className="flex flex-col gap-1">
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                        isParentActive
                          ? "bg-accent text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                    <div className="ml-3 flex flex-col gap-1 border-l-2 border-border/60 pl-3">
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                            pathname === child.href
                              ? "bg-accent text-primary font-semibold"
                              : "text-muted-foreground hover:text-foreground"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "bg-accent text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button asChild className="mt-3" size="sm">
              <Link href="/join" onClick={() => setMobileOpen(false)}>
                {t("joinUs")}
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
