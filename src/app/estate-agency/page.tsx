import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/shared/section";
import { PageBlock } from "@/components/shared/page-block";

export default function EstateAgencyPage() {
  return (
    <>
      <PageHero
        tag="Estate Agency"
        title="Professional Representation for Sales and Lettings"
        description="We support owners, buyers, landlords, and tenants with structured agency services grounded in local market realities."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <PageBlock title="Sales Advisory">
            We guide property sales through pricing support, buyer qualification, negotiation coordination, and transaction management.
          </PageBlock>
          <PageBlock title="Lettings Support">
            Our lettings service focuses on tenant sourcing, rental positioning, and practical occupancy guidance for steady asset performance.
          </PageBlock>
        </div>
      </Section>
    </>
  );
}
