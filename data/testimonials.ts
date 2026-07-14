/**
 * Testimonios de clientes.
 * CONTENIDO PROVISIONAL DE EJEMPLO: sustituir por testimonios reales
 * (con autorización de cada cliente) antes de publicar el sitio.
 */

export type Testimonial = {
  quote: string;
  name: string;
  context: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Pagamos nuestra casa directamente con la empresa, sin bancos. Hoy mis hijos crecen en un lugar propio.",
    name: "María Alejandra Fuenmayor", // [PROVISIONAL]
    context: "Propietaria en Portal del Rosario",
  },
  {
    quote:
      "Me mantuvieron informado del avance de la obra en todo momento. Entregaron lo que prometieron.",
    name: "José Gregorio Paz", // [PROVISIONAL]
    context: "Propietario de vivienda",
  },
  {
    quote:
      "El plan de pago se ajustó a lo que podíamos dar cada mes. El acompañamiento fue de verdad.",
    name: "Carmen Teresa Boscán", // [PROVISIONAL]
    context: "Clienta de GEMO Construcciones",
  },
];
