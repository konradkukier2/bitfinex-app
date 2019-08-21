import { UPDATE_TICKER, SUBSCRIBE_TICKER, UNSUBSCRIBE_TICKER } from './types'

const INITIAL_STATE = {
  channel: null,
  symbol: null,
  chanId: null,
  pair: null,
  subscribed: false,
  data: {
    bid: 0,
    bidSize: 0,
    ask: 0,
    askSize: 0,
    dailyChange: 0,
    dailyChangePerc: 0,
    lastPrice: 0,
    volume: 0,
    high: 0,
    low: 0,
  }
}

export const tickerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_TICKER:
      return { ...state, data: action.payload }
    case SUBSCRIBE_TICKER:
      return { ...state,  ...action.payload, subscribed: true }
    case UNSUBSCRIBE_TICKER:
      return { ...state, subscribed: false, chanId: null, pair: null, channel: null, symbol: null }
    default:
      return state;
  }
}