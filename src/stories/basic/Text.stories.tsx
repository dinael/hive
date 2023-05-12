import React from 'react'
import { Text, TextProps } from '../../components/text/Text'

export default {
  title: 'Basic/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    children: { name: 'Text', control: 'text' },
    block: { name: 'Block', control: 'boolean' },
    ellipsis: {name: 'Ellipsis', control: 'boolean' },
    className: {name: 'className', control: 'text'},
  }
}

export const Default = (args: TextProps) => ([
  <Text {...args} />
])

export const Block = (args: TextProps) => ([
  <Text {...args} />
])

Default.args = {
  children: 'Hello World',
  block: false,
  ellipsis: false,
  a11yLength: false,
  className: '',
}

Block.args = {
  ...Default.args,
  children: 'Hello World, this a text block is a tag p',
  block: true,
}
