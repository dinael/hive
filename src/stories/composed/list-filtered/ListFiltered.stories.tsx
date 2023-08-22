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
    className: {
      name: 'className',
      control: 'text'
    },
  }
}

const itemsDemo = [
  { id: 'item-3', title: 'Item C' },
  { id: 'item-1', title: 'Item A' },
  { id: 'item-2', title: 'Item B' },
]

export const Default = (args: ListFilteredProps) => (
  <ListFiltered {...args}>
  </ListFiltered>
)

Default.args = {
  items: itemsDemo,
  nameList: 'List filtered xx',
  direction: 'vertical',
  className: '',
}
