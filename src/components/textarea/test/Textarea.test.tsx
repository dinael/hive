import { describe, test, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import Textarea, { TextareaProps } from '../Textarea'

describe('Textarea', () => {
  const defaultProps: TextareaProps = {
    label: 'label-test',
    labelHidden: false,
    id: 'id-test',
    value: 'value-test',
    placeholder: 'placeholder-test',
    errorText: 'errorText-test',
    required: false,
    disabled: false,
    readOnly: false,
    maxlength: undefined,
    className: 'className-test',
  }

  test('Textarea renders snapshot', () => {
    const { container } = render(<Textarea {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })
})
