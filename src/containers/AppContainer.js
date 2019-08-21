import React, { useState } from 'react';
import { connect } from 'react-redux';
import { selectTicker } from '../store/ticker/actions';

function AppContainer({ ticker, selectTicker }) {
  const [ name, setName ] = useState('');
  return (
    <div>
      <h1>TICKER: {ticker.selected}</h1>
      <input value={name} onChange={(e => setName(e.target.value))}></input>
      <button onClick={() => selectTicker(name)}>Change ticker</button>
    </div>
    );
}

const mapStateToProps = (state) => {
  return {
    ticker: state.ticker,
  }
};

const actionCreators = {
  selectTicker,
}

export default connect(mapStateToProps, actionCreators)(AppContainer);