import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';

const initialState = {
};

// Hook up Redux DevTools if exists
const devToolsExtension = window.devToolsExtension;
if (typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension());
}

export default createStore(
  reducer,
  initialState
);
