import { FC , CSSProperties} from 'react'
import styles from './Icon.module.scss'
import sprite from '../../assets/sprite.svg'

export type IconProps = {
  name: string
  size?: 'xs' | 's' | 'm' | 'l' | 'xl'
  color?: string
  title?: string
  viewBox?: number
  className?: string
}

export const Icon: FC<IconProps> = ({
  name = 'info',
  size  = 'm',
  color  = 'currentColor',
  title = '',
  viewBox = 24,
  className = '',
  ...props
}: IconProps) => {

  const iconStyles = `
    ${styles['icon-component']}
    ${styles[size ? size : 'm']}
    ${className || ''}
  `

  const iconInlineStyles: CSSProperties = {
    '--icon-color': color,
  };

  return (
    <span
      aria-hidden="true"
      className={iconStyles}
      style={iconInlineStyles}
      {...props}>
      <svg
        viewBox={`0 0 ${viewBox} ${viewBox}`}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <title>{title ? title : name}</title>
        <use xlinkHref={`${sprite}#${name}`} />
      </svg>
    </span>
  )
}

export default Icon
