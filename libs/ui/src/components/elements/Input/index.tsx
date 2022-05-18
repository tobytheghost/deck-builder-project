import React from 'react'
import styles from './input.module.scss'

type inputProps = {
  className?: string,
  type?: 'text' | 'email' | 'password',
  innerRef?: React.LegacyRef<HTMLInputElement> | undefined | null,
  required?: boolean
}

const Input = (props: inputProps) => {
  const { className, innerRef, type, ...rest } = props
  const inputClass = [styles['input'], className, type && styles[type]].filter(Boolean).join(' ')
  return (
    <input {...rest} type={type} ref={innerRef} className={inputClass} />
  )
}

Input.defaultProps = {
  type: 'text'
}

export default Input
