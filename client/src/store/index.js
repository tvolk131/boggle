import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import dice from '../dice.js';

const initialState = {
  completedWords: [],
  currentWord: '',
  currentWordTiles: {}, // Will contain x/y coordinates accessible by something like currentWordTiles[0][3] which will return either true or undefined
  boardLetters: dice.generateBoard()
};

const enhancers = [];

// Hook up Redux DevTools if exists
const devToolsExtension = window.devToolsExtension;
if (typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension());
}

const composedEnhancers = compose(
  ...enhancers
);

export default createStore(
  reducer,
  initialState,
  composedEnhancers
);
