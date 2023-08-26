import { FC, ReactNode } from 'react'
import styles from './Box.module.scss'

export type BoxProps = {
  tag?: 'div' | 'article' | 'section' | 'dialog' | 'form' | 'fieldset' | 'p' | 'blockquote' | 'picture' | 'figure' | 'code';
  space?: 'none' | 'quarter' | 'half' | 1 | 2 | 3 | 4;
  elevation?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'pop' | 'default' | 'none';
  border?: 'none' | 'primary' | 'alt' | 'dark';
  radius?: 'none' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
  paper?: boolean
  className?: string
  children?: ReactNode
}

export const Box: FC<BoxProps> = ({
  tag,
  space = 'none',
  elevation,
  border = 'primary',
  radius = 's',
  paper = false,
  className,
  children,
  ...props
}) => {

  const Tag = `${tag ? tag : 'div'}` as keyof JSX.IntrinsicElements

  const borderClass = `border:${border}`;

  const BoxStyles = `
    ${styles['box-component']}
    ${border ? styles[borderClass] : 'border:primary'}
    ${elevation ? `elevation:${elevation}` : ''}
    ${radius ? `radius:${radius}` : ''}
    ${space ? `p:${space}` : 'space:none'}
    ${paper? styles.paper : ''}
    ${className || ''}
  `

  return (
    <Tag
      className={BoxStyles}
      {...props}>
      {children}
    </Tag>
  )
}

export default Box
