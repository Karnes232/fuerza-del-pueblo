import { type SchemaTypeDefinition } from "sanity"

import { generalLayoutType } from "./GeneralLayout/GeneralLayout"

//HomePage
import { heroSectionType } from "./HomePage/HeroSection"
import { aboutSectionType } from "./HomePage/AboutSection"
import { valuesSectionType } from "./HomePage/ValuesSection"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    //GeneralLayout
    generalLayoutType,

    //HomePage
    heroSectionType,
    aboutSectionType,
    valuesSectionType,
  ],
}
