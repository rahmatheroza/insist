import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface LinkArrowProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function LinkArrow({ href, children, className }: LinkArrowProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-insist-blue-light",
        className
      )}
    >
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}
