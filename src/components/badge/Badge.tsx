import React, { FC } from 'react'
import styles from './Badge.module.scss'

export type BadgeProps = {
  text: string
  length?: number
  spot?: boolean
  className?: string
}

export const Badge: FC<BadgeProps> = ({
  text = '',
  length = 0,
  spot = false,
  className = '',
  ...props
}: BadgeProps) => {

  const MAX_LENGTH = length >= 2 ? length : 2

  const textShorten = text.slice(0, MAX_LENGTH)

  return (
    <span
      className={`
        ${styles['badge-component']}
        ${spot ? styles.spot : ''}
        ${className ? className : ''}
      `}
      {...props}>
      {text ?
        <strong
          aria-hidden="true"
          role="presentation"
          className={`${styles['badge-text']} ${spot ? 'sr-only' : ''}`}>
          {textShorten}
        </strong>
      : null}
   </span>
  )
}

export default Badge
