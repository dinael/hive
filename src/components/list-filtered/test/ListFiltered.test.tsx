import { describe, test, expect } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import ListFiltered, {ListFilteredProps} from '../ListFiltered';

// Mock data for testing
const mockItems = [
  { id: 1, text: 'Item 1' },
  { id: 2, text: 'Item 2' },
  { id: 3, text: 'Item 3' },
];

describe('ListFiltered', () => {
  const defaultProps: ListFilteredProps = {
    bullet: "circle",
    className: "className-test",
    nameList: 'List filtered',
    items: mockItems
  }

  test('renders correctly', () => {
    const { container } = render(<ListFiltered {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })
})

// test('renders correctly with filter', () => {
//   const { container } = render(<ListFiltered items={mockItems} filter="2" />)
//   expect(container).toMatchSnapshot()
// })

// test('renders correctly with filter and no items', () => {
//   const { container } = render(<ListFiltered items={[]} filter="2" />)
//   expect(container).toMatchSnapshot()
// })

// test('renders correctly with filter and no items', () => {
//   const { container } = render(<ListFiltered items={[]} filter="2" />)
//   expect(container).toMatchSnapshot()
// })

// test('ListFiltered renders loading when no items are provided', () => {
//   const { container } = render(<ListFiltered items={[]} />);
//   const loadingElement = container.querySelector('div:contains("Loading...")');
//   assert.ok(loadingElement);
// });

// test('ListFiltered renders filtered and sorted items', () => {
//   const { container, getByText, getByLabelText } = render(<ListFiltered items={mockItems} />);

//   // Test initial rendering
//   assert.ok(getByText('Item 1'));
//   assert.ok(getByText('Item 2'));
//   assert.ok(getByText('Item 3'));

//   // Test searching
//   const searchInput = getByLabelText('Search');
//   searchInput.value = 'Item 2';
//   fireEvent.change(searchInput);
//   assert.notOk(container.querySelector('div:contains("Item 1")'));
//   assert.ok(getByText('Item 2'));
//   assert.notOk(container.querySelector('div:contains("Item 3")'));

//   // Test sorting
//   const sortSelect = getByLabelText('Order by');
//   sortSelect.value = 'alphabetically_desc';
//   fireEvent.change(sortSelect);
//   assert.ok(getByText('Item 3'));
//   assert.ok(getByText('Item 2'));
//   assert.ok(getByText('Item 1'));
// });

