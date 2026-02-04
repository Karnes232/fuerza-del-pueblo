import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"
export const pageSeoType = defineType({
  name: "pageSeo",
  title: "Page SEO",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "pageName",
      title: "Page Name",
      type: "string",
      options: {
        list: [
          { title: "Inicio", value: "inicio" },
          { title: "Únete", value: "unete" },
          { title: "Noticias", value: "noticias" },
          { title: "Eventos", value: "eventos" },
          { title: "Contacto", value: "contacto" },
          { title: "Quiénes Somos", value: "quienes-somos" },
          { title: "Misión, Visión y Valores", value: "mision-vision-valores" },
          { title: "Liderazgo", value: "liderazgo" },
          { title: "Historia", value: "historia" },
          { title: "Candidatos", value: "candidatos" },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({ name: "seo", type: "seo" }),
  ],
  preview: {
    select: {
      title: "pageName",
    },
  },
})
