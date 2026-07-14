"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { projects } from "@/data/projects";
import { Check } from "@phosphor-icons/react";

type FieldErrors = Partial<Record<string, string>>;

const requestTypes = [
  "Información general",
  "Comprar una vivienda",
  "Planes de pago",
  "Locales comerciales",
  "Alianzas y proveedores",
  "Otro",
];

/**
 * Formulario de contacto con validación en tiempo real, honeypot
 * anti-spam, estados de envío y confirmación visual.
 *
 * El envío es una simulación (no hay backend todavía). Conectar el
 * `onSubmit` con el servicio real (API propia, correo o CRM).
 */
export default function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [interest, setInterest] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const startedAt = useRef(Date.now());

  // Preselecciona el proyecto cuando se llega con ?proyecto=Nombre.
  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("proyecto");
    if (fromUrl && projects.some((p) => p.name === fromUrl)) setInterest(fromUrl);
  }, []);

  const validators: Record<string, (v: string) => string | null> = {
    nombre: (v) =>
      v.trim().length < 3 ? "Ingresa tu nombre completo (mínimo 3 caracteres)." : null,
    telefono: (v) =>
      /^[+\d][\d\s().-]{6,20}$/.test(v.trim())
        ? null
        : "Ingresa un número de teléfono válido, por ejemplo +58 412 0000000.",
    email: (v) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())
        ? null
        : "Ingresa un correo electrónico válido.",
    mensaje: (v) => (v.trim().length < 10 ? "Cuéntanos un poco más (mínimo 10 caracteres)." : null),
    privacidad: (v) => (v ? null : "Debes aceptar la política de privacidad para continuar."),
  };

  const validateField = (name: string, value: string) => {
    const validator = validators[name];
    if (!validator) return;
    const error = validator(value);
    setErrors((prev) => ({ ...prev, [name]: error ?? undefined }));
    return error;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Protección anti-spam: honeypot + tiempo mínimo de llenado.
    if ((data.get("empresa_web") as string)?.length > 0) return;
    if (Date.now() - startedAt.current < 2500) {
      setStatus("error");
      return;
    }

    const fields = {
      nombre: (data.get("nombre") as string) ?? "",
      telefono: (data.get("telefono") as string) ?? "",
      email: (data.get("email") as string) ?? "",
      mensaje: (data.get("mensaje") as string) ?? "",
      privacidad: data.get("privacidad") ? "ok" : "",
    };

    const newErrors: FieldErrors = {};
    for (const [name, value] of Object.entries(fields)) {
      const error = validators[name]?.(value);
      if (error) newErrors[name] = error;
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const firstInvalid = form.querySelector<HTMLElement>("[aria-invalid='true']");
      firstInvalid?.focus();
      return;
    }

    setStatus("sending");
    // Simulación de envío: sustituir por la integración real.
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div
        className="flex h-full min-h-96 flex-col items-center justify-center rounded-xl bg-petrol-100 p-10 text-center"
        role="status"
        aria-live="polite"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-petrol-600 text-white">
          <Check size={26} weight="bold" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold">Solicitud enviada</h3>
        <p className="mt-3 max-w-md text-body">
          Gracias por escribirnos. Un asesor de GEMO Construcciones se pondrá en contacto contigo
          a la brevedad.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            startedAt.current = Date.now();
          }}
          className="mt-8 rounded-full border border-petrol-600 px-6 py-3 font-semibold text-petrol-600 transition hover:bg-petrol-600 hover:text-white"
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  const inputCls = (name: string) =>
    `w-full rounded-lg border bg-white px-4 py-3 text-body placeholder:text-muted/60 transition focus:border-petrol-600 focus:outline-none focus:ring-2 focus:ring-petrol-600/20 ${
      errors[name] ? "border-red-400" : "border-line"
    }`;

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-5">
      {/* Honeypot invisible para bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="empresa_web">No llenar este campo</label>
        <input id="empresa_web" name="empresa_web" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className="mb-1.5 block text-sm font-semibold">
            Nombre completo <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            autoComplete="name"
            placeholder="Ej.: María Pérez"
            className={inputCls("nombre")}
            aria-invalid={errors.nombre ? "true" : undefined}
            aria-describedby={errors.nombre ? "error-nombre" : undefined}
            onBlur={(e) => validateField("nombre", e.target.value)}
            onChange={(e) => errors.nombre && validateField("nombre", e.target.value)}
          />
          {errors.nombre && (
            <p id="error-nombre" className="mt-1.5 text-sm text-red-600" role="alert">
              {errors.nombre}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="telefono" className="mb-1.5 block text-sm font-semibold">
            Teléfono <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            required
            autoComplete="tel"
            placeholder="Ej.: +58 412 0000000"
            className={inputCls("telefono")}
            aria-invalid={errors.telefono ? "true" : undefined}
            aria-describedby={errors.telefono ? "error-telefono" : undefined}
            onBlur={(e) => validateField("telefono", e.target.value)}
            onChange={(e) => errors.telefono && validateField("telefono", e.target.value)}
          />
          {errors.telefono && (
            <p id="error-telefono" className="mt-1.5 text-sm text-red-600" role="alert">
              {errors.telefono}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">
          Correo electrónico <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Ej.: maria@correo.com"
          className={inputCls("email")}
          aria-invalid={errors.email ? "true" : undefined}
          aria-describedby={errors.email ? "error-email" : undefined}
          onBlur={(e) => validateField("email", e.target.value)}
          onChange={(e) => errors.email && validateField("email", e.target.value)}
        />
        {errors.email && (
          <p id="error-email" className="mt-1.5 text-sm text-red-600" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="proyecto" className="mb-1.5 block text-sm font-semibold">
            Proyecto de interés
          </label>
          <select
            id="proyecto"
            name="proyecto"
            className={inputCls("proyecto")}
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          >
            <option value="">Aún no lo sé / general</option>
            {projects.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="tipo" className="mb-1.5 block text-sm font-semibold">
            Tipo de solicitud
          </label>
          <select id="tipo" name="tipo" className={inputCls("tipo")} defaultValue={requestTypes[0]}>
            {requestTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="mensaje" className="mb-1.5 block text-sm font-semibold">
          Mensaje <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          required
          placeholder="Cuéntanos qué estás buscando"
          className={inputCls("mensaje")}
          aria-invalid={errors.mensaje ? "true" : undefined}
          aria-describedby={errors.mensaje ? "error-mensaje" : undefined}
          onBlur={(e) => validateField("mensaje", e.target.value)}
          onChange={(e) => errors.mensaje && validateField("mensaje", e.target.value)}
        />
        {errors.mensaje && (
          <p id="error-mensaje" className="mt-1.5 text-sm text-red-600" role="alert">
            {errors.mensaje}
          </p>
        )}
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm">
          <input
            type="checkbox"
            name="privacidad"
            className="mt-0.5 h-4.5 w-4.5 shrink-0 accent-petrol-600"
            aria-invalid={errors.privacidad ? "true" : undefined}
            aria-describedby={errors.privacidad ? "error-privacidad" : undefined}
            onChange={(e) => validateField("privacidad", e.target.checked ? "ok" : "")}
          />
          <span>
            He leído y acepto la{" "}
            <a
              href="/politica-de-privacidad"
              className="font-semibold text-petrol-600 underline underline-offset-2 hover:text-petrol-700"
            >
              política de privacidad
            </a>{" "}
            de GEMO Construcciones. <span aria-hidden="true" className="text-red-500">*</span>
          </span>
        </label>
        {errors.privacidad && (
          <p id="error-privacidad" className="mt-1.5 text-sm text-red-600" role="alert">
            {errors.privacidad}
          </p>
        )}
      </div>

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          No pudimos procesar el envío. Verifica los datos e inténtalo nuevamente.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-petrol-600 px-8 py-4 font-semibold text-white transition hover:bg-petrol-700 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? "Enviando tu solicitud" : "Enviar solicitud"}
      </button>
    </form>
  );
}
