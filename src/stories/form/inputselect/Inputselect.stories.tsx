import { Inputselect, InputselectProps} from '../../../components/inputselect/Inputselect'

export default {
  title: 'Components/Form/Inputselect',
  component: Inputselect,
  tags: ['autodocs'],
  parameters: {
    vitest: {
      testFile: "Inputselect.test.tsx"
    },
    docs: {
      description: {
        component: 'El componente **Inputselect** es...',
        story: 'Another description on the story, overriding the comments',
      },
    },
  },
  argTypes: {
    label: {name: 'Label', control: 'text'},
    labelHidden: { name: 'Label hidden', control: 'boolean' },
    options: { name: 'Options', control: 'object'},
    required: { name: 'Required', control: 'boolean' },
    id: {name: 'Id', control: 'text'},
    error: { name: 'Error', control: 'boolean' },
    errorText: {name: 'Error text', control: 'text'},
    disabled: { name: 'Disabled', control: 'boolean' },
  }
}

const options = [
  { option: 'Opción 1', value: '1' },
  { option: 'Opción 2', value: '2' },
  { option: 'Opción 3', value: '3' },
]

const groupOptions = {
  'Grupo 1': [
    { option: 'Opción 4', value: '4' },
    { option: 'Opción 5', value: '5' },
  ],
  'Grupo 2': [
    { option: 'Opción 6', value: '6' },
    { option: 'Opción 7', value: '7' },
  ],
}

export const Default = (args: InputselectProps) => ([
  <Inputselect {...args} />
])

export const Group = (args: InputselectProps) => ([
  <Inputselect {...args} />
])

Default.args = {
  label: 'Select singles options',
  labelHidden: false,
  options: options,
  required: false,
  id: '',
  error: false,
  errorText: 'This is a error',
  disabled: false,
}

Group.args = {
  label: 'Select whit options group',
  labelHidden: false,
  options: groupOptions,
  required: false,
  id: '',
  error: false,
  errorText: 'This is a error',
  disabled: false,
}
