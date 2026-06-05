import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { InquiryForm } from "@/components/inquiry-form";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sendroid Overseas Private Limited for export inquiries, sourcing requests and international trading support."
};

export default function ContactPage() {
  return (
    <>
      <section className="container-pad bg-[#071b33] py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#e7d5a6]">Contact</p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl leading-tight md:text-6xl">
            Start a sourcing or export support conversation.
          </h1>
        </div>
      </section>
      <section className="section-pad container-pad bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading eyebrow="Trade Desk" title="Send your requirement" copy="For faster response, include product details, quantity, destination country, delivery expectations and any quality or packaging standards." />
            <div className="mt-8 grid gap-4">
              {[
                { icon: Mail, title: "Email", value: siteConfig.email },
                { icon: Phone, title: "Phone", value: siteConfig.phone },
                { icon: MessageCircle, title: "WhatsApp", value: "Message us from the floating button" },
                { icon: MapPin, title: "Location", value: siteConfig.address },
                { icon: Clock, title: "Business Hours", value: siteConfig.hours }
              ].map((item) => (
                <div key={item.title} className="flex gap-4 rounded-lg border border-[#dce3ec] p-5">
                  <item.icon className="mt-1 shrink-0 text-[#b9964a]" size={22} />
                  <div>
                    <p className="font-bold text-[#071b33]">{item.title}</p>
                    <p className="mt-1 text-sm text-[#526176]">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 grid min-h-64 place-items-center rounded-lg border border-dashed border-[#b9c3d0] bg-[#f5f7fa] p-6 text-center">
              <div>
                <p className="font-display text-2xl text-[#071b33]">Google Maps Placeholder</p>
                <p className="mt-2 text-sm text-[#526176]">Embed the verified office location once available.</p>
              </div>
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
