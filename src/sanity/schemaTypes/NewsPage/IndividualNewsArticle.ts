import { defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

export const individualNewsArticleType = defineType({
  name: "individualNewsArticle",
  title: "Individual News Article",
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
    {
      name: "images",
      title: "Images",
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
      name: "category",
      title: "Category",
      type: "string",
      validation: Rule => Rule.required(),
      options: {
        list: [
          "Eventos",
          "Noticias",
          "Iniciativas",
          "Comunicados",
          "Entrevistas",
          "Logros",
        ],
      },
      group: "info",
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      validation: Rule => Rule.required(),
      options: {
        dateFormat: "YYYY-MM-DD",
      },
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
      group: "info",
    }),
    defineField({
      name: "readTime",
      title: "Read Time",
      type: "number",
      validation: Rule => Rule.required(),
      group: "info",
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      validation: Rule => Rule.required(),
      group: "info",
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      group: "images",
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
      group: "content",
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      group: "images",
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
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
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
