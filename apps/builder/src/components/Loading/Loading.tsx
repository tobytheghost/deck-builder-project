import styles from './Loading.module.scss'

const Loading = (props: { content: string }) => {
  const { content } = props
  return (
    <div className={styles['loading']}>{content ? content : 'Loading ...'}</div>
  )
}

export default Loading
