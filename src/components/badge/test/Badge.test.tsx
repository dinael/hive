import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import defaultStory, * as stories from "../../../stories/basic/Badge.stories"
import { Badge, BadgeProps } from '../Badge'

//Snapshot
// describe( `[${defaultStory.title} ]`, () => {
//   Object.entries(composeStories).forEach(([story, Component]) => (
//     test(`should render ${story}`, () => {
//       const { container } = render(<Component />)
//       expect(container).toMatchSnapshot()
//     })
//   ))
// })

describe('Badge', () => {
  const defaultProps: BadgeProps = {
    text: '+9999',
    length: 5,
    spot: false,
    className: 'className-test'
  }

  test('renders snapshot', () => {
    const { container } = render(<Badge {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })

  test('renders with correct text', () => {
    const { container } = render(<Badge {...defaultProps} />)
    const badgeElement = container.querySelector('span')
    expect(badgeElement?.textContent).toBe(defaultProps.text)
    expect(badgeElement?.tagName).toBe('SPAN')
    expect(screen.getByText(defaultProps.text))
    expect(container).toMatchSnapshot()
  })

  test('shortens the text correctly', () => {
    const { container } = render(<Badge {...defaultProps} length={3}/>)
    const badgeElement = container.querySelector('span')
    expect(badgeElement?.textContent).toBe('+99')
    expect(screen.getByText('+99'))
    expect(container).toMatchSnapshot()
  })

  test('applies the spot class when prop is set to true', () => {
    const { container } = render(<Badge {...defaultProps} spot />)
    const badgeElement = container.querySelector('span')
    expect(badgeElement?.className).toContain('spot')
    expect(container).toMatchSnapshot()
  })

  test('applies the spot class when prop is set to true check text a11y', () => {
    const { container } = render(<Badge {...defaultProps} spot />)
    const badgeTextElement = container.querySelector('span > strong')
    expect(badgeTextElement?.textContent).toBe(defaultProps.text)
    expect(badgeTextElement?.className).toContain('sr-only')
    expect(container).toMatchSnapshot()
  })

  test('renders link with custom class', () => {
    const { container } = render(<Badge {...defaultProps} spot />)
    const badgeElement = container.querySelector('span')
    expect(badgeElement?.className).toContain(defaultProps.className)
    expect(container).toMatchSnapshot()
  })
})
