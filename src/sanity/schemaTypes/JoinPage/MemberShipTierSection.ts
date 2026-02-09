import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const memberShipTierSectionType = defineType({
  name: "memberShipTierSection",
  title: "MemberShip Tier Section",
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
      name: "tiers",
      title: "Tiers",
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
              name: "description",
              title: "Description",
              type: "string",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "price",
              title: "Price",
              type: "string",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "benefits",
              title: "Benefits",
              type: "array",
              of: [{ type: "string" }],
              validation: Rule => Rule.required().min(1).max(5),
            }),
            defineField({
              name: "requirements",
              title: "Requirements",
              type: "array",
              of: [{ type: "string" }],
              validation: Rule => Rule.required().min(1).max(5),
            }),
            defineField({
              name: "color",
              title: "Color",
              type: "string",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "recommended",
              title: "Recommended",
              type: "boolean",
              initialValue: false,
              validation: Rule => Rule.required(),
            }),
          ],
        },
      ],
      validation: Rule => Rule.required().min(3).max(3),
    }),
  ],
  preview: {
    select: {
      title: "MemberShip Tier Section",
    },
  },
})
