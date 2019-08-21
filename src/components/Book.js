import React, { useState, useEffect } from 'react';
import { Icon } from 'react-icons-kit';
import { bitcoin } from 'react-icons-kit/fa/bitcoin';
import { infoCircle } from 'react-icons-kit/fa/infoCircle';
import { caretDown } from 'react-icons-kit/fa/caretDown';
import { caretUp } from 'react-icons-kit/fa/caretUp';
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