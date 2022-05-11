import React from 'react'
import styles from './row.module.scss'

const Row = (props): JSX.Element => {
  return (
    <div {...props} className={[props.className, styles.row].join(' ')}>{props.children}</div>
  )
}

export default Row
