import Card from "./components/Card.astro";

const meta = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    eyebrow: { control: "text" },
    title: { control: "text" },
    body: { control: "text" },
    href: { control: "text" },
    linkLabel: { control: "text" },
    tone: {
      control: "inline-radio",
      options: ["default", "featured"]
    }
  },
  args: {
    eyebrow: "Case Study",
    title: "USAspending.gov Search",
    body: "Designed a scalable search experience for analyzing federal spending data.",
    href: "#",
    linkLabel: "Read case study",
    tone: "default"
  }
};

export default meta;

export const Default = {
};

export const Featured = {
  args: {
    tone: "featured",
    eyebrow: "Featured Project"
  }
};
