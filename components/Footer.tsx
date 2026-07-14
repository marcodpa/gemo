import Link from "next/link";
import Image from "next/image";
import { site, navLinks } from "@/data/site";
import { projects } from "@/data/projects";
import { InstagramLogo, FacebookLogo, TiktokLogo } from "@phosphor-icons/react/dist/ssr";

/** Pie de página corporativo sobre fondo petróleo. */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink-900 text-white">
      <div className="mx-auto max-w-[1320px] px-5 py-16 md:py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr]">
          <div>
            <Link href="/" aria-label="GEMO Construcciones, inicio" className="inline-flex items-center gap-3">
              <Image
                src="/brand/gemo-marca-blanco.png"
                alt=""
                width={44}
                height={40}
                className="h-10 w-auto"
              />
              <Image
                src="/brand/gemo-wordmark-blanco.png"
                alt="Gemo"
                width={120}
                height={32}
                className="h-6 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-sm leading-relaxed text-white/65">
              Empresa constructora venezolana. Más de 20 años desarrollando proyectos que generan
              bienestar, seguridad y patrimonio para las familias.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de GEMO Construcciones"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <InstagramLogo size={19} />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de GEMO Construcciones"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <FacebookLogo size={19} />
              </a>
              <a
                href={site.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok de GEMO Construcciones"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <TiktokLogo size={19} />
              </a>
            </div>
          </div>

          <nav aria-label="Navegación del pie de página">
            <h2 className="font-display text-sm font-semibold tracking-wide text-white/45 uppercase">
              Navegación
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/80 transition hover:text-cyan-400">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contacto" className="text-white/80 transition hover:text-cyan-400">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Proyectos">
            <h2 className="font-display text-sm font-semibold tracking-wide text-white/45 uppercase">
              Proyectos
            </h2>
            <ul className="mt-4 space-y-2.5">
              {projects.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/proyectos/${p.id}`}
                    className="text-white/80 transition hover:text-cyan-400"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-semibold tracking-wide text-white/45 uppercase">
              Contacto
            </h2>
            <ul className="mt-4 space-y-2.5 text-white/80">
              <li>
                <a href={`tel:${site.contact.phoneHref}`} className="transition hover:text-cyan-400">
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.contact.email}`} className="break-all transition hover:text-cyan-400">
                  {site.contact.email}
                </a>
              </li>
              <li>{site.contact.address}</li>
              <li>{site.contact.schedule}</li>
            </ul>
            <p className="mt-3 text-sm text-white/40">Datos de contacto provisionales.</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© {year} GEMO Construcciones. Todos los derechos reservados.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/politica-de-privacidad" className="transition hover:text-white">
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link href="/terminos-y-condiciones" className="transition hover:text-white">
                Términos y condiciones
              </Link>
            </li>
            <li>
              <Link href="/aviso-legal" className="transition hover:text-white">
                Aviso legal
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
