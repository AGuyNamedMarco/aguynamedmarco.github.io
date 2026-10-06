import Badge from "./components/Badge.astro";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    label: { control: "text" },
    tone: { control: "inline-radio", options: ["neutral", "success", "warning"] }
  },
  args: {
    label: "New",
    tone: "neutral"
  }
};

export const Default = {};
export const Success = { args: { tone: "success", label: "Shipped" } };
export const Warning = { args: { tone: "warning", label: "Needs review" } };
