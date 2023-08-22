import { FC } from 'react'
import styles from './Text.module.scss'

export type TextProps = {
  children: any
  block?: boolean
  ellipsis?: boolean
  a11yLength?: boolean
  className?: string
}

export const Text: FC<TextProps> = ({
  children ='',
  block = false,
  ellipsis = false,
  a11yLength = false,
  className,
  ...props
}: TextProps ) => {

  const Tag = `${!block ? 'span' : 'p' }` as keyof JSX.IntrinsicElements

  return (
    <Tag
      className={`
        ${styles['text-component']}
        ${ellipsis ? styles['ellipsis'] : ''}
        ${className && className}
      `}
      {...props}>
      { children }
    </Tag>
  )
}

export default Text
