import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import { store } from './store';
import AppContainer from './containers/AppContainer';

function App() {
  return (
    <Provider store={store} >
      <div className='app-container'>
        <AppContainer />
      </div>
    </Provider>
  );
}

export default App;
