import { createStore, combineReducers } from 'redux';
import { tickerReducer } from './ticker/reducers';

const rootReducer = combineReducers({
  ticker: tickerReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export {
  store
};
