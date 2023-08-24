import { Button, ButtonProps } from '../../../components/button/Button'


export default {
  title: 'Components/Basic/Button',
  component: Button,
  parameters: {
    vitest: {
      testFile: "Button.test.tsx"
    },
    docs: {
      description: {
        component: `${'<dl><dt>Version</dt> <dd>0.00.1</dd></dl>'} The **Button** is...`,
        story: 'Another description on the story, overriding the comments',
      },
    },
  },
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
    iconOnly: {name: 'Icon only', control: 'boolean'},
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
    className: { name: 'className', control: 'text' }
  }
}

// TODO: loading: { name: 'Loading', control: 'boolean' },
// loading: { name: 'loading', control: 'boolean' }

export const Default = (args: ButtonProps) => <Button {...args} />

export const AsLink = (args: ButtonProps) => <Button {...args} />

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
  id: ''
}

AsLink.args = {
  ...Default.args,
  type: 'link',
}

Default.parameters = {
  design: [
    {
      name: 'Spec',
      type: 'figspec',
      url: 'https://www.figma.com/file/Cx0sZBqrc7kGW72bcmy90S/tokens?type=design&node-id=3-27&t=ThF1FKZYYApN4drF-4',
      accessToken: import.meta.env.VITE_STORYBOOK_FIGMA_ACCESS_TOKEN
    },
    {
      name: 'Prototype',
      type: 'figma',
      url: 'https://www.figma.com/proto/Cx0sZBqrc7kGW72bcmy90S/tokens?page-id=19%3A2&type=design&node-id=19-5&scaling=min-zoom',
    },
    {
      type: 'link',
      name: 'Doc URL',
      label: 'Figma file source',
      target: '_blank',
      url: 'https://www.figma.com/proto/Cx0sZBqrc7kGW72bcmy90S/tokens?page-id=19%3A2&type=design&node-id=19-5&scaling=min-zoom',
    }
  ]
}

AsLink.parameters = {
  ...Default.parameters
}
