import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const pillarsSectionType = defineType({
  name: "pillarsSection",
  title: "Pillars Section",
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
      name: "pillars",
      title: "Pillars",
      type: "array",
      of: [
        {
          name: "pillar",
          title: "Pillar",
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
              name: "description",
              title: "Description",
              type: "text",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              options: {
                list: ["Users", "DollarSign", "Leaf", "Building"],
              },
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "keyPoints",
              title: "Key Points",
              type: "array",
              validation: Rule => Rule.required().min(4).max(4),
              of: [{ name: "keyPoint", title: "Key Point", type: "string" }],
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "Pillars",
    },
  },
})
