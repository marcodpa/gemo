"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { site, heroStages } from "@/data/site";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Hero con scroll storytelling: el video de la construcción de una
 * vivienda avanza sincronizado con el desplazamiento del usuario.
 *
 * Rendimiento:
 * - GSAP ScrollTrigger reporta el progreso a refs; ningún estado de
 *   React se actualiza por píxel de scroll.
 * - `video.currentTime` se interpola (lerp) dentro de un único
 *   requestAnimationFrame.
 * - Los textos superpuestos se controlan escribiendo estilos
 *   directamente en el DOM.
 * - Con `prefers-reduced-motion` se muestra una versión estática.
 */
export default function ScrollConstructionHero() {
  const reducedMotion = usePrefersReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const finalRef = useRef<HTMLDivElement>(null);

  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  // La versión del video (ligera o completa) se decide en el cliente.
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  useEffect(() => {
    const smallScreen = window.matchMedia("(max-width: 768px)").matches;
    const lowPower =
      typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency <= 4;
    setVideoSrc(smallScreen || lowPower ? site.hero.videoSrcMobile : site.hero.videoSrc);
  }, []);

  useEffect(() => {
    if (reducedMotion || !videoSrc) return;

    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    let disposed = false;
    let rafId = 0;
    let scrollTrigger: { kill: () => void } | null = null;

    const state = { progress: 0, currentTime: 0, duration: 0 };

    const applyOverlays = () => {
      const p = state.progress;
      const fade = 0.045;

      heroStages.forEach((stage, i) => {
        const el = stageRefs.current[i];
        if (!el) return;
        let opacity = 0;
        if (p >= stage.at && p <= stage.until) {
          const fadeIn = Math.min((p - stage.at) / fade, 1);
          const fadeOut = Math.min((stage.until - p) / fade, 1);
          opacity = Math.min(fadeIn, fadeOut);
        }
        el.style.opacity = String(opacity);
        el.style.transform = `translateY(${(1 - opacity) * 22}px)`;
      });

      const finalEl = finalRef.current;
      if (finalEl) {
        const t = Math.min(Math.max((p - 0.9) / 0.08, 0), 1);
        finalEl.style.opacity = String(t);
        finalEl.style.transform = `translateY(${(1 - t) * 26}px)`;
        finalEl.style.pointerEvents = t > 0.6 ? "auto" : "none";
      }
    };

    const tick = () => {
      if (disposed) return;
      if (state.duration > 0) {
        const target = state.progress * state.duration;
        state.currentTime += (target - state.currentTime) * 0.14;
        if (Math.abs(video.currentTime - state.currentTime) > 0.015) {
          try {
            video.currentTime = state.currentTime;
          } catch {
            /* seeks demasiado seguidos: se reintenta en el siguiente frame */
          }
        }
      }
      applyOverlays();
      rafId = requestAnimationFrame(tick);
    };

    const setup = async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (disposed) return;
      gsap.registerPlugin(ScrollTrigger);

      scrollTrigger = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          state.progress = self.progress;
        },
      });

      rafId = requestAnimationFrame(tick);
    };

    const onMetadata = () => {
      state.duration = Math.max(video.duration - 0.05, 0);
    };
    const onReady = () => setVideoReady(true);
    const onError = () => setVideoFailed(true);

    video.addEventListener("loadedmetadata", onMetadata);
    video.addEventListener("canplay", onReady, { once: true });
    video.addEventListener("error", onError);
    if (video.readyState >= 1) onMetadata();
    if (video.readyState >= 3) setVideoReady(true);

    video.pause();
    setup();

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      scrollTrigger?.kill();
      video.removeEventListener("loadedmetadata", onMetadata);
      video.removeEventListener("canplay", onReady);
      video.removeEventListener("error", onError);
    };
  }, [reducedMotion, videoSrc]);

  // Versión estática accesible.
  if (reducedMotion) {
    return (
      <section
        aria-label="Presentación de GEMO Construcciones"
        className="relative flex min-h-[100dvh] items-end overflow-hidden bg-ink-950 pb-20"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={site.hero.poster}
          alt="Vivienda terminada del conjunto Portal del Rosario"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
        <HeroFinalContent />
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      aria-label="Presentación de GEMO Construcciones"
      className="relative bg-ink-950"
      style={{ height: `${site.hero.scrollScreens * 100}svh` }}
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* Poster de respaldo mientras carga el video */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={site.hero.poster}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            videoReady && !videoFailed ? "opacity-0" : "opacity-100"
          }`}
        />

        {!videoFailed && videoSrc && (
          <video
            ref={videoRef}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              videoReady ? "opacity-100" : "opacity-0"
            }`}
            src={videoSrc}
            poster={site.hero.poster}
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            aria-hidden="true"
            tabIndex={-1}
          />
        )}

        {/* Escurecido para legibilidad */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/75 via-ink-950/5 to-ink-950/30" />

        {/* Textos de cada etapa */}
        {heroStages.map((stage, i) => (
          <div
            key={stage.text}
            ref={(el) => {
              stageRefs.current[i] = el;
            }}
            className="pointer-events-none absolute inset-x-0 bottom-[14svh] px-6 opacity-0 md:bottom-[16svh] md:px-14 lg:px-24"
            style={{ willChange: "opacity, transform" }}
          >
            <p className="max-w-xl font-display text-3xl leading-[1.15] font-bold tracking-tight text-white drop-shadow-md md:text-5xl">
              {stage.text}
            </p>
          </div>
        ))}

        {/* Cierre: marca y llamados a la acción */}
        <div
          ref={finalRef}
          className="pointer-events-none absolute inset-0 flex items-end pb-[12svh] opacity-0 md:items-center md:pb-0"
          style={{ willChange: "opacity, transform" }}
        >
          <HeroFinalContent />
        </div>
      </div>
    </section>
  );
}

function HeroFinalContent() {
  return (
    <div className="relative w-full px-6 md:px-14 lg:px-24">
      <h1 className="max-w-3xl font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-white md:text-6xl">
        Construimos espacios.
        <br />
        Creamos oportunidades.
      </h1>
      <p className="mt-5 max-w-xl text-lg text-white/85 md:text-xl">
        Más de 20 años transformando comunidades en Venezuela.
      </p>
      <div className="mt-9 flex flex-wrap gap-3.5">
        <Link
          href="/proyectos"
          className="rounded-full bg-white px-7 py-3.5 font-semibold text-ink-900 transition hover:bg-white/90 active:scale-[0.98]"
        >
          Ver proyectos
        </Link>
        <Link
          href="/contacto"
          className="rounded-full border border-white/45 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 active:scale-[0.98]"
        >
          Contáctanos
        </Link>
      </div>
    </div>
  );
}
