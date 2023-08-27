import { FC } from 'react'
import styles from './Anchor.module.scss'

export type AnchorProps = {
  text: string,
  href: string,
  target: '_self' | '_blank' | '_parent' | '_top',
  rel?: 'noopener' | 'noreferrer' | 'no-referrer' | 'noopener noreferrer',
  disabled?: boolean,
  a11yText?: string,
  safeArea?: boolean,
  className?: string,
  children?: any,
}

export const Anchor: FC<AnchorProps> = ({
  text ='',
  href ='#',
  target = '_self',
  rel = 'noreferrer',
  disabled = false,
  a11yText = '',
  safeArea = true,
  children,
  className = '',
  ...props
}: AnchorProps) => {

  const anchorStyles = `
    ${styles['anchor-component']}
    ${disabled ? styles['disabled'] : ''}
    ${safeArea ? styles['safe-area'] : ''}
    ${className || ''}
  `

  return (
    <a
      className={anchorStyles}
      href={href}
      target={target}
      rel={rel}
      aria-label={a11yText ? a11yText : undefined}
      {...props}>
      {text}{children}
    </a>
  )
}

export default Anchor
