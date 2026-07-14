import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import ScrollConstructionHero from "@/components/ScrollConstructionHero";
import Reveal from "@/components/Reveal";
import { services } from "@/data/services";
import { projects, statusLabels } from "@/data/projects";

export default function HomePage() {
  const featured = projects[0];

  return (
    <main>
      <ScrollConstructionHero />

      {/* Presentación editorial */}
      <section aria-label="Presentación de la empresa" className="bg-paper py-24 md:py-36">
        <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-5 md:grid-cols-[1.15fr_1fr] md:gap-20 lg:px-10">
          <Reveal>
            <h2 className="font-display text-3xl leading-[1.12] font-bold tracking-tight md:text-5xl">
              Una empresa venezolana que lleva más de 20 años convirtiendo terrenos en comunidades.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
              Desarrollamos proyectos residenciales, comerciales y de infraestructura con
              responsabilidad y transparencia. Y los acercamos a las familias con planes de pago
              directos, sin trámites bancarios.
            </p>
            <Link
              href="/quienes-somos"
              className="group mt-9 inline-flex items-center gap-2.5 font-semibold text-petrol-600 transition hover:text-petrol-700"
            >
              Conoce nuestra historia
              <ArrowRight
                size={18}
                weight="bold"
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
          <Reveal delay={120} className="relative">
            <Image
              src="/images/about.webp"
              alt="Vecina caminando por una calle del conjunto Portal del Rosario"
              width={1400}
              height={933}
              className="w-full rounded-xl object-cover md:aspect-[4/5]"
              sizes="(min-width: 768px) 44vw, 100vw"
            />
            <Image
              src="/images/detalle-mezcla.webp"
              alt="Detalle del trabajo de albañilería en obra"
              width={1200}
              height={800}
              className="absolute -bottom-10 -left-8 hidden w-52 rounded-xl border-4 border-paper object-cover shadow-lg md:block lg:w-64"
              sizes="260px"
            />
          </Reveal>
        </div>
      </section>

      {/* Proyecto destacado */}
      <section aria-label="Proyecto destacado" className="relative">
        <div className="relative h-[80svh] min-h-[540px] w-full overflow-hidden">
          <Image
            src="/images/cielo-conjunto.webp"
            alt="Vista aérea del conjunto residencial Portal del Rosario al atardecer"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-[1320px] px-5 pb-14 lg:px-10">
              <Reveal>
                <p className="text-sm font-medium text-cyan-400">
                  {statusLabels[featured.status]} · {featured.location}
                </p>
                <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
                  {featured.name}
                </h2>
                <p className="mt-4 max-w-xl text-lg text-white/80">{featured.summary}</p>
                <Link
                  href={`/proyectos/${featured.id}`}
                  className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 font-semibold text-ink-900 transition hover:bg-white/90 active:scale-[0.98]"
                >
                  Ver proyecto
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Índice de servicios */}
      <section aria-label="Servicios" className="bg-paper py-24 md:py-36">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight md:text-5xl">
              Lo que hacemos
            </h2>
          </Reveal>
          <div className="mt-14">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={i * 40}>
                <Link
                  href={`/servicios#${service.id}`}
                  className="group grid items-baseline gap-2 border-t border-line py-7 transition-colors last:border-b hover:bg-stone-100 md:grid-cols-[90px_1.1fr_1.6fr_60px] md:gap-6 md:px-4"
                >
                  <span className="font-display text-sm font-semibold text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-bold tracking-tight transition-colors group-hover:text-petrol-600 md:text-2xl">
                    {service.title}
                  </h3>
                  <p className="leading-relaxed text-muted">{service.description}</p>
                  <ArrowRight
                    size={22}
                    className="hidden justify-self-end text-petrol-600 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100 md:block"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cierre */}
      <section aria-label="Comienza hoy" className="relative overflow-hidden">
        <div className="relative min-h-[64svh] w-full">
          <Image
            src="/images/calle-atardecer.webp"
            alt="Calle del conjunto residencial al atardecer"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink-950/65" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-[1320px] px-5 lg:px-10">
              <Reveal>
                <h2 className="max-w-2xl font-display text-4xl leading-[1.08] font-bold tracking-tight text-white md:text-6xl">
                  Tu próximo hogar puede comenzar hoy.
                </h2>
                <p className="mt-5 max-w-lg text-lg text-white/80">
                  Conoce los proyectos disponibles y las opciones de pago que tenemos para ti.
                </p>
                <div className="mt-9 flex flex-wrap gap-3.5">
                  <Link
                    href="/contacto"
                    className="rounded-full bg-white px-7 py-3.5 font-semibold text-ink-900 transition hover:bg-white/90 active:scale-[0.98]"
                  >
                    Contáctanos
                  </Link>
                  <Link
                    href="/proyectos"
                    className="rounded-full border border-white/45 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10 active:scale-[0.98]"
                  >
                    Ver proyectos
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
