import { Text, TextProps } from '@/components/text/Text'

export default {
  title: 'Components/Basic/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    vitest: {
      testFile: "Text.test.tsx"
    }
  },
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

export const withChildren = (args: TextProps) => ([
  <Text {...args}>
    This text is a children element
  </Text>
])

export const Block = (args: TextProps) => ([
  <Text {...args} />
])

Default.args = {
  text: 'Hello World',
  block: false,
  ellipsis: false,
  a11yLength: false,
  className: '',
}

withChildren.args = {
  ellipsis: false,
  a11yLength: false,
  className: '',
  block: true,
}

Block.args = {
  ...Default.args,
  text: 'Hello World, this a text block is a tag p',
  block: true,
}

