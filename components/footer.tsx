import Image from "next/image";
import Link from "next/link";
import { FileCheck, Mail, MapPin, Phone, User } from "lucide-react";
import { navItems, siteConfig } from "@/lib/site";
import { NewsletterForm } from "@/components/newsletter-form";

export function Footer() {
  return (
    <footer className="bg-[#061426] text-white">
      <div className="container-pad mx-auto grid max-w-7xl gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-4">
            <span className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-md border border-[#b9964a]/50 bg-white">
              <Image src="/sendroid-logo.jpg" alt="" width={64} height={70} className="h-full w-full object-cover object-top" />
            </span>
            <p className="font-display text-3xl leading-tight text-white">{siteConfig.name}</p>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/68">
            India-based international trading and export support for buyers seeking dependable products, verified
            supplier conversations and professional trade coordination.
          </p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#e7d5a6]">Company</p>
          <div className="mt-4 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/70 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#e7d5a6]">Trade Desk</p>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            <span className="flex items-center gap-3">
              <Mail size={17} /> {siteConfig.email}
            </span>
            <span className="flex items-center gap-3">
              <Phone size={17} /> {siteConfig.phone}
            </span>
            <span className="flex items-center gap-3">
              <MapPin size={17} /> {siteConfig.city}
            </span>
            <span className="flex items-center gap-3">
              <User size={17} /> {siteConfig.director} — Director
            </span>
            <span className="flex items-center gap-3">
              <FileCheck size={17} /> IEC Registered Export Company
            </span>
          </div>
          <NewsletterForm />
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-pad mx-auto flex max-w-7xl flex-col gap-2 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>Copyright {new Date().getFullYear()} Sendroid Overseas Private Limited. All rights reserved.</p>
          <p>{siteConfig.domain}</p>
        </div>
      </div>
    </footer>
  );
}
