import React, {FC} from 'react'
import styles from './Label.module.scss'

export type LabelProps = {
  text: string
  required?: boolean
  isRequiredText: string
  labelHidden?: boolean
  disabled?: boolean
  className?: string
}

export const Label: FC<LabelProps> = ({
  text,
  required = false,
  isRequiredText,
  labelHidden = false,
  disabled,
  className,
}: LabelProps) => {
  return (
    <span className={`
      ${styles['label-text-component']}
      ${styles[disabled ? 'is-disabled' : '']}
      ${styles[required ? 'is-required' : '']}
      ${labelHidden ? 'sr-only' : ''}
      ${className ? className : ''}
      `}>
      {text + ':'}
      {required ?
        <em
          className={styles['required-text']}
          title={isRequiredText? `${isRequiredText}` : 'is required'}>
          *
        </em>
        : null}
    </span>
  )
}

export default Label
