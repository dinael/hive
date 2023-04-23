import React, { FC } from 'react'
import styles from './Blockquote.module.scss'

export type BlockquoteProps = {
  title?: string
  footer?: string
  variant: 'fancy' | 'flat'
  className?: string
  children: React.ReactNode
}

export const Blockquote: FC<BlockquoteProps> = ({
  title = '',
  footer = '',
  children,
  variant = 'fancy',
  className = '',
  ...props
}: BlockquoteProps) => {

  const BlockquoteTitle = ({children}:BlockquoteProps) => (
    <p className={styles['blockquote-title']}>
      {children}
    </p>
  )

  const BlockquoteHeader = ({children}:BlockquoteProps) => (
    <header className={styles['blockquote-header']}>
      {children}
    </header>
  )

  const BlockquoteContent = ({children}:BlockquoteProps) => (
    <div className={styles['blockquote-content']}>
      {children}
    </div>
  )

  const BlockquoteFooter = ({children}:BlockquoteProps) => (
    <footer className={styles['blockquote-footer']}>
      {children}
    </footer>
  )

  const BlockquoteItem = () => (
    <blockquote
      className={
        `${styles['blockquote-component']}
          ${styles[variant]}
          ${className ? className : ''}`
      }
      {...props}>
      {title ?
        <BlockquoteHeader variant={'fancy'}>
          {title ?
            <BlockquoteTitle variant={'fancy'}>
              {title}
            </BlockquoteTitle>
          : null}
        </BlockquoteHeader>
      : null}
      {children &&
        <BlockquoteContent variant={'fancy'}>
          {children}
        </BlockquoteContent>}
      {footer &&
        <BlockquoteFooter variant={'fancy'}>
          {footer}
        </BlockquoteFooter>}
    </blockquote>
  )

  return (
    <BlockquoteItem />
  )
}

export default Blockquote
