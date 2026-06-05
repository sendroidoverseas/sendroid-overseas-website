import Image from "next/image";
import { Award, Building2, Globe2, Handshake, ShieldCheck, Ship } from "lucide-react";
import { FAQ } from "@/components/faq";
import { Hero } from "@/components/hero";
import { InquiryForm } from "@/components/inquiry-form";
import { JsonLd } from "@/components/json-ld";
import { ProductGrid } from "@/components/product-grid";
import { SectionHeading } from "@/components/section-heading";
import { Testimonials } from "@/components/testimonials";
import { WorldMap } from "@/components/world-map";
import { organizationSchema, websiteSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={websiteSchema()} />
      <Hero />

      <section className="section-pad container-pad bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1300&q=82"
              alt="Warehouse export operations"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Company Overview"
              title="A professional India export partner for global buyers"
              copy="Sendroid Overseas Private Limited is built to help international importers, distributors and procurement teams access Indian products through a structured, responsive and business-focused trading process."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["B2B Focused", "Inquiry-led sourcing and trade coordination."],
                ["India Based", "Access to supplier networks and product categories."],
                ["Global Outlook", "Built for international buyer expectations."]
              ].map(([title, copy]) => (
                <div key={title} className="rounded-lg border border-[#dce3ec] p-4">
                  <p className="font-bold text-[#071b33]">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-[#526176]">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad container-pad bg-[#f5f7fa]">
        <div className="mx-auto max-w-7xl">
          <SectionHeading centered eyebrow="Why Choose Us" title="Trust signals for international procurement" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Supplier due diligence", copy: "A verification-first approach to sourcing discussions and buyer confidence." },
              { icon: Ship, title: "Export coordination", copy: "Documentation, logistics and shipment readiness conversations handled with care." },
              { icon: Handshake, title: "Buyer-seller alignment", copy: "Clear communication between requirements, specifications and supplier capability." },
              { icon: Globe2, title: "International mindset", copy: "Content, process and follow-up designed around global B2B expectations." },
              { icon: Award, title: "Quality orientation", copy: "A practical focus on product suitability, consistency and category fit." },
              { icon: Building2, title: "Professional presence", copy: "A serious trade partner for long-term sourcing relationships." }
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-[#dce3ec] bg-white p-6">
                <item.icon className="text-[#b9964a]" size={26} />
                <h3 className="mt-5 text-lg font-bold text-[#071b33]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#526176]">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad container-pad bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Export categories ready for future product expansion"
            copy="The product architecture is intentionally modular, making it simple to add SKUs, specifications, downloadable catalogs and category landing pages later."
          />
          <ProductGrid />
        </div>
      </section>

      <section className="section-pad container-pad bg-[#071b33] text-white">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            centered
            eyebrow="Global Reach"
            title="Serving important trade corridors"
            copy="Sendroid Overseas supports conversations across key regional markets where Indian products are actively evaluated by importers and distributors."
          />
          <div className="mt-12">
            <WorldMap />
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="section-pad container-pad bg-white" id="inquiry">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            eyebrow="Inquiry Desk"
            title="Tell us what you want to source from India"
            copy="Use the form to share product details, expected quantity, destination market and timing. Our team can respond with next steps and sourcing possibilities."
          />
          <InquiryForm />
        </div>
      </section>

      <FAQ />
    </>
  );
}
