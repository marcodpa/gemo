"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, statusLabels, type ProjectStatus } from "@/data/projects";

const filters: { value: ProjectStatus | "todos"; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "disponible", label: "Disponibles" },
  { value: "construccion", label: "En construcción" },
  { value: "finalizado", label: "Finalizados" },
  { value: "proximo", label: "Próximos" },
];

/** Galería de proyectos con filtro por estado. */
export default function ProjectsGallery() {
  const [filter, setFilter] = useState<ProjectStatus | "todos">("todos");
  const visible = projects.filter((p) => filter === "todos" || p.status === filter);

  return (
    <div>
      <div role="group" aria-label="Filtrar proyectos por estado" className="flex flex-wrap gap-2.5">
        {filters.map((f) => {
          const active = filter === f.value;
          return (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              aria-pressed={active}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                active
                  ? "border-petrol-600 bg-petrol-600 text-white"
                  : "border-line bg-transparent text-body hover:border-petrol-600 hover:text-petrol-600"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <div className="mt-16 rounded-xl bg-stone-100 px-8 py-20 text-center">
          <p className="font-display text-xl font-semibold">
            Por ahora no hay proyectos en esta categoría.
          </p>
          <p className="mt-2 text-muted">
            Escríbenos y te avisamos cuando publiquemos el próximo.
          </p>
        </div>
      ) : (
        <ul className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {visible.map((project, i) => (
            <li key={project.id} className={i % 2 === 1 ? "md:mt-16" : ""}>
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
                    <h2 className="font-display text-2xl font-bold tracking-tight transition-colors group-hover:text-petrol-600">
                      {project.name}
                    </h2>
                    <p className="mt-1.5 text-muted">
                      {project.type} · {project.location}
                    </p>
                  </div>
                  <span className="mt-1.5 shrink-0 rounded-full bg-stone-100 px-3.5 py-1.5 text-xs font-semibold text-body">
                    {statusLabels[project.status]}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
