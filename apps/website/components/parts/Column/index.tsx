import React from 'react'
import styles from './column.module.scss'

type columnTypes = {
  children: React.ReactNode
  className?: string
  align?: string
}

const Column = ({
  className,
  align,
  children,
  ...rest
}: columnTypes): JSX.Element => {
  return (
    <div
      {...rest}
      className={[
        className,
        styles.column,
        align && styles[`align-${align}`]
      ].join(' ')}
    >
      {children}
    </div>
  )
}

export default Column
