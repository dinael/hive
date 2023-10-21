import { FC, useState, ChangeEvent, FocusEvent } from 'react'

import styles from './Inputfield.module.scss'

import Icon from '@/components/icon/Icon'
import ValidationMessage from '@/components/validationmessage/ValidationMessage'
import { Label as LabelText } from '@/components/label/Label'

export type InputfieldProps = {
  label: string
  labelHidden?: boolean
  id?: string
  name?: string
  type?: 'text' | 'email' | 'password' | 'search' | 'number' | 'tel' | 'url' | 'date' | 'datetime-local' | 'time' | 'datetime' | 'mouth' | 'week' | 'year'
  placeholder?: string | undefined
  value?: string | number
  error?: boolean
  errorText?: string
  readOnly?: boolean
  disabled?: boolean
  spellcheck?: boolean
  required?: boolean
  isRequiredText?: string
  maxLength?: number
  className?: string
  datalistId?: string
  dataList?: string[]
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Inputfield: FC<InputfieldProps> = ({
  label = '',
  labelHidden = false,
  id,
  name,
  type = 'text',
  placeholder = '',
  value,
  error = false,
  errorText = 'This field has a error',
  readOnly = false,
  disabled = false,
  spellcheck = false,
  required = false,
  isRequiredText,
  maxLength,
  className,
  datalistId,
  dataList,
  onBlur,
  onFocus,
  onChange,
  ...props
}: InputfieldProps) => {

  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setValue] = useState<string | number>('')
  const [hasError, setError] = useState('')

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true)
    onFocus && onFocus(event)
  }

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)
    onBlur && onBlur(event)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    onChange && onChange(event)
  }

  const inputLabelText =
    <LabelText
      onlyText
      className={`${styles['inputfiled-label']}`}
      text={label}
      required={required}
      isRequiredText={`${isRequiredText}`}
      labelHidden={labelHidden} />

  const validationMessage = error && !isFocused ? (
    <ValidationMessage
      className={styles['input-field-validation-message']}
      message={`${errorText}`}
      kind='error'
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      id={`validation-message-${id}`}
    />
  ) : null;

  const datalistOptions = dataList && datalistId ? (
    <datalist id={datalistId}>
      {dataList && dataList.map((item, index) => (
        <option key={index} value={item}></option>
      ))}
    </datalist>
  ) : null



  // TODO: ADD ICON
  return (
    <>
      <label
        htmlFor={id}
        className={`
        ${styles['inputfiled-component']}
        ${error ? styles['has-error'] : ''}
        ${className ? className : ''}
      `}
        {...props}>
        {inputLabelText}
        <input
          className={error && !isFocused ? 'error' : ''}
          id={id}
          name={name}
          type={type ? type : 'text'}
          placeholder={placeholder}
          value={hasValue}
          required={required}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          maxLength={maxLength}
          readOnly={readOnly}
          disabled={disabled}
          spellCheck={spellcheck}
          list={datalistId}
          aria-describedby={`validation-message-${id}`}
        />
        {validationMessage}
        {datalistOptions}
      </label>
    </>
  )
}

export default Inputfield
