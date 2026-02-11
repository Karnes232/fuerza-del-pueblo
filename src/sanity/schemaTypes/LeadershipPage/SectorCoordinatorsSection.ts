import { defineField, defineType } from "sanity"
import { DocumentIcon, UsersIcon } from "@sanity/icons"

export const sectorCoordinatorsSectionType = defineType({
  name: "sectorCoordinatorsSection",
  title: "Sector Coordinators Section",
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
      name: "sectors",
      title: "Sectors",
      type: "array",
      of: [
        {
          name: "sector",
          title: "Sector",
          type: "object",
          fields: [
            defineField({
              name: "id",
              title: "ID",
              type: "string",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "sector",
              title: "Sector",
              type: "string",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "coordinator",
              title: "Coordinator",
              type: "string",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              validation: Rule => Rule.required(),
            }),
          ],
          preview: {
            select: {
              sector: "sector",
              coordinator: "coordinator",
            },
            prepare({ sector, coordinator }) {
              return {
                title: sector,
                subtitle: coordinator,
                media: UsersIcon,
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "Sector Coordinators",
    },
  },
})
