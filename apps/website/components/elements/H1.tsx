import React from 'react'
import styles from './typography.module.scss'

type h1Props = {
  children: React.ReactNode
  className?: string
  color?: string
}

const H1 = (props: h1Props) => {
  const { color, children, className, ...rest } = props
  const h1Class = [styles.h1, className, color && styles[color]]
    .filter(Boolean)
    .join(' ')
  return (
    <h1 {...rest} className={h1Class}>
      {children}
    </h1>
  )
}

H1.defaultProps = {
  color: 'grey'
}

export default H1
