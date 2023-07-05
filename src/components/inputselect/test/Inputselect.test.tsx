import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Inputselect, InputselectProps } from '../Inputselect'

const options = [
  { option: 'Opción 1', value: '1' },
  { option: 'Opción 2', value: '2' },
  { option: 'Opción 3', value: '3' },
]

const groupOptions = {
  'Grupo 1': [
    { option: 'Opción 4', value: '4' },
    { option: 'Opción 5', value: '5' },
  ],
  'Grupo 2': [
    { option: 'Opción 6', value: '6' },
    { option: 'Opción 7', value: '7' },
  ],
}

describe('Inputselect', () => {
  const defaultProps: InputselectProps = {
    label: 'label-test',
    labelHidden: false,
    id: 'id-test',
    name: 'name-test',
    disabled: false,
    options: options,
    error: false,
    errorText: 'errorText-test',
    required: false,
    isFocused: false,
    className: 'className-test'
  }

  test('Inputselect renders snapshot', () => {
    const { container } = render(<Inputselect {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })

  test('Inputselect renders snapshot with group options', () => {
    const { container } = render(<Inputselect {...defaultProps} options={groupOptions} />)
    expect(container).toMatchSnapshot()
  })
})
