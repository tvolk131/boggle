import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import Title from './components/Title.jsx';
import Board from './components/Board.jsx';
import Scoreboard from './components/Scoreboard.jsx';
import './styles.css'

render(
  <Provider store={store}>
    <div className='game-wrapper'>
      <Title />
      <Board />
      <Scoreboard />
    </div>
  </Provider>
, document.getElementById('app'));