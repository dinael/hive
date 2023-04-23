import React from 'react'
import { Badge, BadgeProps } from '../../components/badge/Badge'

export default {
  title: 'Basic/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    text: { name: 'Text', control: 'text' },
    length: { name: 'Length', control: 'number' },
    spot: { name: 'Spot', control: 'boolean' },
    className: { name: 'className', control: 'text' },
  }
}

export const Default = (args: BadgeProps) => ([
  <Badge {...args} />
])

export const Spot = (args: BadgeProps) => ([
  <Badge {...args} />
])

Default.args = {
  text: '+9999',
  length: 3,
  spot: false,
  className: ''
}

Spot.args = {
  text: '+9999',
  length: 5,
  spot: true,
  className: ''
}

