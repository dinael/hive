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
    onlyText: false,
  }

  test('Label renders snapshot', () => {
    const { container } = render(<Label {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })

  test('Label renders with the correct tag name: label', () => {
    const { container } = render(<Label {...defaultProps} />)
    const textElement = container.querySelector('label')
    expect(textElement?.tagName).toBe('LABEL')
    expect(container).toMatchSnapshot()
  });

  test('Label renders with the correct tag name: span', () => {
    const { container } = render(<Label {...defaultProps} onlyText />)
    const textElement = container.querySelector('span')
    expect(textElement?.tagName).toBe('SPAN')
    expect(container).toMatchSnapshot()
  });

})
