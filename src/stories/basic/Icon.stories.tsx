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
  },
}

export const Default = (args: IconProps) => ([
  <Icon {...args} />
])

export const Gallery = () => ([
  <ul className={'gallery-icons'}>
    <li>
      <Icon name={'close'} title={'Close'} size={'m'} color={''} viewBox={0} className={''}/>
    </li>
    <li>
      <Icon name={'check'} title={'Check'} size={'m'} color={''} viewBox={0} className={''}/>
    </li>
    <li>
      <Icon name={'chevron-down'} title={'Chevron down'} size={'m'} color={''} viewBox={0} className={''}/>
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

Gallery.args = {
  size: 'm',
  color: null
}


