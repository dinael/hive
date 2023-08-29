import { FC } from 'react'
import styles from './Breadcrumb.module.scss'

type BreadcrumbItem = {
  text: string
  url: string
}

export type BreadcrumbProps = {
  breadcrumbTrace: BreadcrumbItem[]
  className?: string
}

export const Breadcrumb: FC<BreadcrumbProps> = ({
  breadcrumbTrace,
  className,
  ...props
}) => {
  const breadcrumbStyles = `
    ${styles['breadcrumb-component']}
    ${className || ''}
  `

  return (
    <ul className={breadcrumbStyles} role="list" {...props}>
      {breadcrumbTrace.map((item, index) => (
        <li
          key={index}
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
