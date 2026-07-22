import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WhatsappLogo, ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";
import { projects, statusLabels } from "@/data/projects";
import { site } from "@/data/site";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Proyecto no encontrado" };
  return {
    title: project.name,
    description: project.summary,
    openGraph: { images: [{ url: project.image }] },
  };
}

export default async function ProyectoPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const whatsappHref = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
    `Hola, me interesa el proyecto ${project.name}. ¿Podrían darme más información?`
  )}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: project.name,
    description: project.summary,
    address: { "@type": "PostalAddress", addressLocality: project.location, addressCountry: "VE" },
    image: project.image,
  };

  return (
    <main className="bg-paper">
      {/* Portada del proyecto */}
      <section className="relative">
        <div className="relative h-[68svh] min-h-[480px] w-full overflow-hidden">
          <Image
            src={project.image}
            alt={`Proyecto ${project.name}`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/20 to-ink-950/30" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-[1320px] px-5 pb-12 lg:px-10">
              <Link
                href="/proyectos"
                className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white"
              >
                <ArrowLeft size={16} weight="bold" />
                Todos los proyectos
              </Link>
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                {project.name}
              </h1>
            </div>
          </div>
        </div>

        {/* Ficha resumen */}
        <div className="border-b border-line bg-paper">
          <dl className="mx-auto grid max-w-[1320px] grid-cols-2 gap-y-6 px-5 py-8 md:grid-cols-4 lg:px-10">
            <div>
              <dt className="text-sm text-muted">Ubicación</dt>
              <dd className="mt-1 font-display font-semibold">{project.location}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Tipo</dt>
              <dd className="mt-1 font-display font-semibold">{project.type}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Estado</dt>
              <dd className="mt-1 font-display font-semibold">{statusLabels[project.status]}</dd>
            </div>
            {typeof project.progress === "number" && project.status === "construccion" ? (
              <div>
                <dt className="text-sm text-muted">Avance de obra</dt>
                <dd className="mt-1 font-display font-semibold">
                  {project.progress}% <span className="font-normal text-muted">(provisional)</span>
                </dd>
              </div>
            ) : (
              <div>
                <dt className="text-sm text-muted">Información</dt>
                <dd className="mt-1 font-display font-semibold">Ficha provisional</dd>
              </div>
            )}
          </dl>
        </div>
      </section>

      {/* Recorrido editorial: el texto del proyecto entretejido con sus
          fotos (descripción junto a foto, banda panorámica, características
          junto a foto y un dúo de cierre). */}

      {/* 1. Sobre el proyecto + foto */}
      <section className="mx-auto grid max-w-[1320px] items-center gap-10 px-5 py-20 md:grid-cols-2 md:gap-16 md:py-28 lg:px-10">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Sobre el proyecto
          </h2>
          <span aria-hidden="true" className="mt-5 block h-1.5 w-14 rounded-full bg-sun-300" />
          <p className="mt-6 text-lg leading-relaxed text-body">{project.description}</p>
        </Reveal>
        {project.gallery[1] && (
          <Reveal delay={100} className="group overflow-hidden rounded-xl">
            <Image
              src={project.gallery[1]}
              alt={`Vista del proyecto ${project.name}`}
              width={1600}
              height={1200}
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              sizes="(min-width: 768px) 46vw, 100vw"
            />
          </Reveal>
        )}
      </section>

      {/* 2. Banda panorámica a todo el ancho */}
      {project.gallery[2] && (
        <Reveal className="group relative h-[52svh] min-h-[340px] w-full overflow-hidden">
          <Image
            src={project.gallery[2]}
            alt={`${project.name}, panorámica del desarrollo`}
            fill
            className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
            sizes="100vw"
          />
        </Reveal>
      )}

      {/* 3. Foto + características */}
      <section className="mx-auto grid max-w-[1320px] items-center gap-10 px-5 py-20 md:grid-cols-2 md:gap-16 md:py-28 lg:px-10">
        {project.gallery[3] && (
          <Reveal className="group order-2 overflow-hidden rounded-xl md:order-1">
            <Image
              src={project.gallery[3]}
              alt={`Detalle del proyecto ${project.name}`}
              width={1600}
              height={1200}
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              sizes="(min-width: 768px) 46vw, 100vw"
            />
          </Reveal>
        )}
        <Reveal delay={100} className="order-1 md:order-2">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Lo que incluye
          </h2>
          <span aria-hidden="true" className="mt-5 block h-1.5 w-14 rounded-full bg-sun-300" />
          <ul className="mt-7 space-y-4">
            {project.features.map((f) => (
              <li key={f} className="flex gap-3.5 border-t border-line pt-4 text-lg leading-relaxed text-body">
                <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rotate-45 bg-cyan-400" />
                {f}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* 4. Dúo de cierre */}
      {(project.gallery[4] || project.gallery[5]) && (
        <section
          aria-label={`Más imágenes de ${project.name}`}
          className="mx-auto grid max-w-[1320px] gap-4 px-5 pb-20 md:grid-cols-2 md:gap-5 md:pb-28 lg:px-10"
        >
          {[project.gallery[4], project.gallery[5]].filter(Boolean).map((src, i) => (
            <Reveal key={src} delay={i * 100} className="group overflow-hidden rounded-xl">
              <Image
                src={src as string}
                alt={`Imagen del proyecto ${project.name}`}
                width={1600}
                height={1200}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(min-width: 768px) 46vw, 100vw"
              />
            </Reveal>
          ))}
        </section>
      )}

      {/* Plan de pago y contacto */}
      <section className="bg-ink-900 py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 md:grid-cols-[1.4fr_1fr] lg:px-10">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Plan de pago
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
              {project.paymentPlan}
            </p>
          </Reveal>
          <Reveal delay={100} className="flex flex-col gap-3.5 md:items-end">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 font-semibold text-white transition hover:brightness-105 active:scale-[0.98] md:w-auto"
            >
              <WhatsappLogo size={20} weight="fill" />
              Escríbenos por WhatsApp
            </a>
            <Link
              href={`/contacto?proyecto=${encodeURIComponent(project.name)}`}
              className="inline-flex w-full items-center justify-center rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10 active:scale-[0.98] md:w-auto"
            >
              Solicitar información
            </Link>
          </Reveal>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
