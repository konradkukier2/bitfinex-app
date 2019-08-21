import { UPDATE_TICKER, SUBSCRIBE_TICKER, UNSUBSCRIBE_TICKER } from './types';

export function subscribeTicker({ channel, chanId, pair, symbol }) {
  return {
    type: SUBSCRIBE_TICKER,
    payload: {
      channel,
      chanId,
      pair,
      symbol,
    },
  }
}

export function unsubscribeTicker() {
  return {
    type: UNSUBSCRIBE_TICKER,
    payload: null,
  }
}

export function updateTicker(data) {
  return {
    type: UPDATE_TICKER,
    payload: data,
  }
}