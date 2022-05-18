import React from 'react'
import styles from './typography.module.scss'

type h3Props = {
  children: React.ReactNode
  className?: string
  color?: string
}

const H3 = (props: h3Props) => {
  const { color, children, className, ...rest } = props
  const h3Class = [styles['h3'], className, color && styles[color]]
    .filter(Boolean)
    .join(' ')
  return (
    <h3 {...rest} className={h3Class}>
      {children}
    </h3>
  )
}

H3.defaultProps = {
  color: 'grey'
}

export default H3
