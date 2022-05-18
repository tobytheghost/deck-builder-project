import React from 'react'
import styles from './form.module.scss'

type formProps = {
  children: React.ReactNode
  className?: string,
  onSubmit?: (e: React.SyntheticEvent) => void
}

const Form = (props: formProps) => {
  const { children, className, ...rest } = props
  const formClass = [styles['form'], className].filter(Boolean).join(' ')
  return (
    <form {...rest} className={formClass}>
      {children}
    </form>
  )
}

Form.defaultProps = {
  type: 'text'
}

export default Form
