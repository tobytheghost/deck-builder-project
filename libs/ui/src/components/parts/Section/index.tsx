import React from 'react'
import styles from './section.module.scss'

type sectionTypes = {
  children: React.ReactNode
  className?: string
  align?: string,
  style?: object
}

const Section = ({
  className,
  children,
  style,
  ...rest
}: sectionTypes): JSX.Element => {
  return (
    <section {...rest} className={[className, styles['section']].join(' ')}>
      {children}
    </section>
  )
}

export default Section
