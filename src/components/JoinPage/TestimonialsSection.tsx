// sections/TestimonialsSection.tsx
import { Container } from '@/components/HomePage/Container';
import { SectionHeader } from '@/components/HomePage/SectionHeader';
import { TestimonialCard } from '@/components/JoinPage/TestimonialCard';
import { TestimonialsSectionProps } from '@/types/unete.types';

export const TestimonialsSection = ({ 
  title, 
  subtitle, 
  testimonials 
}: TestimonialsSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
};