import React from 'react'
import { Blockquote, BlockquoteProps } from '../../components/blockquote/Blockquote'

export default {
  title: 'Basic/Blockquote',
  component: Blockquote,
  tags: ['autodocs'],
  argTypes: {
    title: { name: 'Title', control: 'text' },
    children: { name: 'Quote', control: 'text' },
    footer: { name: 'Footer', control: 'text' },
    variant: {
      name: 'Variant',
      control: { type: 'radio' },
      options: ['flat', 'fancy'],
      defaultValue: 'flat',
    },
    className: { name: 'className', control: 'text' },
  }
}

export const Default = (args: BlockquoteProps) => ([
  <Blockquote {...args}></Blockquote>
])

export const Flat = (args: BlockquoteProps) => ([
  <Blockquote {...args}></Blockquote>
])

export const Fancy = (args: BlockquoteProps) => ([
  <Blockquote {...args}></Blockquote>
])

Default.args = {
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illo eveniet ab culpa. Labore tempora quisquam magni. Consequatur, perferendis, laudantium quod ipsa nam delectus numquam dolore officiis nemo et vitae!',
  className: '',
}

Flat.args = {
  title: 'Quote title',
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illo eveniet ab culpa. Labore tempora quisquam magni. Consequatur, perferendis, laudantium quod ipsa nam delectus numquam dolore officiis nemo et vitae!',
  footer: 'Quote footer',
  variant: 'flat',
  className: '',
}

Fancy.args = {
  title: 'Quote title',
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illo eveniet ab culpa. Labore tempora quisquam magni. Consequatur, perferendis, laudantium quod ipsa nam delectus numquam dolore officiis nemo et vitae!',
  footer: 'Quote footer',
  variant: 'fancy',
  className: '',
}

