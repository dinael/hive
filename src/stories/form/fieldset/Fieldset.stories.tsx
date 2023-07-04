import { Fieldset, FieldsetProps } from '../../../components/fieldset/Fieldset'
import vitestResults from '../../../tests/unit/coverage.json';

export default {
  title: 'Components/Form/Fieldset',
  component: Fieldset,
  tags: ['autodocs'],
  parameters: {
    vitest: {
      testFile: "Fieldset.test.tsx",
      testResults: vitestResults
    },
    docs: {
      description: {
        component: 'El componente **Fieldset** es...',
        story: 'Another description on the story, overriding the comments',
      },
    },
  },
  argType: {
    legend: { name: 'Legend', control: 'text' },
    flat: { name: 'Flat', control: 'boolean' },
    required: { name: 'Required', control: 'boolean' },
    isRequiredText: { name: 'Required text', control: 'text' },
    legendHidden: { name: 'Legend hidden', control: 'boolean' },
  }
}

export const Default = (args: FieldsetProps) => ([
  <Fieldset {...args} />
])

Default.args = {
  legend: 'This is a legend from fieldset',
  children: 'Form elements',
  flat: false,
  required: false,
  isRequiredText: 'This fields are Required',
  legendHidden: false,
}
