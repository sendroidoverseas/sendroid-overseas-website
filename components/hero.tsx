import Image from "next/image";
import { ArrowRight, Globe2, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/button-link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#071b33] text-white">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&w=1800&q=82"
          alt="International shipping containers at a port"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-28"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071b33] via-[#071b33]/88 to-[#071b33]/55" />
      </div>
      <div className="container-pad relative mx-auto grid max-w-7xl gap-10 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div className="animate-rise max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#e7d5a6]">
            International Trading and Export Company
          </p>
          <h1 className="mt-5 font-display text-4xl leading-[1.08] text-white md:text-6xl lg:text-7xl">
            Connecting Indian Products to Global Markets
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/76 md:text-xl">
            Sendroid Overseas Private Limited helps international buyers source Indian products with structured supplier
            coordination, export support, documentation assistance and logistics readiness.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">Request a Quote</ButtonLink>
            <ButtonLink href="/contact" variant="light">
              Contact Us
            </ButtonLink>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {[
            { icon: Globe2, title: "Global buyer support", copy: "B2B inquiry handling across regional trade corridors." },
            { icon: ShieldCheck, title: "Verification mindset", copy: "Supplier conversations organized around trust and documentation." },
            { icon: ArrowRight, title: "End-to-end coordination", copy: "From sourcing requirements to logistics handoff support." }
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-white/15 bg-white/9 p-5 backdrop-blur">
              <item.icon className="text-[#e7d5a6]" size={24} />
              <p className="mt-4 text-lg font-bold">{item.title}</p>
              <p className="mt-2 text-sm leading-6 text-white/66">{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
