import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Badge, BadgeProps } from '../Badge'

describe('Badge', () => {
  const defaultProps: BadgeProps = {
    text: '+9999',
    length: 5,
    spot: false,
    className: 'className-test'
  }

  test('Badge renders snapshot', () => {
    const { container } = render(<Badge {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })

  test('Badge renders with correct text', () => {
    const { container } = render(<Badge {...defaultProps} />)
    const badgeElement = container.querySelector('span')
    expect(badgeElement?.textContent).toBe(defaultProps.text)
    expect(badgeElement?.tagName).toBe('SPAN')
    expect(screen.getByText(defaultProps.text))
    expect(container).toMatchSnapshot()
  })

  test('Badge shortens the text correctly', () => {
    const { container } = render(<Badge {...defaultProps} length={3}/>)
    const badgeElement = container.querySelector('span')
    expect(badgeElement?.textContent).toBe('+99')
    expect(screen.getByText('+99'))
    expect(container).toMatchSnapshot()
  })

  test('Badge applies the spot class when prop is set to true', () => {
    const { container } = render(<Badge {...defaultProps} spot />)
    const badgeElement = container.querySelector('span')
    expect(badgeElement?.className).toContain('spot')
    expect(container).toMatchSnapshot()
  })

  test('Badge applies the spot class when prop is set to true check text a11y', () => {
    const { container } = render(<Badge {...defaultProps} spot />)
    const badgeTextElement = container.querySelector('span > strong')
    expect(badgeTextElement?.textContent).toBe(defaultProps.text)
    expect(badgeTextElement?.className).toContain('sr-only')
    expect(container).toMatchSnapshot()
  })

  test('Badge renders link with custom class', () => {
    const { container } = render(<Badge {...defaultProps} spot />)
    const badgeElement = container.querySelector('span')
    expect(badgeElement?.className).toContain(defaultProps.className)
    expect(container).toMatchSnapshot()
  })
})
