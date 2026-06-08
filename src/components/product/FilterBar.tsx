"use client";

import { cn } from "@/lib/utils";

const filters = [
  { label: "Alle", value: "all" },
  { label: "Edelsteinsorten", value: "edelsteinsorten" },
  { label: "Kat Florence", value: "kat-florence" },
  { label: "Schmuck", value: "schmuck" },
];

export function FilterBar({
  active,
  onChange,
}: {
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onChange(filter.value)}
          className={cn(
            "px-4 py-2 text-xs uppercase tracking-[0.1em] transition-all duration-200 border",
            active === filter.value
              ? "border-text-primary bg-text-primary text-background"
              : "border-border text-text-secondary hover:border-text-primary hover:text-text-primary"
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
