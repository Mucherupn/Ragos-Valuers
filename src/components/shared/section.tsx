import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Container } from "@/components/ui/container";

export function Section({
  children,
  className,
  containerClassName
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section className={cn("py-16 sm:py-20", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
