// schemas/generalLayout.ts
import { defineArrayMember, defineField, defineType } from "sanity"
import { DocumentIcon } from "@sanity/icons"

const SOCIAL_PLATFORMS: { title: string; value: string }[] = [
  { title: "Facebook", value: "facebook" },
  { title: "Instagram", value: "instagram" },
  { title: "X (Twitter)", value: "x" },
  { title: "YouTube", value: "youtube" },
  { title: "WhatsApp", value: "whatsapp" },
  { title: "LinkedIn", value: "linkedin" },
  { title: "TikTok", value: "tiktok" },
]

export const generalLayoutType = defineType({
  name: "generalLayout",
  title: "General Layout",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "address",
      title: "Address",
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
      name: "email",
      title: "Email",
      type: "string",
      validation: Rule => Rule.required().email(),
    }),
    defineField({
      name: "telephone",
      title: "Telephone",
      type: "string",
      validation: Rule =>
        Rule.required()
          .regex(/^\d+$/, "Telephone number must contain only digits")
          .min(11)
          .max(11),
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      description:
        "Add your social media links. Each item has platform, URL, icon name, and accessibility label.",
      of: [
        defineArrayMember({
          type: "object",
          name: "socialLink",
          title: "Social Link",
          fields: [
            defineField({
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: SOCIAL_PLATFORMS,
                layout: "dropdown",
              },
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "href",
              title: "URL",
              type: "url",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              description:
                "Icon name (e.g. Facebook, Instagram, Youtube, MessageCircle for WhatsApp)",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "ariaLabel",
              title: "Aria Label",
              type: "string",
              description:
                "Accessible label for screen readers (e.g. Síguenos en Facebook)",
              validation: Rule => Rule.required(),
            }),
          ],
          preview: {
            select: { platform: "platform", href: "href" },
            prepare({ platform, href }) {
              const title =
                SOCIAL_PLATFORMS.find(p => p.value === platform)?.title ??
                platform
              return { title: title || "Social link", subtitle: href }
            },
          },
        }),
      ],
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true, // Enables the hotspot functionality for image cropping
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
          description: "Important for SEO and accessibility",
          validation: Rule => Rule.required(),
        }),
      ],
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "Name",
      media: "logo",
    },
  },
})
