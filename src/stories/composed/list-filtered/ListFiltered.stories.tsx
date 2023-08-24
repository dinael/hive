import { ListFiltered, ListFilteredProps } from '../../../components/list-filtered/ListFiltered'
export default {
  title: 'Components/Composed/List Filtered',
  component: ListFiltered,
  parameters: {
    vitest: {
      testFile: "ListComposed.test.tsx"
    }
  },
  tags: ['autodocs'],
  argType: {
    nameList: { name: 'List name', control: 'text' },
    direction: { name: 'List name', control: 'select' },
    items: { name: 'Items', control: 'object' },
    OnlySearch: { name: 'Only search', control: 'boolean' },
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
    },
    className: {
      name: 'className',
      control: 'text'
    },
  }
}

const itemsDemo = [
  { id: 'item-3', text: 'Item C' },
  { id: 'item-1', text: 'Item A' },
  { id: 'item-2', text: 'Item B' },
  { id: 'item-4', text: 'Item D' },
  { id: 'item-5', text: 'Item E' },
  { id: 'item-6', text: 'Item F' },
  { id: 'item-7', text: 'Item G' },
  { id: 'item-8', text: 'Item H' },
  { id: 'item-9', text: 'Item I' },
  { id: 'item-10', text: 'Item J' }
]

export const Default = (args: ListFilteredProps) => (
  <ListFiltered {...args}>
  </ListFiltered>
)

export const WithoutTitle = (args: ListFilteredProps) => (
  <ListFiltered {...args}>
  </ListFiltered>
)

export const OnlySearch = (args: ListFilteredProps) => (
  <ListFiltered {...args}>
  </ListFiltered>
)

export const OnlySort = (args: ListFilteredProps) => (
  <ListFiltered {...args}>
  </ListFiltered>
)

Default.args = {
  items: itemsDemo,
  nameList: 'List filtered',
}

WithoutTitle.args = {
  items: itemsDemo,
}

OnlySearch.args = {
  items: itemsDemo,
  OnlySearch: true
}

OnlySort.args = {
  items: itemsDemo,
  OnlySort: true
}
