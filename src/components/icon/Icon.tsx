import { FC } from 'react'
import styles from './Icon.module.scss'
import sprite from '@/assets/sprite.svg'

export type IconProps = {
  name: string
  size?: 'default' | 'xs' | 's' | 'm' | 'l' | 'xl'
  title?: string
  viewBox?: number
  className?: string
}

export const Icon: FC<IconProps> = ({
  name = 'info',
  size  = 'default',
  title = '',
  viewBox = 24,
  className = '',
  ...props
}: IconProps) => {

  const iconViewBox = `0 0 ${viewBox} ${viewBox}`
  const iconTitle = title || name
  const iconName = `${sprite}#${name}`

  const iconStyles = `
    ${styles['icon-component']}
    ${styles[size ? size : 'm']}
    ${className || ''}
  `
  return (
    <span
      aria-hidden="true"
      className={iconStyles}
      {...props}>
      <svg viewBox={iconViewBox}>
        <title>{ iconTitle }</title>
        <use xlinkHref={iconName} />
      </svg>
    </span>
  )
}

export default Icon
