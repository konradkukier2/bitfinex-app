export const webSocket = {
  URL: 'wss://api-pub.bitfinex.com/ws/2',
  HEARTBEAT_MSG: 'hb',
  CHANNEL_NAMES: {
    BOOK: 'book',
    TICKER: 'ticker'
  },
  EVENTS: {
    SUBSCRIBE: 'subscribe',
    UNSUBSCRIBE: 'unsubscribe',
    SUBSCRIBED: 'subscribed',
    UNSUBSCRIBED: 'unsubscribed',
  }
}