import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blockquote, BlockquoteProps } from '../Blockquote'

describe('Blockquote', () => {
  const defaultProps: BlockquoteProps = {
    title: 'Blockquote title',
    footer: 'Blockquote footer',
    variant: 'flat',
    className: 'className-test',
    children: 'Blockquote body'
  }

  test('Blockquote renders snapshot', () => {
    const { container } = render(<Blockquote {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })

  test('Blockquote renders correctly', () => {
    const { container } = render(<Blockquote {...defaultProps} />)
    const blockquoteElement = container.querySelector('blockquote')
    expect(blockquoteElement?.tagName).toBe('BLOCKQUOTE')
    expect(container).toMatchSnapshot()
  })

  test('Blockquote renders title correctly', () => {
    const { container } = render(<Blockquote {...defaultProps} />)
    const blockquoteElement = container.querySelector('blockquote > header > .blockquote-title')
    expect(blockquoteElement?.textContent).toBe(defaultProps.title)
    expect(screen.getByText(`${defaultProps.title}`))
    expect(container).toMatchSnapshot()
  })

  test('Blockquote renders quote correctly', () => {
    const { container } = render(<Blockquote {...defaultProps} />)
    const blockquoteElement = container.querySelector('blockquote > .blockquote-content')
    expect(blockquoteElement?.textContent).toBe(defaultProps.children)
    expect(screen.getByText(`${defaultProps.children}`))
    expect(container).toMatchSnapshot()
  })

  test('Blockquote renders footer correctly', () => {
    const { container } = render(<Blockquote {...defaultProps} />)
    const blockquoteElement = container.querySelector('blockquote > footer')
    expect(blockquoteElement?.textContent).toBe(defaultProps.footer)
    expect(screen.getByText(`${defaultProps.footer}`))
    expect(container).toMatchSnapshot()
  })

  test('Blockquote renders with a custom class', () => {
    const { container } = render(<Blockquote {...defaultProps} />)
    const blockquoteElement = container.querySelector('blockquote')
    expect(blockquoteElement?.className).toContain(defaultProps.className)
    expect(container).toMatchSnapshot()
  })
})
