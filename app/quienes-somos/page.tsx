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
          </Reveal>
        </div>
      </section>

      {/* Historia: detalle de obra de fondo, arriba a la izquierda */}
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 bottom-0 hidden w-[17rem] max-w-[28vw] md:block"
        >
          <Image
            src="/images/mano-mezcla-blanco.webp"
            alt=""
            width={843}
            height={1264}
            className="h-auto w-full"
            sizes="272px"
          />
          {/* Degradados muy ligeros para disimular el corte de la foto */}
          <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white/90 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-white/80 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1320px] px-5 py-24 md:py-32 md:pr-[30vw] lg:px-10 lg:pr-80">
          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-20">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                Dos décadas cumpliendo lo que prometemos
              </h2>
            </Reveal>
            <Reveal delay={100} className="space-y-6 text-lg leading-relaxed text-body">
              <p>
                Somos una empresa venezolana dedicada al desarrollo de proyectos inmobiliarios y de
                infraestructura, con más de 20 años de trayectoria construyendo espacios que generan
                bienestar, seguridad y valor para las familias.
              </p>
              <p>
                Nos caracterizamos por trabajar con responsabilidad, transparencia y compromiso,
                desarrollando proyectos pensados para responder a las necesidades reales de nuestros
                clientes y contribuir al crecimiento de las comunidades donde estamos presentes.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Misión y visión: el texto vive en el cielo oscuro de la foto y la
          entrada de Portal del Rosario queda anclada al fondo. */}
      <section aria-label="Misión y visión" className="overflow-hidden bg-ink-900 pt-24 text-white md:pt-32">
        <div className="relative z-10 mx-auto grid max-w-[1320px] gap-14 px-5 md:grid-cols-2 md:gap-10 lg:px-10">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-cyan-400">Misión</h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-white/90 md:text-xl">
              Desarrollar soluciones inmobiliarias y comerciales que impulsen el crecimiento de las
              comunidades y generen valor para nuestros clientes.
            </p>
          </Reveal>
          <Reveal delay={120} className="md:border-l md:border-white/15 md:pl-10">
            <h2 className="font-display text-2xl font-bold text-cyan-400">Visión</h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-white/90 md:text-xl">
              Ser líderes en el desarrollo de proyectos inmobiliarios y comerciales que transformen
              comunidades.
            </p>
          </Reveal>
        </div>

        <Reveal className="relative mx-auto -mt-16 max-w-[1600px] md:-mt-40 lg:-mt-56">
          <Image
            src="/images/entrada-cielo-ink.webp"
            alt="Entrada principal del conjunto residencial Portal del Rosario"
            width={1376}
            height={768}
            className="w-full"
            sizes="(min-width: 1600px) 1600px, 100vw"
          />
          {/* Fundido superior: la foto nace del azul del contenedor */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[26%] bg-gradient-to-b from-ink-900 via-ink-900/55 to-transparent"
          />
        </Reveal>
      </section>

      {/* Principios: composición fotográfica con el texto pintado en la
          pared de la obra. El texto alternativo conserva el contenido
          para lectores de pantalla y SEO. */}
      <section aria-label="Lo que nos define" className="py-24 md:py-32">
        <Reveal>
          <Image
            src="/images/lo-que-nos-define.webp"
            alt={`Lo que nos define, pintado sobre la pared de una obra: ${principles
              .map((p) => `${p.title}: ${p.text}`)
              .join(" ")}`}
            width={1376}
            height={768}
            className="w-full"
            sizes="100vw"
          />
        </Reveal>
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
