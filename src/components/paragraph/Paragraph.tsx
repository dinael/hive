import { FC } from 'react'
import styles from './Paragraph.module.scss'

export type ParagraphProps = {
  children: any
  ellipsis?: boolean
  a11yLength?: boolean
  flat?: boolean
  className: string
  /**
   *  **\*Experimental feature**
   */
  column?: number | null

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

  const paragraphStyles = `
      ${styles['paragraph-component']}
      ${ellipsis ? styles['ellipsis'] : ''}
      ${a11yLength ? styles['a11y-length'] : ''}
      ${flat ? styles['flat'] : ''}
      ${className || ''}
  `

  const paragraphInlineStyles: CSSProperties = {
    '--paragraph-column': column,
  };

  return (
    <p className={paragraphStyles}
      style={column && column > 1 ? paragraphInlineStyles : undefined}
      {...props}>
        {children}
    </p>
  )
}

export default Paragraph
