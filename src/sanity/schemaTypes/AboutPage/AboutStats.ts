import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

const ICON_MAP: { title: string; value: string }[] = [
  { title: "Users", value: "Users" },
  { title: "MapPin", value: "MapPin" },
  { title: "Calendar", value: "Calendar" },
  { title: "Heart", value: "Heart" },
]

export const aboutStatsSectionType = defineType({
  name: "aboutStatsSection",
  title: "About Stats Section",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "stats",
      title: "Stats",
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
              name: "value",
              title: "Value",
              type: "string",
            }),
            defineField({
              name: "label",
              title: "Label",
              type: "string",
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
      validation: Rule => Rule.required().min(4).max(4),
    }),
  ],
  preview: {
    select: {
      title: "About Stats",
    },
  },
})
