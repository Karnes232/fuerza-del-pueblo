// sections/SocialLinksSection.tsx
import { Container } from "@/components/HomePage/Container"
import { SectionHeader } from "@/components/HomePage/SectionHeader"
import { SocialButton } from "@/components/ContactPage/SocialButton"
import { SocialLinksSectionProps } from "@/types/contact.types"

export const SocialLinksSection = ({
  title,
  subtitle,
  socials,
}: SocialLinksSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} align="center" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {socials.map(social => (
            <SocialButton key={social.platform} social={social} />
          ))}
        </div>
      </Container>
    </section>
  )
}
