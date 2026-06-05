import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-pad flex min-h-[70vh] items-center justify-center bg-white py-24 text-center">
      <div className="max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b9964a]">404</p>
        <h1 className="mt-4 font-display text-4xl text-[#071b33] md:text-5xl">Page not found</h1>
        <p className="mt-4 text-[#526176]">
          The page you requested is not available. Return to the homepage to continue exploring our export services.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#071b33] px-5 py-3 text-sm font-semibold text-white"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
