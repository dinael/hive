import React from 'react'
import { Image, ImageProps } from '../../components/image/Image'

export default {
  title: 'Basic/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    src: { name: 'src', control: 'text' },
    alt: { name: 'alt', control: 'text' },
    width: { name: 'Width', control: 'text' },
    height: { name: 'Height', control: 'text' },
    srcSet: { name: 'src set', control: 'array' },
    fit: { name: 'Fit',
      control: {
        type:'select',
        options: [
          'contain','cover','fill','none','scale-down','unset'
        ],
      },
    },
    ratio: { name: 'Ratio',
      control: {
        type:'select',
        options: ['none','ratio-1:1','ratio-1:2','ratio-2:1','ratio-2:3','ratio-3:1','ratio-3:2','ratio-3:4','ratio-4:3','ratio-4:5','ratio-5:4','ratio-9:16','ratio-16:9','ratio-16:9','ratio-21:9','ratio-72:25'],
      },
    },
    disabled: { name: 'Disabled', control: 'boolean' },
    className: {name: 'className', control: 'text'},
  },
}

const imageSet = [
  { src: 'https://picsum.photos/1440/500?random=1', size: '320w' },
  { src: 'https://picsum.photos/900/300?random=2', size: '480w' },
  { src: 'https://picsum.photos/800/200?random=3', size: '640w' },
]

export const Default = (args: ImageProps) => ([
  <Image {...args} />
])

export const srcSet = (args: ImageProps) => ([
  <Image {...args} />
])

Default.args = {
  src: 'https://picsum.photos/1440/500?random=1',
  alt: 'Imagen description for accessibility',
  width: '',
  height: '',
  ratio: 'none',
  fit: 'cover',
  disabled: false,
  className: '',
}

srcSet.args = {
  ...Default.args,
  src: imageSet[0].src,
  srcSet: imageSet,
}
