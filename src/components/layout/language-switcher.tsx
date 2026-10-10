"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "compact" | "full";
}

export function LanguageSwitcher({
  className,
  variant = "compact",
}: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleSelect = (nextLocale: "en" | "id") => {
    if (nextLocale === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-background/80 p-0.5 text-xs shadow-xs backdrop-blur-sm",
        className
      )}
      role="group"
      aria-label="Language selection"
    >
      <span className="sr-only">Change language</span>
      <button
        type="button"
        disabled={isPending}
        onClick={() => handleSelect("en")}
        aria-pressed={locale === "en"}
        className={cn(
          "rounded-full px-2.5 py-1 font-medium transition-all",
          locale === "en"
            ? "bg-primary text-primary-foreground shadow-xs"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        EN
      </button>
      <button
        type="button"
        disabled={isPending}
        onClick={() => handleSelect("id")}
        aria-pressed={locale === "id"}
        className={cn(
          "rounded-full px-2.5 py-1 font-medium transition-all",
          locale === "id"
            ? "bg-primary text-primary-foreground shadow-xs"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        ID
      </button>
    </div>
  );
}
