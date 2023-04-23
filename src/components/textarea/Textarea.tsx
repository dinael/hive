import React, { FC, useState } from 'react'
import styles from './Textarea.module.scss'
import Icon from '../icon/Icon'
import ValidationMessage from '../validationmessage/ValidationMessage'
import LabelText from '../labeltext/LabelText'

export type TextareaProps = {
  label: string
  labelHidden?: boolean
  id?: string
  value?: string
  placeholder?: string
  onBlur?: any
  onFocus?: any
  onChange?: any
  errorText?: string
  rows?: number
  cols?: number
  required?: boolean
  isRequiredText?: string
  disabled?: boolean
  readOnly?: boolean
  maxlength?: number
  className?: string
}

export const Textarea: FC<TextareaProps> = ({
  label,
  labelHidden = false,
  id,
  value,
  placeholder,
  onBlur,
  onFocus,
  onChange,
  errorText,
  rows,
  cols,
  required = false,
  isRequiredText,
  disabled = false,
  readOnly = false,
  maxlength,
  className,
  ...props
}) => {

  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setValue] = useState('')
  const [hasError, setError] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  const handleChange = (e) => {
    const inputValue = e.target.value

    setValue(inputValue)
  }

  return (
    <label
      htmlFor={id}
      className={`
        ${styles['textarea-component']}
        ${hasError ? styles['has-error'] : ''}
        ${isFocused ? styles['is-focus'] : ''}
        ${className ? className : ''}
      `}
      {...props}>
      <LabelText
        className={`${styles['textarea-label']}`}
        text={label}
        required={required}
        isRequiredText={`${isRequiredText}`}
        labelHidden={labelHidden} />
      <textarea
        id={id}
        value={hasValue}
        placeholder={placeholder}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={handleChange}
        rows={rows}
        cols={cols}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        maxLength={maxlength}
        className={isFocused ? 'is-focused' : '' }
        aria-describedby={hasError ? `validation-message-${id}` : ''} />
      {hasError && !isFocused ?
        <ValidationMessage
          className={styles['textarea-validation-message']}
          message={`${errorText}`}
          kind='error'
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          id={`validation-message-${id}`}/>
      : null}
    </label>
  )
}

export default Textarea
