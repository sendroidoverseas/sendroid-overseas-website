import { ArrowUpRight } from "lucide-react";
import { productCategories } from "@/lib/site";

export function ProductGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {productCategories.map((category) => (
        <article key={category.title} className="rounded-lg border border-[#dce3ec] bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-2xl text-[#071b33]">{category.title}</h3>
            <ArrowUpRight className="shrink-0 text-[#b9964a]" size={22} />
          </div>
          <p className="mt-3 text-sm leading-7 text-[#526176]">{category.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {category.items.map((item) => (
              <span key={item} className="rounded-full border border-[#dce3ec] px-3 py-1 text-xs font-semibold text-[#526176]">
                {item}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
