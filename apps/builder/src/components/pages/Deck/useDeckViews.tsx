import { DeckStateTypes } from '../../../../src/contexts/DeckTypes'

export const useDeckViews = (deck: DeckStateTypes, filter?: string) => {
  const boards = ['Main Deck', 'Sideboard']

  const types = [
    'Commander',
    'Creatures',
    'Artifacts',
    'Enchantments',
    'Instants',
    'Planeswalkers',
    'Sorceries',
    'Lands'
  ]

  const views = boards.map(boardKey => {
    return {
      boardKey,
      list: types.map(typeKey => {
        return {
          typeKey,
          list: deck.list
            .filter(({ board, type }) => board === boardKey && type === typeKey)
            .sort((a, b) => {
              if (a.name > b.name) return 1
              if (a.name < b.name) return -1
              return 0
            })
            // .sort((a, b) => {
            //   if (a.cmc > b.cmc) return 1
            //   if (a.cmc < b.cmc) return -1
            //   return 0
            // })
        }
      })
    }
  })

  return views
}
