import { describe, test, expect, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Paragraph, ParagraphProps } from '../Paragraph'

describe('Paragraph', () => {
  const defaultProps: ParagraphProps = {
    children: 'children-test',
    ellipsis: false,
    a11yLength: false,
    flat: false,
    column: null,
    className: 'className-test'
  }

  test('renders snapshot', () => {
    const { container } = render(<Paragraph {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })
})
