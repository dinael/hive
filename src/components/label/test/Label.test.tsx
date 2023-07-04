import { describe, test, expect, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Label, LabelProps } from '../Label'

describe('Label', ()=> {
  const defaultProps: LabelProps = {
    text: 'text-test',
    required: false,
    isRequiredText: 'isRequiredText-test',
    labelHidden: false,
    disabled: false,
    className: 'className-test',
  }

  test('renders snapshot', () => {
    const { container } = render(<Label {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })

})
