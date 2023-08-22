// TODO: un parametro para pasar los custom bullet
// TODO: Listas anidadas

import { FC } from 'react'
import { v4 as uuid } from 'uuid'

import styles from './List.module.scss'

export type ListItem = {
  id?: string | number,
  text: string
}

export type ListProps = {
  items: ListItem[]
  ordered?: boolean
  nameList?: string
  className?: string
  disabled?: boolean

  bullet?: 'none' | 'auto' | 'disc' | 'circle' | 'square' | 'decimal' | 'decimal-leading-zero' | 'lower-roman' | 'upper-roman' | 'lower-greek' | 'lower-latin' | 'upper-latin' | 'armenian' | 'georgian' | 'lower-alpha' | 'upper-alpha'
}

export const List: FC<ListProps> = ({
  items,
  ordered = false,
  nameList,
  disabled = false,
  className = '',
  bullet,
  ...props
}) => {
  const Tag: FC<{ children: React.ReactNode }> = ({
    children
  }) => {
    const tagProps = {
      className: `
        ${styles['list-component']}
        ${styles[bullet ? bullet : 'none']}
        ${styles[bullet === 'none' ? 'flat' : '']}
        ${className && className}`,
      role: "list",
      "aria-label": nameList ? nameList : ''
    }

    return ordered
      ? <ol {...tagProps}>{children}</ol>
      : <ul {...tagProps}>{children}</ul>
  }

  return (
    <Tag>
      {items.map((item) => (
        <li
          key={item.id ? item.id : uuid()}
          role="listitem">
          {item.text}
        </li>
      ))}
    </Tag>
  )
}

export default List
