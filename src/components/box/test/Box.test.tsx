import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Box, BoxProps } from '../Box'

describe('Box', () => {
  const defaultProps: BoxProps = {
    tag: 'div',
    space: 'none',
    elevation: 'none',
    border: 'primary',
    radius: 's',
    paper: false,
    className: 'custom-box',
    children: 'Test content',
  }

  test('Box renders snapshot', () => {
    const { container } = render(<Box {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })

  test('Box renders with the correct tag name', () => {
    const { container } = render(<Box {...defaultProps} />)
    const boxElement = container.querySelector('div')
    expect(boxElement?.tagName).toBe('DIV')
    expect(container).toMatchSnapshot()
  })

  test('Box renders with the correct class name', () => {
    const { container } = render(<Box {...defaultProps} />)
    const boxElement = container.querySelector('div')
    expect(boxElement?.className).toContain('custom-box')
  })

  test('Box renders with the correct border class', () => {
    const { container } = render(<Box {...defaultProps} />)
    const boxElement = container.querySelector('div')
    expect(boxElement?.className).toContain('border:primary')
  })

  test('Box renders with the correct radius class', () => {
    const { container } = render(<Box {...defaultProps} />)
    const boxElement = container.querySelector('div')
    expect(boxElement?.className).toContain('radius:s')
  })
})
