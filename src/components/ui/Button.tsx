import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-body tracking-wider transition-all duration-200";

  const variants = {
    primary: "bg-text-primary text-background hover:opacity-80",
    secondary: "border border-text-primary text-text-primary hover:bg-text-primary hover:text-background",
    ghost: "text-text-secondary hover:text-text-primary",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs uppercase",
    md: "px-6 py-3 text-xs uppercase tracking-[0.15em]",
    lg: "px-8 py-3.5 text-xs uppercase tracking-[0.15em]",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
