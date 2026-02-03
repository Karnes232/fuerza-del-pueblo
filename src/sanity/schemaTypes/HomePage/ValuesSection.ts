import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

const ICON_MAP: { title: string; value: string }[] = [
  { title: "Users", value: "Users" },
  { title: "Scale", value: "Scale" },
  { title: "TrendingUp", value: "TrendingUp" },
  { title: "Eye", value: "Eye" },
]

export const valuesSectionType = defineType({
  name: "valuesSection",
  title: "Values Section",
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
      name: "values",
      title: "Values",
      type: "array",
      of: [
        {
          title: "Value",
          name: "value",
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
              options: {
                list: ICON_MAP,
                layout: "dropdown",
              },
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "Values Section",
      media: "title",
    },
  },
})
