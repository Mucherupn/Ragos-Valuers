import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/shared/section";
import { ArticleCard } from "@/components/ui/cards";
import { insights } from "@/data/site";

export default function InsightsPage() {
  return (
    <>
      <PageHero
        tag="Insights"
        title="Real Estate Commentary and Valuation Perspectives"
        description="This section is structured for future SEO and thought leadership content on market trends, valuation standards, and client decision support."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {insights.map((article) => (
            <ArticleCard key={article.title} article={article} />
          ))}
        </div>
      </Section>
    </>
  );
}
