import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

const ICON_MAP: { title: string; value: string }[] = [
  { title: "Users", value: "Users" },
  { title: "Scale", value: "Scale" },
  { title: "Leaf", value: "Leaf" },
  { title: "Eye", value: "Eye" },
  { title: "Award", value: "Award" },
  { title: "Lightbulb", value: "Lightbulb" },
]

export const principlesSectionType = defineType({
  name: "principlesSection",
  title: "Principles Section",
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
      name: "principles",
      title: "Principles",
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
              name: "description",
              title: "Description",
              type: "text",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              validation: Rule => Rule.required(),
              options: {
                list: ICON_MAP,
                layout: "dropdown",
              },
            }),
          ],
        },
      ],
      validation: Rule => Rule.required().min(1).max(10),
    }),
  ],
  preview: {
    select: {
      title: "Principles",
    },
  },
})
