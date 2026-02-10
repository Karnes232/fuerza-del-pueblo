import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const joinPageFaqsSectionType = defineType({
  name: "joinPageFaqsSection",
  title: "Join Page Faqs Section",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "faqs",
      title: "Faqs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "id",
              title: "ID",
              type: "string",
            }),
            defineField({
              name: "question",
              title: "Question",
              type: "string",
            }),
            defineField({
              name: "answer",
              title: "Answer",
              type: "text",
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
