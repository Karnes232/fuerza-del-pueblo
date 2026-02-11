import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const mayorCandidateType = defineType({
  name: "mayorCandidate",
  title: "Mayor Candidate",
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
      name: "candidate",
      title: "Candidate",
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
        defineField({
          name: "socialMedia",
          title: "Social Media",
          type: "object",
          fields: [
            defineField({
              name: "facebook",
              title: "Facebook",
              type: "url",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "X",
              title: "X",
              type: "url",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "instagram",
              title: "Instagram",
              type: "url",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "linkedin",
              title: "Linkedin",
              type: "url",
              validation: Rule => Rule.required(),
            }),
          ],
        }),
        // defineField({
        //   name: "campaignWebsite",
        //   title: "Campaign Website",
        //   type: "url",
        //   validation: Rule => Rule.required(),
        // }),
        defineField({
          name: "contactEmail",
          title: "Contact Email",
          type: "string",
          validation: Rule => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "Title",
    },
  },
})
