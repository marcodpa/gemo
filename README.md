# GEMO Construcciones — Sitio web corporativo

Sitio corporativo completo desarrollado con **Next.js 15 + React 19 + TypeScript + Tailwind CSS 4 + GSAP (ScrollTrigger)**.

## Ejecutar

```bash
npm install
npm run dev      # desarrollo → http://localhost:3000
npm run build    # producción
```

## Estructura

```
app/            Páginas (App Router), layout con SEO/JSON-LD, sitemap y robots
  politica-de-privacidad/, terminos-y-condiciones/, aviso-legal/
components/     Componentes reutilizables (Header, Footer, hero, tarjetas, formulario…)
sections/       Secciones de la página principal (Quiénes somos, Servicios, Proyectos…)
data/           ✏️ CONTENIDO EDITABLE (ver abajo)
hooks/          Hooks reutilizables
public/         Video del hero e imágenes optimizadas (WebP)
```

## Dónde editar el contenido

| Archivo | Qué contiene |
|---|---|
| `data/site.ts` | Teléfono, WhatsApp, correo, dirección, horario, redes, rutas del video del hero y textos de las etapas del scroll |
| `data/projects.ts` | Fichas de proyectos (nombre, estado, galería, avance, plan de pago) |
| `data/services.ts` | Tarjetas de servicios |
| `components/Logo.tsx` | Logotipo provisional en SVG — sustituir por el oficial |

> ⚠️ **Datos provisionales:** todo lo marcado con `[PROVISIONAL]`, `[COMPLETAR]` o `[CONFIRMAR]`
> es contenido de ejemplo (teléfonos, correos, dirección, redes, avances de obra, planes de pago
> y los proyectos de muestra). El proyecto **Portal del Rosario** es real (fotos propias), pero
> sus datos comerciales deben ser confirmados por la empresa.

## Hero con scroll storytelling

`components/ScrollConstructionHero.tsx`:

- El video permanece *sticky* mientras el contenedor mide `5 × 100svh` (configurable en `data/site.ts` → `hero.scrollScreens`).
- GSAP ScrollTrigger reporta el progreso del scroll; `video.currentTime` se interpola en un único `requestAnimationFrame` (sin renders de React por píxel).
- Espera `loadedmetadata`, muestra loader + poster, y hace *fallback* a imagen estática si el video falla o si el usuario tiene `prefers-reduced-motion`.
- En móviles/equipos lentos carga `construccion-movil.mp4` (960px, 1.5 MB).
- Los videos fueron re-codificados con GOP corto (`-g 8`) para que el *scrubbing* sea fluido. Si sustituyes el video, re-codifícalo igual:

```bash
ffmpeg -i origen.mp4 -an -vf "scale='min(1920,iw)':-2" -c:v libx264 -crf 22 \
  -g 8 -keyint_min 8 -sc_threshold 0 -movflags +faststart public/video/construccion.mp4
```

## Formulario de contacto

`components/ContactForm.tsx` valida en tiempo real y simula el envío (no hay backend).
Conectar `onSubmit` con el servicio real (API, correo o CRM) donde está marcado el comentario.

## Pendientes al publicar

1. Sustituir datos de contacto y redes en `data/site.ts`.
2. Sustituir el logotipo provisional.
3. Completar fichas reales de proyectos y eliminar los de ejemplo.
4. Redactar los textos legales definitivos (páginas en `app/`).
5. Configurar el dominio real en `data/site.ts` → `url` (SEO/sitemap).
6. Conectar el formulario a un backend o servicio de correo.
