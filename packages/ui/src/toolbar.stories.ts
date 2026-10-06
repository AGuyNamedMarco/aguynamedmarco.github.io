import Toolbar from "./components/Toolbar.astro";

const items = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/style-guide", label: "Style Guide" },
  { href: "/contact", label: "Contact" }
];

export default {
  title: "Navigation/Toolbar",
  component: Toolbar,
  parameters: {
    layout: "fullscreen"
  },
  argTypes: {
    brand: { control: "text" },
    currentPath: { control: "text" },
    items: { control: "object" },
    showThemeToggle: { control: "boolean" }
  },
  args: {
    brand: "Marco Mendoza",
    currentPath: "/work",
    items,
    showThemeToggle: true
  }
};

export const Default = {};
