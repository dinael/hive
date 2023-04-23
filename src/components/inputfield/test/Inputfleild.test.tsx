import { describe, test, expect, vi} from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Inputfield, InputfieldProps } from '../Inputfield'

describe('Inputfield', () => {
  const defaultProps: InputfieldProps = {
    label: 'Label',
    labelHidden: false,
    id: 'id-test',
    name: 'name',
    type: 'text',
    placeholder: 'Placeholder',
    value: 'value-test',
    onChange: vi.fn(),
    onBlur: vi.fn(),
    onFocus: vi.fn(),
    error: false,
    errorText: 'error-test',
    required: false,
    disabled: false,
    readOnly: false,
    isRequiredText: 'isRequiredText-test',
    maxLength: undefined,
    className: 'className-test',
  }

  test('renders snapshot', () => {
    const { container } = render(<Inputfield {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })

})
