import { FC } from 'react'
import styles from './Image.module.scss'

export type ImageProps = {
  src: string
  srcSet?: { src: string; size: string }[]
  alt: string
  width?: string
  height?: string
  ratio?: 'none' | 'ratio-1:1' | 'ratio-1:2' | 'ratio-2:1' | 'ratio-2:3' | 'ratio-3:1' | 'ratio-3:2' | 'ratio-3:4' | 'ratio-4:3' | 'ratio-4:5' | 'ratio-5:4' | 'ratio-9:16' | 'ratio-16:9' | 'ratio-16:9' | 'ratio-21:9' | 'ratio-72:25'
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down' | 'unset'
  disabled?: boolean
  className?: string
}

export const Image: FC<ImageProps> = ({
  src,
  srcSet,
  alt,
  width = undefined,
  height = undefined,
  ratio = 'none',
  fit = 'cover',
  disabled = false,
  className,
  ...props
}: ImageProps) => {
  if (!srcSet || !Array.isArray(srcSet) || srcSet.length === 0) {
    return (
      <img
        className={`
          ${styles['image-component']}
          ${disabled === true ? styles['disabled'] : ''}
          ${ratio && styles[ratio]}
          ${fit && styles[fit]}
          ${className ? className : ''}
        `}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        {...props} />
    )
  }

  const imageDefault = srcSet[0].src

  const srcSetString = srcSet
    .map((obj) => `${obj.src} ${obj.size}`).join(',')
// TODO: Add responsive sizes into sizes parameter
  return (
    <img
      className={`
        ${styles['image-component']}
        ${disabled === true ? styles['disabled'] : ''}
        ${ratio && styles[ratio]}
        ${fit && styles[fit]}
        ${className && className}
      `}
      src={imageDefault}
      srcSet={srcSetString}
      alt={alt}
      width={width ? width : ''}
      height={height ? height : ''}
      loading="lazy"
      {...props} />
  )
}

export default Image


