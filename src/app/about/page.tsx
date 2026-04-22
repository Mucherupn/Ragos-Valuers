import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/shared/section";
import { PageBlock } from "@/components/shared/page-block";

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="About"
        title="A Trusted Real Estate Valuation Firm Since 2005"
        description="Ragos Valuers and Estate Agents serves clients with professional valuation, agency, and advisory support shaped by long-standing market participation."
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <PageBlock title="Our Professional Mandate">
            We provide independent and well-supported valuation advice for lenders, investors, institutions, and private clients, while maintaining disciplined service standards across all assignments.
          </PageBlock>
          <PageBlock title="How We Work">
            Our team combines technical assessment frameworks with field-level market knowledge to produce practical and defensible outcomes in both valuation and agency engagements.
          </PageBlock>
        </div>
      </Section>
    </>
  );
}
