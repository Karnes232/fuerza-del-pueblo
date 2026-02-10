import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const leadershipTeamType = defineType({
  name: "leadershipTeam",
  title: "Leadership Team",
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
      name: "leaders",
      title: "Leaders",
      type: "array",
      of: [
        {
          name: "leader",
          title: "Leader",
          type: "object",
          fields: [
            defineField({
              name: "id",
              title: "ID",
              type: "string",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "name",
              title: "Name",
              type: "string",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "position",
              title: "Position",
              type: "string",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "bio",
              title: "Bio",
              type: "text",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "responsibilities",
              title: "Responsibilities",
              type: "array",
              of: [{ type: "string" }],
              validation: Rule => Rule.required().min(4).max(4),
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
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "Leaders",
    },
  },
})
