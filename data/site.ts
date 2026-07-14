/**
 * ============================================================
 * CONFIGURACIÓN GENERAL DEL SITIO - GEMO Construcciones
 * ============================================================
 * Edita este archivo para actualizar datos de contacto, redes
 * sociales y rutas de recursos sin tocar los componentes.
 *
 * Los valores marcados como [PROVISIONAL] son de ejemplo y deben
 * sustituirse por la información real de la empresa.
 */

export const site = {
  name: "GEMO Construcciones",
  tagline: "Construimos espacios. Creamos oportunidades. Transformamos comunidades.",
  description:
    "Empresa constructora venezolana con más de 20 años desarrollando proyectos inmobiliarios, residenciales, comerciales y de infraestructura, con planes de pago accesibles y sin trámites bancarios.",
  url: "https://www.gemoconstrucciones.com", // [PROVISIONAL] dominio definitivo
  locale: "es_VE",

  contact: {
    phone: "+58 412-000-0000", // [PROVISIONAL]
    phoneHref: "+584120000000", // [PROVISIONAL]
    whatsapp: "584120000000", // [PROVISIONAL] solo dígitos, con código de país
    whatsappMessage:
      "Hola, me gustaría recibir información sobre los proyectos de GEMO Construcciones.",
    email: "contacto@gemoconstrucciones.com", // [PROVISIONAL]
    address: "Av. Principal, Torre Empresarial, Caracas, Venezuela", // [PROVISIONAL]
    schedule: "Lunes a viernes, 8:00 a. m. a 5:00 p. m.", // [PROVISIONAL]
  },

  social: {
    instagram: "https://instagram.com/gemoconstrucciones", // [PROVISIONAL]
    facebook: "https://facebook.com/gemoconstrucciones", // [PROVISIONAL]
    tiktok: "https://tiktok.com/@gemoconstrucciones", // [PROVISIONAL]
  },

  /** Recursos del hero con video controlado por scroll */
  hero: {
    videoSrc: "/video/construccion.mp4",
    videoSrcMobile: "/video/construccion-movil.mp4",
    poster: "/images/hero-poster.jpg",
    /** Altura total del recorrido de scroll (en múltiplos de pantalla). */
    scrollScreens: 5,
  },
};

/** Textos que aparecen durante el avance del video del hero. */
export const heroStages = [
  { at: 0.05, until: 0.24, text: "Construimos desde los cimientos." },
  { at: 0.28, until: 0.47, text: "Cada detalle comienza con una planificación responsable." },
  { at: 0.51, until: 0.7, text: "Creamos espacios pensados para crecer contigo." },
  { at: 0.74, until: 0.88, text: "Más que viviendas, construimos patrimonio." },
];

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
];

/** Pasos del proceso de trabajo (página de servicios). */
export const processSteps = [
  {
    title: "Conocemos tus necesidades",
    text: "Escuchamos qué buscas, tu presupuesto y el tipo de espacio que tu familia o negocio necesita.",
  },
  {
    title: "Presentamos las alternativas",
    text: "Te mostramos los proyectos disponibles y las opciones que mejor se ajustan a tu caso.",
  },
  {
    title: "Elegimos proyecto y plan de pago",
    text: "Definimos juntos la vivienda o el local y la modalidad de pago que te resulte cómoda.",
  },
  {
    title: "Formalizamos el proceso",
    text: "Firmamos los documentos con total transparencia, sin trámites bancarios complicados.",
  },
  {
    title: "Acompañamos el avance de la obra",
    text: "Te mantenemos informado del progreso de la construcción en cada etapa.",
  },
  {
    title: "Entregamos un espacio para crecer",
    text: "Recibes tu vivienda o local listo, con el respaldo de una empresa que cumple.",
  },
];
