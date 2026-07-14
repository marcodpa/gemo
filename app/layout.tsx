import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const dmsans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "GEMO Construcciones | Proyectos inmobiliarios en Venezuela",
    template: "%s | GEMO Construcciones",
  },
  description:
    "Empresa constructora en Venezuela con más de 20 años de trayectoria. Proyectos residenciales y comerciales con planes de pago accesibles y financiamiento directo, sin trámites bancarios.",
  keywords: [
    "empresa constructora en Venezuela",
    "proyectos inmobiliarios en Venezuela",
    "viviendas con financiamiento directo",
    "proyectos residenciales",
    "construcción de viviendas",
    "GEMO Construcciones",
    "planes de pago para viviendas",
    "desarrollo inmobiliario",
  ],
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: "GEMO Construcciones | Proyectos inmobiliarios en Venezuela",
    description:
      "Más de 20 años desarrollando proyectos inmobiliarios que generan bienestar, seguridad y patrimonio para las familias venezolanas.",
    images: [
      {
        url: "/images/cta.webp",
        width: 1400,
        height: 933,
        alt: "Conjunto residencial desarrollado por GEMO Construcciones",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: { index: true, follow: true },
};

/** Datos estructurados de la empresa constructora (schema.org). */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.contact.phone,
  email: site.contact.email,
  address: {
    "@type": "PostalAddress",
    addressCountry: "VE",
    streetAddress: site.contact.address,
  },
  areaServed: { "@type": "Country", name: "Venezuela" },
  slogan: site.tagline,
  knowsAbout: [
    "Desarrollo inmobiliario",
    "Construcción de viviendas",
    "Proyectos comerciales",
    "Infraestructura",
    "Financiamiento directo de viviendas",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${jakarta.variable} ${dmsans.variable}`}>
      <body>
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-petrol-600 focus:px-5 focus:py-2.5 focus:font-semibold focus:text-white"
        >
          Saltar al contenido principal
        </a>
        <Header />
        <div id="contenido">{children}</div>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
