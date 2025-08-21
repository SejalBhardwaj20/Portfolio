export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  summary: string;
  tags: string[];
  cover: string;
  category: 'Web Apps' | 'Prototypes' | 'Logos' | 'Animations' | 'Concepts';
  gallery?: string[];
  body?: string;
  links?: {
    live?: string;
    repo?: string;
    figma?: string;
  };
  featured?: boolean;
  comingSoon?: boolean;
}

export interface SiteCopy {
  hero: {
    greeting: string;
    name: string;
    role: string;
    tagline: string;
  };
  quote: string;
  skills: {
    categories: {
      title: string;
      items: string[];
    }[];
  };
  certificates: string[];
}

export interface SkillCategory {
  title: string;
  items: string[];
  icon?: string;
}