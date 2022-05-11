import React from 'react'
import styles from './button.module.scss'

type buttonProps = {
  children: React.ReactNode
  className: string,
  size?: string
  buttonType?: string
}

const Button = (props: buttonProps) => {
  const { buttonType, className, size, ...rest } = props
  const buttonClass = [styles.button, className, buttonType && styles[buttonType], size && styles[size]].filter(Boolean).join(' ')
  return (
    <button {...rest} className={buttonClass}>
      {props.children}
    </button>
  )
}

Button.defaultProps = {
  size: 'medium',
  buttonType: 'primary'
}

export default Button
