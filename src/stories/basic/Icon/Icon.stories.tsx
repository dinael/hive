import { Icon, IconProps } from '@/components/icon/Icon'

export default {
  title: 'Components/Basic/Icon',
  component: Icon,
  parameters: {
    vitest: {
      testFile: "Icon.test.tsx"
    }
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      name: 'Name',
      control: 'text'
    },
    size: {
      name: 'Size',
      control: 'text'
    },
    title: {
      name: 'Title',
      control: 'text'
    },
    viewBox: {
      name: 'ViewBox',
      control: 'number'
    },
  }
}

export const Default = (args: IconProps) => <Icon {...args} />

Default.args = {
  name: 'close',
  size : 'm',
  title: '',
  viewBox: 24,
}

Default.parameters = {
  design: [
    {
      type: 'link',
      name: 'Icon source',
      label: 'Icon source: mingcute.com',
      target: '_blank',
      url: 'https://www.mingcute.com/',
    },
    {
      type: 'iframe',
      name: 'Icon use example',
      url: 'https://codepen.io/dinael/full/vYmLVpa',
    }
  ]
}

