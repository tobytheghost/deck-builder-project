import React from 'react'
import styles from './typography.module.scss'

type paragraphProps = {
  children: React.ReactNode
  className?: string
  color?: string
}

const P = (props: paragraphProps) => {
  const { color, children, className, ...rest } = props
  const paragraphClass = [styles['paragraph'], className, color && styles[color]]
    .filter(Boolean)
    .join(' ')
  return (
    <p {...rest} className={paragraphClass}>
      {children}
    </p>
  )
}

P.defaultProps = {
  color: 'grey'
}

export default P
