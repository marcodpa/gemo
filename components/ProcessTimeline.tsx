"use client";

import { useEffect, useRef } from "react";
import { processSteps } from "@/data/site";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Línea de tiempo del proceso: la línea central se dibuja a medida
 * que el usuario hace scroll y cada paso se enciende cuando la línea
 * lo alcanza. El progreso se maneja con GSAP ScrollTrigger escribiendo
 * directamente en el DOM (sin estado de React por frame).
 */
export default function ProcessTimeline() {
  const reducedMotion = usePrefersReducedMotion();
  const containerRef = useRef<HTMLOListElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const fill = fillRef.current;
    if (!container || !fill) return;

    if (reducedMotion) {
      fill.style.transform = "scaleY(1)";
      stepRefs.current.forEach((el) => el?.classList.add("is-active"));
      return;
    }

    let disposed = false;
    let scrollTrigger: { kill: () => void } | null = null;

    const setup = async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (disposed) return;
      gsap.registerPlugin(ScrollTrigger);

      scrollTrigger = ScrollTrigger.create({
        trigger: container,
        start: "top 72%",
        end: "bottom 60%",
        onUpdate: (self) => {
          fill.style.transform = `scaleY(${self.progress})`;
          // La línea "alcanza" un paso cuando su nodo queda por
          // encima del frente de avance.
          const rect = container.getBoundingClientRect();
          const front = rect.top + rect.height * self.progress;
          stepRefs.current.forEach((el) => {
            if (!el) return;
            const nodeY = el.getBoundingClientRect().top + 22;
            el.classList.toggle("is-active", nodeY <= front + 8);
          });
        },
      });
    };

    setup();
    return () => {
      disposed = true;
      scrollTrigger?.kill();
    };
  }, [reducedMotion]);

  return (
    <ol ref={containerRef} className="relative mt-16">
      {/* Riel de la línea de tiempo */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-[21px] w-0.5 bg-white/12 md:left-1/2 md:-translate-x-1/2"
      />
      {/* Relleno que se dibuja con el scroll */}
      <div
        ref={fillRef}
        aria-hidden="true"
        className="absolute inset-y-0 left-[21px] w-0.5 origin-top bg-gradient-to-b from-petrol-500 to-cyan-400 md:left-1/2 md:-translate-x-1/2"
        style={{ transform: "scaleY(0)", willChange: "transform" }}
      />

      {processSteps.map((step, i) => {
        const left = i % 2 === 0;
        return (
          <li
            key={step.title}
            ref={(el) => {
              stepRefs.current[i] = el;
            }}
            className="group/step relative grid pb-14 pl-16 last:pb-0 md:grid-cols-2 md:gap-x-20 md:pb-16 md:pl-0"
          >
            {/* Nodo numerado sobre la línea */}
            <span
              aria-hidden="true"
              className="absolute top-0 left-0 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-ink-800 font-display text-sm font-bold text-white/60 transition-all duration-500 group-[.is-active]/step:border-cyan-400 group-[.is-active]/step:bg-cyan-400 group-[.is-active]/step:text-ink-950 md:left-1/2 md:-translate-x-1/2"
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            <div
              className={`transition-all duration-500 md:pt-1 ${
                left ? "md:col-start-1 md:text-right" : "md:col-start-2"
              } opacity-40 translate-y-2 group-[.is-active]/step:translate-y-0 group-[.is-active]/step:opacity-100`}
            >
              <h3 className="font-display text-xl font-bold md:text-2xl">{step.title}</h3>
              <p
                className={`mt-2.5 leading-relaxed text-white/70 ${
                  left ? "md:ml-auto" : ""
                } max-w-md`}
              >
                {step.text}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
