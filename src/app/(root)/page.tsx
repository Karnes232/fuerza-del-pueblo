import { AboutSection } from "@/components/HomePage/AboutSection"
import { HeroSection } from "@/components/HomePage/HeroSection"
import {
  newsData,
  eventsData,
  joinData,
  contactData,
} from "@/config/home.config"
import { getHeroSection } from "@/sanity/queries/HomePage/HeroSection"
import { getAboutSection } from "@/sanity/queries/HomePage/AboutSection"
import { ValuesSection } from "@/components/HomePage/ValuesSection"
import { getValuesSection } from "@/sanity/queries/HomePage/ValueSection"
import { NewsSection } from "@/components/HomePage/NewsSection"
import { EventsSection } from "@/components/HomePage/EventsSection"

export default async function Home() {
  const [heroSection, aboutSection, valuesSection] = await Promise.all([
    getHeroSection(),
    getAboutSection(),
    getValuesSection(),
  ])

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
      <AboutSection
        title={aboutSection.title}
        content={aboutSection.content}
        image={aboutSection.image}
        ctaText={aboutSection.ctaText}
        ctaLink={aboutSection.ctaLink}
      />

      {/* Values Section */}
      <ValuesSection
        title={valuesSection.title}
        subtitle={valuesSection.subtitle}
        values={valuesSection.values}
      />

      {/* News Section */}
      <NewsSection
        title={newsData.title}
        subtitle={newsData.subtitle}
        articles={newsData.articles}
        viewAllLink={newsData.viewAllLink}
      />

      {/* Events Section */}
      <EventsSection
        title={eventsData.title}
        subtitle={eventsData.subtitle}
        events={eventsData.events}
        viewAllLink={eventsData.viewAllLink}
      />

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
