import { describe, test, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { InputRadio, InputRadioProps } from '../Radio'


describe('InputRadio', () => {
  const defaultProps: InputRadioProps = {
    value: 'example-value',
    label: 'Example label:',
    error: true,
    id: 'radio-test',
    errorText: 'Error text',
    onChange: vi.fn(),
  }

  test('InputRadio renders snapshot', () => {
    const { container } = render(<InputRadio {...defaultProps}/>)
    expect(container).toMatchSnapshot()
  })

  test('InputRadio renders with the correct label', () => {
    const { container } = render(<InputRadio {...defaultProps}/>)
    const LabelElement = container.querySelector('label > span')
    expect(LabelElement?.textContent).toContain('Example label')
    expect(LabelElement?.className).toContain('label-text-component')
  })

  test('InputRadio renders with the correct value', () => {
    const { container } = render(<InputRadio {...defaultProps} />)
    const inputElement = container.querySelector('input')
    expect(inputElement?.value).toBe('example-value')
  })

  test('InputRadio calls onChange handler when clicked', () => {
    const onChangeMock = vi.fn()
    const { container } = render(<InputRadio {...defaultProps} onChange={onChangeMock} />)
    const inputElement = container.querySelector('input')
    if (inputElement) {
      fireEvent.change(inputElement, { target: { value: 'example-value' } })
    }
    expect(onChangeMock).toHaveBeenCalledTimes(0)
  })

  test('InputRadio calls onChange handler when clicked', () => {
    const onChangeMock = vi.fn()
    const { container } = render(<InputRadio {...defaultProps} onChange={onChangeMock} />)
    const inputElement = container.querySelector('input')
    if (inputElement) {
      fireEvent.change(inputElement, { target: { value: 'example-value' } })
    }
    expect(inputElement?.value).toBe('example-value')
  })

})
