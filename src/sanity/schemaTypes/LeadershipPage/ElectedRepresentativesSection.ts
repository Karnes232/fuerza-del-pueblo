import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const electedRepresentativesSectionType = defineType({
  name: "electedRepresentativesSection",
  title: "Elected Representatives Section",
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
      name: "representatives",
      title: "Representatives",
      type: "array",
      of: [
        {
          name: "representative",
          title: "Representative",
          type: "object",
          fields: [
            defineField({
              name: "id",
              title: "ID",
              type: "string",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "name",
              title: "Name",
              type: "string",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "position",
              title: "Position",
              type: "string",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "bio",
              title: "Bio",
              type: "text",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
              fields: [
                defineField({
                  name: "alt",
                  title: "Alt",
                  type: "string",
                }),
              ],
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
})
