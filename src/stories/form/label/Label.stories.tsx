import { Label, LabelProps } from '../../../components/label/Label'
import vitestResults from '../../../tests/unit/coverage.json';

export default {
  title: 'Components/Form/Label',
  component: Label,
  parameters: {
    vitest: {
      testFile: "Label.test.tsx",
      testResults: vitestResults
    },
    docs: {
      description: {
        component: 'El componente **Label** es...',
        story: 'Another description on the story, overriding the comments',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    text: { name: 'Label text', control: 'text' },
    required: { name: 'Required', control: 'boolean' },
    isRequiredText: { name: 'Text required a11y', control: 'text' },
    className: { name: 'className', control: 'text' }
  },
}

export const Default = (args: LabelProps) => ([
  <Label {...args} />
])

Default.args = {
  text: 'Label text',
  required: false,
  isRequiredText: 'This field has required',
  className: ''
}
