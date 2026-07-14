import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description:
    "GEMO Construcciones es una empresa venezolana con más de 20 años de trayectoria desarrollando proyectos inmobiliarios y de infraestructura que generan bienestar, seguridad y valor para las familias.",
};

const principles = [
  {
    title: "Responsabilidad",
    text: "Cada obra se planifica y se ejecuta con supervisión técnica permanente. Cumplimos cronogramas y cumplimos lo que prometemos.",
  },
  {
    title: "Transparencia",
    text: "Condiciones claras desde el primer día: sabes qué recibes, cuándo lo recibes y cuánto pagas, sin letras pequeñas.",
  },
  {
    title: "Cercanía",
    text: "Trabajamos para familias reales. Te acompañamos durante todo el proceso, desde la primera visita hasta la entrega de llaves.",
  },
  {
    title: "Comunidad",
    text: "No construimos casas aisladas: desarrollamos urbanismos con servicios y espacios que hacen crecer a la zona completa.",
  },
];

export default function QuienesSomosPage() {
  return (
    <main className="bg-paper">
      {/* Hero de página: la obra a pantalla completa con el titular encima */}
      <section className="relative flex min-h-[72svh] items-end overflow-hidden">
        <Image
          src="/images/obra-techo.webp"
          alt="Equipo de GEMO Construcciones trabajando en el techo de una vivienda"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/20 to-ink-950/35"
        />
        <div className="relative mx-auto w-full max-w-[1320px] px-5 pt-44 pb-16 md:pb-20 lg:px-10">
          <Reveal>
            <h1 className="max-w-3xl font-display text-4xl leading-[1.08] font-extrabold tracking-tight text-white md:text-6xl">
              Más que viviendas, construimos patrimonio.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
              Somos una empresa venezolana dedicada al desarrollo de proyectos inmobiliarios y de
              infraestructura, con más de 20 años de trayectoria construyendo espacios que generan
              bienestar, seguridad y valor para las familias.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Historia */}
      <section className="mx-auto max-w-[1320px] px-5 py-24 md:py-32 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Dos décadas cumpliendo lo que prometemos
            </h2>
          </Reveal>
          <Reveal delay={100} className="space-y-6 text-lg leading-relaxed text-body">
            <p>
              Nos caracterizamos por trabajar con responsabilidad, transparencia y compromiso,
              desarrollando proyectos pensados para responder a las necesidades reales de nuestros
              clientes y contribuir al crecimiento de las comunidades donde estamos presentes.
            </p>
            <p>
              Más que construir viviendas, construimos oportunidades para que cada familia pueda
              acceder a un patrimonio propio con planes de pago accesibles, sin trámites bancarios
              y con el respaldo de una empresa comprometida con cumplir lo que promete.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Misión y visión */}
      <section aria-label="Misión y visión" className="bg-ink-900 py-24 text-white md:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-14 px-5 md:grid-cols-2 md:gap-10 lg:px-10">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-cyan-400">Misión</h2>
            <p className="mt-5 max-w-md font-display text-2xl leading-snug font-medium md:text-3xl">
              Desarrollar soluciones inmobiliarias y comerciales que impulsen el crecimiento de las
              comunidades y generen valor para nuestros clientes.
            </p>
          </Reveal>
          <Reveal delay={120} className="md:border-l md:border-white/15 md:pl-10">
            <h2 className="font-display text-2xl font-bold text-cyan-400">Visión</h2>
            <p className="mt-5 max-w-md font-display text-2xl leading-snug font-medium md:text-3xl">
              Ser líderes en el desarrollo de proyectos inmobiliarios y comerciales que transformen
              comunidades.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Principios */}
      <section className="mx-auto max-w-[1320px] px-5 py-24 md:py-32 lg:px-10">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Lo que nos define
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 60} className="border-t border-line pt-6">
              <h3 className="font-display text-xl font-bold text-petrol-600">{p.title}</h3>
              <p className="mt-3 max-w-lg leading-relaxed text-muted">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* El trabajo en obra */}
      <section aria-label="Nuestro equipo en obra" className="mx-auto max-w-[1320px] px-5 pb-24 md:pb-32 lg:px-10">
        <div className="grid gap-5 md:grid-cols-3">
          <Reveal>
            <Image
              src="/images/equipo-frisado.webp"
              alt="Trabajadores de GEMO dando acabado a las paredes de una vivienda"
              width={1400}
              height={933}
              className="aspect-[3/4] w-full rounded-xl object-cover"
              sizes="(min-width: 768px) 33vw, 100vw"
            />
          </Reveal>
          <Reveal delay={80} className="md:mt-12">
            <Image
              src="/images/equipo-bloque.webp"
              alt="Obrero trasladando material en la obra"
              width={1200}
              height={800}
              className="aspect-[3/4] w-full rounded-xl object-cover"
              sizes="(min-width: 768px) 33vw, 100vw"
            />
          </Reveal>
          <Reveal delay={160}>
            <Image
              src="/images/detalle-mezcla.webp"
              alt="Detalle de las manos de un albañil preparando mezcla"
              width={1200}
              height={800}
              className="aspect-[3/4] w-full rounded-xl object-cover"
              sizes="(min-width: 768px) 33vw, 100vw"
            />
          </Reveal>
        </div>
      </section>

      {/* Cierre */}
      <section className="border-t border-line">
        <div className="mx-auto flex max-w-[1320px] flex-col items-start gap-7 px-5 py-20 md:flex-row md:items-center md:justify-between lg:px-10">
          <Reveal>
            <h2 className="max-w-xl font-display text-3xl font-bold tracking-tight md:text-4xl">
              Conoce los proyectos que estamos construyendo.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Link
              href="/proyectos"
              className="inline-block rounded-full bg-petrol-600 px-7 py-3.5 font-semibold text-white transition hover:bg-petrol-700 active:scale-[0.98]"
            >
              Ver proyectos
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
