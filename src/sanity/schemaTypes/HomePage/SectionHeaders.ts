import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const sectionHeadersType = defineType({
  name: "sectionHeaders",
  title: "Section Headers",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "newsTitle",
      title: "News Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "newsSubtitle",
      title: "News Subtitle",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "eventsTitle",
      title: "Events Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "eventsSubtitle",
      title: "Events Subtitle",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "contactTitle",
      title: "Contact Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "contactDescription",
      title: "Contact Description",
      type: "string",
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "Section Headers",
    },
  },
})
