const config = {
  stories: ["../src/**/*.stories.@(js|ts)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  framework: {
    name: "storybook-astro",
    options: {}
  },
  core: {
    builder: "@storybook/builder-vite"
  }
};

export default config;
