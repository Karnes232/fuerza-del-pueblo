import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const campaignProposalsSectionType = defineType({
  name: "campaignProposalsSection",
  title: "Campaign Proposals Section",
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
      name: "proposals",
      title: "Proposals",
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
              name: "category",
              title: "Category",
              type: "string",
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
              name: "icon",
              title: "Icon",
              type: "string",
              options: {
                list: [
                  "GraduationCap",
                  "Heart",
                  "Shield",
                  "Building2",
                  "Briefcase",
                  "Leaf",
                  "Users",
                  "Palmtree",
                ],
                layout: "dropdown",
              },
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "objectives",
              title: "Objectives",
              type: "array",
              of: [{ type: "string" }],
              validation: Rule => Rule.required(),
            }),
          ],
        },
      ],
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "Campaign Proposals Section",
    },
  },
})
