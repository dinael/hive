import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ListFiltered from '../ListFiltered';

describe('ListFiltered component', () => {
  const mockItems = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ];

  const renderComponent = (props = {}) => {
    render(<ListFiltered items={mockItems} {...props} />);
  };

  it('renders list items', () => {
    renderComponent();

    const item1 = screen.getByText('Item 1');
    const item2 = screen.getByText('Item 2');
    const item3 = screen.getByText('Item 3');

    expect(item1).toBeDefined();
    expect(item2).toBeDefined();
    expect(item3).toBeDefined();
  });

  // it('displays "Search not found" message when no items match the search', () => {
  //   renderComponent();

  //   const searchInput = screen.getByLabelText('Search') as HTMLInputElement;
  //   searchInput.value = 'Non-existing item';
  //   searchInput.dispatchEvent(new Event('input'));

  //   const notFoundMessage = screen.getByText('Search not found');
  //   expect(notFoundMessage).toBeDefined();
  // });

});
