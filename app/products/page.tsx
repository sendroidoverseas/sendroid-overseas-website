import type { Metadata } from "next";
import { InquiryForm } from "@/components/inquiry-form";
import { ProductGrid } from "@/components/product-grid";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Sendroid Overseas product categories including industrial products, agricultural products, consumer goods and customized sourcing."
};

export default function ProductsPage() {
  return (
    <>
      <section className="container-pad bg-[#071b33] py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#e7d5a6]">Products</p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl leading-tight md:text-6xl">
            Flexible product categories for global sourcing requirements.
          </h1>
        </div>
      </section>
      <section className="section-pad container-pad bg-white">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Category Portfolio"
            title="Placeholder product groups ready for future SKUs"
            copy="Each category can be expanded with product specifications, images, MOQ details, certifications and downloadable catalogs as the company portfolio grows."
          />
          <div className="mt-10">
            <ProductGrid />
          </div>
        </div>
      </section>
      <section className="section-pad container-pad bg-[#f5f7fa]">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Product Inquiry" title="Need a specific item sourced from India?" copy="Send an RFQ with the product, specification, quantity and destination market." />
          <InquiryForm compact />
        </div>
      </section>
    </>
  );
}
