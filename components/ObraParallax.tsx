"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Cierre fotográfico de Contáctanos: la cuadrilla en la obra emerge
 * del fondo del sitio con un parallax suave ligado al scroll
 * (la imagen se desplaza más lento que la página).
 */
export default function ObraParallax() {
  const reducedMotion = usePrefersReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reducedMotion) return;
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;

    let disposed = false;
    let scrollTrigger: { kill: () => void } | null = null;

    const setup = async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (disposed) return;
      gsap.registerPlugin(ScrollTrigger);

      scrollTrigger = ScrollTrigger.create({
        trigger: wrap,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          // La imagen recorre un 18% de su alto extra, más lento que el scroll.
          inner.style.transform = `translateY(${(0.5 - self.progress) * 18}%)`;
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
    <div ref={wrapRef} className="relative h-[58svh] min-h-[400px] overflow-hidden">
      <div
        ref={innerRef}
        className="absolute inset-x-0 -top-[15%] h-[130%]"
        style={{ willChange: "transform" }}
      >
        <Image
          src="/images/obra-cuadrilla.webp"
          alt="Cuadrilla de GEMO subiendo formaletas al techo de una vivienda en obra"
          fill
          className="object-cover object-[center_62%]"
          sizes="100vw"
        />
      </div>
      {/* Fundido superior: la foto nace del fondo de la página */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-paper via-paper/60 to-transparent"
      />
    </div>
  );
}
