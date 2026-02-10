import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const visionStatementType = defineType({
  name: "visionStatement",
  title: "Vision Statement",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "statement",
      title: "Statement",
      type: "text",
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
        list: ["Target", "Users", "Scale", "Leaf", "Eye", "Award", "Lightbulb"],
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alt",
          type: "string",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "Vison Statement",
    },
  },
})
