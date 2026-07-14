import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Política de privacidad",
  robots: { index: false },
};

export default function PoliticaPrivacidad() {
  return (
    <LegalPage title="Política de privacidad">
      <p>
        En GEMO Construcciones respetamos la privacidad de nuestros visitantes y clientes. Los
        datos personales suministrados a través de nuestros formularios (nombre, teléfono, correo
        electrónico y mensaje) se utilizan únicamente para responder solicitudes de información y
        brindar atención comercial.
      </p>
      <p>
        No compartimos datos personales con terceros ajenos a la empresa, salvo obligación legal.
        El usuario puede solicitar la actualización o eliminación de sus datos escribiendo a
        nuestro correo de contacto.
      </p>
    </LegalPage>
  );
}
