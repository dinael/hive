import { LabelText, LabelTextProps } from '../../components/labeltext/LabelText'

export default {
  title: 'Form/Label text',
  component: LabelText,
  tags: ['autodocs'],
  argTypes: {
    text: { name: 'Label text', control: 'text' },
    required: { name: 'Required', control: 'boolean' },
    isRequiredText: { name: 'Text required a11y', control: 'text' },
    className: { name: 'className', control: 'text' }
  },
}

export const Default = (args: LabelTextProps) => ([
  <LabelText {...args} />
])

Default.args = {
  text: 'Label text',
  required: false,
  isRequiredText: 'This field has required',
  className: ''
}
