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
  unstyled?: boolean
  bullet?: 'none' | 'auto' | 'disc' | 'circle' | 'square' | 'decimal' | 'decimal-leading-zero' | 'lower-roman' | 'upper-roman' | 'lower-greek' | 'lower-latin' | 'upper-latin' | 'armenian' | 'georgian' | 'lower-alpha' | 'upper-alpha'
  customBullet?: string;
}

export const List: FC<ListProps> = ({
  items,
  ordered = false,
  nameList,
  disabled = false,
  className = '',
  bullet = 'none',
  customBullet = '',
  unstyled = false,
  ...props
}) => {

  const listStyles = `
    ${styles[!unstyled ? 'list-component' : 'list-unstyled']}
    ${styles[bullet ? bullet : 'none']}
    ${className ? className : ''}
  `

  const Tag: FC<{ children: React.ReactNode }> = ({
    children
  }) => {
    const tagProps = {
      className: listStyles,
      role: "list",
      "aria-label": nameList ? nameList : '',
      ...props
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
          role="listitem"
          style={customBullet ? { listStyle: customBullet } : {}}>
          {item.text}
        </li>
      ))}
    </Tag>
  )
}

export default List
