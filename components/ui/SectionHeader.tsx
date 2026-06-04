"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12 lg:mb-16",
        align === "center" ? "text-center mx-auto max-w-3xl" : "text-left max-w-2xl"
      )}
    >
      {label && (
        <span
          className={cn(
            "mb-3 inline-block text-sm font-semibold uppercase tracking-widest",
            light ? "text-brand-blue-light" : "text-brand-blue"
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          "heading-section",
          light && "text-white"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-body mt-4",
            light && "text-white/75"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
