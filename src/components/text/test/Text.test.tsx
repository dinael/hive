import React from 'react'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Text, TextProps } from '../Text'

describe('Text', () => {
  const defaultProps: TextProps = {
    children: 'Example text',
    block: false,
    className: 'className-test',
  }

  test('renders snapshot', () => {
    const { container } = render(<Text {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })

  test('renders with the correct tag name', () => {
    const { container } = render(<Text {...defaultProps} />)
    const textElement = container.querySelector('span')
    expect(textElement?.tagName).toBe('SPAN')
    expect(container).toMatchSnapshot()
  });

  test('renders with the correct text', () => {
    const { container } = render(<Text {...defaultProps} />)
    const textElement = container.querySelector('span')
    expect(textElement?.textContent).toBe('Example text')
    expect(screen.getByText('Example text'))
    expect(container).toMatchSnapshot()
  });

  test('renders with the correct extra className', () => {
    const { container } = render(<Text {...defaultProps} />)
    const textElement = container.querySelector('span')
    expect(textElement?.className).toContain('className-test')
    expect(container).toMatchSnapshot()
  });

  test('renders as a block element', () => {
    const { container } = render(<Text {...defaultProps} block={true} />)
    const textElement = container.querySelector('p')
    expect(textElement).not.toBeNull()
    expect(textElement?.textContent).toBe('Example text')
    expect(screen.getByText('Example text'))
    expect(container).toMatchSnapshot()
  });

})
