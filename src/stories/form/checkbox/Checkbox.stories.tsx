import {Checkbox, CheckboxProps} from "../../../components/checkbox/Checkbox"
import vitestResults from '../../../tests/unit/coverage.json';

export default {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
  parameters: {
    vitest: {
      testFile: "Checkbox.test.tsx",
      testResults: vitestResults
    },
    docs: {
      description: {
        component: 'El componente **Checkbox** es una opción de entrada. Al marca o desmarca el cuadro de verificación, se actualiza el estado del componente. El único parámetro que acepta es **label**, que se utiliza para mostrar el texto asociado al cuadro de verificación.',
        story: 'Another description on the story, overriding the comments',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: { name: 'Label', control: 'text' },
    id: { name: 'Id', control: 'text' },
    disabled: { name: 'Disabled', control: 'boolean' },
    className: { name: 'className', control: 'text' },
    error: { name: 'Error', control: 'boolean' },
    errorText: { name: 'Error text', control: 'text' },
    onChange: { name: 'onChange', control: 'action' },
    onChecked: { name: 'onChecked', control: 'action' },
    onError: { name: 'onError', control: 'action' },
  }
}

export const Default = (args: CheckboxProps) => (
  [<Checkbox {...args} />]
)

export const Switch = (args: CheckboxProps) => (
  [<Checkbox {...args} />]
)

export const Chip = (args: CheckboxProps) => (
  [<Checkbox {...args} />]
)

Default.args = {
  label: 'Label',
  id: '',
  checked: false,
  disabled: false,
  className: '',
  error: false,
  errorText: 'This is a error'
}

Switch.args = {
  ...Default.args,
  label: 'Switch'
}

Chip.args = {
  ...Default.args,
}



