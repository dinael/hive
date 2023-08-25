import { FC } from 'react'
import styles from './Fieldset.module.scss'
import { Label as LabelText } from '../label/Label'

// /**
// Uso de fieldset y legend
// Los elementos fieldset y legend de HTML se emplean para agrupar e identificar un conjunto de controles de formulario que están relacionados entre sí.

// Los lectores de pantalla normalmente leen el contenido de legend para cada control dentre de un fieldset, por lo que su contenido debería ser corto y descriptivo.

// Fieldset se debería utilizar únicamente para agrupar un conjunto de controles que necesitan una descripción para mejorar la accesibilidad, como por ejemplo un grupo de botones de radio o casillas de verificación.
// */

export type FieldsetProps = {
  legend?: string
  children?: any
  flat?: boolean
  required?: boolean
  isRequiredText?: string
  legendHidden?: boolean
  className?: string
}

export const Fieldset: FC<FieldsetProps> = ({
  legend,
  children,
  flat = false,
  required = false,
  isRequiredText,
  legendHidden = false,
  className,
  ...props
}: FieldsetProps) => {

  const fieldsetStyles = `
    ${styles['fieldset-component']}
    ${flat ? styles['flat'] : ''}
    ${className || ''}
  `

  return (
    <fieldset
      className={fieldsetStyles}
      {...props }>
      {legend ?
        <legend>
          <LabelText
            onlyText
            className={`${styles['inputfiled-label']}`}
            text={`${legend}`}
            required={required}
            isRequiredText={`${isRequiredText}`}
            labelHidden={legendHidden}/>
        </legend>
        : null}
        {children}
    </fieldset>
  )
}

export default Fieldset
