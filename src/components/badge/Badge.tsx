import { FC } from 'react'
import styles from './Badge.module.scss'

export type BadgeProps = {
  text: string
  length?: number
  spot?: boolean
  alt?: boolean
  className?: string
}

export const Badge: FC<BadgeProps> = ({
  text = '',
  length = 0,
  spot = false,
  alt,
  className = '',
  ...props
}: BadgeProps) => {

  const MAX_LENGTH = length >= 2 ? length : 2

  const textShorten = text.slice(0, MAX_LENGTH)

  const badgeStyles = `
    ${styles['badge-component']}
    ${spot ? styles.spot : ''}
    ${alt ? styles['alt'] : ''}
    ${className || ''}
  `

  const badgeTextStyles = `
    ${styles['badge-text']}
    ${spot ? 'sr-only' : ''}
  `
  const badgeText = (
    <strong
      className={badgeTextStyles}
      aria-hidden="true"
      role="presentation">
      {textShorten}
    </strong>
  )

  return (
    <span className={badgeStyles} {...props}>
      {text ? badgeText : null}
   </span>
  )
}

export default Badge
