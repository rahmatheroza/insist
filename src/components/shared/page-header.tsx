import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("border-b border-border bg-insist-gray-50", className)}>
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
