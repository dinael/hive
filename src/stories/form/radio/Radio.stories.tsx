import { InputRadio, InputRadioProps } from '../../../components/radio/Radio'

export default {
  title: 'Components/Form/Radio',
  component: InputRadio,
  parameters: {
    vitest: {
      testFile: "Radio.test.tsx"
    },
    docs: {
      description: {
        component: 'El componente **Radio** es...',
        story: 'Another description on the story, overriding the comments',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {name: 'Label', control: 'text'},
    id: {name: 'Id', control: 'text'},
    value: {name: 'Value', control: 'text'},
    required: {name: 'Required', control: 'boolean'},
    error: {name: 'Error', control: 'boolean'},
    errorText: {name: 'Error message', control: 'text'},
    className: {name: 'className', control: 'text'},
    onChange: { action: 'onChange' }
  }
}

export const Default = (args: InputRadioProps) => ([
  <InputRadio {...args} />
])

Default.args = {
  label: 'Radio button',
  id: 'radio-1',
  value: 'radio-1',
  required: false,
  error: false,
  errorText: 'This is a error',
  className: ''
}
