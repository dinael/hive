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
    console.log('You clicked submit.')
  }

  const buttonStyles = `
    ${styles['button-component']}
    ${styles[variant]}
    ${styles[size]}
    ${styles[kind]}
    ${styles[iconPosition]}
    ${className || ''}
  `

  const textStyles = `
    ${styles.text}
    ${ellipsis ? styles['ellipsis'] : ''}
    ${iconOnly || kind === 'rounded' ? 'sr-only' : ''}
  `

  const buttonAsLinkStyles = `
    ${styles['button-component']}
    ${styles[variant]}
    ${styles[size]}
    ${styles[kind]}
    ${styles[iconPosition]}
    ${disabled ? styles['disabled'] : ''}
    ${className || ''}
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
        <span className={textStyles}>
          {text}
        </span>
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
      className={buttonAsLinkStyles}
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

