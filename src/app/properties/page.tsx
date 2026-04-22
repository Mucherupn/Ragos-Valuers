import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/shared/section";
import { PropertyCard } from "@/components/ui/cards";
import { featuredProperties } from "@/data/site";

export default function PropertiesPage() {
  return (
    <>
      <PageHero
        tag="Properties"
        title="Property Listings"
        description="A curated listing experience for residential, commercial, and land opportunities. Full platform functionality will be expanded in subsequent phases."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.title} property={property} />
          ))}
        </div>
      </Section>
    </>
  );
}
