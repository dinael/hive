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
  unstyled?: boolean
  bullet?: 'none' | 'auto' | 'disc' | 'circle' | 'square' | 'decimal' | 'decimal-leading-zero' | 'lower-roman' | 'upper-roman' | 'lower-greek' | 'lower-latin' | 'upper-latin' | 'armenian' | 'georgian' | 'lower-alpha' | 'upper-alpha'
  customBullet?: string
  even?: boolean
  odd?: boolean
}

export const List: FC<ListProps> = ({
  items,
  ordered = false,
  nameList,
  className = '',
  bullet = 'none',
  customBullet = '',
  unstyled = false,
  even = false,
  odd = false,
  ...props
}) => {

  const getListItemClass = (even: boolean, odd: boolean) => {
    return even && !odd ? 'even' : odd && !even ? 'odd' : '';
  };

  const listStyles = `
    ${styles[!unstyled ? 'list-component' : 'list-unstyled']}
    ${styles[bullet ? bullet : 'none']}
    ${className || ''}
    ${styles[getListItemClass(even, odd)]}
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
