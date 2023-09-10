import { FC, MouseEventHandler, Children, ReactNode } from 'react';
import styles from './Button.module.scss'
import Icon from '@/components/icon/Icon'

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset' | 'link'
  variant?: 'primary' | 'secondary' | 'alt' | 'ghost' | 'success' | 'danger'
  kind?: 'default' | 'rounded' | 'fullwidth'
  size?: 'default' | 'xs' | 's' | 'm' | 'l'
  text?: string
  ellipsis?: boolean
  icon?: string
  iconOnly?: boolean
  iconPosition?: 'left' | 'right'
  url?: string
  description?: string
  disabled?: boolean
  id?: string
  className?: string
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
}

export const Button: FC<ButtonProps> = ({
  type = 'button',
  variant = 'primary',
  kind = 'default',
  size,
  text = 'button',
  ellipsis = false,
  icon,
  iconOnly = false,
  iconPosition = 'left',
  url,
  description: a11yText = 'a11y Button',
  disabled = false,
  className,
  id,
  children,
  ...props
}: ButtonProps) => {

  function handleClick(e:any) {
    e.preventDefault()
  }

  const buttonStyles = `
    ${styles['button-component']}
    ${styles[variant ? variant : 'primary']}
    ${styles[size ? size : 'default']}
    ${styles[kind ? kind : 'default']}
    ${styles[iconOnly || kind === 'rounded' ? 'icon-only' : iconPosition]}
    ${disabled ? styles['disabled'] : ''}
    ${className || ''}
  `

  const iconStyles = `${styles['icon-button']}`

  const textStyles = `
    ${styles.text}
    ${ellipsis ? styles['ellipsis'] : ''}
    ${iconOnly || kind === 'rounded' ? 'sr-only' : ''}
  `

  const buttonIcon = icon ? <Icon name={icon} size={size} className={iconStyles} /> : null

  const buttonText = !iconOnly && kind !== 'rounded' ? (<span className={textStyles}>{text}</span>) : null

  const buttonContent = (
    <>
      {buttonIcon}
      {buttonText}
    </>
  );

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
        {children ? children : buttonContent}
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
      {children ? children : buttonContent}
    </a>
  )
}

export default Button

