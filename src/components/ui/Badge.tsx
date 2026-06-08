import { cn } from "@/lib/utils";

export function Badge({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}) {
  const variants = {
    default: "bg-surface text-text-secondary",
    accent: "bg-text-primary/5 text-text-primary",
    outline: "border border-border text-text-secondary",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-[11px] uppercase tracking-wider",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
