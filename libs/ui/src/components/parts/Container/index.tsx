import React from 'react'
import styles from './container.module.scss'

type containerTypes = {
  children: React.ReactNode
  className?: string
  align?: string
}

const Container = ({
  className,
  children,
  align,
  ...rest
}: containerTypes): JSX.Element => {
  return (
    <div
      {...rest}
      className={[
        className,
        styles['container'],
        align && styles[`align-${align}`]
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}

export default Container
