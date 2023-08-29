import { FC, MouseEventHandler } from 'react'
import styles from './Button.module.scss'
import Icon from '../icon/Icon'

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset' | 'link'
  variant: 'primary' | 'secondary' | 'alt' | 'ghost' | 'success' | 'danger'
  kind?: 'default' | 'rounded' | 'fullwidth'
  size?: 'xs' | 's' | 'm' | 'l'
  text: string
  ellipsis?: boolean
  icon?: string
  iconOnly?: boolean
  iconPosition?: 'left' | 'right'
  url?: string
  description?: string
  disabled?: boolean
  id?: string
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
}

export const Button: FC<ButtonProps> = ({
  type = 'button',
  variant = 'primary',
  kind = 'default',
  size = 'm',
  text,
  ellipsis = false,
  icon,
  iconOnly = false,
  iconPosition = 'left',
  url,
  description: a11yText = 'a11y Button',
  disabled = false,
  className,
  id,
  ...props
}: ButtonProps) => {

  function handleClick(e:any) {
    e.preventDefault()
  }

  const buttonStyles = `
    ${styles['button-component']}
    ${styles[variant ? variant : 'primary']}
    ${styles[size ? size : 'm']}
    ${styles[kind ? kind : 'default']}
    ${styles[iconPosition ? iconPosition : 'left']}
    ${disabled ? styles['disabled'] : ''}
    ${className || ''}
  `

  const textStyles = `
    ${styles.text}
    ${ellipsis ? styles['ellipsis'] : ''}
    ${iconOnly || kind === 'rounded' ? 'sr-only' : ''}
  `

  if (type !== 'link') {
    return (
      <button
        id={id}
        type={type}
        aria-label={a11yText}
        disabled={disabled}
        className={buttonStyles}
        onClick={handleClick}
        {...props}>
        {icon && <Icon name={icon} size={size} />}
        {!iconOnly && kind !== 'rounded' ? (
          <span className={textStyles}>
            {text}
          </span>
        ) : null}
      </button>
    )
  }

  return (
    <a
      id={id}
      href={url}
      target="_self"
      rel="noopener noreferrer"
      aria-label={a11yText}
      className={buttonStyles}
      onClick={handleClick}
      {...props}>
      {icon && <Icon name={icon} size={size} />}
      {!iconOnly && kind !== 'rounded' ? (
        <span className={textStyles}>
          {text}
        </span>
      ) : null}
    </a>
  )
}

export default Button

