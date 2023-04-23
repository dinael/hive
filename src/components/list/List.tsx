import React, { FC } from 'react'
import { v4 as uuid } from 'uuid'
import styles from './List.module.scss'

export type ListItem = {
  id?: string
  text: string
}

export type ListProps = {
  items: ListItem[]
  ordered?: boolean
  nameList?: string
  className?: string
  disabled?: boolean
  children?: any
  bullet?: 'none' | 'auto' | 'disc' | 'circle' | 'square' | 'decimal' | 'decimal-leading-zero' | 'lower-roman' | 'upper-roman' | 'lower-greek' | 'lower-latin' | 'upper-latin' | 'armenian' | 'georgian' | 'lower-alpha' | 'upper-alpha'
}

export const List: FC<ListProps> = ({
  items,
  ordered = false,
  nameList,
  disabled = false,
  className = '',
  children = null,
  bullet,
  ...props
}) => {

  // TODO: un parametro para pasar los custom bullet
  // TODO: Listas anidadas

  const Tag = `${ordered ? 'ol' : 'ul' }`

  return (
    <Tag
      className={`
        ${styles['list-component']}
        ${styles[bullet ? bullet : '']}
        ${styles[bullet == 'none' ? 'flat' : '']}
        ${className ? className : ''}`}
      role="list"
      aria-label={nameList ? nameList : ''}
      {...props}>
      {items.map((item) => (
        <li
          key={item.id}
          role="listitem">
          {item.text}
          {children}
        </li>
      ))}
    </Tag>
  )
}

export default List
