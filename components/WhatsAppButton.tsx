import { site } from "@/data/site";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

/** Botón flotante de WhatsApp, visible en todo el sitio. */
export default function WhatsAppButton() {
  const href = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
    site.contact.whatsappMessage
  )}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir a GEMO Construcciones por WhatsApp"
      className="fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-ink-950/25 transition-transform hover:scale-105 active:scale-95"
    >
      <WhatsappLogo size={28} weight="fill" />
    </a>
  );
}
