import { SELECT_TICKER } from './types'

export function selectTicker(ticker) {
  return {
    type: SELECT_TICKER,
    payload: ticker,
  }
}
