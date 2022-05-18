import React from 'react'
import styles from './typography.module.scss'

type h2Props = {
  children: React.ReactNode
  className?: string
  color?: string
}

const H2 = (props: h2Props) => {
  const { color, children, className, ...rest } = props
  const h2Class = [styles['h2'], className, color && styles[color]]
    .filter(Boolean)
    .join(' ')
  return (
    <h2 {...rest} className={h2Class}>
      {children}
    </h2>
  )
}

H2.defaultProps = {
  color: 'grey'
}

export default H2
