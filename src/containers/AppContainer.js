import React from 'react';
import { connect } from 'react-redux';
import Ticker from '../containers/TickerContainer';
import Book from '../containers/BookContainer';

function AppContainer() {
  return (
    <div>
      <Ticker />
      <Book />
    </div>
    );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(AppContainer);