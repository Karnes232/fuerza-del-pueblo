import { client } from "@/sanity/lib/client"

export interface LegalDocuments {
  pageName: string
  legalDocument: string[]
}

export const legalDocumentQueryString = `*[_type == "legalDocuments" && pageName == $pageName][0] {
  pageName,
  legalDocument,
}`

export const legalDocumentQuery = async (pageName: string) => {
  return await client.fetch(legalDocumentQueryString, { pageName })
}
