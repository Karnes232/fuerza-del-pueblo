import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const goalsSectionType = defineType({
  name: "goalsSection",
  title: "Goals Section",
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
      name: "goals",
      title: "Goals",
      type: "array",
      of: [
        {
          name: "goal",
          title: "Goal",
          type: "object",
          fields: [
            defineField({
              name: "id",
              title: "ID",
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
                list: [
                  "Users",
                  "Wrench",
                  "TrendingUp",
                  "Eye",
                  "BookOpen",
                  "Globe",
                  "Smartphone",
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
      title: "Goals",
    },
  },
})
