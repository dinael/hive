import { FC, ChangeEvent, FocusEvent, useState } from 'react'
import { Label as LabelText } from '../label/Label'
//import styles from './Inputfile.module.scss'
// TODO: dar estilos
export type InputFileProps = {
  name?: string
  label: string
  value?: string
  id?: string
  labelHidden?: boolean
  error?: boolean
  errorText?: string
  disabled?: boolean
  required?: boolean
  isRequiredText?: string
  maxLength?: number
  className?: string
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void
  onFileChange: (file: File | null) => void;
};

export const InputFile: FC<InputFileProps> = ({
  label,
  name,
  value,
  id,
  labelHidden,
  error,
  errorText,
  disabled,
  required,
  isRequiredText,
  maxLength,
  className,
  onFocus,
  onFileChange
}: InputFileProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true)
    onFocus && onFocus(event)
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file);
    onFileChange(file);
  };

  return (
    <label>
      <LabelText
        onlyText
        text={label}
        required={required}
        isRequiredText={`${isRequiredText}`}
        labelHidden={labelHidden} />
      <input
        type="file"
        name={name}
        onFocus={handleFocus}
        onChange={handleFileChange}
        disabled={disabled}
        className={error && !isFocused ? 'error' : ''}/>
      <p hidden>
        Selected File: {selectedFile ? selectedFile.name : 'None'}
      </p>
    </label>
  );
};

export default InputFile;
