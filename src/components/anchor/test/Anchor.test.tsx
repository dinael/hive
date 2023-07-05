import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Anchor, AnchorProps } from '../Anchor'
describe('Anchor', () => {
  const defaultProps: AnchorProps = {
    text: 'Link Text',
    href: 'https://www.example.com',
    target: '_self',
    rel: 'noreferrer',
    disabled: true,
    a11yText: 'Link Description',
    safeArea: true,
    className: 'className-test',
    children: null,
  }

  test('Anchor renders snapshot', () => {
    const { container } = render(<Anchor {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })

  test('Anchor renders link with correct text and href', () => {
    const { container } = render(<Anchor {...defaultProps} />)
    const linkElement = container.querySelector('a')
    expect(linkElement?.getAttribute('href')).toBe('https://www.example.com')
    expect(linkElement?.textContent).toBe(defaultProps.text)
    expect(screen.getByText(defaultProps.text))
    expect(container).toMatchSnapshot()
  })

  test('Anchor renders link with target attribute', () => {
    const { container } = render(<Anchor {...defaultProps} />)
    const linkElement = container.querySelector('a')
    expect(linkElement?.getAttribute('target')).toBe(defaultProps.target)
    expect(container).toMatchSnapshot()
  })

  test('Anchor renders link with rel attribute', () => {
    const { container } = render(<Anchor {...defaultProps} />)
    const linkElement = container.querySelector('a')
    expect(linkElement?.getAttribute('rel')).toBe(defaultProps.rel)
    expect(container).toMatchSnapshot()
  })

  test('Anchor renders link with safe area class', () => {
    const { container } = render(<Anchor {...defaultProps} />)
    const linkElement = container.querySelector('a')
    expect(linkElement?.className).toContain('safe-area')
    expect(container).toMatchSnapshot()
  })

  test('Anchor renders link with disabled class', () => {
    const { container } = render(<Anchor {...defaultProps} />)
    const linkElement = container.querySelector('a')
    expect(linkElement?.className).toContain('disabled')
    expect(container).toMatchSnapshot()
  })

  test('Anchor renders link with custom class', () => {
    const { container } = render(<Anchor {...defaultProps} />)
    const linkElement = container.querySelector('a')
    expect(linkElement?.className).toContain(defaultProps.className)
    expect(container).toMatchSnapshot()
  })

  test('Anchor renders link with children', () => {
    const { container } = render(<Anchor {...defaultProps}>Child Element</Anchor>)
    const linkElement = container.querySelector('a')
    expect(linkElement?.textContent).toBe('Link TextChild Element')
    expect(screen.getByText('Link TextChild Element'))
    expect(container).toMatchSnapshot()
  })

  test('Anchor renders link with a11yText', () => {
    const { container } = render(<Anchor {...defaultProps}  />)
    const linkElement = container.querySelector('a')
    expect(linkElement?.getAttribute('aria-label')).toBe(defaultProps.a11yText)
    expect(container).toMatchSnapshot()
  })
})
