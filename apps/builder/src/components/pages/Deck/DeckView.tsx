import React, { useEffect } from 'react'
import { Column, Container, H1, H2, H3, P, Row } from '@deck-app/ui'
import Page from '../../parts/Page'
import {
  CardItemTypes,
  DeckStateTypes
} from '../../../../src/contexts/DeckTypes'
import styles from './deck.module.scss'
import { Tags } from './Tag'
import { useDeckViews } from './useDeckViews'
import { UserStateType } from '../../../contexts/ProfileTypes'
import { QR } from '../../QR'
import { ManaSymbols } from '../../../helpers/deckList'
import { useCardPreview } from '../../../contexts/CardPreviewContext'
import { formatEUR, formatUSD } from '../../../helpers/formatMoney'

interface TypeViewTypes {
  typeKey: string
  list: CardItemTypes[]
}

interface BoardViewTypes {
  boardKey: string
  list: TypeViewTypes[]
}

interface RatingTypes {
  rating: number
  numberOfRatings: number
}

type DeckProps = DeckStateTypes & UserStateType & RatingTypes

const DeckView = (props: DeckProps) => {
  const {
    image,
    deck_name: deckName,
    tag,
    format,
    timestamp,
    display_name: displayName,
    rating,
    numberOfRatings,
    list
  } = props
  const views = useDeckViews(props)
  const { scryfallData, handleSetCard } = useCardPreview()

  useEffect(() => {
    if(list.length) {
      handleSetCard(list[0])
    }
  }, [list, handleSetCard])

  console.log(scryfallData)
  return (
    <Page>
      <Container>
        <Row className={styles['container']}>
          <Column className={styles['image-container']}>
            <img src={image} alt={deckName} />
          </Column>
          <Column className={styles['content-container']}>
            <div style={{ textAlign: 'left' }}>
              <H1>{deckName}</H1>
              <Tags tag={tag} format={format} />
              <P>User: {displayName}</P>
              {timestamp && (
                <P>Last updated: {timestamp.toDate().toLocaleDateString()}</P>
              )}
              <P>
                Community Rating: {Math.ceil(rating)} ({numberOfRatings})
              </P>
            </div>
            <div style={{}}>
              <QR qrTitle={'Deck Link'} imageName={deckName} />
            </div>
          </Column>
        </Row>
      </Container>
      <Container>
        <Column className={styles['preview']}>
          {scryfallData && (
            <>
              <div
                style={{
                  display: 'flex',
                  border: `5px solid ${scryfallData.border_color}`,
                  borderRadius: '10px',
                  marginBottom: '1rem',
                }}
              >
                <img
                  src={scryfallData.image_uris.border_crop}
                  alt={scryfallData.name}
                />
              </div>
              <div
                style={{
                  marginBottom: '1rem'
                }}
              >
                <P>
                  Normal - {formatUSD(scryfallData.prices.usd)} |{' '}
                  {formatEUR(scryfallData.prices.eur)}
                </P>
                <P>
                  Foil - {formatUSD(scryfallData.prices.usd_foil)} |{' '}
                  {formatEUR(scryfallData.prices.eur_foil)}
                </P>
              </div>
              <div
                style={{
                  marginBottom: '1rem'
                }}
              >
                {scryfallData.scryfall_uri && (
                  <P>
                    <a
                      href={scryfallData.scryfall_uri}
                      target='_blank'
                      rel='noreferrer'
                    >
                      Scryfall
                    </a>
                  </P>
                )}
                {scryfallData.related_uris.gatherer && (
                  <P>
                    <a
                      href={scryfallData.related_uris.gatherer}
                      target='_blank'
                      rel='noreferrer'
                    >
                      Gatherer
                    </a>
                  </P>
                )}
                {scryfallData.related_uris.edhrec && (
                  <P>
                    <a
                      href={scryfallData.related_uris.edhrec}
                      target='_blank'
                      rel='noreferrer'
                    >
                      Edhrec
                    </a>
                  </P>
                )}
              </div>
              <div
                style={{
                  marginBottom: '1rem'
                }}
              >
                {scryfallData.purchase_uris.tcgplayer && (
                  <P>
                    <a
                      href={scryfallData.purchase_uris.tcgplayer}
                      target='_blank'
                      rel='noreferrer'
                    >
                      TCGPlayer
                    </a>
                  </P>
                )}
                {scryfallData.purchase_uris.cardmarket && (
                  <P>
                    <a
                      href={scryfallData.purchase_uris.cardmarket}
                      target='_blank'
                      rel='noreferrer'
                    >
                      Cardmarket
                    </a>
                  </P>
                )}
                {scryfallData.purchase_uris.cardhoarder && (
                  <P>
                    <a
                      href={scryfallData.purchase_uris.cardhoarder}
                      target='_blank'
                      rel='noreferrer'
                    >
                      Cardhoarder
                    </a>
                  </P>
                )}
              </div>
            </>
          )}
        </Column>
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
      <span className={styles['deck-section']}>
        {list.map((type: { typeKey: string; list: CardItemTypes[] }) => (
          <TypeView key={type.typeKey} {...type} />
        ))}
      </span>
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
      {list.map(({ name, quantity, mana_cost }) => (
        <P key={name} className={styles['card']}>
          <span>
            {quantity} {name}
          </span>
          <span>
            <ManaSymbols text={mana_cost} />
          </span>
        </P>
      ))}
    </React.Fragment>
  )
}

export default DeckView
