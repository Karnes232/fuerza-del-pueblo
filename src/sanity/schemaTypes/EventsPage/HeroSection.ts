import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const eventsPageHeroSectionType = defineType({
  name: "eventsPageHeroSection",
  title: "Events Page Hero Section",
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
      name: "ctaText",
      title: "CTA Text",
      type: "string",
    }),
    defineField({
      name: "ctaLink",
      title: "CTA Link",
      type: "string",
    }),
    defineField({
      name: "featuredEventTitle",
      title: "Featured Event Title",
      type: "string",
    }),
    defineField({
      name: "featuredEventSubtitle",
      title: "Featured Event Subtitle",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "Title",
    },
  },
})
