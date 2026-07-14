/**
 * Servicios de GEMO Construcciones.
 * `image` es opcional: los servicios con foto se muestran con
 * composición fotográfica en la página de servicios.
 */

export type Service = {
  id: string;
  title: string;
  description: string;
  detail: string;
  image?: string;
  imageAlt?: string;
};

export const services: Service[] = [
  {
    id: "desarrollo-inmobiliario",
    title: "Desarrollo inmobiliario",
    description:
      "Planificación y construcción de proyectos residenciales diseñados para responder a las necesidades reales de las familias.",
    detail:
      "Desde la selección del terreno hasta la entrega de la vivienda, desarrollamos urbanismos completos con servicios, vialidad y espacios pensados para la vida en comunidad.",
    image: "/images/casa-fachada.webp",
    imageAlt: "Fachada de una vivienda del conjunto Portal del Rosario",
  },
  {
    id: "proyectos-comerciales",
    title: "Proyectos comerciales",
    description:
      "Creación de espacios comerciales funcionales, modernos y orientados al crecimiento económico.",
    detail:
      "Locales y centros comerciales concebidos para atraer visitantes, facilitar la operación de los comercios y dinamizar la economía de la zona.",
  },
  {
    id: "infraestructura",
    title: "Construcción de infraestructura",
    description:
      "Desarrollo de obras e infraestructura con criterios de calidad, seguridad y durabilidad.",
    detail:
      "Vialidad, redes de servicios y obras civiles ejecutadas con supervisión técnica permanente y materiales certificados.",
    image: "/images/obra-techo.webp",
    imageAlt: "Cuadrilla de GEMO trabajando sobre el techo de una vivienda en obra",
  },
  {
    id: "gestion-proyectos",
    title: "Planificación y gestión de proyectos",
    description:
      "Coordinación integral de cada etapa, desde la conceptualización hasta la ejecución y entrega.",
    detail:
      "Un solo equipo responsable del cronograma, el presupuesto y la calidad, para que cada proyecto se entregue como se prometió.",
  },
  {
    id: "financiamiento",
    title: "Financiamiento directo",
    description:
      "Opciones y planes de pago accesibles, sin depender exclusivamente de trámites bancarios tradicionales.",
    detail:
      "Iniciales fraccionadas y cuotas acordadas directamente con la empresa. El camino más corto entre tu familia y su patrimonio.",
    image: "/images/equipo-frisado.webp",
    imageAlt: "Equipo de GEMO dando acabados a una vivienda",
  },
  {
    id: "asesoria",
    title: "Asesoría inmobiliaria",
    description:
      "Orientación personalizada para ayudar a cada cliente a elegir la alternativa que mejor se adapte a sus necesidades.",
    detail:
      "Te acompañamos a comparar proyectos, entender los planes de pago y tomar una decisión informada, sin presiones.",
  },
];
