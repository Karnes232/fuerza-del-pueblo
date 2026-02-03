import { type SchemaTypeDefinition } from "sanity"

import { generalLayoutType } from "./GeneralLayout/GeneralLayout"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [generalLayoutType],
}
