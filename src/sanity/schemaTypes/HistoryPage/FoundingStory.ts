import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const foundingStorySectionType = defineType({
  name: "foundingStorySection",
  title: "Founding Story Section",
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
      name: "year",
      title: "Year",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "context",
      title: "Context",
      type: "text",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "founders",
      title: "Founders",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      validation: Rule => Rule.required().min(1).max(10),
    }),
    defineField({
      name: "objectives",
      title: "Objectives",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      validation: Rule => Rule.required().min(1).max(10),
    }),
  ],
  preview: {
    select: {
      title: "Founding Story",
    },
  },
})
