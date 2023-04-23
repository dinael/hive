import React from 'react'
import { Button, ButtonProps } from '../../components/button/Button'

export default {
  title: 'Basic/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      name: 'Type',
      control: {
        type: 'select',
        options: ['button','submit','reset','link']
      }
    },
    variant: {
      name: 'Variant',
      control: {
        type: 'select',
        options: ['primary','secondary','alt','ghost','success','danger']
      }
    },
    kind: {
      name: 'Kind',
      control: {
        type: 'radio',
        options: ['default','rounded','fullwidth']
      }
    },
    size: {
      name: 'Size',
      control: {
        type: 'select',
        options: ['xs','s','m','l']
      }
    },
    text: {name: 'Text', control: 'text'},
    description: { name: 'Description text for a11y', control: 'text' },
    disabled: { name: 'Disabled', control: 'boolean' },
    onClick: { name: 'Click', action: 'onClick' },
    href: { name: 'Href', control: 'text' },
    target: { name: 'Target', control: 'text' },
    icon: { name: 'Icon', control: 'text' },
    iconPosition: {
      name: 'Icon position',
      control: {
        type: 'radio',
        options: ['left', 'rigth']
      }
    },
    iconSize: { name: 'Icon size', control: 'text' },
    url: { name: 'url', control: 'text' },
    id: { name: 'id', control: 'text' },
    className: { name: 'className', control: 'text' },
    // TODO: loading: { name: 'Loading', control: 'boolean' },
    // loading: { name: 'loading', control: 'boolean' }
  }
}

export const Default = (args: ButtonProps) => ([
  <Button {...args} />
])

export const States = (args: ButtonProps) => ([
    <Button {...args} id="one" text="Hover"/>,
    <Button {...args} id="two" text="Hover focus"/>,
    <Button {...args} id="three" text="Hover focus active"/>
])

Default.args = {
  type: 'submit',
  variant: 'primary',
  kind: 'default',
  size: 'm',
  text: 'Button',
  url: '#',
  description: 'This text is for accessibility',
  ellipsis: false,
  icon: 'close',
  iconOnly: false,
  iconPosition: 'left',
  disabled: false,
  className: '',
}

Default.parameters = {
  pseudo: { hover: false },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
  }
}

States.parameters = {
  pseudo: {
    hover: ["#one", "#two", "#three"],
    focus: ["#two", "#three"],
    active: "#three",
  },
}
