import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProjectsGallery from "@/components/ProjectsGallery";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Proyectos residenciales y comerciales de GEMO Construcciones en Venezuela: disponibles, en construcción, finalizados y próximos lanzamientos.",
};

export default function ProyectosPage() {
  return (
    <main className="bg-paper">
      <section className="mx-auto max-w-[1320px] px-5 pt-36 pb-14 md:pt-44 lg:px-10">
        <Reveal>
          <h1 className="max-w-3xl font-display text-4xl leading-[1.08] font-extrabold tracking-tight md:text-6xl">
            Proyectos que se convierten en comunidades.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            Desarrollos residenciales y comerciales con el respaldo de más de 20 años de
            experiencia. Las fichas marcadas como provisionales serán actualizadas con la
            información oficial de cada proyecto.
          </p>
        </Reveal>
      </section>

      <section aria-label="Galería de proyectos" className="mx-auto max-w-[1320px] px-5 pb-28 lg:px-10">
        <ProjectsGallery />
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
              ¿Te interesa alguno de nuestros proyectos?
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
