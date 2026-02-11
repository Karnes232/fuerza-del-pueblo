import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const campaignPrioritiesSectionType = defineType({
  name: "campaignPrioritiesSection",
  title: "Campaign Priorities Section",
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
      name: "priorities",
      title: "Priorities",
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
                list: ["Zap", "Eye", "TrendingUp", "Heart"],
                layout: "dropdown",
              },
            }),
            defineField({
              name: "actions",
              title: "Actions",
              type: "array",
              of: [{ type: "string" }],
              validation: Rule => Rule.required(),
            }),
          ],
        },
      ],
      validation: Rule => Rule.required().min(4).max(4),
    }),
  ],
  preview: {
    select: {
      title: "Campaign Priorities Section",
    },
  },
})
