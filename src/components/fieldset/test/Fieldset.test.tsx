import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Fieldset, FieldsetProps } from '../Fieldset'

describe('Fieldset', () => {
  const defaultProps: FieldsetProps = {
    legend: 'Legend Text',
    flat: false,
    required: true,
    isRequiredText: 'Required text',
    legendHidden: false,
    className: 'className-test'
  }

  test('renders snapshot', () => {
    const { container } = render(<Fieldset {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })

  test('renders fieldset with correctly', () => {
    const { container } = render(<Fieldset {...defaultProps} />)
    const fieldsetElement = container.querySelector('fieldset')
    expect(fieldsetElement?.className).toContain('fieldset-component')
    expect(fieldsetElement?.tagName).toBe('FIELDSET')
    expect(container).toMatchSnapshot()
  })

  test('renders legend with correctly', () => {
    const { container } = render(<Fieldset {...defaultProps} />)
    const fieldsetElement = container.querySelector('fieldset > legend')
    expect(fieldsetElement?.tagName).toBe('LEGEND')
    expect(container).toMatchSnapshot()
  })


  test('renders with a custom class', () => {
    const { container } = render(<Fieldset {...defaultProps} />)
    const fieldsetElement = container.querySelector('fieldset')
    expect(fieldsetElement?.className).toContain(defaultProps.className)
    expect(container).toMatchSnapshot()
  })

  test('renders legend hidden', () => {
    const { container } = render(<Fieldset {...defaultProps} />)
    const fieldsetElement = container.querySelector('fieldset > legend')
    expect(fieldsetElement?.className).not.toContain('is-hidden')
    expect(container).toMatchSnapshot()
  })
})
