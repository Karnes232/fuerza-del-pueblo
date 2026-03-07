import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const individualNewsArticleType = defineType({
  name: "individualNewsArticle",
  title: "Individual News Article",
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
      name: "category",
      title: "Category",
      type: "string",
      validation: Rule => Rule.required(),
      options: {
        list: ["Eventos", "Noticias", "Actualizaciones", "Publicaciones"],
      },
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      validation: Rule => Rule.required(),
      options: {
        dateFormat: "YYYY-MM-DD",
      },
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: Rule => Rule.required(),
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "object",
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
      ],
    }),
    defineField({
      name: "readTime",
      title: "Read Time",
      type: "number",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
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
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
              validation: Rule => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "featuredImage",
    },
  },
})
