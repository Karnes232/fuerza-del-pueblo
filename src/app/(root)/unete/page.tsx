import { FAQSection } from '@/components/JoinPage/FAQSection';
import { JoinFormSection } from '@/components/JoinPage/JoinFormSection';
import { MembershipTiersSection } from '@/components/JoinPage/MembershipTiersSection';
import { TestimonialsSection } from '@/components/JoinPage/TestimonialsSection';
import { UneteCTA } from '@/components/JoinPage/UneteCTA';
import { UneteHero } from '@/components/JoinPage/UneteHero';
import { WhyJoinSection } from '@/components/JoinPage/WhyJoinSection';
import {
    uneteHeroData,
    whyJoinData,
    membershipTiersData,
    joinFormData,
    testimonialsData,
    faqData,
    uneteCTAData,
  } from '@/config/unete.config';


export default function UnetePage() {
    return (
        <main>
        {/* Hero Section */}
        <UneteHero
          title={uneteHeroData.title}
          subtitle={uneteHeroData.subtitle}
          description={uneteHeroData.description}
          benefits={uneteHeroData.benefits}
          ctaText={uneteHeroData.ctaText}
        />
  
        {/* Why Join Section */}
        <WhyJoinSection
          title={whyJoinData.title}
          subtitle={whyJoinData.subtitle}
          benefits={whyJoinData.benefits}
        />
  
        {/* Membership Tiers Section */}
        <MembershipTiersSection
          title={membershipTiersData.title}
          subtitle={membershipTiersData.subtitle}
          tiers={membershipTiersData.tiers}
        />
  
        {/* Join Form Section */}
        <JoinFormSection
          title={joinFormData.title}
          subtitle={joinFormData.subtitle}
        />
  
        {/* Testimonials Section */}
        <TestimonialsSection
          title={testimonialsData.title}
          subtitle={testimonialsData.subtitle}
          testimonials={testimonialsData.testimonials}
        />
  
        {/* FAQ Section */}
        <FAQSection
          title={faqData.title}
          subtitle={faqData.subtitle}
          faqs={faqData.faqs}
        />
  
        {/* CTA Section */}
        <UneteCTA
          title={uneteCTAData.title}
          description={uneteCTAData.description}
          actions={uneteCTAData.actions}
        />
      </main>
    )
}