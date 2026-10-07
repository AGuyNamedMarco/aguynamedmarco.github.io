import Button from "./components/Button.astro";

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    href: { control: "text" },
    label: { control: "text" },
    variant: {
      control: "inline-radio",
      options: ["primary", "secondary"]
    }
  },
  args: {
    href: "#",
    label: "View Case Studies",
    variant: "primary"
  }
};

export default meta;

export const Default = {
};

export const Secondary = {
  args: {
    href: "#",
    variant: "secondary",
    label: "Contact Me"
  }
};
