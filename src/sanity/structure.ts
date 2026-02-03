import type { StructureResolver } from "sanity/structure"

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = S =>
  S.list()
    .title("Content")
    .items([
      // S.documentTypeListItem('generalLayout').title('General Layout'),
      S.listItem()
        .title("General Layout")
        .child(
          S.document()
            .schemaType("generalLayout")
            .title("General Layout")
            .documentId("generalLayout"),
        ),
      S.listItem()
        .title("Home Page")
        .child(
          S.list()
            .title("Home Page")
            .items([
              S.listItem()
                .title("Hero Section")
                .child(
                  S.document()
                    .schemaType("heroSection")
                    .title("Hero Section")
                    .documentId("heroSection"),
                ),
              S.listItem()
                .title("About Section")
                .child(
                  S.document()
                    .schemaType("aboutSection")
                    .title("About Section")
                    .documentId("aboutSection"),
                ),
              S.listItem()
                .title("Values Section")
                .child(
                  S.document()
                    .schemaType("valuesSection")
                    .title("Values Section")
                    .documentId("valuesSection"),
                ),
              //   .title("Photoshoots Packages")
              //   .child(
              //     S.documentList()
              //       .schemaType("photoshootsPackages")
              //       .title("Photoshoots Packages")
              //       .filter("_type == 'photoshootsPackages'"),
              //   ),
            ]),
        ),
    ])
