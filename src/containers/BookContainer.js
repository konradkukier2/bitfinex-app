import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateBook, updateBookEntries, subscribeBook, unsubscribeBook } from '../store/book/actions';
import OrderBook from '../components/Book';
import { webSocket } from '../appConfig';
const { CHANNEL_NAMES, EVENTS, HEARTBEAT_MSG, URL } = webSocket;

const HARDCODED_SYMBOL = 'tBTCUSD';

function BookContainer({ book, updateBook, updateBookEntries, subscribeBook, unsubscribeBook }) {

  useEffect(() => {
    const wss = new WebSocket(URL);
    wss.onmessage = (msg) => {
      if (msg.data) {
        const data = JSON.parse(msg.data);

        if (data && data.event && data.event === EVENTS.SUBSCRIBED) {
          return subscribeBook(data);

        }
        if (Array.isArray(data) && data[1] && data[1] !== HEARTBEAT_MSG) {
          const [ id, result] = data;
          const priceEntries = Array.isArray(result[0]) ? result : [result];
          updateBookEntries(priceEntries);
        }
      }
    }
    wss.onopen = () => {
      const msg = JSON.stringify({
        event: EVENTS.SUBSCRIBE,
        channel: CHANNEL_NAMES.BOOK,
        symbol: HARDCODED_SYMBOL,
        freq: book.freq
      });

      wss.send(msg);
    }
  }, []);
  return (
    <div>
      <OrderBook entries={book.data} />
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