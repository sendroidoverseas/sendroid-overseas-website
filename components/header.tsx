"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, siteConfig } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071b33]/95 text-white backdrop-blur">
      <nav className="container-pad mx-auto flex h-20 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Sendroid Overseas home">
          <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-md border border-[#b9964a]/60 bg-white">
            <Image
              src="/sendroid-logo.jpg"
              alt=""
              width={48}
              height={52}
              className="h-full w-full object-cover object-top"
              priority
            />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-bold uppercase tracking-[0.16em]">{siteConfig.shortName}</span>
            <span className="block text-xs text-white/65">Private Limited</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-white/78 transition hover:text-[#e7d5a6]">
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden rounded-md border border-[#b9964a] px-4 py-2 text-sm font-semibold text-[#e7d5a6] transition hover:bg-[#b9964a] hover:text-[#071b33] lg:inline-flex"
        >
          Request a Quote
        </Link>

        <button
          className="inline-grid h-11 w-11 place-items-center rounded-md border border-white/20 lg:hidden"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open ? (
        <div className="container-pad border-t border-white/10 pb-5 lg:hidden">
          <div className="grid gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-semibold text-white/82 hover:bg-white/8"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="flex min-h-12 items-center justify-center rounded-md bg-[#b9964a] px-4 py-3 text-sm font-bold text-[#071b33]"
          >
            Request a Quote
          </Link>
        </div>
      ) : null}
    </header>
  );
}
