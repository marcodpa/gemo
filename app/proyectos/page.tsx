import type { Metadata } from "next";
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
    </main>
  );
}
