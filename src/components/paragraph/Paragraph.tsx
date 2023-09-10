import { CSSProperties, FC } from 'react'
import styles from './Paragraph.module.scss'


// TODO: Ellipsis lines
export type ParagraphProps = {
  text?: string
  children?: any
  ellipsis?: boolean
  a11yLength?: boolean
  flat?: boolean
  className?: string
}

export const Paragraph: FC<ParagraphProps> = ({
  text,
  children,
  ellipsis = false,
  a11yLength = false,
  flat = false,
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
  return (
    <p
      className={paragraphStyles}
      {...props}>
        {children || text}
    </p>
  )
}

export default Paragraph
