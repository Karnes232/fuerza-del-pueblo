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
import { joinSectionType } from "./HomePage/JoinSection"

//JoinPage
import { joinPageHeroSectionType } from "./JoinPage/HeroSection"
import { whyJoinSectionType } from "./JoinPage/WhyJoinSection"
import { memberShipTierSectionType } from "./JoinPage/MemberShipTierSection"
import { joinBenefitsinPageTestimonialsSectionType } from "./JoinPage/TestimonialsSection"
import { joinPageFaqsSectionType } from "./JoinPage/FaqsSection"
import { joinPageCtaSectionType } from "./JoinPage/CtaSection"
import { joinPageFormSectionType } from "./JoinPage/FormSection"

//ContactPage
import { contactPageHeroSectionType } from "./ContactPage/HeroSection"
import { sectionTitlesType } from "./ContactPage/SectionTitles"

//AboutPage
import { aboutPageHeroSectionType } from "./AboutPage/HeroSection"
import { aboutContentSectionType } from "./AboutPage/AboutContent"
import { aboutStatsSectionType } from "./AboutPage/AboutStats"
import { timelineSectionType } from "./AboutPage/Timeline"
import { principlesSectionType } from "./AboutPage/Principles"
import { nationalConnectionSectionType } from "./AboutPage/NationalConnection"

//MissionPage
import { missionPageHeroSectionType } from "./MissionPage/HeroSection"
import { missionStatementType } from "./MissionPage/MissionStatement"
import { visionStatementType } from "./MissionPage/VisionStatement"
import { coreValuesType } from "./MissionPage/CoreValues"
import { pillarsSectionType } from "./MissionPage/PillarsSection"
import { commitmentsSectionType } from "./MissionPage/CommitmentsSection"
import { goalsSectionType } from "./MissionPage/GoalsSection"

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
    joinSectionType,

    //JoinPage
    joinPageHeroSectionType,
    whyJoinSectionType,
    memberShipTierSectionType,
    joinBenefitsinPageTestimonialsSectionType,
    joinPageFaqsSectionType,
    joinPageCtaSectionType,
    joinPageFormSectionType,

    //ContactPage
    contactPageHeroSectionType,
    sectionTitlesType,

    //AboutPage
    aboutPageHeroSectionType,
    aboutContentSectionType,
    aboutStatsSectionType,
    timelineSectionType,
    principlesSectionType,
    nationalConnectionSectionType,

    //MissionPage
    missionPageHeroSectionType,
    missionStatementType,
    visionStatementType,
    coreValuesType,
    pillarsSectionType,
    commitmentsSectionType,
    goalsSectionType,
  ],
}
