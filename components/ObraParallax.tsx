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
          // Desplazamiento muy sutil, más lento que el scroll.
          inner.style.transform = `translateY(${(0.5 - self.progress) * 6}%)`;
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
    <div ref={wrapRef} className="overflow-hidden">
      {/* La foto completa, sin recortes: el cielo ya es del color del
          fondo, así que la escena emerge de la página. El parallax es
          muy sutil para dar profundidad sin deformar. */}
      <div ref={innerRef} className="mx-auto max-w-[460px] md:mx-0" style={{ willChange: "transform" }}>
        <Image
          src="/images/obra-cuadrilla.webp"
          alt="Cuadrilla de GEMO subiendo formaletas al techo de una vivienda en obra"
          width={1023}
          height={1537}
          className="h-auto w-full"
          sizes="(min-width: 768px) 46vw, 100vw"
        />
      </div>
    </div>
  );
}
