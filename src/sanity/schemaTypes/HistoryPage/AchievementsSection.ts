import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const achievementsSectionType = defineType({
  name: "achievementsSection",
  title: "Achievements Section",
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
      name: "achievements",
      title: "Achievements",
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
              name: "date",
              title: "Date",
              type: "string",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "category",
              title: "Category",
              type: "string",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              options: {
                list: [
                  "Users",
                  "GraduationCap",
                  "Handshake",
                  "Heart",
                  "Award",
                  "Leaf",
                ],
              },
              validation: Rule => Rule.required(),
            }),
          ],
        },
      ],
      validation: Rule => Rule.required().min(1).max(10),
    }),
  ],
  preview: {
    select: {
      title: "Achievements",
    },
  },
})
