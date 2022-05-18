import React from 'react'
import styles from './row.module.scss'

type rowTypes = {
  children: React.ReactNode
  className?: string
  align?: string
}

const Row = ({ className, children, ...rest }: rowTypes): JSX.Element => {
  return (
    <div {...rest} className={[className, styles['row']].join(' ')}>
      {children}
    </div>
  )
}

export default Row
