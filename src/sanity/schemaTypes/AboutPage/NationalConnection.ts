import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const nationalConnectionSectionType = defineType({
  name: "nationalConnectionSection",
  title: "National Connection Section",
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
      name: "content",
      title: "Content",
      type: "text",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "ctaText",
      title: "CTA Text",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "ctaLink",
      title: "CTA Link",
      type: "string",
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "National Connection",
    },
  },
})
