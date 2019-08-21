import { UPDATE_BOOK, UPDATE_BOOK_ENTRIES, SUBSCRIBE_BOOK, UNSUBSCRIBE_BOOK } from './types'

const INITIAL_STATE = {
  channel: null,
  symbol: null,
  chanId: null,
  prec: 'P0',
  freq: 'F0',
  len: null,
  pair: null,
  subscribed: false,
  data: {}
}

export const bookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_BOOK:
      return { ...state, data: action.payload }
    case UPDATE_BOOK_ENTRIES:
      const updatedEntries = action.payload;
      const newData = { ...state.data };
      updatedEntries.forEach(entry => {
        if (entry[1] !== 0) {
          newData[entry[0]] = entry;
        }
      });
      return { ...state, data: newData }
    case SUBSCRIBE_BOOK:
      return { ...state, ...action.payload, subscribed: true }
    case UNSUBSCRIBE_BOOK:
      return { ...state, subscribed: false, chanId: null, channel: null, symbol: null, prec: null, freq: null, len: null, pair: null }
    default:
      return state;
  }
}