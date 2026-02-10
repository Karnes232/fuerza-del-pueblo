import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const sectionTitlesType = defineType({
  name: "sectionTitles",
  title: "Section Titles",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "contactInformationTitle",
      title: "Contact Information Title",
      type: "string",
    }),
    defineField({
      name: "contactFormTitle",
      title: "Contact Form Title",
      type: "string",
    }),
    defineField({
      name: "contactFormSubtitle",
      title: "Contact Form Subtitle",
      type: "string",
    }),
    defineField({
      name: "locationMapTitle",
      title: "Location Map Title",
      type: "string",
    }),
    defineField({
      name: "socialLinksTitle",
      title: "Social Links Title",
      type: "string",
    }),
    defineField({
      name: "socialLinksSubtitle",
      title: "Social Links Subtitle",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "Section Titles",
    },
  },
})
