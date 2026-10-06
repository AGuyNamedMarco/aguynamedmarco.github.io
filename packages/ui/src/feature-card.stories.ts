import FeatureCard from "./components/FeatureCard.astro";

export default {
  title: "Components/FeatureCard",
  component: FeatureCard,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    imageUrl: { control: "text" },
    icon: { control: "text" },
    size: { control: "inline-radio", options: ["sm", "md", "lg", "xl"] },
    href: { control: "text" }
  },
  args: {
    title: "City Guides",
    subtitle: "Explore new neighborhoods with curated local tips.",
    imageUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    icon: "🧭",
    size: "md",
    href: "#"
  }
};

export const Default = {};

export const Large = {
  args: {
    size: "lg"
  }
};

export const FullWidth = {
  args: {
    size: "xl"
  }
};
