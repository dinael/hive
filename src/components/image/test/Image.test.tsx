import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Image, ImageProps } from '../Image'

describe('Image', () => {
  const defaultProps: ImageProps = {
    src: 'https://picsum.photos/1440/500?random=1',
    alt: 'Imagen description for accessibility',
    width: '300',
    height: '300',
    ratio: 'none',
    fit: 'cover',
    disabled: true,
    className: 'className-test',
  }

  const imageSet = [
    { src: 'https://picsum.photos/1440/500?random=1', size:'320w' },
    { src: 'https://picsum.photos/900/300?random=2', size:'480w' },
    { src: 'https://picsum.photos/800/200?random=3', size:'640w' },
  ]

  test('renders snapshot', () => {
    const { container } = render(<Image {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })

  test('renders correctly', () => {
    const { container } = render(<Image {...defaultProps} />)
    const imageElement = container.querySelector('img')
    expect(imageElement?.tagName).toBe('IMG')
    expect(imageElement?.getAttribute('src')).toBe(defaultProps.src)
    expect(imageElement?.getAttribute('alt')).toBe(defaultProps.alt)
    expect(imageElement?.className).contain('image-component')
    expect(container).toMatchSnapshot()
  })

  test('renders correctly with imgSet', () => {
    const { container } = render(<Image {...defaultProps} srcSet={imageSet} />)
    const imageElement = container.querySelector('img')
    expect(imageElement?.tagName).toBe('IMG')
    expect(imageElement?.getAttribute('src')).toBe(imageSet[0].src)
    expect(imageElement?.getAttribute('alt')).toBe(defaultProps.alt)
    expect(imageElement?.className).contain('image-component')
    expect(container).toMatchSnapshot()
  })

  test('renders correctly className', () => {
    const { container } = render(<Image {...defaultProps} />)
    const imageElement = container.querySelector('img')
    expect(imageElement?.className).contain(defaultProps.className)
    expect(container).toMatchSnapshot()
  })

  test('renders correctly disabled', () => {
    const { container } = render(<Image {...defaultProps} />)
    const imageElement = container.querySelector('img')
    expect(imageElement?.className).contain('disabled')
    expect(container).toMatchSnapshot()
  })
})
