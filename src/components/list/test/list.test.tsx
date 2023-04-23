import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/react'
import List, { ListProps } from '../List'

const listObj = [
  { id: '1', text: 'Item 1' },
  { id: '2', text: 'Item 2' },
  { id: '3', text: 'Item 3' }
]

describe('List', () => {
  const defaultProps: ListProps = {
    bullet: "circle",
    className: "className-test",
    ordered: false,
    items: listObj
  }

  test('renders an unordered list by default', () => {
    const { container } = render(<List {...defaultProps} />)
    const listElement = container.querySelector('ul')
    expect(listElement).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  test('renders an ordered list when `ordered` prop is true', () => {
    const { container } = render(<List {...defaultProps} ordered />)
    const listElement = container.querySelector('ol')
    expect(listElement).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  test('renders the list items', () => {
    const { container } = render(<List {...defaultProps} />)
    const listItems = container.querySelectorAll('li')
    expect(listItems).toHaveLength(defaultProps.items.length)
    expect(listItems[0].textContent).toBe('Item 1')
    expect(listItems[1].textContent).toBe('Item 2')
    expect(listItems[2].textContent).toBe('Item 3')
  })

  test('renders with a custom bullet style', () => {
    const { container } = render(<List {...defaultProps}/>)
    const listElement = container.querySelector('ul')
    expect(listElement?.className).toContain('circle')
  })
  test('renders with a custom class', () => {
    const { container } = render(<List {...defaultProps}/>)
    const listElement = container.querySelector('ul')
    expect(listElement?.className).toContain('className-test')
  })
})
