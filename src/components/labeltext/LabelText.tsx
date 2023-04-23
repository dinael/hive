import React, {FC} from 'react'
import styles from './LabelText.module.scss'

export type LabelTextProps = {
  text: string
  required?: boolean
  isRequiredText: string
  labelHidden?: boolean
  disabled?: boolean
  className?: string
}

export const LabelText: FC<LabelTextProps> = ({
  text,
  required = false,
  isRequiredText,
  labelHidden = false,
  disabled,
  className,
}: LabelTextProps) => {
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

export default LabelText
