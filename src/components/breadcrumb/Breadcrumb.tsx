import { FC } from 'react'
import styles from './Breadcrumb.module.scss'
import { v4 as uuid } from 'uuid'

type BreadcrumbItem = {
  text: string
  url: string
  id: string
}

export type BreadcrumbProps = {
  breadcrumbTrace: BreadcrumbItem[]
  className?: string
  id: string
}

export const Breadcrumb: FC<BreadcrumbProps> = ({
  breadcrumbTrace,
  className,
  id,
  ...props
}) => {
  const breadcrumbStyles = `
    ${styles['breadcrumb-component']}
    ${className || ''}
  `
  const Id = id ? id : uuid();

  return (
    <ul
      className={breadcrumbStyles}
      role="list"
      {...props}>
      {breadcrumbTrace.map((item, id, index) => (
        <li
          key={Id}
          className={styles['breadcrumb-item']}
          role="listitem"
          {...(index === breadcrumbTrace.length - 1 ? { 'aria-current': 'page' } : {})}>
          {index === breadcrumbTrace.length - 1 ? (
            item.text
          ) : (
            <a href={item.url}>{item.text}</a>
          )}
        </li>
      ))}
    </ul>
  )
}
