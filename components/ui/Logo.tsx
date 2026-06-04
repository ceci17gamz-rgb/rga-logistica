import Image from "next/image";
import Link from "next/link";
import { LOGO_PATH, company } from "@/lib/brand";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const sizes = {
  sm: { w: 120, h: 40 },
  md: { w: 160, h: 52 },
  lg: { w: 200, h: 65 },
};

export function Logo({ className, size = "md", showText = false }: LogoProps) {
  const { w, h } = sizes[size];

  return (
    <Link href="/" className={cn("flex items-center gap-3 group", className)}>
      <Image
        src={LOGO_PATH}
        alt={`${company.name} - Logística Internacional`}
        width={w}
        height={h}
        className="h-auto w-auto object-contain transition-opacity group-hover:opacity-90"
        priority
      />
      {showText && (
        <span className="hidden font-display text-lg font-bold text-brand-navy lg:block">
          {company.name}
        </span>
      )}
    </Link>
  );
}
