import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateTicker, subscribeTicker, unsubscribeTicker } from '../store/ticker/actions';
import Ticker from '../components/Ticker';

const HARDCODED_SYMBOL = 'tBTCUSD';
const HARDCODED_CURRENCY = 'USD';

function TickerContainer({ ticker, updateTicker, subscribeTicker, unsubscribeTicker }) {
  const TICKER_CHANNEL_NAME = 'ticker';
  const HEARTBEAT_MSG = 'hb';
  const [ name, setName ] = useState('');
  useEffect(() => {
    const wss = new WebSocket('wss://api-pub.bitfinex.com/ws/2');
    wss.onmessage = (msg) => {
      if (msg.data) {
        const data = JSON.parse(msg.data);
        if (data && data.event && data.event === 'subscribed') {
          return subscribeTicker(data);

        }
        if (Array.isArray(data) && data[1] && data[1] !== HEARTBEAT_MSG) {
          const [ id, [ bid, bidSize, ask, askSize, dailyChange, dailyChangePerc, lastPrice, volume, high, low ]] = data;
          return updateTicker({ bid, bidSize, ask, askSize, dailyChange, dailyChangePerc, lastPrice, volume, high, low });
        }
      }
    }
    wss.onopen = () => {
      const msg = JSON.stringify({
        event: 'subscribe',
        channel: TICKER_CHANNEL_NAME,
        symbol: HARDCODED_SYMBOL
      });
      wss.send(msg);
    }
  }, []);
  const tickerProps = Object.assign({}, ticker.data, { pair: ticker.pair, currency: HARDCODED_CURRENCY});
  return (
    <div>
      <Ticker { ...tickerProps } />
    </div>
    );
}

const mapStateToProps = (state) => {
  return {
    ticker: state.ticker,
  }
};

const actionCreators = {
  updateTicker,
  subscribeTicker,
  unsubscribeTicker
}

export default connect(mapStateToProps, actionCreators)(TickerContainer);