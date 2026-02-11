import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const wingsSectionType = defineType({
  name: "wingsSection",
  title: "Wings Section",
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
      name: "wings",
      title: "Wings",
      type: "array",
      of: [
        {
          name: "wing",
          title: "Wing",
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
                list: ["Users", "Shield", "Building2", "Briefcase", "Leaf"],
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
              name: "focus",
              title: "Focus",
              type: "array",
              of: [{ type: "string" }],
              validation: Rule => Rule.required().min(4).max(6),
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "Wings",
    },
  },
})
