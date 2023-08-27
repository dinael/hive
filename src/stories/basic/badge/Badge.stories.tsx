import { Badge, BadgeProps } from '../../../components/badge/Badge'

export default {
  title: 'Components/Basic/Badge',
  component: Badge,
  parameters: {
    vitest: {
      testFile: "Badge.test.tsx"
    }
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      name: 'Text',
      control: 'text'
    },
    length: {
      name: 'Length',
      control: 'number'
    },
    alt: {
      name: 'Alt',
      control: 'boolean'
    },
    spot: {
      name: 'Spot',
      control: 'boolean'
    },
    className: {
      name: 'className',
      control: 'text'
    },
  }
}

export const Default = (args: BadgeProps) => <Badge {...args} />

export const Spot = (args: BadgeProps) =>  <Badge {...args} />

Default.args = {
  text: '+9999',
  length: 3,
  spot: false,
  alt: false,
  className: ''
}

Spot.args = {
  ...Default.args,
  length: 5,
  spot: true
}

