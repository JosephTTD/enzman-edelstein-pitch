"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  title,
  subtitle,
  align = "center",
}: {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3 }}
      className={align === "center" ? "text-center" : "text-left"}
    >
      {subtitle && (
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-text-secondary font-body">
          {subtitle}
        </p>
      )}
      <h2 className="font-display text-heading-2 text-text-primary">
        {title}
      </h2>
    </motion.div>
  );
}
