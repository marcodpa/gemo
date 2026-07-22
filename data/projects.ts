/**
 * ============================================================
 * PROYECTOS - GEMO Construcciones
 * ============================================================
 * Portal del Rosario y Villa Esperanza son proyectos reales de la
 * empresa (fotos propias). Los datos comerciales marcados con
 * [CONFIRMAR] deben ser validados por GEMO antes de publicar
 * (estado real, porcentaje de avance, tipologías y planes de pago).
 *
 * Los dos primeros proyectos del arreglo se muestran como
 * "Proyectos destacados" en la página de inicio.
 */

export type ProjectStatus = "disponible" | "construccion" | "finalizado" | "proximo";

export type Project = {
  id: string;
  name: string;
  location: string;
  type: string;
  status: ProjectStatus;
  summary: string;
  description: string;
  features: string[];
  /** Avance de construcción 0-100. Solo se muestra si el estado es "construccion". */
  progress?: number;
  paymentPlan: string;
  image: string;
  gallery: string[];
};

export const statusLabels: Record<ProjectStatus, string> = {
  disponible: "Disponible",
  construccion: "En construcción",
  finalizado: "Finalizado",
  proximo: "Próximamente",
};

export const projects: Project[] = [
  {
    id: "portal-del-rosario",
    name: "Portal del Rosario",
    location: "La Villa del Rosario, Zulia",
    type: "Residencial",
    status: "disponible",
    summary:
      "Nuestro conjunto residencial insignia: viviendas unifamiliares con urbanismo propio, acceso controlado y una entrada distintiva, pensadas para que más familias accedan a su patrimonio.",
    description:
      "Portal del Rosario es el desarrollo residencial insignia de GEMO Construcciones en La Villa del Rosario. Un urbanismo cerrado de viviendas unifamiliares con su entrada característica, calles internas y áreas comunes, concebido para familias que buscan un espacio propio, seguro y con proyección de futuro. Cada vivienda se entrega con acabados listos para habitar y con el respaldo de una empresa comprometida con cumplir lo que promete.",
    features: [
      "Viviendas unifamiliares en urbanismo cerrado",
      "Entrada principal con acceso controlado",
      "Calles internas y áreas comunes",
      "Entorno tranquilo, ideal para familias",
    ],
    paymentPlan:
      "Planes de pago directos con la empresa, con inicial fraccionada y cuotas, sin trámites bancarios tradicionales. Condiciones según disponibilidad. [CONFIRMAR]",
    image: "/images/proyectos/portal-del-rosario-1.webp",
    gallery: [
      "/images/proyectos/portal-del-rosario-1.webp",
      "/images/proyectos/portal-del-rosario-2.webp",
      "/images/proyectos/portal-del-rosario-3.webp",
      "/images/proyectos/portal-del-rosario-4.webp",
      "/images/proyectos/portal-del-rosario-5.webp",
      "/images/proyectos/portal-del-rosario-6.webp",
    ],
  },
  {
    id: "villa-esperanza",
    name: "Villa Esperanza",
    location: "La Villa del Rosario, Zulia",
    type: "Residencial",
    status: "construccion",
    summary:
      "Desarrollo residencial en plena construcción: nuevas viviendas levantándose etapa por etapa, con la misma calidad constructiva y planes de pago pensados para las familias.",
    description:
      "Villa Esperanza es el nuevo desarrollo residencial de GEMO Construcciones, hoy en plena etapa de obra. Fundaciones, estructura, techos y acabados avanzan con supervisión técnica permanente para entregar viviendas sólidas y funcionales. Es la oportunidad de sumarse desde temprano a un proyecto que crece, con las mejores condiciones de reserva y un plan de pago acompañado en cada etapa de la construcción.",
    features: [
      "Viviendas en construcción por etapas",
      "Supervisión técnica permanente en obra",
      "Materiales y acabados de calidad",
      "Reserva anticipada con mejores condiciones",
    ],
    progress: 45, // [CONFIRMAR — avance real de obra]
    paymentPlan:
      "Reserva con inicial accesible y cuotas durante la construcción, directo con la empresa y sin trámites bancarios. Condiciones según disponibilidad. [CONFIRMAR]",
    image: "/images/proyectos/villa-esperanza-1.webp",
    gallery: [
      "/images/proyectos/villa-esperanza-1.webp",
      "/images/proyectos/villa-esperanza-2.webp",
      "/images/proyectos/villa-esperanza-3.webp",
      "/images/proyectos/villa-esperanza-4.webp",
      "/images/proyectos/villa-esperanza-5.webp",
      "/images/proyectos/villa-esperanza-6.webp",
    ],
  },
];
