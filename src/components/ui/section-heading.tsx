import { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";

type SectionHeadingProps = {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
};

export function SectionHeading({ tag, title, description, align = "left", action }: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {tag ? <Badge className="mb-4">{tag}</Badge> : null}
      <h2 className="text-3xl font-bold leading-tight text-brand-navy sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-brand-slate">{description}</p> : null}
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}
