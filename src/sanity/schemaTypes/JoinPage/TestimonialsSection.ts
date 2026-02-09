import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const joinBenefitsinPageTestimonialsSectionType = defineType({
  name: "joinPageTestimonialsSection",
  title: "Join Page Testimonials Section",
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
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "id",
              title: "ID",
              type: "string",
            }),
            defineField({
              name: "name",
              title: "Name",
              type: "string",
            }),
            defineField({
              name: "role",
              title: "Role",
              type: "string",
            }),
            defineField({
              name: "photo",
              title: "Photo",
              type: "image",
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: "location",
              title: "Location",
              type: "string",
            }),
            defineField({
              name: "quote",
              title: "Quote",
              type: "text",
            }),
          ],
        },
      ],
      validation: Rule => Rule.required().min(3).max(3),
    }),
  ],
  preview: {
    select: {
      title: "Join Page Testimonials Section",
    },
  },
})
