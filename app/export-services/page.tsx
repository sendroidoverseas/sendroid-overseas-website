import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ServiceList } from "@/components/service-list";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Export Services",
  description:
    "Product sourcing, supplier verification, international trade support, documentation assistance, logistics coordination and buyer-seller matchmaking."
};

export default function ExportServicesPage() {
  return (
    <>
      <section className="container-pad bg-[#071b33] py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#e7d5a6]">Export Services</p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl leading-tight md:text-6xl">
            Practical support across the international trade journey.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
            From initial sourcing questions to supplier conversations and shipment coordination, our service model is
            designed for buyers who value clarity.
          </p>
        </div>
      </section>
      <section className="section-pad container-pad bg-white">
        <div className="mx-auto max-w-7xl">
          <ServiceList />
        </div>
      </section>
      <section className="section-pad container-pad bg-[#f5f7fa]">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Process" title="A structured approach to buyer requirements" copy="Every export discussion benefits from a clear path: define, verify, coordinate and follow through." />
          <div className="grid gap-4">
            {services.map((service, index) => (
              <div key={service} className="flex gap-4 rounded-lg border border-[#dce3ec] bg-white p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-[#071b33] text-sm font-bold text-[#e7d5a6]">
                  {index + 1}
                </span>
                <div>
                  <h2 className="font-bold text-[#071b33]">{service}</h2>
                  <p className="mt-2 text-sm leading-7 text-[#526176]">
                    Coordinated with buyer expectations, supplier readiness and destination-market practicalities.
                  </p>
                </div>
                <ArrowRight className="ml-auto hidden shrink-0 text-[#b9964a] sm:block" size={20} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
