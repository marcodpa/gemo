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
        {/* Vaciado de losa: esquina inferior izquierda */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 hidden w-[19rem] max-w-[30vw] md:block"
        >
          <Image
            src="/images/vaciado-losa.webp"
            alt=""
            width={900}
            height={1488}
            className="h-auto w-full"
            sizes="208px"
          />
          {/* Degradados muy ligeros para disimular el corte de la foto */}
          <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white/90 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-1/5 bg-gradient-to-b from-white to-transparent" />
        </div>

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

        <div className="relative mx-auto max-w-[1320px] px-5 pt-16 pb-24 md:min-h-[40rem] md:pt-20 md:pb-28 lg:min-h-[48rem] lg:px-10">
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

      {/* Franja cinética con el lema de la marca */}
      <section aria-label="Lema de GEMO Construcciones" className="overflow-hidden py-12 md:py-16">
        <div className="marquee-track" aria-hidden="true">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {["Construimos espacios", "Creamos oportunidades", "Transformamos comunidades"].map(
                (frase) => (
                  <span key={frase} className="flex items-center">
                    <span
                      className="font-display text-5xl font-extrabold tracking-tight whitespace-nowrap text-transparent md:text-7xl"
                      style={{ WebkitTextStroke: "1.5px rgba(14,107,136,0.4)" }}
                    >
                      {frase}
                    </span>
                    <span className="mx-8 h-3 w-3 shrink-0 rotate-45 bg-sun-300 md:mx-12" />
                  </span>
                )
              )}
            </div>
          ))}
        </div>
        <p className="sr-only">
          Construimos espacios. Creamos oportunidades. Transformamos comunidades.
        </p>
      </section>

      {/* Principios: texto real superpuesto sobre la pared pintada de la
          obra. En móvil el texto va arriba y la foto debajo. */}
      <section aria-label="Lo que nos define" className="pt-6 pb-24 md:pt-8 md:pb-32">
        {/* Versión móvil: texto en flujo normal */}
        <div className="mx-auto max-w-[1320px] px-5 md:hidden">
          <h2 className="font-display text-3xl font-bold tracking-tight">Lo que nos define</h2>
          <span aria-hidden="true" className="mt-3 block h-1.5 w-14 rounded-full bg-sun-300" />
          <div className="mt-8 grid gap-8">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="border-t border-line pt-5">
                <h3 className="flex items-center gap-2.5 font-display text-xl font-bold text-petrol-600">
                  <span aria-hidden="true" className="h-2 w-2 shrink-0 rotate-45 bg-sun-300" />
                  {p.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="relative mt-10 md:mt-0">
          <Image
            src="/images/pared-principios.webp"
            alt="Equipo de GEMO dando acabados a la pared de una vivienda en obra"
            width={1376}
            height={768}
            className="w-full"
            sizes="100vw"
          />
          {/* Texto sobre la zona pintada de blanco (solo tablet/escritorio) */}
          <div className="absolute inset-0 hidden md:block" aria-hidden={false}>
            <div className="absolute top-[24%] left-[6%] w-[56%]">
              <h2 className="font-display text-[2.6vw] font-bold tracking-tight text-ink-800">
                Lo que nos define
              </h2>
              <span
                aria-hidden="true"
                className="mt-[0.8vw] block h-[0.45vw] w-[4.5vw] rounded-full bg-sun-300"
              />
              <div className="mt-[2vw] grid grid-cols-2 gap-x-[3vw] gap-y-[2.4vw]">
                {principles.map((p, i) => (
                  <Reveal
                    key={p.title}
                    delay={150 + i * 130}
                    className={i < 2 ? "border-b border-ink-800/25 pb-[2vw]" : ""}
                  >
                    <h3 className="flex items-center gap-[0.7vw] font-display text-[1.45vw] font-bold text-petrol-700">
                      <span
                        aria-hidden="true"
                        className="h-[0.55vw] w-[0.55vw] shrink-0 rotate-45 bg-sun-300"
                      />
                      {p.title}
                    </h3>
                    <p className="mt-[0.7vw] text-[1.25vw] leading-[1.5] text-ink-800/85">{p.text}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
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
              Conoce los proyectos que estamos construyendo.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Link
              href="/proyectos"
              className="inline-block rounded-full bg-white px-7 py-3.5 font-semibold text-ink-900 transition hover:bg-white/90 active:scale-[0.98]"
            >
              Ver proyectos
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
