import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const organizationalStructureType = defineType({
  name: "organizationalStructure",
  title: "Organizational Structure",
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
      name: "organizationalLevels",
      title: "Organizational Levels",
      type: "array",
      of: [
        {
          name: "organizationalLevel",
          title: "Organizational Level",
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
                list: ["Crown", "Users", "Briefcase", "MapPin"],
                layout: "dropdown",
              },
            }),
            defineField({
              name: "positions",
              title: "Positions",
              type: "array",
              of: [{ type: "string" }],
              validation: Rule => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "Organizational Structure",
    },
  },
})
