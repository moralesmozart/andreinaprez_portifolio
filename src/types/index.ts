export interface Project {
  slug: string;
  title: string;
  tags: string[];
  /** Omit to show gradient placeholder until assets exist in /public */
  coverImage?: string;
  heroImage: string;
  overview: string;
  role: string;
  period: string;
  achievements: string[];
  website?: string;
  detailImages: { src: string; alt: string; fullWidth?: boolean }[];
  comingSoon?: boolean;
  /** Card links to `website`; no `/works/[slug]` page is generated */
  externalOnly?: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface StatCard {
  value: string;
  label: string;
}

export interface TeamMember {
  slug: string;
  name: string;
  /** Shown next to the animated dot (like the original tagline). */
  roleLabel: string;
  /** Right-column heading, e.g. "Sobre Andreína". */
  aboutTitle: string;
  bio: string;
  /** Portrait — sourced from neverunpackspain.com/conocenos/ */
  image: string;
  imageAlt: string;
}
