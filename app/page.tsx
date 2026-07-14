import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import ScrollConstructionHero from "@/components/ScrollConstructionHero";
import Reveal from "@/components/Reveal";
import { services } from "@/data/services";
import { projects, statusLabels } from "@/data/projects";
import { testimonials } from "@/data/testimonials";

export default function HomePage() {
  const featuredProjects = projects.slice(0, 2);

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

      {/* Proyectos destacados */}
      <section aria-label="Proyectos destacados" className="bg-stone-100 py-24 md:py-32">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
              Proyectos destacados
            </h2>
            <Link
              href="/proyectos"
              className="group inline-flex items-center gap-2.5 pb-1.5 font-semibold text-petrol-600 transition hover:text-petrol-700"
            >
              Ver todos los proyectos
              <ArrowRight
                size={18}
                weight="bold"
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Reveal>

          <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.id} delay={i * 100} className={i === 1 ? "md:mt-16" : ""}>
                <Link href={`/proyectos/${project.id}`} className="group block">
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src={project.image}
                      alt={`Proyecto ${project.name}`}
                      width={1400}
                      height={1050}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(min-width: 768px) 48vw, 100vw"
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl font-bold tracking-tight transition-colors group-hover:text-petrol-600">
                        {project.name}
                      </h3>
                      <p className="mt-1.5 text-muted">
                        {project.type} · {project.location}
                      </p>
                    </div>
                    <span className="mt-1.5 shrink-0 rounded-full bg-paper px-3.5 py-1.5 text-xs font-semibold text-body">
                      {statusLabels[project.status]}
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestros clientes */}
      <section aria-label="Nuestros clientes" className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
              Nuestros clientes
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              Familias que ya viven en espacios construidos por GEMO. Testimonios de ejemplo,
              serán sustituidos por los reales.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-12 md:grid-cols-[1.5fr_1fr] md:gap-16">
            <Reveal className="flex flex-col justify-between border-l-4 border-cyan-400 pl-7 md:pl-9">
              <blockquote className="font-display text-2xl leading-snug font-semibold tracking-tight md:text-4xl">
                &ldquo;{testimonials[0].quote}&rdquo;
              </blockquote>
              <p className="mt-7 text-muted">
                <span className="font-semibold text-body">{testimonials[0].name}</span>
                <br />
                {testimonials[0].context}
              </p>
            </Reveal>
            <div className="flex flex-col gap-10">
              {testimonials.slice(1).map((t, i) => (
                <Reveal key={t.name} delay={(i + 1) * 90} className="border-t border-line pt-7">
                  <blockquote className="text-lg leading-relaxed text-body">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <p className="mt-4 text-sm text-muted">
                    <span className="font-semibold text-body">{t.name}</span> · {t.context}
                  </p>
                </Reveal>
              ))}
            </div>
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
