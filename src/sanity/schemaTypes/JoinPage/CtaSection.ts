import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const joinPageCtaSectionType = defineType({
  name: "joinPageCtaSection",
  title: "Join Page Cta Section",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "actions",
      title: "Actions",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
            }),
            defineField({
              name: "href",
              title: "Href",
              type: "string",
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "Title",
    },
  },
})
