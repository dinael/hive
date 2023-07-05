import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Icon, IconProps } from '../Icon'

describe('Icon', () => {
  const defaultProps: IconProps = {
    name: 'close',
    size : 'xl',
    color : 'currentColor',
    title: 'This is a title for a test',
    viewBox: 24,
    className: 'className-test'
  }

  test('Icon renders snapshot', () => {
    const { container } = render(<Icon {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })

  test('Icon renders correctly', () => {
    const { container } = render(<Icon {...defaultProps} />)
    const iconElement = container.querySelector('span')
    expect(iconElement?.className).toContain('icon-component')
    expect(iconElement?.tagName).toBe('SPAN')
    expect(container).toMatchSnapshot()
  })

  test('Icon renders correctly viewBox', () => {
    const { container } = render(<Icon {...defaultProps} />)
    const iconElement = container.querySelector('span > svg')
    expect(iconElement?.getAttribute('viewBox')).toBe('0 0 24 24')
    expect(container).toMatchSnapshot()
  })

  test('Icon renders correctly svg title', () => {
    const { container } = render(<Icon {...defaultProps} />)
    const iconElement = container.querySelector('span > svg > title')
    expect(iconElement?.textContent).toBe(defaultProps.title)
    expect(container).toMatchSnapshot()
  })

  test('Icon renders with a custom class', () => {
    const { container } = render(<Icon {...defaultProps} />)
    const blockquoteElement = container.querySelector('span')
    expect(blockquoteElement?.className).toContain(defaultProps.className)
    expect(container).toMatchSnapshot()
  })
})
