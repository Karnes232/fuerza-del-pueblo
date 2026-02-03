// types/home.types.ts

export interface Value {
    id: string;
    title: string;
    description: string;
    icon: string; // Lucide icon name
  }
  
  export interface NewsArticle {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    image?: string;
    slug: string;
    category?: string;
  }
  
  export interface Event {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image?: string;
    slug: string;
    rsvpLink?: string;
  }
  
  export interface HeroSectionProps {
    title: string;
    subtitle?: string;
    slogan: string;
    ctaText: string;
    ctaLink: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
    backgroundImage?: string;
  }
  
  export interface AboutSectionProps {
    title: string;
    content: string;
    image?: string;
    ctaText?: string;
    ctaLink?: string;
  }
  
  export interface ValuesSectionProps {
    title: string;
    subtitle?: string;
    values: Value[];
  }
  
  export interface NewsSectionProps {
    title: string;
    subtitle?: string;
    articles: NewsArticle[];
    viewAllLink: string;
  }
  
  export interface EventsSectionProps {
    title: string;
    subtitle?: string;
    events: Event[];
    viewAllLink: string;
  }
  
  export interface JoinSectionProps {
    title: string;
    description: string;
    benefits: string[];
    ctaText: string;
    ctaLink: string;
    backgroundImage?: string;
  }
  
  export interface ContactSectionProps {
    title: string;
    description: string;
  }
  
  export interface ValueCardProps {
    value: Value;
  }
  
  export interface NewsCardProps {
    article: NewsArticle;
  }
  
  export interface EventCardProps {
    event: Event;
  }
  
  export interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center' | 'right';
    className?: string;
  }
  
  export interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
  }
  
  export interface CTAButtonProps {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    icon?: string;
    className?: string;
  }