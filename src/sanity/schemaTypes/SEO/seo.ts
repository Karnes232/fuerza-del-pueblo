import { defineType, defineField } from "sanity"

export const seoType = defineType({
  name: "seo",
  title: "SEO",
  type: "document",
  groups: [
    {
      name: "basic",
      title: "SEO básico",
    },
    {
      name: "social",
      title: "Redes sociales",
    },
    {
      name: "structured",
      title: "Datos estructurados",
    },
  ],
  fields: [
    defineField({
      name: "meta",
      title: "Información meta",
      type: "object",
      group: "basic",
      fields: [
        defineField({
          name: "title",
          title: "Meta título",
          type: "string",
          description:
            "Título para la pestaña del navegador y resultados de búsqueda (50-60 caracteres recomendados)",
          validation: Rule =>
            Rule.max(60).warning(
              "Los títulos meta más largos de 60 caracteres pueden aparecer truncados en resultados de búsqueda",
            ),
        }),
        defineField({
          name: "description",
          title: "Meta descripción",
          type: "text",
          rows: 3,
          description:
            "Descripción para resultados de búsqueda (150-160 caracteres recomendados)",
          validation: Rule =>
            Rule.max(160).warning(
              "Las descripciones meta más largas de 160 caracteres pueden aparecer truncadas en resultados de búsqueda",
            ),
        }),
        defineField({
          name: "keywords",
          title: "Palabras clave",
          type: "array",
          of: [{ type: "string" }],
          description:
            "Palabras clave relevantes para este contenido (opcional)",
        }),
      ],
    }),
    defineField({
      name: "openGraph",
      title: "Open Graph",
      type: "object",
      group: "social",
      fields: [
        defineField({
          name: "title",
          title: "OG título",
          type: "string",
          description:
            "Título para compartir en redes sociales (opcional, usará el Meta título si no se proporciona)",
        }),
        defineField({
          name: "description",
          title: "OG descripción",
          type: "text",
          rows: 3,
          description:
            "Descripción para compartir en redes sociales (opcional, usará la Meta descripción si no se proporciona)",
        }),
        defineField({
          name: "image",
          title: "OG imagen",
          type: "image",
          description:
            "Imagen para compartir en redes sociales (tamaño recomendado: 1200x630 píxeles)",
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
    defineField({
      name: "structuredData",
      title: "Datos estructurados",
      type: "object",
      group: "structured",
      description: "Datos JSON-LD para resultados de búsqueda mejorados",
      fields: [
        defineField({
          name: "jsonLd",
          title: "Schema JSON-LD",
          type: "text",
          description: "Pega aquí tus datos schema.org JSON-LD",
          validation: Rule =>
            Rule.custom(text => {
              if (!text) return true
              try {
                JSON.parse(text)
                return true
              } catch (err) {
                return "Debe ser JSON válido"
              }
            }),
          initialValue: `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "",
  "description": "",
  "url": "",
  "logo": "",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "",
    "contactType": "customer service",
    "availableLanguage": "es"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "",
    "addressCountry": "DO"
  },
  "sameAs": []
}`,
        }),
      ],
    }),
    defineField({
      name: "noIndex",
      title: "No indexar",
      type: "boolean",
      group: "basic",
      description: "Ocultar esta página de los motores de búsqueda",
      initialValue: false,
    }),
    defineField({
      name: "noFollow",
      title: "No seguir",
      type: "boolean",
      group: "basic",
      description:
        "Indicar a los motores de búsqueda que no sigan los enlaces de esta página",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      metaTitle: "meta.title",
    },
    prepare({ metaTitle }) {
      return {
        title: "SEO",
        subtitle: metaTitle ? `"${metaTitle}"` : "Sin título",
      }
    },
  },
})
