"use client"

import { useState, useTransition } from "react"
import {
  sendNewsletter,
  sendNewsletterTest,
} from "@/app/actions/newsletter-send.action"

type Status = {
  type: "success" | "error"
  message: string
} | null

export default function NewsletterComposer({
  activeSubscribers,
}: {
  activeSubscribers: number
}) {
  const [subject, setSubject] = useState("")
  const [body, setBody] = useState("")
  const [status, setStatus] = useState<Status>(null)
  const [confirming, setConfirming] = useState(false)
  const [isPending, startTransition] = useTransition()

  const handleTest = () => {
    setStatus(null)
    startTransition(async () => {
      const res = await sendNewsletterTest({ subject, body })
      setStatus({
        type: res.success ? "success" : "error",
        message: res.message,
      })
    })
  }

  const handleSend = () => {
    setStatus(null)
    setConfirming(false)
    startTransition(async () => {
      const res = await sendNewsletter({ subject, body })
      setStatus({
        type: res.success ? "success" : "error",
        message: res.message,
      })
      if (res.success) {
        setSubject("")
        setBody("")
      }
    })
  }

  const overLimit = activeSubscribers > 100
  const noSubs = activeSubscribers === 0
  const disabled = isPending || !subject.trim() || !body.trim()

  return (
    <section className="bg-pureWhite rounded-xl shadow-sm p-4 lg:p-6 space-y-4">
      <div>
        <h2 className="text-base lg:text-lg font-semibold text-charcoal mb-1">
          Componer newsletter
        </h2>
        <p className="text-xs text-gray-500">
          Formato simple: deja una línea en blanco para nuevos párrafos. Usa{" "}
          <code className="bg-lightGray px-1 rounded">**negrita**</code> y{" "}
          <code className="bg-lightGray px-1 rounded">[texto](https://…)</code>{" "}
          para enlaces.
        </p>
      </div>

      <div className="space-y-3">
        <div>
          <label
            htmlFor="newsletter-subject"
            className="block text-xs font-medium uppercase tracking-wide text-gray-500 mb-1"
          >
            Asunto
          </label>
          <input
            id="newsletter-subject"
            type="text"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            disabled={isPending}
            maxLength={200}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primaryGreen disabled:bg-gray-50"
            placeholder="Ej: Boletín de octubre — Próximos eventos"
          />
        </div>

        <div>
          <label
            htmlFor="newsletter-body"
            className="block text-xs font-medium uppercase tracking-wide text-gray-500 mb-1"
          >
            Contenido
          </label>
          <textarea
            id="newsletter-body"
            value={body}
            onChange={e => setBody(e.target.value)}
            disabled={isPending}
            rows={12}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-charcoal font-mono leading-relaxed focus:outline-none focus:ring-2 focus:ring-primaryGreen disabled:bg-gray-50"
            placeholder={"Hola compañero,\n\nEste mes tenemos varias actividades importantes...\n\nNos vemos pronto."}
          />
        </div>
      </div>

      {status && (
        <div
          className={`rounded-lg p-3 text-sm ${
            status.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {status.message}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <button
          type="button"
          onClick={handleTest}
          disabled={disabled}
          className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-charcoal hover:bg-lightGray transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? "Enviando…" : "Enviar prueba a mí"}
        </button>

        <button
          type="button"
          onClick={() => setConfirming(true)}
          disabled={disabled || overLimit || noSubs}
          className="px-4 py-2 rounded-lg bg-primaryGreen text-white text-sm font-semibold hover:bg-darkGreen transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Enviar a {activeSubscribers} suscriptor
          {activeSubscribers === 1 ? "" : "es"}
        </button>
      </div>

      {overLimit && (
        <p className="text-xs text-red-600">
          Tienes más de 100 suscriptores activos. El plan gratuito de Resend
          permite 100 envíos por día — actualiza el plan antes de enviar.
        </p>
      )}

      {confirming && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          onClick={() => setConfirming(false)}
        >
          <div
            className="bg-pureWhite rounded-xl shadow-xl max-w-md w-full p-6"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold text-charcoal mb-2">
              ¿Enviar la newsletter?
            </h3>
            <p className="text-sm text-gray-600 mb-1">
              Se enviará a <strong>{activeSubscribers}</strong> suscriptor
              {activeSubscribers === 1 ? "" : "es"} activo
              {activeSubscribers === 1 ? "" : "s"}.
            </p>
            <p className="text-sm text-gray-600 mb-5">
              <strong>Asunto:</strong> {subject}
            </p>
            <div className="flex gap-3 justify-end">
              <button
                type="button"
                onClick={() => setConfirming(false)}
                disabled={isPending}
                className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-charcoal hover:bg-lightGray"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleSend}
                disabled={isPending}
                className="px-4 py-2 rounded-lg bg-primaryGreen text-white text-sm font-semibold hover:bg-darkGreen disabled:opacity-50"
              >
                {isPending ? "Enviando…" : "Sí, enviar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
