import React from 'react'
import { Fieldset, FieldsetProps } from '../../components/fieldset/Fieldset'

export default {
  title: 'Form/Fieldset',
  component: Fieldset,
  tags: ['autodocs'],
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
