import { Anchor, AnchorProps } from '../../../components/anchor/Anchor'
import vitestResults from '../../../tests/unit/coverage.json';

export default {
  title: 'Components/Basic/Anchor',
  component: Anchor,
  parameters: {
    vitest: {
      testFile: "Anchor.test.tsx",
      testResults: vitestResults
    }
  },
  tags: ['autodocs'],
  argTypes: {
    text: { name: 'Text', control: 'text' },
    className: { name: 'className', control: 'text' },
  }
}

export const Default = (args: AnchorProps) => (
  <Anchor {...args}></Anchor>
)

Default.args = {
  text: 'This is a Anchor',
  href: 'javascript:void(0)',
  target: '_self',
  rel: 'noopener noreferrer',
  disabled: false,
  safeArea: true,
  a11yText: 'This text is accessible',
  className: ''
}

