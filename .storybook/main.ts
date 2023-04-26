import type { StorybookConfig } from "@storybook/react-vite"
import type { AddonOptionsVite } from '@storybook/addon-coverage';

const coverageConfig: AddonOptionsBabel = {
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
    "@storybook/addon-a11y",
    "@whitespace/storybook-addon-html",
    "storybook-addon-designs",
    "@storybook/addon-styling",
    "@storybook/addon-coverage",
    {
      name: "@storybook/addon-coverage",
      options: {
        istanbul: {
          include: ["**/stories/**"],
          ...coverageConfig,
        },
      },
    },
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
