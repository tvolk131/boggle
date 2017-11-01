import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import Board from './components/Board.jsx';

render(
  <Provider store={store}>
    <Board />
  </Provider>
, document.getElementById('app'));