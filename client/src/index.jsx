import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import Board from './components/Board.jsx';
import './styles.css'

render(
  <Provider store={store}>
    <div className='game-wrapper'>
      <Board />
    </div>
  </Provider>
, document.getElementById('app'));