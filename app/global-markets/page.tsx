import type { Metadata } from "next";
import { WorldMap } from "@/components/world-map";
import { SectionHeading } from "@/components/section-heading";
import { markets } from "@/lib/site";

export const metadata: Metadata = {
  title: "Global Markets",
  description:
    "Sendroid Overseas supports export inquiries across the Middle East, Africa, Europe, North America and Asia."
};

export default function GlobalMarketsPage() {
  return (
    <>
      <section className="container-pad bg-[#071b33] py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#e7d5a6]">Global Markets</p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl leading-tight md:text-6xl">
            Export-ready communication for key international regions.
          </h1>
        </div>
      </section>
      <section className="section-pad container-pad bg-[#071b33] text-white">
        <div className="mx-auto max-w-7xl">
          <WorldMap />
        </div>
      </section>
      <section className="section-pad container-pad bg-white">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Destinations" title="Regional market focus" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {markets.map((market) => (
              <article key={market.region} className="rounded-lg border border-[#dce3ec] p-5">
                <h2 className="font-display text-2xl text-[#071b33]">{market.region}</h2>
                <p className="mt-3 text-sm leading-7 text-[#526176]">{market.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
