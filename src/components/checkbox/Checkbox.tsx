import { FC, useState, ChangeEvent, useRef, useEffect } from 'react'
import { v4 as uuid } from 'uuid'

import styles from './Checkbox.module.scss'

import { Label as LabelText } from '../label/Label'
import ValidationMessage from '../validationmessage/ValidationMessage'
import { Icon } from '../icon/Icon'

export type CheckboxProps = {
  label: string
  id?: string
  name?: string
  value?: string
  indeterminate?: boolean
  isChecked?: boolean
  required?: boolean
  disabled?: boolean
  variant?: 'default' | 'switch' | 'chip'
  checkPosition?: 'right' | 'left'
  className?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onError?: (error: boolean) => void
  error?: boolean
  errorText?: string
}

export const Checkbox: FC<CheckboxProps> = ({
  label,
  id,
  name,
  value,
  indeterminate = false,
  required = false,
  disabled = false,
  variant = 'default',
  checkPosition = 'right',
  className,
  onChange,
  onError,
  error = false,
  errorText,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(false)
  const [isIndeterminate, setIsIndeterminate] = useState(indeterminate);
  const [hasError, setHasError] = useState(false)

  const cRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (cRef.current) {
      cRef.current.indeterminate = indeterminate
    }
  }, [indeterminate])

  const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
    const newCheckedValue = e.target.checked;
    setIsChecked(newCheckedValue);

    if (newCheckedValue && isIndeterminate) {
      setIsIndeterminate(false);
    }

    if (onChange) {
      onChange(e);
    }
  }

  const handleBlur = () => {
    if (hasError && onError) {
      onError(true);
    }
  }

  const Id = id ? id : uuid();

  const checkboxStyles = `
    ${styles['checkbox-component']}
    ${styles[variant]}
    ${checkPosition ? styles[checkPosition] : 'right'}
    ${disabled ? styles['disabled'] : ''}
    ${hasError ? styles['error'] : ''}
    ${styles[indeterminate ? 'indeterminate' : '']}
    ${className || ''}
  `

  const iconName = isChecked ? 'less-circle' : 'add-circle'

  return (
    <label
      key={`checkbox-${Id}`}
      htmlFor={`checkbox-${Id}`}
      className={checkboxStyles}>
      <LabelText
        className={styles['checkbox-component-label']}
        onlyText
        text={label}
      />
      <input
        className={styles['checkbox-component-input']}
        id={`checkbox-${Id}`}
        name={name}
        type="checkbox"
        checked={isChecked}
        onChange={handleChecked}
        onBlur={handleBlur}
        disabled={disabled}
        required={required}
        aria-aria-describedby={`checkbox-validation-message-${Id}`}
        ref={cRef}
        {...props}
      />
      {variant === 'chip' &&
        <Icon
          size={'l'}
          name={iconName} />
      }
      {error &&
        <ValidationMessage
          className={styles['checkbox-validation-message']}
          message={errorText || ''}
          kind='error'
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          id={`validation-message-${Id}`} />
      }
    </label>
  )
}

export default Checkbox
