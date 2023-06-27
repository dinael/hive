import type { Preview } from "@storybook/react"
import { withThemeByClassName } from "@storybook/addon-styling"
import { withPerformance } from 'storybook-addon-performance'
import "../src/scss/04-generic/_root.scss"
import "../src/scss/04-generic/_reset.scss"
import "../src/scss/styles.scss"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  withPerformance,
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-theme",
  }),
];

export default preview;


