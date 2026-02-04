// sections/WhyJoinSection.tsx
import { Container } from '@/components/HomePage/Container';
import { SectionHeader } from '@/components/HomePage/SectionHeader';
import { BenefitCard } from '@/components/JoinPage/BenefitCard';
import { WhyJoinSectionProps } from '@/types/unete.types';

export const WhyJoinSection = ({ 
  title, 
  subtitle, 
  benefits 
}: WhyJoinSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-[#F4F4F4]">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </div>
      </Container>
    </section>
  );
};