import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const eventCategoryType = defineType({
  name: "eventCategory",
  title: "Event Category",
  type: "document",
  icon: DocumentIcon,
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
      type: "text",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: [
          "Users",
          "Heart",
          "GraduationCap",
          "PartyPopper",
          "Trash2",
          "Handshake",
        ],
        layout: "dropdown",
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "string",
      options: {
        list: ["#00A651", "#1F4D2B"],
        layout: "dropdown",
      },
      validation: Rule => Rule.required(),
    }),
  ],
})
