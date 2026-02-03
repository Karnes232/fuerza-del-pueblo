import { type SchemaTypeDefinition } from "sanity"

import { generalLayoutType } from "./GeneralLayout/GeneralLayout"

//HomePage
import { heroSectionType } from "./HomePage/HeroSection"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    //GeneralLayout
    generalLayoutType,

    //HomePage
    heroSectionType,
  ],
}
