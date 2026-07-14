import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  robots: { index: false },
};

export default function TerminosCondiciones() {
  return (
    <LegalPage title="Términos y condiciones">
      <p>
        El uso de este sitio web implica la aceptación de los presentes términos. La información
        publicada sobre proyectos, características, disponibilidad y planes de pago tiene carácter
        informativo y puede cambiar sin previo aviso; no constituye una oferta contractual.
      </p>
      <p>
        Las condiciones definitivas de cada proyecto se establecen en los documentos formales
        suscritos entre GEMO Construcciones y el cliente.
      </p>
    </LegalPage>
  );
}
