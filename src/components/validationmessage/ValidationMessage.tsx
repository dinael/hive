import { FC } from 'react'
import styles from './ValidationMessage.module.scss'
import Icon from '../icon/Icon'

export type ValidationMessageProps = {
  message: string
  kind:  'info' | 'warning' | 'error' | 'success' | 'help' | 'safe'
  icon?: string
  id?: string
  role?: string
  className?: string
}

export const ValidationMessage: FC<ValidationMessageProps> = ({
  message,
  kind,
  id,
  icon,
  role,
  className,
  ...props
}: ValidationMessageProps) => {

  const validationMessageStyles = `
    ${styles['validation-message']}
    ${styles[kind]}
    ${className || ''}}
  `

  return (
    <span
      id={id ? id : ''}
      className={validationMessageStyles}
      role={role ? role : ''}
      {...props}>
      {icon ? <Icon name={icon} size={'m'} /> : null}
      {message}
    </span>
  )
}

export default ValidationMessage
