/**
 * ============================================================
 * PROYECTOS - GEMO Construcciones
 * ============================================================
 * CONTENIDO PROVISIONAL DE EJEMPLO.
 * Los nombres, ubicaciones, características, avances y planes de
 * pago que aparecen aquí son ficticios y sirven únicamente para
 * mostrar el diseño. Sustituir por la información real de cada
 * proyecto antes de publicar el sitio.
 *
 * Las imágenes provienen del archivo fotográfico de la empresa.
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
    // Proyecto real de GEMO Construcciones (fotos propias).
    // Completar ubicación exacta, características y plan de pago oficiales.
    id: "portal-del-rosario",
    name: "Portal del Rosario",
    location: "Rosario de Perijá, Zulia", // [CONFIRMAR dirección exacta]
    type: "Residencial",
    status: "construccion",
    summary:
      "Conjunto residencial en desarrollo: viviendas unifamiliares con urbanismo propio, pensadas para que más familias accedan a su patrimonio.",
    description:
      "Portal del Rosario es un conjunto residencial desarrollado por GEMO Construcciones. El proyecto avanza por etapas e incluye viviendas unifamiliares dentro de un urbanismo con acceso controlado. Los detalles oficiales (ubicación exacta, tipologías, avance y condiciones) serán completados por la empresa.",
    features: [
      "Viviendas unifamiliares en urbanismo cerrado",
      "Acceso principal con entrada distintiva",
      "Desarrollo por etapas",
      "Entorno natural y áreas abiertas",
    ],
    progress: 50, // [PROVISIONAL, actualizar con el avance real]
    paymentPlan:
      "Planes de pago directos con la empresa, sin trámites bancarios tradicionales. Condiciones oficiales por confirmar. [PROVISIONAL]",
    image: "/images/proyectos/portal-del-rosario-1.webp",
    gallery: [
      "/images/proyectos/portal-del-rosario-1.webp",
      "/images/proyectos/portal-del-rosario-2.webp",
      "/images/proyectos/portal-del-rosario-3.webp",
      "/images/proyectos/portal-del-rosario-4.webp",
    ],
  },
  {
    id: "residencias-monte-verde",
    name: "Residencias Monte Verde",
    location: "Venezuela · Ubicación por confirmar", // [PROVISIONAL]
    type: "Residencial",
    status: "disponible",
    summary:
      "Conjunto residencial pensado para familias que buscan su primera vivienda, con áreas verdes y planes de pago accesibles.",
    description:
      "Residencias Monte Verde es un desarrollo residencial de ejemplo que muestra cómo se presentará cada proyecto: viviendas funcionales, espacios comunes seguros y un entorno diseñado para el crecimiento de las familias. Toda la información de esta ficha es provisional y será sustituida por los datos reales del proyecto.",
    features: [
      "Viviendas unifamiliares [PROVISIONAL]",
      "Áreas verdes y recreativas",
      "Vigilancia y acceso controlado",
      "Estacionamiento por vivienda",
    ],
    paymentPlan:
      "Planes de pago directos con inicial fraccionada y cuotas mensuales, sin trámites bancarios. Condiciones según disponibilidad. [PROVISIONAL]",
    image: "/images/proyectos/monte-verde-1.webp",
    gallery: [
      "/images/proyectos/monte-verde-1.webp",
      "/images/proyectos/monte-verde-2.webp",
      "/images/proyectos/monte-verde-3.webp",
    ],
  },
  {
    id: "centro-comercial-el-roble",
    name: "Centro Comercial El Roble",
    location: "Venezuela · Ubicación por confirmar", // [PROVISIONAL]
    type: "Comercial",
    status: "finalizado",
    summary:
      "Espacio comercial moderno y funcional, diseñado para impulsar el crecimiento económico de la zona.",
    description:
      "Centro Comercial El Roble es un ejemplo de proyecto comercial entregado: locales funcionales, áreas comunes bien resueltas y una construcción orientada a durar. Ficha provisional para mostrar el diseño.",
    features: [
      "Locales comerciales de distintas dimensiones [PROVISIONAL]",
      "Estacionamiento para visitantes",
      "Áreas comunes climatizadas",
      "Accesos peatonales y vehiculares",
    ],
    paymentPlan:
      "Modalidades de compra y arrendamiento de locales según disponibilidad. [PROVISIONAL]",
    image: "/images/proyectos/el-roble-1.webp",
    gallery: [
      "/images/proyectos/el-roble-1.webp",
      "/images/proyectos/el-roble-2.webp",
      "/images/proyectos/el-roble-3.webp",
    ],
  },
  {
    id: "urbanizacion-valle-alto",
    name: "Urbanización Valle Alto",
    location: "Venezuela · Ubicación por confirmar", // [PROVISIONAL]
    type: "Residencial",
    status: "proximo",
    summary:
      "Próximo desarrollo residencial que ampliará las oportunidades de vivienda con el respaldo de GEMO Construcciones.",
    description:
      "Urbanización Valle Alto es el ejemplo de un proyecto en fase de planificación: pronto se publicará su información oficial, renders y planes de pago. Ficha provisional.",
    features: [
      "Preventa próximamente [PROVISIONAL]",
      "Urbanismo planificado",
      "Opciones de financiamiento directo",
      "Registro de interesados abierto",
    ],
    paymentPlan:
      "Los planes de pago se anunciarán junto con el lanzamiento oficial del proyecto. [PROVISIONAL]",
    image: "/images/proyectos/valle-alto-1.webp",
    gallery: [
      "/images/proyectos/valle-alto-1.webp",
      "/images/proyectos/valle-alto-2.webp",
    ],
  },
];
