import React from 'react'
import styles from './button.module.scss'

type buttonProps = {
  children: React.ReactNode
  className?: string
  size?: 'small' | 'medium' | 'large'
  buttonType?: 'primary' | 'secondary'
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit' | 'reset',
  disabled?: boolean
}

const Button = (props: buttonProps) => {
  const { buttonType, type, className, size, ...rest } = props
  const buttonClass = [
    styles['button'],
    className,
    buttonType && styles[buttonType],
    size && styles[size]
  ]
    .filter(Boolean)
    .join(' ')
  return (
    <button {...rest} className={buttonClass}>
      {props.children}
    </button>
  )
}

Button.defaultProps = {
  size: 'medium',
  buttonType: 'primary',
  type: 'button'
}

export default Button
