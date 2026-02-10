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
      S.listItem()
        .title("About Page")
        .child(
          S.list()
            .title("About Page")
            .items([
              S.listItem()
                .title("Hero Section")
                .child(
                  S.document()
                    .schemaType("aboutPageHeroSection")
                    .title("Hero Section")
                    .documentId("aboutPageHeroSection"),
                ),
              S.listItem()
                .title("About Content Section")
                .child(
                  S.document()
                    .schemaType("aboutContentSection")
                    .title("About Content Section")
                    .documentId("aboutContentSection"),
                ),
              S.listItem()
                .title("About Stats Section")
                .child(
                  S.document()
                    .schemaType("aboutStatsSection")
                    .title("About Stats Section")
                    .documentId("aboutStatsSection"),
                ),
              S.listItem()
                .title("Timeline Section")
                .child(
                  S.document()
                    .schemaType("timelineSection")
                    .title("Timeline Section")
                    .documentId("timelineSection"),
                ),
              S.listItem()
                .title("Principles Section")
                .child(
                  S.document()
                    .schemaType("principlesSection")
                    .title("Principles Section")
                    .documentId("principlesSection"),
                ),
              S.listItem()
                .title("National Connection Section")
                .child(
                  S.document()
                    .schemaType("nationalConnectionSection")
                    .title("National Connection Section")
                    .documentId("nationalConnectionSection"),
                ),
            ]),
        ),
      S.listItem()
        .title("Mission Page")
        .child(
          S.list()
            .title("Mission Page")
            .items([
              S.listItem()
                .title("Hero Section")
                .child(
                  S.document()
                    .schemaType("missionPageHeroSection")
                    .title("Hero Section")
                    .documentId("missionPageHeroSection"),
                ),
              S.listItem()
                .title("Mission Statement")
                .child(
                  S.document()
                    .schemaType("missionStatement")
                    .title("Mission Statement")
                    .documentId("missionStatement"),
                ),
              S.listItem()
                .title("Vision Statement")
                .child(
                  S.document()
                    .schemaType("visionStatement")
                    .title("Vision Statement")
                    .documentId("visionStatement"),
                ),
              S.listItem()
                .title("Core Values")
                .child(
                  S.document()
                    .schemaType("coreValues")
                    .title("Core Values")
                    .documentId("coreValues"),
                ),
              S.listItem()
                .title("Pillars Section")
                .child(
                  S.document()
                    .schemaType("pillarsSection")
                    .title("Pillars Section")
                    .documentId("pillarsSection"),
                ),
              S.listItem()
                .title("Commitments Section")
                .child(
                  S.document()
                    .schemaType("commitmentsSection")
                    .title("Commitments Section")
                    .documentId("commitmentsSection"),
                ),
              S.listItem()
                .title("Goals Section")
                .child(
                  S.document()
                    .schemaType("goalsSection")
                    .title("Goals Section")
                    .documentId("goalsSection"),
                ),
            ]),
        ),
      S.listItem()
        .title("Leadership Page")
        .child(
          S.list()
            .title("Leadership Page")
            .items([
              S.listItem()
                .title("Hero Section")
                .child(
                  S.document()
                    .schemaType("leadershipPageHeroSection")
                    .title("Hero Section")
                    .documentId("leadershipPageHeroSection"),
                ),
              S.listItem()
                .title("Leadership Team")
                .child(
                  S.document()
                    .schemaType("leadershipTeam")
                    .title("Leadership Team")
                    .documentId("leadershipTeam"),
                ),
            ]),
        ),
    ])
