import { HeroSection } from "@/components/HomePage/HeroSection"
import {
  heroData,
  aboutData,
  valuesData,
  newsData,
  eventsData,
  joinData,
  contactData,
} from "@/config/home.config"
import { getHeroSection } from "@/sanity/queries/HomePage/HeroSection"

export default async function Home() {
  const [heroSection] = await Promise.all([getHeroSection()])

  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        title={heroSection.title}
        subtitle={heroSection.subtitle}
        slogan={heroSection.slogan}
        ctaText={heroSection.ctaText}
        ctaLink={heroSection.ctaLink}
        secondaryCtaText={heroSection.secondaryCtaText}
        secondaryCtaLink={heroSection.secondaryCtaLink}
        backgroundImage={heroSection.backgroundImage}
      />

      {/* About Section */}
      {/* <AboutSection
        title={aboutData.title}
        content={aboutData.content}
        image={aboutData.image}
        ctaText={aboutData.ctaText}
        ctaLink={aboutData.ctaLink}
      /> */}

      {/* Values Section */}
      {/* <ValuesSection
        title={valuesData.title}
        subtitle={valuesData.subtitle}
        values={valuesData.values}
      /> */}

      {/* News Section */}
      {/* <NewsSection
        title={newsData.title}
        subtitle={newsData.subtitle}
        articles={newsData.articles}
        viewAllLink={newsData.viewAllLink}
      /> */}

      {/* Events Section */}
      {/* <EventsSection
        title={eventsData.title}
        subtitle={eventsData.subtitle}
        events={eventsData.events}
        viewAllLink={eventsData.viewAllLink}
      /> */}

      {/* Join Section */}
      {/* <JoinSection
        title={joinData.title}
        description={joinData.description}
        benefits={joinData.benefits}
        ctaText={joinData.ctaText}
        ctaLink={joinData.ctaLink}
        backgroundImage={joinData.backgroundImage}
      /> */}

      {/* Contact Section */}
      {/* <ContactSection
        title={contactData.title}
        description={contactData.description}
      /> */}
    </main>
  )
}
