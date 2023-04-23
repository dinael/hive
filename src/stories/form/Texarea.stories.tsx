import React from 'react'
import { Textarea, TextareaProps } from "../../components/textarea/Textarea"

export default {
  title: 'Form/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argType: {
    label: { name: 'Label', control: 'text' },
    id: { name: 'Id', control: 'text' },
    rows: { name: 'Rows', control: 'number' },
    cols: { name: 'Columns', control: 'number' },
    placeholder: { name: 'Placeholder', control: 'text' },
    value: { name: 'Value', control: 'text' },
    disabled: { name: 'Disabled', control: 'boolean' },
    error: { name: 'Error', control: 'boolean' },
    errorText: { name: 'Error text', control: 'boolean' },
    required: { name: 'Requiered', control: 'boolean' },
    isRequiredText: { name: 'Requiered text', control: 'text' },
    maxlength: { name: 'Max length', control: 'number' },
    className: { name: 'className', control: 'text' },
  }
}

export const Default = (args: TextareaProps) => ([
  <Textarea {...args} />
])

Default.args = {
  label: 'Textarea',
  placeholder: 'Textarea placeholder',
  value: 'Textarea value',
  id: '',
  rows: 3,
  cols: 100,
  error: false,
  errorText: '',
  required: true,
  isRequiredText: 'This field is requiered',
  maxlength: 100,
  disabled: false,
  className: '',
  onChange: () => {},
}
