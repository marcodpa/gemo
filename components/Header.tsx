"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/site";
import { List, X } from "@phosphor-icons/react";

/**
 * Encabezado fijo. En la portada arranca transparente sobre el video
 * y pasa a fondo claro al hacer scroll; en las páginas internas es
 * claro desde el inicio. Menú de pantalla completa en móviles.
 */
export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const onHome = pathname === "/";
  // Sobre el hero de la portada el header es transparente con texto blanco.
  const overlay = onHome && !scrolled && !open;

  useEffect(() => {
    let last = window.scrollY > 12;
    setScrolled(last);
    const onScroll = () => {
      const now = window.scrollY > 12;
      if (now !== last) {
        last = now;
        setScrolled(now);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar el menú al navegar.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        overlay
          ? "bg-transparent"
          : "border-b border-line bg-paper/90 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-5 md:h-[72px] lg:px-10">
        <Link href="/" aria-label="GEMO Construcciones, inicio" className="flex items-center gap-2.5">
          <Image
            src={overlay ? "/brand/gemo-marca-blanco.png" : "/brand/gemo-marca.png"}
            alt=""
            width={44}
            height={40}
            className="h-8 w-auto md:h-9"
            priority
          />
          <Image
            src={overlay ? "/brand/gemo-wordmark-blanco.png" : "/brand/gemo-wordmark.png"}
            alt="Gemo"
            width={120}
            height={32}
            className="h-5 w-auto md:h-6"
            priority
          />
        </Link>

        {/* Navegación de escritorio */}
        <nav aria-label="Navegación principal" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-2 text-[15px] font-medium transition-colors ${
                  overlay
                    ? "text-white/90 hover:text-white"
                    : "text-body hover:text-petrol-600"
                } ${active ? (overlay ? "text-white" : "text-petrol-600") : ""}`}
              >
                {link.label}
                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-0.5 left-0 h-[3px] w-7 rounded-full bg-sun-300"
                  />
                )}
              </Link>
            );
          })}
          <Link
            href="/contacto"
            className={`ml-3 rounded-full px-6 py-2.5 text-[15px] font-semibold transition-colors ${
              overlay
                ? "bg-white text-ink-900 hover:bg-white/90"
                : "bg-petrol-600 text-white hover:bg-petrol-700"
            }`}
          >
            Contáctanos
          </Link>
        </nav>

        {/* Botón de menú móvil */}
        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className={`relative z-50 flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${
            overlay ? "text-white" : "text-ink-900"
          }`}
        >
          {open ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
        </button>
      </div>

      {/* Menú móvil de pantalla completa */}
      <div
        id="menu-movil"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 flex flex-col justify-between bg-ink-900 px-6 pt-28 pb-10 transition-opacity duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Navegación móvil" className="flex flex-col gap-1">
          {navLinks.map((link, i) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                tabIndex={open ? 0 : -1}
                className={`border-b border-white/10 py-4 font-display text-2xl font-semibold transition-colors ${
                  active ? "text-cyan-400" : "text-white hover:text-cyan-400"
                }`}
                style={{ transitionDelay: open ? `${i * 30}ms` : "0ms" }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/contacto"
          tabIndex={open ? 0 : -1}
          className="rounded-full bg-white px-6 py-4 text-center font-semibold text-ink-900"
        >
          Contáctanos
        </Link>
      </div>
    </header>
  );
}
