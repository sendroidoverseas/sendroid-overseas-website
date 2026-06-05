import type { Metadata } from "next";
import { Compass, Eye, Gem, Handshake, Scale, Target } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sendroid Overseas Private Limited, an India-based international trading and export company focused on trustworthy B2B sourcing."
};

export default function AboutPage() {
  return (
    <>
      <section className="container-pad bg-[#071b33] py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#e7d5a6]">About Us</p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl leading-tight md:text-6xl">
            A grounded, professional export company representing Indian supply potential.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
            Sendroid Overseas Private Limited works at the intersection of buyer requirements, Indian supplier capability
            and practical trade coordination.
          </p>
        </div>
      </section>

      <section className="section-pad container-pad bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Company Introduction"
            title="Built for international buyer trust"
            copy="We support B2B buyers looking to source Indian products across industrial, agricultural, consumer and customized categories. Our role is to make sourcing conversations clearer, more credible and easier to move from inquiry to execution."
          />
          <div className="rounded-lg border border-[#dce3ec] bg-[#f5f7fa] p-6 md:p-8">
            <p className="font-display text-2xl text-[#071b33]">Founder Message</p>
            <p className="mt-4 leading-8 text-[#526176]">
              &ldquo;Our focus is simple: represent Indian products professionally, communicate transparently with global buyers
              and build trade relationships that can grow over time. Every inquiry deserves structure, clarity and
              accountable follow-up.&rdquo;
            </p>
            <p className="mt-5 text-sm font-bold text-[#071b33]">Anjan Shrivastava</p>
            <p className="text-sm text-[#526176]">Director, Sendroid Overseas Private Limited</p>
          </div>
        </div>
      </section>

      <section className="section-pad container-pad bg-[#f5f7fa]">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Target, title: "Mission", copy: "To connect international buyers with dependable Indian products and organized trade support." },
            { icon: Eye, title: "Vision", copy: "To become a trusted India-based trading partner for global B2B procurement." },
            { icon: Compass, title: "Business Approach", copy: "Requirement-led sourcing, supplier alignment, documentation awareness and responsive communication." },
            { icon: Handshake, title: "Integrity", copy: "Clear expectations, professional conduct and long-term relationship thinking." },
            { icon: Scale, title: "Reliability", copy: "Consistent follow-up and practical coordination through each sourcing stage." },
            { icon: Gem, title: "Value Creation", copy: "Helping buyers identify fit, reduce friction and build better procurement confidence." }
          ].map((item) => (
            <article key={item.title} className="rounded-lg border border-[#dce3ec] bg-white p-6">
              <item.icon className="text-[#b9964a]" size={26} />
              <h2 className="mt-5 text-xl font-bold text-[#071b33]">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#526176]">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
