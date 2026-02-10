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
  ],
}
