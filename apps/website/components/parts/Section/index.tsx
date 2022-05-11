import React from 'react'
import styles from './section.module.scss'

const Section = (props): JSX.Element => {
  return <section {...props} className={[props.className, styles.section].join(' ')}>{props.children}</section>
}

export default Section
