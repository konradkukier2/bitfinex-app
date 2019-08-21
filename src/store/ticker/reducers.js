import { SELECT_TICKER } from './types'

const INITIAL_STATE = {
  selected: 'BTCUSD',
}

export const tickerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_TICKER:
      return { ...state, selected: action.payload }

    default:
      return state;
  }
}