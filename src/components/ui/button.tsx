import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand-blue text-white hover:bg-[#25277a]",
  secondary: "bg-brand-orange text-brand-navy hover:bg-[#de8215]",
  outline: "border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors duration-200",
        variants[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
