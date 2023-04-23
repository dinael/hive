import { describe, test, expect, vi} from 'vitest'
import { render } from '@testing-library/react'
import InputRadio, { InputRadioProps } from '../Radio'

describe('InputRadio', () => {
  const defaultProps: InputRadioProps = {
    value: 'value-test',
    id: 'id-test',
    onChange: vi.fn(),
    label: 'label-text',
    required: false,
    error: false,
    errorText: 'errorText-test',
    className: 'clasName-test',
  }

  test('renders snapshot', () => {
    const { container } = render(<InputRadio {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })
})
