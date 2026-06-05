import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  const variants = {
    primary: "bg-[#b9964a] text-[#071b33] hover:bg-[#d4b568]",
    secondary: "border border-[#b9964a] text-[#b9964a] hover:bg-[#b9964a] hover:text-[#071b33]",
    light: "border border-white/35 text-white hover:bg-white hover:text-[#071b33]"
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-md px-5 py-3 text-sm font-bold transition ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
