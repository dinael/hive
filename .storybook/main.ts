import type { StorybookConfig } from "@storybook/react-vite"

const coverageConfig = {
  include: ['**/stories/**'],
  exclude: ['**/exampleDirectory/**'],
  excludeNodeModules: true,
};

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
    "@whitespace/storybook-addon-html",
    "storybook-addon-pseudo-states",
    "@storybook/addon-a11y",
    "addon-screen-reader",
    "aria-live-storybook-addon",
    "storybook-addon-designs",
    "@storybook/addon-styling",
    "storybook-addon-performance",
    "@storybook/addon-coverage",
    "storybook_vitest_addon",
    {
      name: "@storybook/addon-coverage",
      options: {
        istanbul: {
          include: ["**/stories/**"],
          ...coverageConfig,
        },
      },
    }
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: "tag"
  }
}
export default config
