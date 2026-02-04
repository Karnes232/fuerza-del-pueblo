import { type SchemaTypeDefinition } from "sanity"

//GeneralLayout
import { generalLayoutType } from "./GeneralLayout/GeneralLayout"

//SEO
import { seoType } from "./SEO/seo"
import { pageSeoType } from "./SEO/PageSeo"

//HomePage
import { heroSectionType } from "./HomePage/HeroSection"
import { aboutSectionType } from "./HomePage/AboutSection"
import { valuesSectionType } from "./HomePage/ValuesSection"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    //GeneralLayout
    generalLayoutType,

    //SEO
    seoType,
    pageSeoType,

    //HomePage
    heroSectionType,
    aboutSectionType,
    valuesSectionType,
  ],
}
