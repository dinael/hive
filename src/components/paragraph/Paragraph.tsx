import React, { FC } from 'react'
import styles from './Paragraph.module.scss'

export type ParagraphProps = {
  children: any
  ellipsis?: boolean
  a11yLength?: boolean
  flat?: boolean
  /**
   *  **\*Experimental feature**
   */
  column?: number | null
  className: string
}

export const Paragraph: FC<ParagraphProps> = ({
  children,
  ellipsis = false,
  a11yLength = false,
  flat = false,
  column = null,
  className = '',
  ...props
}) => {

  return (
    <p className={`
        ${styles['paragraph-component']}
        ${ellipsis ? styles['ellipsis'] : ''}
        ${a11yLength ? styles['a11y-length'] : ''}
        ${flat ? styles['flat'] : ''}
        ${className ? className : ''}
      `}
      style={column && column > 1 ? { '--paragraph-column': `${column}` } : undefined}
      {...props}>
        {children}
    </p>
  )
}

export default Paragraph
