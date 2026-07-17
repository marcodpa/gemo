import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ServicesMosaic from "@/components/ServicesMosaic";
import ProcessTimeline from "@/components/ProcessTimeline";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Desarrollo inmobiliario, proyectos comerciales, infraestructura, gestión de proyectos, financiamiento directo y asesoría inmobiliaria en Venezuela.",
};

export default function ServiciosPage() {
  return (
    <main className="bg-paper">
      {/* Encabezado de página con edificio de la zona a la derecha */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 bottom-0 hidden w-[24rem] max-w-[30vw] md:block"
        >
          <Image
            src="/images/edificio-historico.webp"
            alt=""
            width={900}
            height={1352}
            className="h-auto w-full"
            sizes="384px"
          />
          {/* Degradados amplios para fundir la foto con el fondo sin corte visible */}
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-paper via-paper/55 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-paper via-paper/55 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-paper/70 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1320px] px-5 pt-36 pb-16 md:pt-44 md:pb-24 md:pr-[32vw] lg:px-10">
          <Reveal>
            <h1 className="max-w-3xl font-display text-4xl leading-[1.08] font-extrabold tracking-tight md:text-6xl">
              Todo lo que un proyecto necesita, bajo un mismo equipo.
            </h1>
            <span aria-hidden="true" className="mt-6 block h-1.5 w-16 rounded-full bg-sun-300" />
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
              Desde la planificación hasta la entrega, acompañamos cada proyecto con experiencia,
              calidad y opciones de pago pensadas para las familias.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mosaico de servicios (click para ver la ficha completa) */}
      <section
        aria-label="Lista de servicios"
        className="mx-auto max-w-[1320px] px-5 pb-24 md:pb-32 lg:px-10"
      >
        <ServicesMosaic />
      </section>

      {/* Proceso de trabajo */}
      <section aria-label="Así trabajamos" className="bg-ink-900 py-24 text-white md:py-32">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl leading-tight font-bold tracking-tight md:text-5xl">
              Así construimos tu futuro
            </h2>
            <p className="mt-5 max-w-xl text-lg text-white/70">
              Un camino claro, sin sorpresas, desde la primera conversación hasta la entrega.
            </p>
          </Reveal>
          <ProcessTimeline />
        </div>
      </section>

      {/* Cierre */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/calle-atardecer.webp"
          alt=""
          aria-hidden="true"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-ink-950/65" />
        <div className="relative mx-auto flex max-w-[1320px] flex-col items-start gap-7 px-5 py-24 md:flex-row md:items-center md:justify-between md:py-28 lg:px-10">
          <Reveal>
            <h2 className="max-w-xl font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              Cuéntanos qué necesitas y te orientamos sin compromiso.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Link
              href="/contacto"
              className="inline-block rounded-full bg-white px-7 py-3.5 font-semibold text-ink-900 transition hover:bg-white/90 active:scale-[0.98]"
            >
              Contáctanos
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
