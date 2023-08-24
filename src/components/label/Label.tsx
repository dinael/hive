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

  const Tag = `${onlyText ? 'span' : 'label'}` as keyof JSX.IntrinsicElements

  return (
    <Tag className={`
      ${styles['label-text-component']}
      ${disabled ? 'is-disabled' : ''}
      ${required ? 'is-required' : ''}
      ${labelHidden ? 'sr-only' : ''}
      ${className ? className : ''}`}
      {...props}>
        {text + ':'}
        {required ?
          <em
            className={styles['required-text']}
            title={isRequiredText? `${isRequiredText}` : 'is required'}>
            *
          </em>
          : null}
    </Tag>
  )
}

export default Label
