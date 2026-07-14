import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Aviso legal",
  robots: { index: false },
};

export default function AvisoLegal() {
  return (
    <LegalPage title="Aviso legal">
      <p>
        Este sitio web es propiedad de GEMO Construcciones. Todos los contenidos, marcas, logotipos,
        imágenes y textos están protegidos por la legislación aplicable y no pueden reproducirse sin
        autorización expresa.
      </p>
      <p>
        Las imágenes de proyectos pueden corresponder a referencias o etapas de obra y se publican
        con fines ilustrativos.
      </p>
    </LegalPage>
  );
}
