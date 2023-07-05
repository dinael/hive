import type { Preview } from "@storybook/react"
import { withThemeByClassName } from "@storybook/addon-styling"
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
    options: {
      storySort: {
        method: '',
        order: [
          'Introduction',
          'Changelog',
          'Tokens',
          'Components'
        ],
        locales: '',
      },
    },
  },
};

export const decorators = [
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


