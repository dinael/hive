import { Inputfield, InputfieldProps } from '../../../components/inputfield/Inputfield'
import vitestResults from '../../../tests/unit/coverage.json';

export default {
  title: 'Components/Form/InputField',
  component: Inputfield,
  tags: ['autodocs'],
  parameters: {
    vitest: {
      testFile: "Inputfield.test.tsx",
      testResults: vitestResults
    },
    docs: {
      description: {
        component: 'El componente **Inputfield** es...',
        story: 'Another description on the story, overriding the comments',
      },
    },
  },
  argTypes: {
    label: { name: 'Label', control: 'text' },
    labelHidden: { name: 'Label hidden', control: 'boolean' },
    placeholder: { name: 'Placeholder', control: 'text'},
    id: { name: 'Id',  control: 'text'},
    type: {
      name: 'Type',
      control: {
        type:'select',
        options: [
          'text',
          'email',
          'password',
          'search',
          'number',
          'tel',
          'url',
          'date',
          'datetime-local',
          'time',
          'datetime',
          'mouth',
          'week',
          'year'
        ],
      },
    },
    error: false,
    errorText: 'This is a error',
    disabled: false,
    required: false,
  }
}

export const Default = (args: InputfieldProps) => ([
  <Inputfield {...args} />
])

Default.args = {
  label: 'This is a label',
  labelHidden: false,
  id: '',
  type: 'text',
  placeholder: 'This is a placeholder',
  error: false,
  errorText: 'This is a error',
  disabled: false,
  required: false,
}
