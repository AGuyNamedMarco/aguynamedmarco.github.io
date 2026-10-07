import "@portfolio/tokens/styles/index.css";

const preview = {
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for all components",
      defaultValue: "fern",
      toolbar: {
        icon: "paintbrush",
        dynamicTitle: true,
        items: [
          { value: "fern", title: "Fern" },
          { value: "nocturne", title: "Nocturne" }
        ]
      }
    }
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme ?? "fern";
      document.documentElement.setAttribute("data-theme", theme);
      return Story();
    }
  ],
  parameters: {
    a11y: {
      test: "todo"
    },
    controls: {
      matchers: {
        color: /(background|color)$/i
      }
    }
  }
};

export default preview;
