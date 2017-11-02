import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import dice from '../dice.js';

const initialState = {
  completedWords: [],
  letterStack: [], // Contains a list of coordinates representing the letters that make up the current word, in the order they were clicked
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
