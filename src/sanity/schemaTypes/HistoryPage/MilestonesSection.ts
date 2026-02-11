import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const milestonesSectionType = defineType({
  name: "milestonesSection",
  title: "Milestones Section",
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
      name: "milestones",
      title: "Milestones",
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
              name: "year",
              title: "Year",
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
                list: ["Flag", "MapPin", "Building", "Home", "Heart", "Users"],
              },
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "impact",
              title: "Impact",
              type: "text",
              validation: Rule => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "Milestones",
    },
  },
})
