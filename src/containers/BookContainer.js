import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateBook, updateBookEntries, subscribeBook, unsubscribeBook } from '../store/book/actions';
import Book from '../components/Book';

const HARDCODED_SYMBOL = 'tBTCUSD';
const HARDCODED_CURRENCY = 'USD';
let initialized = false;

function BookContainer({ book, updateBook, updateBookEntries, subscribeBook, unsubscribeBook }) {
  const BOOK_CHANNEL_NAME = 'book';
  const HEARTBEAT_MSG = 'hb';
  let chanId = null;
  const [ name, setName ] = useState('');
  useEffect(() => {
    const wss = new WebSocket('wss://api-pub.bitfinex.com/ws/2');
    wss.onmessage = (msg) => {
      if (msg.data) {
        const data = JSON.parse(msg.data);
        // console.log('data', data);
        if (data && data.event && data.event === 'subscribed') {
          chanId = data.chanId;
          return subscribeBook(data);

        }
        if (Array.isArray(data) && data[1] && data[1] !== HEARTBEAT_MSG) {
          const [ id, result] = data; // price, count, amount
          const priceEntries = Array.isArray(result[0]) ? result : [result];
          chanId = id;
          updateBookEntries(priceEntries);
        }
      }
    }
    wss.onopen = () => {
      const msg = JSON.stringify({
        event: 'subscribe',
        channel: BOOK_CHANNEL_NAME,
        symbol: HARDCODED_SYMBOL,
        freq: book.freq
      });

      wss.send(msg);
      // setTimeout(() => {
      //   const unsub = JSON.stringify({
      //     event: "unsubscribe",
      //     chanId
      //  });
      //  console.log('unsubbing...')
      //  wss.send(unsub);
      // }, 4000)
    }
  }, []);
  return (
    <div>
      <Book entries={book.data} />
    </div>
    );
}

const mapStateToProps = (state) => {
  return {
    book: state.book,
  }
};

const actionCreators = {
  updateBook,
  updateBookEntries,
  subscribeBook,
  unsubscribeBook,
}

export default connect(mapStateToProps, actionCreators)(BookContainer);