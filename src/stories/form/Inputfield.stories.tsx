import React from 'react'
import { Inputfield, InputfieldProps } from '../../components/inputfield/Inputfield'

export default {
  title: 'Form/Input field',
  component: Inputfield,
  tags: ['autodocs'],
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
