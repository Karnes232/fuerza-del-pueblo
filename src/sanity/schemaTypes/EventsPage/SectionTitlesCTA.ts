import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const sectionTitlesCTAType = defineType({
  name: "sectionTitlesCTA",
  title: "Section Titles CTA",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "upcomingEventsTitle",
      title: "Upcoming Events Title",
      type: "string",
    }),
    defineField({
      name: "upcomingEventsSubtitle",
      title: "Upcoming Events Subtitle",
      type: "string",
    }),
    defineField({
      name: "pastEventsTitle",
      title: "Past Events Title",
      type: "string",
    }),
    defineField({
      name: "pastEventsSubtitle",
      title: "Past Events Subtitle",
      type: "string",
    }),
    defineField({
      name: "ctaTitle",
      title: "CTA Title",
      type: "string",
    }),
    defineField({
      name: "ctaDescription",
      title: "CTA Description",
      type: "string",
    }),
    defineField({
      name: "ctaActions",
      title: "CTA Actions",
      type: "array",
      of: [{ type: "eventCTA" }],
    }),
  ],
  preview: {
    select: {
      title: "Section Titles CTA",
    },
  },
})
