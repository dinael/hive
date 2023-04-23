import React from 'react'
import { ValidationMessage, ValidationMessageProps } from '../../components/validationmessage/ValidationMessage'

export default {
  title: 'Form/Validation message',
  component: ValidationMessage,
  tags: ['autodocs'],
  argTypes: {
    message: {name: 'Message', control: 'text'},
    kind: {
      name: 'Kind',
      control: {
        type:'select',
        options: ['info','warning','error','success','help','safe']
      }
    }
  }
}

export const Default = (args: ValidationMessageProps) => ([
  <ValidationMessage {...args} />
])

Default.args = {
  message: 'This is a validation message',
  kind: 'info',
  icon: 'info-circle'
}
