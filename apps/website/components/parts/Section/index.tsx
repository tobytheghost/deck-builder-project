import React from 'react'
import styles from './section.module.scss'

const Section = ({ children }): JSX.Element => {
  return <section className={styles.section}>{children}</section>
}

export default Section
