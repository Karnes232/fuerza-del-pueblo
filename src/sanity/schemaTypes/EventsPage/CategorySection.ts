import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const eventCategorySectionType = defineType({
  name: "eventCategorySection",
  title: "Event Category Section",
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
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "eventCategory" }] }],
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
    },
  },
})
