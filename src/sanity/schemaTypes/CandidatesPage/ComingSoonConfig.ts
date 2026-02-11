import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const comingSoonConfigType = defineType({
  name: "comingSoonConfig",
  title: "Coming Soon Config",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "enabled",
      title: "Mostrar candidatos",
      type: "boolean",
      initialValue: false,
      description: `Si es verdadero, se mostrarán los candidatos. Si es falso, se mostrará el mensaje "Próximamente".`,
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "expectedDate",
      title: "Expected Date",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "notifyEnabled",
      title: "Notify Enabled",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "Title",
    },
  },
})
