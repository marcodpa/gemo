import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { services } from "@/data/services";
import { processSteps } from "@/data/site";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Desarrollo inmobiliario, proyectos comerciales, infraestructura, gestión de proyectos, financiamiento directo y asesoría inmobiliaria en Venezuela.",
};

export default function ServiciosPage() {
  return (
    <main className="bg-paper">
      {/* Encabezado de página */}
      <section className="mx-auto max-w-[1320px] px-5 pt-36 pb-20 md:pt-44 md:pb-24 lg:px-10">
        <Reveal>
          <h1 className="max-w-3xl font-display text-4xl leading-[1.08] font-extrabold tracking-tight md:text-6xl">
            Todo lo que un proyecto necesita, bajo un mismo equipo.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            Desde la planificación hasta la entrega, acompañamos cada proyecto con experiencia,
            calidad y opciones de pago pensadas para las familias.
          </p>
        </Reveal>
      </section>

      {/* Servicios */}
      <section aria-label="Lista de servicios" className="mx-auto max-w-[1320px] px-5 lg:px-10">
        {services.map((service, i) => (
          <Reveal key={service.id}>
            <article
              id={service.id}
              className="grid scroll-mt-28 gap-8 border-t border-line py-14 md:grid-cols-[90px_1fr_1.2fr] md:gap-10 md:py-16"
            >
              <span className="font-display text-sm font-semibold text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
              <div>
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={service.imageAlt ?? ""}
                    width={1400}
                    height={933}
                    className="aspect-[16/10] w-full rounded-xl object-cover"
                    sizes="(min-width: 768px) 45vw, 100vw"
                  />
                ) : null}
                <p className={`max-w-lg leading-relaxed text-body ${service.image ? "mt-5" : ""}`}>
                  {service.detail}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      {/* Proceso de trabajo */}
      <section aria-label="Así trabajamos" className="mt-16 bg-ink-900 py-24 text-white md:py-32">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl leading-tight font-bold tracking-tight md:text-5xl">
              Así construimos tu futuro
            </h2>
            <p className="mt-5 max-w-xl text-lg text-white/70">
              Un camino claro, sin sorpresas, desde la primera conversación hasta la entrega.
            </p>
          </Reveal>
          <ol className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={(i % 3) * 70} as="li" className="border-t border-white/15 pt-6">
                <span className="font-display text-sm font-semibold text-cyan-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-white/70">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Cierre */}
      <section className="mx-auto flex max-w-[1320px] flex-col items-start gap-7 px-5 py-20 md:flex-row md:items-center md:justify-between lg:px-10">
        <Reveal>
          <h2 className="max-w-xl font-display text-3xl font-bold tracking-tight md:text-4xl">
            Cuéntanos qué necesitas y te orientamos sin compromiso.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <Link
            href="/contacto"
            className="inline-block rounded-full bg-petrol-600 px-7 py-3.5 font-semibold text-white transition hover:bg-petrol-700 active:scale-[0.98]"
          >
            Contáctanos
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
