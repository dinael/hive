import { FC, ChangeEvent } from 'react'

import styles from './Inputselect.module.scss'

import { Icon } from '@/components/icon/Icon'
import { ValidationMessage } from '@/components/validationmessage/ValidationMessage'
import { Label as LabelText } from '@/components/label/Label'

export type Option = {
  id?: string
  value?: string
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
  value: string
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
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
  value,
  onChange,
  options,
  error,
  errorText,
  disabled,
  required = false,
  isFocused,
  className,
  ...props
}) => {

  const selectStyles = `
    ${styles['input-select-component']}
    ${error ? 'has-error' : ''}
    ${className || ''}
  `

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
      className={selectStyles}
      htmlFor={id}
      {...props}>
      <LabelText
        onlyText
        className={`${styles['input-select-label']}`}
        text={label}
        required={required}
        isRequiredText={'Este elemento es requerido'}
        labelHidden={labelHidden} />
      <select
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        aria-describedby={`validation-message-${id}`}>
        {renderOptions(options)}
      </select>
      <Icon
        className={styles.icon}
        name="chevron-down"
        size="xs"
        title={''} />
      {error && !isFocused ?
        <ValidationMessage
          className={styles['input-select-validation-message']}
          message={`${errorText}`}
          kind='error'
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          id={`validation-message-${id}`} />
        : null}
    </label>
  )
}

export default Inputselect
