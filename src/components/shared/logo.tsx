import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  linked?: boolean;
  showWordmark?: boolean;
  showUniversity?: boolean;
  imageClassName?: string;
}

export function Logo({
  className,
  linked = true,
  showWordmark = siteConfig.logo.showWordmark ?? true,
  showUniversity = false,
  imageClassName,
}: LogoProps) {
  const { logo, name, university } = siteConfig;

  const content = (
    <>
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        className={cn(
          "w-auto object-contain",
          logo.className ??
            (showWordmark ? "h-8" : "h-16 sm:h-[4.5rem]"),
          imageClassName
        )}
        priority
      />
      {showWordmark && (
        <div className="flex flex-col">
          <span className="text-sm font-bold tracking-tight text-foreground">
            {name}
          </span>
          {showUniversity && (
            <span className="hidden text-[10px] leading-none text-muted-foreground sm:block">
              {university}
            </span>
          )}
        </div>
      )}
    </>
  );

  if (!linked) {
    return (
      <span className={cn("inline-flex items-center gap-2.5", className)}>
        {content}
      </span>
    );
  }

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2.5", className)}
    >
      {content}
    </Link>
  );
}
