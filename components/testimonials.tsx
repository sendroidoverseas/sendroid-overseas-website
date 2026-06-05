import { Quote } from "lucide-react";
import { testimonials } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";

export function Testimonials() {
  return (
    <section className="section-pad container-pad bg-[#f5f7fa]">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          centered
          eyebrow="Buyer Confidence"
          title="Built for serious international trade conversations"
          copy="Professional communication, transparent coordination and practical buyer support are central to how Sendroid Overseas works."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.company} className="rounded-lg border border-[#dce3ec] bg-white p-6">
              <Quote className="text-[#b9964a]" size={26} />
              <blockquote className="mt-4 text-sm leading-7 text-[#334155]">&ldquo;{item.quote}&rdquo;</blockquote>
              <figcaption className="mt-6 border-t border-[#e6ebf1] pt-4">
                <p className="font-bold text-[#071b33]">{item.name}</p>
                <p className="text-sm text-[#667085]">{item.company}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
