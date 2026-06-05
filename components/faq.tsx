import { faqs } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";

export function FAQ() {
  return (
    <section className="section-pad container-pad bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow="FAQ" title="Common buyer questions" copy="Helpful answers for importers, distributors and procurement teams evaluating India sourcing." />
        <div className="grid gap-4">
          {faqs.map((item) => (
            <details key={item.question} className="group rounded-lg border border-[#dce3ec] bg-white p-5">
              <summary className="cursor-pointer list-none text-base font-bold text-[#071b33]">
                {item.question}
                <span className="float-right text-[#b9964a] group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-[#526176]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
