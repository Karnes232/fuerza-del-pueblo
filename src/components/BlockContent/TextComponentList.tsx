import React from "react"

interface TextComponentListProps {
  items: React.ReactNode[]
  listType: "bullet" | "number"
  ListClassName?: string
}

const listClasses =
  "font-body text-lg text-charcoal/80 leading-relaxed list-outside pl-6 space-y-2"

const TextComponentList: React.FC<TextComponentListProps> = ({
  items,
  listType,
  ListClassName = "",
}) => {
  return listType === "bullet" ? (
    <ul className={`list-disc ${listClasses} ${ListClassName}`}>{items}</ul>
  ) : (
    <ol className={`list-decimal ${listClasses} ${ListClassName}`}>{items}</ol>
  )
}

export default TextComponentList
