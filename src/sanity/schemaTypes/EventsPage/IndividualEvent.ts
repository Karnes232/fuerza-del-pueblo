import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const individualEventType = defineType({
  name: "individualEvent",
  title: "Individual Event",
  type: "document",
  icon: DocumentIcon,
  groups: [
    {
      name: "info",
      title: "Info",
    },
    {
      name: "content",
      title: "Content",
    },
    { name: "location", title: "Location" },
    {
      name: "schedule",
      title: "Schedule",
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required(),
      group: "info",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: Rule => Rule.required(),
      options: {
        source: "title",
      },
      group: "info",
    }),
    defineField({
      name: "id",
      title: "ID",
      type: "slug",
      group: "info",
      validation: Rule => Rule.required(),
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "category",
      title: "Category",
      group: "info",
      validation: Rule => Rule.required(),
      type: "reference",
      to: [{ type: "eventCategory" }],
      options: {
        disableNew: true,
      },
    }),
    defineField({
      name: "date",
      title: "Date",
      group: "info",
      type: "date",
      validation: Rule => Rule.required(),
      options: {
        dateFormat: "YYYY-MM-DD",
      },
    }),
    defineField({
      name: "time",
      title: "Time",
      group: "info",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      group: "location",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "address",
      title: "Address",
      group: "location",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "directions",
      title: "Directions",
      group: "location",
      type: "text",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "coordinates",
      title: "Coordinates",
      group: "location",
      type: "object",
      fields: [
        defineField({
          name: "lat",
          title: "Latitude",
          type: "number",
        }),
        defineField({
          name: "lng",
          title: "Longitude",
          type: "number",
        }),
      ],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      group: "content",
      type: "image",
      validation: Rule => Rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alt",
          type: "string",
          validation: Rule => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "description",
      title: "Description",
      group: "content",
      type: "text",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "fullDescription",
      title: "Full Description",
      group: "content",
      type: "array",
      of: [{ type: "block" }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "organizer",
      title: "Organizer",
      group: "info",
      type: "object",
      validation: Rule => Rule.required(),
      fields: [
        defineField({
          name: "name",
          title: "Name",
          type: "string",
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: "role",
          title: "Role",
          type: "string",
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: "contact",
          title: "Contact",
          type: "email",
          validation: Rule => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "capacity",
      title: "Capacity",
      group: "info",
      type: "number",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "attendees",
      title: "Attendees",
      group: "info",
      type: "number",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "requirements",
      title: "Requirements",
      group: "info",
      type: "array",
      of: [{ type: "string" }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "whatToBring",
      title: "What to Bring",
      group: "info",
      type: "array",
      of: [{ type: "string" }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "schedule",
      title: "Schedule",
      type: "array",
      group: "schedule",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "time",
              title: "Time",
              type: "string",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "activity",
              title: "Activity",
              type: "string",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              validation: Rule => Rule.required(),
            }),
          ],
        },
      ],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
    }),
  ],
  preview: {
    select: {
      title: "Title",
    },
  },
})
