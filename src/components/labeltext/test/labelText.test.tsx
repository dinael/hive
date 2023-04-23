import { describe, test, expect, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { LabelText, LabelTextProps } from '../LabelText'

describe('LabelText', ()=> {
  const defaultProps: LabelTextProps = {
    text: 'text-test',
    required: false,
    isRequiredText: 'isRequiredText-test',
    labelHidden: false,
    disabled: false,
    className: 'className-test',
  }

  test('renders snapshot', () => {
    const { container } = render(<LabelText {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })

})
