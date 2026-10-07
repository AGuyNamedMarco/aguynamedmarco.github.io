import FeatureCardRail from "./components/FeatureCardRail.astro";

const items = [
  {
    title: "City Guides",
    subtitle: "Explore neighborhoods with designer-curated itineraries.",
    imageUrl:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",
    icon: "🧭",
    href: "#"
  },
  {
    title: "Wellness Spots",
    subtitle: "Discover calm spaces and top-rated wellness experiences.",
    imageUrl:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
    icon: "🧘",
    href: "#"
  },
  {
    title: "Food Trails",
    subtitle: "Taste standout dishes from chef-driven local kitchens.",
    imageUrl:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    icon: "🍜",
    href: "#"
  },
  {
    title: "Night Views",
    subtitle: "Find dramatic skyline moments and after-dark highlights.",
    imageUrl:
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80",
    icon: "🌃",
    href: "#"
  },
  {
    title: "Art Routes",
    subtitle: "Visit galleries, murals, and contemporary art installations.",
    imageUrl:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80",
    icon: "🎨",
    href: "#"
  }
];

export default {
  title: "Components/FeatureCardRail",
  component: FeatureCardRail,
  parameters: {
    layout: "fullscreen"
  },
  argTypes: {
    heading: { control: "text" },
    railId: { control: "text" },
    cardSize: { control: "inline-radio", options: ["sm", "md", "lg", "xl"] },
    items: { control: "object" }
  },
  args: {
    heading: "Featured Destinations",
    railId: "storybook-feature-cards",
    cardSize: "md",
    items
  }
};

export const Default = {};

export const LargeCards = {
  args: {
    cardSize: "lg"
  }
};

export const FullWidthCards = {
  args: {
    cardSize: "xl"
  }
};
