import React, { FC } from 'react'
import styles from './Title.module.scss'


export type TitleProps = {
  level: 0 | 1 | 2 | 3 | 4 | 5 | 6
  size: 'xs' |'s' | 'm' | 'l' | 'xl' | 'xxl'
  text: string
  children: any
  ellipsis?: boolean
  a11yLength?: boolean
  className?: string
}
export const Title: FC<TitleProps> = ({
  level = 1,
  size = 'm',
  text = '',
  children,
  ellipsis = false,
  a11yLength = false,
  className,
  ...props
}: TitleProps ) => {

  level = level < 0 || level > 6 ? 2 : level

  const Tag = level === 0 ? 'p' : 'h' + level as keyof JSX.IntrinsicElements

  return (
    <Tag
      className={`
        ${styles['title-component']}
        ${styles[size]}
        ${className ? className : ''}
        ${ellipsis ? styles['ellipsis'] : ''}
        ${a11yLength ? styles['a11y-length'] : ''}
      `}
      {...props}>
        {text}
      {children}
    </Tag>
  )
}

export default Title
