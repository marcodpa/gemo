import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import ObraParallax from "@/components/ObraParallax";
import { site } from "@/data/site";
import {
  Phone,
  EnvelopeSimple,
  MapPin,
  Clock,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Contáctanos",
  description:
    "Escríbenos para recibir información sobre los proyectos y planes de pago de GEMO Construcciones. Atención personalizada, sin compromiso.",
};

export default function ContactoPage() {
  const whatsappHref = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
    site.contact.whatsappMessage
  )}`;

  return (
    <main className="bg-paper">
      <section className="mx-auto max-w-[1320px] px-5 pt-36 pb-14 md:pt-44 lg:px-10">
        <Reveal>
          <h1 className="max-w-3xl font-display text-4xl leading-[1.08] font-extrabold tracking-tight md:text-6xl">
            Hablemos de tu próximo espacio.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            Cuéntanos qué buscas y un asesor te responderá con las opciones disponibles y sus
            planes de pago.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-[1320px] gap-14 px-5 pb-28 lg:grid-cols-[1fr_1.5fr] lg:gap-20 lg:px-10">
        {/* Datos de contacto */}
        <Reveal className="order-2 lg:order-1">
          <div className="rounded-xl bg-ink-900 p-8 text-white md:p-10">
            <h2 className="font-display text-2xl font-bold">Información de contacto</h2>
            <p className="mt-2 text-sm text-white/50">
              Datos provisionales, serán sustituidos por los oficiales.
            </p>
            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <Phone size={22} className="mt-0.5 shrink-0 text-cyan-400" />
                <div>
                  <p className="text-sm text-white/55">Teléfono</p>
                  <a
                    href={`tel:${site.contact.phoneHref}`}
                    className="font-semibold transition hover:text-cyan-400"
                  >
                    {site.contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <EnvelopeSimple size={22} className="mt-0.5 shrink-0 text-cyan-400" />
                <div>
                  <p className="text-sm text-white/55">Correo</p>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="font-semibold break-all transition hover:text-cyan-400"
                  >
                    {site.contact.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin size={22} className="mt-0.5 shrink-0 text-cyan-400" />
                <div>
                  <p className="text-sm text-white/55">Dirección</p>
                  <p className="font-semibold">{site.contact.address}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock size={22} className="mt-0.5 shrink-0 text-cyan-400" />
                <div>
                  <p className="text-sm text-white/55">Horario de atención</p>
                  <p className="font-semibold">{site.contact.schedule}</p>
                </div>
              </li>
            </ul>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3.5 font-semibold text-white transition hover:brightness-105 active:scale-[0.98]"
            >
              <WhatsappLogo size={20} weight="fill" />
              Escríbenos por WhatsApp
            </a>
          </div>
        </Reveal>

        {/* Formulario */}
        <Reveal delay={80} className="order-1 lg:order-2">
          <ContactForm />
        </Reveal>
      </section>

      {/* Cierre editorial: el equipo en obra da contexto al mensaje final */}
      <section
        aria-label="Nuestro equipo en obra"
        className="border-t border-line"
      >
        <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-5 py-16 md:grid-cols-2 md:gap-16 md:py-0 lg:px-10">
          <Reveal className="order-2 md:order-1 md:py-24">
            <p className="text-sm font-semibold tracking-wide text-petrol-600 uppercase">
              Detrás de cada proyecto
            </p>
            <h2 className="mt-4 max-w-md font-display text-3xl leading-[1.15] font-bold tracking-tight md:text-4xl">
              Un equipo que construye con las manos lo que promete con la palabra.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Cuando nos escribes, del otro lado hay gente real trabajando cada día para que tu
              familia tenga un espacio propio. Cuéntanos qué necesitas y demos el primer paso juntos.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-petrol-600 px-7 py-3.5 font-semibold text-white transition hover:bg-petrol-700 active:scale-[0.98]"
            >
              <WhatsappLogo size={20} weight="fill" />
              Hablar con un asesor
            </a>
          </Reveal>

          <div className="order-1 self-end md:order-2">
            <ObraParallax />
          </div>
        </div>
      </section>
    </main>
  );
}
