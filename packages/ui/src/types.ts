export type ButtonVariant = "primary" | "secondary";

export type CardTone = "default" | "featured";

export interface ButtonProps {
  href: string;
  label?: string;
  variant?: ButtonVariant;
}

export interface CardProps {
  eyebrow?: string;
  title: string;
  body: string;
  href?: string;
  linkLabel?: string;
  tone?: CardTone;
}

export interface BadgeProps {
  label: string;
  tone?: "neutral" | "success" | "warning";
}

export interface ToolbarItem {
  href: string;
  label: string;
}

export interface ToolbarProps {
  brand?: string;
  currentPath?: string;
  items?: ToolbarItem[];
  showThemeToggle?: boolean;
}

export interface FeatureCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  icon: string;
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
}

export interface FeatureCardRailProps {
  heading?: string;
  railId?: string;
  cardSize?: "sm" | "md" | "lg" | "xl";
  items: FeatureCardProps[];
}
