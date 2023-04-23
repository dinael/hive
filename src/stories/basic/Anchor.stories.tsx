import React from 'react'
import { Anchor, AnchorProps } from '../../components/anchor/Anchor'

export default {
  title: 'Basic/Anchor',
  component: Anchor,
  tags: ['autodocs'],
  argTypes: {
    text: { name: 'Text', control: 'text' },
    className: { name: 'className', control: 'text' },
  }
}

export const Default = (args: AnchorProps) => (
  <Anchor {...args}></Anchor>
)

Default.args = {
  text: 'This is a Anchor',
  href: 'javascript:void(0)',
  target: '_self',
  rel: 'noopener noreferrer',
  disabled: false,
  safeArea: true,
  a11yText: 'This text is accessible',
  className: ''
}

