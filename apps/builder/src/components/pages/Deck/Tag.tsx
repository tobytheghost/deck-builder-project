import { P } from '@deck-app/ui';
import styles from './tag.module.scss'

export const Tags = ({ tag, format }: { tag: string; format: string }) => {
  if (!tag && !format) return null

  const Tag = ({
    string,
    type
  }: {
    string: string
    type: 'tag' | 'format'
  }) => {
    const tagClass = [
      styles[type],
      styles[`${type}-${string.toLowerCase()}`]
    ].join(' ')
    return <span className={tagClass}>{string}</span>
  }
  return (
    <P>
      {format && <Tag string={format} type='format' />}
      {tag && <Tag string={tag} type='tag' />}
    </P>
  )
}
