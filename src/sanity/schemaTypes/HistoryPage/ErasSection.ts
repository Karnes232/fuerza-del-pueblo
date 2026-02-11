import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const erasSectionType = defineType({
  name: "erasSection",
  title: "Eras Section",
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
      name: "eras",
      title: "Eras",
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
              name: "period",
              title: "Period",
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
              name: "description",
              title: "Description",
              type: "text",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "keyEvents",
              title: "Key Events",
              type: "array",
              of: [
                {
                  type: "string",
                },
              ],
              validation: Rule => Rule.required().min(1).max(10),
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
              validation: Rule => Rule.required(),
              fields: [
                defineField({
                  name: "alt",
                  title: "Alt",
                  type: "string",
                  validation: Rule => Rule.required(),
                }),
              ],
            }),
          ],
        },
      ],
      validation: Rule => Rule.required().min(1).max(10),
    }),
  ],
  preview: {
    select: {
      title: "Eras",
    },
  },
})
