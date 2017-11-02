import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import Title from './components/Title.jsx';
import Board from './components/Board.jsx';
import CurrentWordViewer from './components/CurrentWordViewer.jsx';
import Scoreboard from './components/Scoreboard.jsx';
import './styles.css'

render(
  <Provider store={store}>
    <div className='game-wrapper'>
      <Title />
      <Board />
      <CurrentWordViewer />
      <Scoreboard />
    </div>
  </Provider>
, document.getElementById('app'));