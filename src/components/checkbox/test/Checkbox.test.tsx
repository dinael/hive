import { describe, test, expect, vi} from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Checkbox, CheckboxProps } from '../Checkbox'

describe('Checkbox', () => {
  const defaultProps: CheckboxProps = {
    value: 'example-value',
    label: 'Example label',
    error: true,
    errorText: 'Error text',
    id: 'id-test',
    onChecked: vi.fn(),
  }

  test('renders snapshot', () => {
    const { container } = render(<Checkbox {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })

  test('renders with the correct label', () => {
    const { container } = render(<Checkbox {...defaultProps} />)
    const labelTextElement = container.querySelector('label > span')
    expect(labelTextElement?.textContent).toBe('Example label')
    expect(container).toMatchSnapshot()
  })

  test('calls onChecked handler when clicked', () => {
    const onCheckedMock = vi.fn()
    const { container } = render(<Checkbox {...defaultProps} onChecked={onCheckedMock} />)
    const checkboxElement = container.querySelector('input')
    if (checkboxElement) {
      fireEvent.change(checkboxElement, { target: { value: 'example-value' } })
    }
    expect(onCheckedMock).toHaveBeenCalledTimes(0)
    expect(container).toMatchSnapshot()
  })

  test('calls onChecked handler when clicked', () => {
    const onCheckedMock = vi.fn()
    const { container } = render(<Checkbox {...defaultProps} onChecked={onCheckedMock} />)
    const checkboxElement = container.querySelector('input')
    if (checkboxElement) {
      fireEvent.change(checkboxElement, { target: { value: 'example-value' } })
    }
    expect(checkboxElement?.value).toBe('example-value')
    expect(container).toMatchSnapshot()
  })
})
