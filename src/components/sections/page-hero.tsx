import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function PageHero({ title, description, tag }: { title: string; description: string; tag: string }) {
  return (
    <Section className="bg-brand-mist/60 py-14 sm:py-16">
      <SectionHeading title={title} description={description} tag={tag} />
    </Section>
  );
}
