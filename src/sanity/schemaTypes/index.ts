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

//LeadershipPage
import { leadershipPageHeroSectionType } from "./LeadershipPage/HeroSection"
import { leadershipTeamType } from "./LeadershipPage/LeadershipTeam"
import { organizationalStructureType } from "./LeadershipPage/OrganizationalStructure"
import { departmentsSectionType } from "./LeadershipPage/DepartmentsSection"
import { wingsSectionType } from "./LeadershipPage/WingsSection"
import { sectorCoordinatorsSectionType } from "./LeadershipPage/SectorCoordinatorsSection"

//HistoryPage
import { historyPageHeroSectionType } from "./HistoryPage/HeroSection"
import { historyIntroSectionType } from "./HistoryPage/HistoryIntro"
import { foundingStorySectionType } from "./HistoryPage/FoundingStory"
import { erasSectionType } from "./HistoryPage/ErasSection"
import { historyTimelineType } from "./HistoryPage/HistoryTimeline"
import { milestonesSectionType } from "./HistoryPage/MilestonesSection"
import { achievementsSectionType } from "./HistoryPage/AchievementsSection"
import { legacySectionType } from "./HistoryPage/LegacySection"

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

    //LeadershipPage
    leadershipPageHeroSectionType,
    leadershipTeamType,
    organizationalStructureType,
    departmentsSectionType,
    wingsSectionType,
    sectorCoordinatorsSectionType,

    //HistoryPage
    historyPageHeroSectionType,
    historyIntroSectionType,
    foundingStorySectionType,
    erasSectionType,
    historyTimelineType,
    milestonesSectionType,
    achievementsSectionType,
    legacySectionType,
  ],
}
