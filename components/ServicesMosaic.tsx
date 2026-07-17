"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, X } from "@phosphor-icons/react";
import Reveal from "@/components/Reveal";
import { services, type Service } from "@/data/services";

/**
 * Mosaico de servicios: celdas fotográficas y paneles de marca con
 * solo número y título. Al hacer click se abre la ficha completa
 * del servicio en un diálogo accesible.
 */

const mosaic: Record<
  string,
  { variant: "photo" | "ink" | "stone" | "petrol"; span: string; order?: string }
> = {
  "desarrollo-inmobiliario": { variant: "photo", span: "lg:col-span-7" },
  "proyectos-comerciales": { variant: "ink", span: "lg:col-span-5" },
  infraestructura: { variant: "photo", span: "lg:col-span-7", order: "lg:order-4" },
  "gestion-proyectos": { variant: "stone", span: "lg:col-span-5", order: "lg:order-3" },
  financiamiento: { variant: "photo", span: "lg:col-span-6", order: "lg:order-5" },
  asesoria: { variant: "petrol", span: "lg:col-span-6", order: "lg:order-6" },
};

const palettes = {
  ink: { cell: "bg-ink-900", number: "text-cyan-400/40", title: "text-white", icon: "text-cyan-400" },
  petrol: { cell: "bg-petrol-600", number: "text-sun-300/50", title: "text-white", icon: "text-sun-300" },
  stone: { cell: "bg-stone-100", number: "text-petrol-600/35", title: "text-ink-900", icon: "text-petrol-600" },
} as const;

export default function ServicesMosaic() {
  const [open, setOpen] = useState<Service | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  // Diálogo: Escape para cerrar, bloqueo de scroll y foco gestionado.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      (triggerRef.current as HTMLButtonElement | null)?.focus();
    };
  }, [open]);

  return (
    <>
      <div className="grid gap-5 lg:grid-cols-12">
        {services.map((service, i) => {
          const conf = mosaic[service.id];
          const number = String(i + 1).padStart(2, "0");
          const isPhoto = conf.variant === "photo" && service.image;
          const c = palettes[(isPhoto ? "ink" : conf.variant) as keyof typeof palettes];

          return (
            <Reveal
              key={service.id}
              delay={(i % 2) * 90}
              className={`${conf.span} ${conf.order ?? ""}`}
            >
              <button
                type="button"
                id={service.id}
                onClick={(e) => {
                  triggerRef.current = e.currentTarget;
                  setOpen(service);
                }}
                aria-haspopup="dialog"
                className={`group relative flex min-h-[18rem] w-full scroll-mt-28 cursor-pointer flex-col overflow-hidden rounded-xl text-left transition-transform duration-300 hover:-translate-y-1 active:scale-[0.99] md:min-h-[21rem] ${
                  isPhoto ? "" : `${c.cell} p-8 md:p-9`
                }`}
              >
                {isPhoto ? (
                  <>
                    <Image
                      src={service.image!}
                      alt={service.imageAlt ?? ""}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      sizes="(min-width: 1024px) 55vw, 100vw"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/20 to-transparent"
                    />
                    <div className="relative mt-auto flex items-end justify-between gap-4 p-8 md:p-9">
                      <div>
                        <span className="font-display text-sm font-semibold text-cyan-400">
                          {number}
                        </span>
                        <h2 className="mt-1.5 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                          {service.title}
                        </h2>
                      </div>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition group-hover:bg-white group-hover:text-ink-900">
                        <ArrowUpRight size={20} weight="bold" />
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <span
                      aria-hidden="true"
                      className={`font-display text-6xl font-extrabold tracking-tight md:text-7xl ${c.number}`}
                    >
                      {number}
                    </span>
                    <div className="mt-auto flex items-end justify-between gap-4 pt-10">
                      <h2
                        className={`font-display text-2xl font-bold tracking-tight md:text-3xl ${c.title}`}
                      >
                        {service.title}
                      </h2>
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-current transition group-hover:-rotate-0 ${c.icon}`}
                      >
                        <ArrowUpRight size={20} weight="bold" />
                      </span>
                    </div>
                  </>
                )}
              </button>
            </Reveal>
          );
        })}
      </div>

      {/* Ficha del servicio */}
      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-ink-950/70 backdrop-blur-sm md:items-center md:p-6"
          onClick={() => setOpen(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="servicio-titulo"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[92svh] w-full max-w-2xl overflow-y-auto rounded-t-xl bg-paper md:rounded-xl"
          >
            {open.image && (
              <div className="relative aspect-[16/8] w-full">
                <Image
                  src={open.image}
                  alt={open.imageAlt ?? ""}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 672px, 100vw"
                />
              </div>
            )}
            <div className="relative p-7 md:p-10">
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(null)}
                aria-label="Cerrar ficha del servicio"
                className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-ink-900 transition hover:bg-line"
              >
                <X size={20} weight="bold" />
              </button>
              <span className="font-display text-sm font-semibold text-petrol-600">
                {String(services.indexOf(open) + 1).padStart(2, "0")}
              </span>
              <h2
                id="servicio-titulo"
                className="mt-1.5 max-w-md font-display text-3xl font-bold tracking-tight"
              >
                {open.title}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-body">{open.description}</p>
              <p className="mt-4 leading-relaxed text-muted">{open.detail}</p>
              <Link
                href="/contacto"
                className="mt-8 inline-block rounded-full bg-petrol-600 px-7 py-3.5 font-semibold text-white transition hover:bg-petrol-700 active:scale-[0.98]"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
