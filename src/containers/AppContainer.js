import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Ticker from '../containers/TickerContainer';

function AppContainer() {
  // const [ name, setName ] = useState('');
  return (
    <div>
      <Ticker />
    </div>
    );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(AppContainer);