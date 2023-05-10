import React from 'react'
import { Icon, IconProps } from '../../components/icon/Icon'

export default {
  title: 'Basic/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: { name: 'Name', control: 'text' },
    size: { name: 'Size', control: 'text' },
    color: { name: 'Color', control: 'color' },
    title: { name: 'Title', control: 'text' },
    viewBox: { name: 'ViewBox', control: 'number' },
  }
}

export const Default = (args: IconProps) => ([
  <Icon {...args} />
])

export const Gallery = () => ([
  <ul className={'gallery-icons'}>
    <li>
      <Icon
        name={'close'}
        title={'close'}/>
    </li>
    <li>
      <Icon
        name={'check'}
        title={'check'}/>
    </li>
    <li>
      <Icon
        name={'chevron-down'}
        title={'chevron-down'}/>
    </li>
    <li>
      <Icon
        name={'warning-cicle'}
        title={'warning-cicle'}/>
    </li>
    <li>
      <Icon
        name={'warning-safe'}
        title={'warning-safe'}/>
    </li>
    <li>
      <Icon
        name={'info-circle'}
        title={'info-circle'}/>
    </li>
  </ul>
])

Default.args = {
  name: 'close',
  size : 'm',
  color : 'currentColor',
  title: '',
  viewBox: 24,
}

Default.parameters = {
  design: [
    {
      type: 'link',
      name: 'Icon source',
      label: 'Icon source: mingcute.com',
      target: '_blank',
      url: 'https://www.mingcute.com/',
    },
    {
      type: 'iframe',
      name: 'Icon use example',
      url: 'https://codepen.io/dinael/full/vYmLVpa',
    }
  ]
}

Gallery.args = {
  size: 'm',
  color: null
}


