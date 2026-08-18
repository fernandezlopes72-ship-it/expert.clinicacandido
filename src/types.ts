export type ThemeId = 'dark-gold' | 'clean-emerald' | 'warm-sand' | 'royal-navy';

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  subtitle: string;
  tag: string;
  bgColor: string;
  cardBg: string;
  cardBorder: string;
  cardHoverBorder: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  accentColor: string;
  accentHover: string;
  accentText: string;
  accentBgSubtle: string;
  accentBorderSubtle: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  ctaGradient: string;
  ctaShadow: string;
  sectionAltBg: string;
  dividerColor: string;
  heroOverlay: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: string;
  description?: string;
}

export interface BackstageItem {
  id: string;
  url: string;
  title: string;
  subtitle: string;
}

export interface TrustCard {
  id: string;
  iconName: string;
  title: string;
  description: string;
  highlight?: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  badge: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
