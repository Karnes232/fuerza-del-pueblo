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
        .title("Page SEO")
        .child(
          S.documentList()
            .schemaType("pageSeo")
            .title("Page SEO")
            .filter("_type == 'pageSeo'"),
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
              S.listItem()
                .title("Join Section")
                .child(
                  S.document()
                    .schemaType("joinSection")
                    .title("Join Section")
                    .documentId("joinSection"),
                ),
            ]),
        ),
      S.listItem()
        .title("Join Page")
        .child(
          S.list()
            .title("Join Page")
            .items([
              S.listItem()
                .title("Hero Section")
                .child(
                  S.document()
                    .schemaType("joinPageHeroSection")
                    .title("Hero Section")
                    .documentId("joinPageHeroSection"),
                ),
              S.listItem()
                .title("Why Join Section")
                .child(
                  S.document()
                    .schemaType("whyJoinSection")
                    .title("Why Join Section")
                    .documentId("whyJoinSection"),
                ),
              S.listItem()
                .title("MemberShip Tier Section")
                .child(
                  S.document()
                    .schemaType("memberShipTierSection")
                    .title("MemberShip Tier Section")
                    .documentId("memberShipTierSection"),
                ),
              S.listItem()
                .title("Testimonials Section")
                .child(
                  S.document()
                    .schemaType("joinPageTestimonialsSection")
                    .title("Testimonials Section")
                    .documentId("joinPageTestimonialsSection"),
                ),
              S.listItem()
                .title("Faqs Section")
                .child(
                  S.document()
                    .schemaType("joinPageFaqsSection")
                    .title("Faqs Section")
                    .documentId("joinPageFaqsSection"),
                ),
              S.listItem()
                .title("Form Section")
                .child(
                  S.document()
                    .schemaType("joinPageFormSection")
                    .title("Form Section")
                    .documentId("joinPageFormSection"),
                ),
              S.listItem()
                .title("Cta Section")
                .child(
                  S.document()
                    .schemaType("joinPageCtaSection")
                    .title("Cta Section")
                    .documentId("joinPageCtaSection"),
                ),
            ]),
        ),
      S.listItem()
        .title("Contact Page")
        .child(
          S.list()
            .title("Contact Page")
            .items([
              S.listItem()
                .title("Hero Section")
                .child(
                  S.document()
                    .schemaType("contactPageHeroSection")
                    .title("Hero Section")
                    .documentId("contactPageHeroSection"),
                ),
              S.listItem()
                .title("Section Titles")
                .child(
                  S.document()
                    .schemaType("sectionTitles")
                    .title("Section Titles")
                    .documentId("sectionTitles"),
                ),
            ]),
        ),
    ])
