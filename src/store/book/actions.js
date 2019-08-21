import { UPDATE_BOOK, UPDATE_BOOK_ENTRIES, SUBSCRIBE_BOOK, UNSUBSCRIBE_BOOK } from './types';

export function subscribeBook({ channel, chanId, pair, symbol }) {
  return {
    type: SUBSCRIBE_BOOK,
    payload: {
      channel,
      chanId,
      pair,
      symbol,
    },
  }
}

export function unsubscribeBook() {
  return {
    type: UNSUBSCRIBE_BOOK,
    payload: null,
  }
}

export function updateBook(bookData) {
  return {
    type: UPDATE_BOOK,
    payload: bookData,
  }
}

export function updateBookEntries(entries) {
  return {
    type: UPDATE_BOOK_ENTRIES,
    payload: entries,
  }
}