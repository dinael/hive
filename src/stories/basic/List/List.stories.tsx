import { List, ListProps } from '../../../components/list/List'

export default {
  title: 'Components/Basic/List',
  component: List,
  parameters: {
    vitest: {
      testFile: "List.test.tsx"
    }
  },
  tags: ['autodocs'],
  argType: {
    nameList: {name: 'List name', control: 'text'},
    items: {name: 'Items', control: 'object' },
    ordered: {name:'Ordered', control: 'boolean'},
    unstyled: {name:'Unstyled', control: 'boolean'},
    disabled: {name:'Disabled', control: 'boolean'},
    className: { name: 'className', control: 'boolean' },
    bullet: {
      name: 'Bullet',
      control: {
        type: 'select',
        options: [
          'none',
          'auto',
          'disc',
          'circle',
          'square',
          'decimal',
          'decimal-leading-zero',
          'lower-roman',
          'upper-roman',
          'lower-greek',
          'lower-latin',
          'upper-latin',
          'armenian',
          'georgian',
          'lower-alpha',
          'upper-alpha'
        ]
      }
    }
  }
}

const itemsDemo = [
  { id: 'item-1', text: 'Item A' },
  { id: 'item-2', text: 'Item B' },
  { id: 'item-3', text: 'Item C' },
  { id: 'item-4', text: 'Item D' },
  { id: 'item-5', text: 'Item E' },
  { id: 'item-6', text: 'Item F' },
  { id: 'item-7', text: 'Item G' },
  { id: 'item-8', text: 'Item H' },
  { id: 'item-9', text: 'Item I' },
  { id: 'item-10', text: 'Item J' }
]

//## Default
export const Default = (args: ListProps) => (
  [<List {...args} />]
)

Default.args = {
  items: itemsDemo,
  nameList: 'Ordered list',
}

// ## Ordered
export const Ordered = (args: ListProps) => (
  [<List {...args} />]
)

Ordered.args = {
  ...Default.args,
  nameList: 'Ordered list',
  ordered: true,
  bullet: 'decimal',
}

// ## Unordered
export const Unordered = (args: ListProps) => (
  [<List {...args} />]
)

Unordered.args = {
  ...Default.args,
  nameList: 'Unordered list',
  ordered: false,
  bullet: 'circle',
}

// ## Unstyled
export const Unstyled = (args: ListProps) => (
  [<List {...args} />]
)

Unstyled.args = {
  ...Ordered.args,
  nameList: 'None list',
  ordered: false,
  bullet: 'none',
  unstyled: true,
}
