import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const whyJoinSectionType = defineType({
  name: "whyJoinSection",
  title: "Why Join Section",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "benefits",
      title: "Benefits",
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
          ],
        },
      ],
      validation: Rule => Rule.required().min(6).max(6),
    }),
  ],
  preview: {
    select: {
      title: "Title",
    },
  },
})
