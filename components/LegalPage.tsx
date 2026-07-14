/**
 * Plantilla para páginas legales.
 * Los textos legales definitivos deben ser redactados y validados
 * por el equipo legal de la empresa antes de publicar.
 */
export default function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="bg-paper">
      <div className="mx-auto max-w-3xl px-5 pt-36 md:pt-44">
        <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
          {title}
        </h1>
      </div>
      <div className="mx-auto max-w-3xl space-y-6 px-5 py-14 leading-relaxed text-body">
        <p className="rounded-lg bg-stone-100 px-5 py-4 text-sm text-muted">
          Documento provisional. Este contenido es un marcador de posición y debe ser sustituido
          por el texto legal definitivo, redactado y validado por el equipo legal de GEMO
          Construcciones.
        </p>
        {children}
      </div>
    </main>
  );
}
