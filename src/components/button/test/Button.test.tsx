import { describe, test, expect, vi} from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Button, ButtonProps } from '../Button'

describe('Button', () => {
  const defaultProps: ButtonProps = {
    type: 'button',
    variant: 'primary',
    kind: 'default',
    size: 'xs',
    text: 'Button text',
    ellipsis: false,
    icon: 'close',
    iconOnly: false,
    iconPosition: 'left',
    url: 'https://www.example.com',
    description: 'Text for a11y',
    disabled: false,
    className: 'className-test',
    onClick: vi.fn(),
  }

  test('renders snapshot', () => {
    const { container } = render(<Button {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })

  test('renders correctly', () => {
    const { container } = render(<Button {...defaultProps} />)
    const buttonElement = container.querySelector('button')
    expect(buttonElement?.tagName).toBe('BUTTON')
    expect(container).toMatchSnapshot()
  })

  test('renders text correctly', () => {
    const { container } = render(<Button {...defaultProps} />)
    const buttonElement = container.querySelector('button span:nth-child(2)')
    expect(buttonElement?.textContent).toBe(defaultProps.text)
    expect(screen.getByText(`${defaultProps.text}`))
    expect(container).toMatchSnapshot()
  })

  test('renders icon correctly', () => {
    const { container } = render(<Button {...defaultProps} />)
    const buttonElement = container.querySelector('button span')
    expect(buttonElement?.className).toContain('icon-component')
    expect(container).toMatchSnapshot()
  })

  test('renders kind link correctly', () => {
    const { container } = render(<Button {...defaultProps} type={'link'} url={defaultProps.url} />)
    const buttonElement = container.querySelector('a')
    expect(buttonElement?.tagName).toBe('A')
    expect(buttonElement?.getAttribute('href')).toBe(defaultProps.url)
    expect(container).toMatchSnapshot()
  })

  test('onClick', () => {
    const onClick = vi.fn()
    const { container } = render(<Button {...defaultProps} onClick={onClick} />)
    const buttonElement = container.querySelector('button');
    if (buttonElement) {
      fireEvent.click(buttonElement);
    }
    expect(onClick).toHaveBeenCalled();
    expect(container).toMatchSnapshot()
  })
})
