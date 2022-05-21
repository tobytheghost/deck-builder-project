import React from 'react'
import { Column, Container, H1, H2, H3, P, Row } from '@deck-app/ui'
import Page from '../../parts/Page'
import {
  CardItemTypes,
  DeckStateTypes
} from '../../../../src/contexts/DeckTypes'
import styles from './deck.module.scss'
import { Tags } from './Tag'
import { useDeckViews } from './useDeckViews'

type TypeViewTypes = { typeKey: string; list: CardItemTypes[] }

type BoardViewTypes = {
  boardKey: string
  list: TypeViewTypes[]
}

const DeckView = (props: DeckStateTypes) => {
  const { image, deck_name: deckName, tag, format, timestamp } = props
  const views = useDeckViews(props, '')
  return (
    <Page>
      <Container>
        <Row className={styles['container']}>
          <Column className={styles['image-container']}>
            <img src={image} alt={deckName} />
          </Column>
          <Column className={styles['content-container']}>
            <H1>{deckName}</H1>
            <Tags tag={tag} format={format} />
            <P>User: </P>
            {timestamp && <P>Last updated: {timestamp.toDate().toLocaleDateString()}</P>}
            <P>Community Rating:</P>
          </Column>
        </Row>
      </Container>
      <Container>
        <Column className={styles['list']}>
          {views.map((board: BoardViewTypes) => (
            <BoardView key={board.boardKey} {...board} />
          ))}
        </Column>
      </Container>
    </Page>
  )
}

const BoardView = (board: BoardViewTypes) => {
  const { boardKey, list } = board
  const length = list.reduce((prev, curr) => prev + curr.list.length, 0)
  if (!length) return null
  return (
    <React.Fragment>
      <H2 type='header'>
        {length} {boardKey}
      </H2>
      {list.map((type: { typeKey: string; list: CardItemTypes[] }) => (
        <TypeView key={type.typeKey} {...type} />
      ))}
    </React.Fragment>
  )
}

const TypeView = (type: TypeViewTypes) => {
  const { typeKey, list } = type
  if (!list.length) return null
  return (
    <React.Fragment>
      <H3>
        {list.length} {typeKey}
      </H3>
      {list.map(({ name, quantity }) => (
        <P key={name} className={styles['card']}>
          {quantity} {name}
        </P>
      ))}
    </React.Fragment>
  )
}

export default DeckView
