import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { insights } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Future export guides, international trade updates, market insights and logistics knowledge from Sendroid Overseas."
};

export default function BlogPage() {
  return (
    <>
      <section className="container-pad bg-[#071b33] py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#e7d5a6]">Blog & Insights</p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl leading-tight md:text-6xl">
            Export guides, trade updates and market knowledge.
          </h1>
        </div>
      </section>
      <section className="section-pad container-pad bg-white">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Future Content Hub"
            title="Professional insights for global buyers"
            copy="This layout is ready for publish dates, categories, author profiles, article pages and search integration."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {insights.map((post) => (
              <article key={post.title} className="rounded-lg border border-[#dce3ec] bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b9964a]">{post.category}</p>
                <h2 className="mt-4 min-h-24 font-display text-2xl leading-tight text-[#071b33]">{post.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#526176]">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between border-t border-[#e6ebf1] pt-4 text-sm">
                  <span className="font-semibold text-[#667085]">{post.date}</span>
                  <span className="inline-flex items-center gap-1 font-bold text-[#071b33]">
                    Read More <ArrowUpRight size={16} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
