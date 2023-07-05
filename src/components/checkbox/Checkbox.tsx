import { FC, useState, ChangeEvent } from 'react'
import styles from './Checkbox.module.scss'
import { Label as LabelText } from '../label/Label'
import { Icon } from '../icon/Icon'

export type CheckboxProps = {
  value?: string
  label: string
  id?: string
  required?: boolean
  disabled?: boolean
  className?: string
  onChecked?: (isChecked: boolean) => void
  onError?: (error: boolean) => void
  error: boolean
  errorText?: string
}

export const Checkbox: FC<CheckboxProps> = ({
  label= '',
  id,
  required = false,
  disabled = false,
  className = '',
  onChecked,
  onError,
  error,
  errorText,
  ...props
}) => {

  const [isChecked, setIsChecked] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
    onChecked && onChecked(e.target.checked)
  }

  const handleOnError = () => {
    setHasError(true)
    onError && onError(error)
  }

  return (
      <label
        key={id}
        htmlFor={id}
        className={`
          ${styles['checkbox-component']}
          ${disabled ? styles['disabled'] : ''}
          ${className ? className : ''}
        `}
        {...props}>
        <input
          id={id}
          type="checkbox"
          checked={isChecked}
          onChange={handleChecked}
          onError={handleOnError}
          disabled={disabled}
          aria-checked={isChecked}
          role="checkbox"
          required={required}
          aria-aria-describedby={`validation-message-${id}`}
        />
      <LabelText
        onlyText
        text={label}
      />
      {error ?
        <span
          className={styles['validation-message']}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          id={`validation-message-${id}`}>
          <Icon
            name="close"
            size="xs"/>
          {errorText}
        </span>
      : null}
      </label>
  )
}

export default Checkbox
