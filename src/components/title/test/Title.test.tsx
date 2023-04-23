import React from 'react'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Title, TitleProps } from '../Title'

describe('Title', () => {
  const defaultProps: TitleProps = {
    level: 3,
    size: 'xxl',
    text: 'Example title',
    ellipsis: true,
    a11yLength: true,
    className: 'title-component',
    children: null,
  }

  const notAssignableLevel = 7;

  test('renders snapshot', () => {
    const { container } = render(<Title {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })

  test('renders with the correct tag name', () => {
    const { container } = render(<Title {...defaultProps} />)
    const titleElement = container.querySelector('h3')
    expect(titleElement?.tagName).toBe('H3')
    expect(container).toMatchSnapshot()
  });

  test('renders with the correct tag name when level is 0', () => {
    const { container } = render(<Title {...defaultProps} level={0} />)
    const titleElement = container.querySelector('p')
    expect(titleElement?.tagName).toBe('P')
    expect(container).toMatchSnapshot()
  });

  test('renders with the correct tag name when level is out range', () => {
    const { container } = render(<Title {...defaultProps} level={notAssignableLevel} />)
    const titleElement = container.querySelector('h2')
    expect(titleElement?.tagName).toBe('H2')
    expect(container).toMatchSnapshot()
  });

  test('renders with the correct text', () => {
    const { container } = render(<Title {...defaultProps} />)
    const titleElement = container.querySelector('h3')
    expect(titleElement?.textContent).toBe('Example title')
    expect(screen.getByText('Example title'))
  });

  test('renders with the correct extra class name', () => {
    const { container } = render(<Title {...defaultProps} />)
    const titleElement = container.querySelector('h3')
    expect(titleElement?.className).toContain('title-component')
  });

  test('renders with the correct size', () => {
    const { container } = render(<Title {...defaultProps} />)
    const titleElement = container.querySelector('h3')
    expect(titleElement?.className).toContain('xxl')
  });

  test('renders with the correct ellipsis', () => {
    const { container } = render(<Title {...defaultProps} />)
    const titleElement = container.querySelector('h3')
    expect(titleElement?.className).toContain('ellipsis')
  });

  test('renders with the correct text length to a11y', () => {
    const { container } = render(<Title {...defaultProps} />)
    const titleElement = container.querySelector('h3')
    expect(titleElement?.className).toContain('a11y-length')
  });

})


