import React from "react"

const TextComponentParagraph = ({
  paragraph,
  ParagraphClassName,
}: {
  paragraph: React.ReactNode
  ParagraphClassName?: string
}) => {
  return (
    <p
      className={`font-body text-lg text-charcoal/80 leading-relaxed ${ParagraphClassName ?? ""}`}
    >
      {paragraph}
    </p>
  )
}

export default TextComponentParagraph
