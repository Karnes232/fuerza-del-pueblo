import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const mediaSectionType = defineType({
  name: "mediaSection",
  title: "Media Section",
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
      name: "appearances",
      title: "Appearances",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "id",
              title: "ID",
              type: "string",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "date",
              title: "Date",
              type: "date",
              options: {
                dateFormat: "YYYY-MM-DD",
              },
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "media",
              title: "Media",
              type: "string",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "type",
              title: "Type",
              type: "string",
              validation: Rule => Rule.required(),
              options: {
                list: ["interview", "debate", "press", "event"],
              },
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),
          ],
        },
      ],
      validation: Rule => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: "Media Section",
    },
  },
})
