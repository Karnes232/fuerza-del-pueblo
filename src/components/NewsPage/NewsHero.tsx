// sections/NewsHero.tsx
import { Container } from '@/components/HomePage/Container';
import { NewsHeroProps } from '@/types/news.types';

export const NewsHero = ({ 
  title, 
  subtitle, 
  description,
  showSearch = false 
}: NewsHeroProps) => {
  return (
    <section className="bg-linear-to-br from-darkGreen to-charcoal text-white py-16 md:py-20">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-4">
          {subtitle && (
            <p className="text-primaryGreen font-semibold text-lg uppercase tracking-wide">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl font-bold">
            {title}
          </h1>
          <p className="text-xl text-white/90">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
};