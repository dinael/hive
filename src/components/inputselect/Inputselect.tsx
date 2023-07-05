import React, { FC } from 'react'
import styles from './Inputselect.module.scss'
import { Icon } from '../icon/Icon'
import { ValidationMessage } from '../validationmessage/ValidationMessage'
import { Label as LabelText } from '../label/Label'

export type Option = {
  id?: string
  value: string
  disabled?: boolean
  hidden?: boolean
  select?: boolean
  option: string
}

export type InputselectProps = {
  label: string
  labelHidden?: boolean
  id?: string
  name?: string
  options: Option[] | { [groupName: string]: Option[] }
  error?: boolean
  errorText?: string
  disabled?: boolean
  required?: boolean
  isFocused?: boolean
  className?: string
}

export const Inputselect: FC<InputselectProps> = ({
  label,
  labelHidden = false,
  id,
  name,
  options,
  error,
  errorText,
  disabled,
  required = false,
  isFocused,
  className,
  ...props
}) => {

  const renderOptions = (options: InputselectProps['options']) => {
    if (Array.isArray(options)) {
      return options.map((option) => (
        <option
          key={option.id}
          value={option.value}
          disabled={option.disabled}
          hidden={option.hidden}
          selected={option.select}>
          {option.option}
        </option>
      ))
    } else {
      return Object.entries(options).map(([groupName, groupOptions]) => (
        <optgroup key={groupName} label={groupName}>
          {groupOptions.map((option) => (
            <option
              key={option.id}
              value={option.value}
              disabled={option.disabled}
              hidden={option.hidden}
              selected={option.select}>
              {option.option}
            </option>
          ))}
        </optgroup>
      ))
    }
  }

  return (
    <label
      className={`
        ${styles['inputselect-component']}
        ${error ? styles['has-error'] : ''}
        ${className ? className : ''}
      `}
      htmlFor={id}
      {...props}>
      <LabelText
        onlyText
        className={`${styles['inputselect-label']}`}
        text={label}
        required={required}
        isRequiredText={'Este elemento es requerido'}
        labelHidden={labelHidden}/>
      <select
        name={name}
        id={id}
        required={required}
        disabled={disabled}
        aria-describedby={`validation-message-${id}`}>
        {renderOptions(options)}
      </select>
      <Icon className={styles.icon} name="chevron-down" size="xs" title={''} />
      {error && !isFocused ?
        <ValidationMessage
          className={styles['input-select-validation-message']}
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

export default Inputselect
