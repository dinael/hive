import { FC } from 'react'
import styles from './Label.module.scss'

export type LabelProps = {
  text: string
  required?: boolean
  isRequiredText?: string
  labelHidden?: boolean
  disabled?: boolean
  className?: string
  onlyText?: boolean
}

export const Label: FC<LabelProps> = ({
  text,
  onlyText = false,
  required = false,
  isRequiredText,
  labelHidden = false,
  disabled,
  className,
  ...props
}: LabelProps) => {

  const labelStyles = `
    ${styles['label-text-component']}
    ${disabled ? 'is-disabled' : ''}
    ${required ? 'is-required' : ''}
    ${labelHidden ? 'sr-only' : ''}
    ${className ? className : ''}
  `

  const isRequired = isRequiredText ? `${isRequiredText}` : 'is required'

  const Tag = `${onlyText ? 'span' : 'label'}` as keyof JSX.IntrinsicElements

  return (
    <Tag className={labelStyles}
      {...props}>
        {text + ':'}
        {required ?
          <em
            className={styles['required-text']}
            title={isRequired}>
            *
          </em>
          : null}
    </Tag>
  )
}

export default Label
