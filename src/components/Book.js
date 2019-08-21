import React from 'react';
import './Book.scss';
import BookBids from './BookBids';
import BookAsks from './BookAsks';

function Book({ entries }) {
  const bids = {};
  const asks = {};
  Object.values(entries).forEach(entry => {
    if (entry[2] > 0) {
      bids[entry[0]] = entry;
    }
    if (entry[2] < 0) {
      asks[entry[0]] = entry;
    }
  });
  return (
    <div className="book-root">
      <BookBids bids={bids} />
      <BookAsks asks={asks} />
    </div>
  )
}

export default Book;