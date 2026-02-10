import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const commitmentsSectionType = defineType({
  name: "commitmentsSection",
  title: "Commitments Section",
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
      name: "commitments",
      title: "Commitments",
      type: "array",
      of: [
        {
          name: "commitment",
          title: "Commitment",
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
                list: [
                  "GraduationCap",
                  "Heart",
                  "Shield",
                  "Building2",
                  "Briefcase",
                  "Leaf",
                ],
              },
              validation: Rule => Rule.required(),
            }),
          ],
        },
      ],
      validation: Rule => Rule.required().min(6).max(6),
    }),
  ],
  preview: {
    select: {
      title: "Commitments",
    },
  },
})
