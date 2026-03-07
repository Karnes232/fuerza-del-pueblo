import { client } from "@/sanity/lib/client"
import { PortableText } from "@portabletext/react"
import imageUrlBuilder from "@sanity/image-url"

import Image from "next/image"
import TextComponentParagraph from "./TextComponentParagraph"
import TextComponentHeading from "./TextComponentHeading"
import TextComponentList from "./TextComponentList"

interface LocaleBlockContent {
  _type?: string
  en: any[]
  es: any[]
}

interface Props {
  content: LocaleBlockContent
}
const builder = imageUrlBuilder(client)
const components = {
  types: {
    image: ({ value }: any) => {
      const imageUrl = builder.image(value).url()

      // Sanity images usually need to be accessed via .asset.url

      return (
        <figure className="my-8">
          <Image
            src={imageUrl}
            alt={value.alt || ""}
            width={1000}
            height={1000}
            className="w-full rounded-lg"
          />
          {/* <img
              src={imageUrl}
              alt={value.alt || ""}
              loading="lazy"
              className="w-full rounded-lg"
            /> */}
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-charcoal/60 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      return (
        <a
          href={value.href}
          rel="noopener noreferrer"
          className="text-primaryGreen hover:text-darkGreen underline"
        >
          {children}
        </a>
      )
    },
    strong: ({ children }: any) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }: any) => <em className="italic">{children}</em>,
  },
  block: {
    normal: ({ children }: any) => (
      <TextComponentParagraph paragraph={children} ParagraphClassName="mb-5" />
    ),
    h1: ({ children }: any) => (
      <TextComponentHeading heading={children} headingNumber="h1" />
    ),
    h2: ({ children }: any) => (
      <TextComponentHeading heading={children} headingNumber="h2" />
    ),
    h3: ({ children }: any) => (
      <TextComponentHeading heading={children} headingNumber="h3" />
    ),
    h4: ({ children }: any) => (
      <TextComponentHeading heading={children} headingNumber="h4" />
    ),
    h5: ({ children }: any) => (
      <TextComponentHeading heading={children} headingNumber="h5" />
    ),
    h6: ({ children }: any) => (
      <TextComponentHeading heading={children} headingNumber="h6" />
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <TextComponentList
        items={children}
        listType="bullet"
        ListClassName="mb-5 my-4"
      />
    ),
    number: ({ children }: any) => (
      <TextComponentList
        items={children}
        listType="number"
        ListClassName="mb-5 my-4"
      />
    ),
  },
}

const SanityBlogBody = ({ content }: { content: any }) => {
  if (!content) {
    return null
  }
  const blockContent = content
  return (
    <>
      <div className="font-body flex flex-col lg:max-w-3xl xl:max-w-4xl mx-auto px-4 lg:px-0">
        <PortableText value={blockContent} components={components} />
      </div>
    </>
  )
}

export default SanityBlogBody
