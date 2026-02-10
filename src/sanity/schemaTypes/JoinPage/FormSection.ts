import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const joinPageFormSectionType = defineType({
  name: "joinPageFormSection",
  title: "Join Page Form Section",
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
      name: "interestAreas",
      title: "Interest Areas",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "availabilityOptions",
      title: "Availability Options",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: {
      title: "Title",
    },
  },
})
