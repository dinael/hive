import { Blockquote, BlockquoteProps } from '../../../components/blockquote/Blockquote'
import vitestResults from '../../../tests/unit/coverage.json';

export default {
  title: 'Components/Basic/Blockquote',
  component: Blockquote,
  parameters: {
    vitest: {
      testFile: "Blockquote.test.tsx",
      testResults: vitestResults
    }
  },
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
  ...Default.args,
  title: 'Quote title',
  footer: 'Quote footer',
  variant: 'flat',
}

Fancy.args = {
  ...Flat.args,
  variant: 'fancy',
}

