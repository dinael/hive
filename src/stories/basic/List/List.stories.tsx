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
  { id: 'item-1', text: 'Item 1' },
  { id: 'item-2', text: 'Item 2' },
  { id: 'item-3', text: 'Item 3' },
]

// ## Ordered

export const Ordered = (args: ListProps) => (
  [<List {...args} />]
)

Ordered.args = {
  items: itemsDemo,
  nameList: 'Ordered list',
  ordered: true,
  className:'',
  bullet: 'decimal',
}

// ## Unordered
export const Unordered = (args: ListProps) => (
  [<List {...args} />]
)

Unordered.args = {
  ...Ordered.args,
  nameList: 'Unordered list',
  ordered: false,
  bullet: 'circle',
}

// ## None
export const None = (args: ListProps) => (
  [<List {...args} />]
)

None.args = {
  ...Ordered.args,
  nameList: 'None list',
  ordered: false,
  bullet: 'none',
}
