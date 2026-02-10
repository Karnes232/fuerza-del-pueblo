import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const coreValuesType = defineType({
  name: "coreValues",
  title: "Core Values",
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
          name: "value",
          title: "Value",
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
              options: {
                list: ["Users", "Scale", "TrendingUp", "Eye"],
              },
            }),
            defineField({
              name: "details",
              title: "Details",
              type: "array",
              of: [{ name: "detail", title: "Detail", type: "string" }],
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "Core Values",
    },
  },
})
