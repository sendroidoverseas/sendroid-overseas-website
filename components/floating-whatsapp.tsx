import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20Sendroid%20Overseas%2C%20I%20would%20like%20to%20discuss%20an%20export%20inquiry.`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact Sendroid Overseas on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#1fa855] text-white shadow-2xl transition hover:scale-105"
    >
      <MessageCircle size={26} />
    </a>
  );
}
