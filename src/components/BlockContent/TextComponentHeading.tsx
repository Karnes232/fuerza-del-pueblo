"use client"
import React from "react"

const TextComponentHeading = ({
  heading,
  headingNumber,
  HeadingClassName,
}: {
  heading: React.ReactNode
  headingNumber: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  HeadingClassName?: string
}) => {
  const baseClasses =
    "font-heading font-bold text-charcoal mt-8 mb-4 first:mt-0"
  const classes = {
    h1: `text-3xl md:text-4xl ${baseClasses} ${HeadingClassName ?? ""}`,
    h2: `text-2xl md:text-3xl ${baseClasses} ${HeadingClassName ?? ""}`,
    h3: `text-xl md:text-2xl ${baseClasses} ${HeadingClassName ?? ""}`,
    h4: `text-lg md:text-xl ${baseClasses} ${HeadingClassName ?? ""}`,
    h5: `text-lg md:text-xl ${baseClasses} ${HeadingClassName ?? ""}`,
    h6: `text-base md:text-lg ${baseClasses} ${HeadingClassName ?? ""}`,
  }

  const Tag = headingNumber
  return <Tag className={classes[headingNumber]}>{heading}</Tag>
}

export default TextComponentHeading
