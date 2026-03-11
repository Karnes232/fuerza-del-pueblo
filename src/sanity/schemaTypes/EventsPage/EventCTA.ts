import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const eventCTAType = defineType({
  name: "eventCTA",
  title: "Event CTA",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: ["Lightbulb", "Users", "Bell"],
        layout: "dropdown",
      },
    }),
    defineField({
      name: "href",
      title: "Href",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "Title",
    },
  },
})
