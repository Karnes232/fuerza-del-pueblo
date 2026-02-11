import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const councilMembersSectionType = defineType({
  name: "councilMembersSection",
  title: "Council Members Section",
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
      name: "candidates",
      title: "Candidates",
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
              name: "slogan",
              title: "Slogan",
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
              name: "education",
              title: "Education",
              type: "array",
              of: [{ type: "string" }],
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "experience",
              title: "Experience",
              type: "array",
              of: [{ type: "string" }],
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "achievements",
              title: "Achievements",
              type: "array",
              of: [{ type: "string" }],
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "priorities",
              title: "Priorities",
              type: "array",
              of: [{ type: "string" }],
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "contactEmail",
              title: "Contact Email",
              type: "string",
            }),
            defineField({
              name: "socialMedia",
              title: "Social Media",
              type: "object",
              fields: [
                defineField({
                  name: "facebook",
                  title: "Facebook",
                  type: "url",
                }),
                defineField({
                  name: "X",
                  title: "X",
                  type: "url",
                }),
                defineField({
                  name: "linkedin",
                  title: "Linkedin",
                  type: "url",
                }),
                defineField({
                  name: "instagram",
                  title: "Instagram",
                  type: "url",
                }),
              ],
            }),
            defineField({
              name: "image",
              title: "Image",
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
          ],
        },
      ],
      validation: Rule => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: "Council Members Section",
    },
  },
})
