import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const departmentsSectionType = defineType({
  name: "departmentsSection",
  title: "Departments Section",
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
      name: "departments",
      title: "Departments",
      type: "array",
      of: [
        {
          name: "department",
          title: "Department",
          type: "object",
          fields: [
            defineField({
              name: "id",
              title: "ID",
              type: "string",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "name",
              title: "Name",
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
                  "TrendingUp",
                  "Users",
                  "Shield",
                  "Building2",
                  "Briefcase",
                  "Leaf",
                ],
                layout: "dropdown",
              },
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "coordinator",
              title: "Coordinator",
              type: "string",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "responsibilities",
              title: "Responsibilities",
              type: "array",
              of: [{ type: "string" }],
              validation: Rule => Rule.required().min(4).max(4),
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "Departments",
    },
  },
})
