import Script from "next/script"
import { AboutSection } from "@/components/HomePage/AboutSection"
import { HeroSection } from "@/components/HomePage/HeroSection"
import {
  newsData,
  eventsData,
  joinData,
} from "@/config/home.config"
import { getHeroSection } from "@/sanity/queries/HomePage/HeroSection"
import { getAboutSection } from "@/sanity/queries/HomePage/AboutSection"
import { ValuesSection } from "@/components/HomePage/ValuesSection"
import { getValuesSection } from "@/sanity/queries/HomePage/ValueSection"
import { NewsSection } from "@/components/HomePage/NewsSection"
import { EventsSection } from "@/components/HomePage/EventsSection"
import { JoinSection } from "@/components/HomePage/JoinSection"
import { ContactSection } from "@/components/HomePage/ContactSection"
import { getContactMethods } from "@/sanity/queries/GeneralLayout/GeneraLayout"
import { getPageSeo } from "@/sanity/queries/SEO/seo"
import { getStructuredData } from "@/sanity/queries/SEO/seo"
import { getJoinSection } from "@/sanity/queries/HomePage/JoinSection"

export default async function Home() {
  const [
    heroSection,
    aboutSection,
    valuesSection,
    contactMethods,
    structuredData,
    joinSection,
  ] = await Promise.all([
    getHeroSection(),
    getAboutSection(),
    getValuesSection(),
    getContactMethods(),
    getStructuredData("inicio"),
    getJoinSection(),
  ])
  return (
    <>
      <Script
        id="structured-data"
        strategy="beforeInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData?.jsonLd || "" }}
      />
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
          viewAllLink="/noticias"
        />

        {/* Events Section */}
        <EventsSection
          title={eventsData.title}
          subtitle={eventsData.subtitle}
          events={eventsData.events}
          viewAllLink="/eventos"
        />

        {/* Join Section */}
        <JoinSection
          title={joinSection.title}
          description={joinSection.description}
          benefits={joinData.benefits}
          ctaText={joinSection.ctaText}
          backgroundImage={joinSection.backgroundImage}
        />

        {/* Contact Section */}
        <ContactSection
          title="¿Tienes Preguntas?"
          description="Estamos aquí para escucharte. Contáctanos por cualquiera de nuestros canales."
          contactMethods={contactMethods}
        />
      </main>
    </>
  )
}

export async function generateMetadata() {
  const pageSeo = await getPageSeo("inicio")
  if (!pageSeo) {
    return {}
  }
  const canonicalUrl = `https://www.fuerzadelpueblo.do`
  return {
    canonical: canonicalUrl,
    title: pageSeo.meta.title,
    description: pageSeo.meta.description,
    keywords: pageSeo.meta.keywords,
    openGraph: {
      url: canonicalUrl,
      title: pageSeo.openGraph.title,
      description: pageSeo.openGraph.description,
      image: pageSeo.openGraph.imageUrl,
    },
    robots: {
      index: !pageSeo.noIndex,
      follow: !pageSeo.noFollow,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  }
}
