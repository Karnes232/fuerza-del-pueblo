import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"
export const legalDocumentsType = defineType({
  name: "legalDocuments",
  title: "Legal Documents",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "pageName",
      title: "Page Name",
      type: "string",
      options: {
        list: [
          { title: "Terminos y Condiciones", value: "terminos-y-condiciones" },
          { title: "Política de Privacidad", value: "politica-de-privacidad" },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "legalDocument",
      title: "Legal Document",
      type: "array",
      of: [{ type: "block" }],
      validation: Rule => Rule.required(),
    }),
  ],
})
