import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const joinSectionType = defineType({
  name: "joinSection",
  title: "Join Section",
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
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().min(1).max(4),
    }),
    defineField({
      name: "ctaText",
      title: "CTA Text",
      type: "string",
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
    }),
  ],
  preview: {
    select: {
      title: "Join Section",
      media: "image",
    },
  },
})