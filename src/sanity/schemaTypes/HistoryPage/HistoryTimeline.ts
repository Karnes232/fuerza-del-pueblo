import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const historyTimelineType = defineType({
  name: "historyTimeline",
  title: "History Timeline",
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
      name: "historyTimelineData",
      title: "History Timeline Data",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "id",
              title: "ID",
              type: "string",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "date",
              title: "Date",
              type: "date",
              options: {
                dateFormat: "YYYY-MM",
              },
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "category",
              title: "Category",
              type: "string",
              options: {
                list: [
                  { title: "Nacional", value: "national" },
                  { title: "Local", value: "local" },
                  { title: "Hito", value: "milestone" },
                  { title: "Logro", value: "achievement" },
                ],
              },
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "highlights",
              title: "Highlights",
              type: "array",
              of: [
                {
                  type: "string",
                },
              ],
              validation: Rule => Rule.required().min(1).max(3),
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
                  title: "Alt",
                  type: "string",
                  validation: Rule => Rule.required(),
                }),
              ],
              validation: Rule => Rule.required(),
            }),
          ],
        },
      ],
      validation: Rule => Rule.required().min(1).max(10),
    }),
  ],
  preview: {
    select: {
      title: "History Timeline",
    },
  },
})
