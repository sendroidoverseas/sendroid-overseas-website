import { CheckCircle2 } from "lucide-react";
import { services } from "@/lib/site";

export function ServiceList() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <div key={service} className="flex min-h-28 gap-4 rounded-lg border border-[#dce3ec] bg-white p-5">
          <CheckCircle2 className="mt-1 shrink-0 text-[#b9964a]" size={22} />
          <div>
            <h3 className="text-lg font-bold text-[#071b33]">{service}</h3>
            <p className="mt-2 text-sm leading-6 text-[#526176]">
              Practical coordination designed for global buyers evaluating Indian supply opportunities.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
