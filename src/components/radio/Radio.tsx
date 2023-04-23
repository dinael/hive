import React, { FC, useState } from 'react'

export type InputRadioProps = {
  value: string
  id?: string,
  onChange: (value: string) => void
  label: string
  required?: boolean
  error?: boolean
  errorText?: string
  className?: string
}

export const InputRadio: FC<InputRadioProps> = ({
  value,
  id,
  onChange,
  label,
  required = false,
  error,
  errorText,
  className,
  ...props
}) => {

  const [isSelected, setTouched] = useState(false)
  const [hasError, setError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  const handleBlur = () => {
    setTouched(true)
  }

  return (
    <label
      htmlFor={id}
      className={`${className ? className : ''}`}
      {...props}>
      <span>{label}</span>
      <input
        id={id}
        type="radio"
        name="inputRadio"
        value={value}
        checked={value === value}
        onChange={handleChange}
        onBlur={handleBlur}
        required={required}
        aria-describedby={error ? `validation-message-${id}` : ''}
      />
      {error ?
        <span
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          id={`validation-message-${id}`}>
          {errorText}
        </span> : null}
    </label>
  )
}

export default InputRadio
