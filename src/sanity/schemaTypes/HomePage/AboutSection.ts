import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const aboutSectionType = defineType({
  name: "aboutSection",
  title: "About Section",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "text",
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
  ],
  preview: {
    select: {
      title: "About Section",
      media: "image",
    },
  },
})
