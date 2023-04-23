import { describe, test, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import ValidationMessage, { ValidationMessageProps } from '../ValidationMessage'

describe('ValidationMessage', () => {
  const defaultProps: ValidationMessageProps = {
    message: 'message-test',
    kind: 'error',
    id: 'id-test',
    icon: 'close',
    role: 'alert',
    className: 'className-Text',
  }

  test('renders snapshot', () => {
    const { container } = render(<ValidationMessage {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })
})
