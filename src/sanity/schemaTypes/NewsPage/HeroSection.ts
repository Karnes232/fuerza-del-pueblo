import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const newsPageHeroSectionType = defineType({
  name: "newsPageHeroSection",
  title: "News Page Hero Section",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "featuredArticle",
      title: "Featured Article",
      type: "reference",
      to: [{ type: "individualNewsArticle" }],
      options: {
        disableNew: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "Title",
    },
  },
})
