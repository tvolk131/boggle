import { getWord } from '../helpers';

const SUBMIT_WORD = 'SUBMIT_WORD';
const ADD_LETTER = 'ADD_LETTER';
const REMOVE_LAST_LETTER = 'REMOVE_LAST_LETTER';

export default (state, {type, payload}) => {
  switch (type) {
    case SUBMIT_WORD:
      if (state.letterStack.length) {
        return {
          ...state,
          completedWords: [...state.completedWords, getWord(state.boardLetters, state.letterStack)],
          letterStack: []
        }
      } else {
        return state;
      }
    case ADD_LETTER:
      return {
        ...state,
        letterStack: [...state.letterStack, payload]
      }
    case REMOVE_LAST_LETTER:
      let letterStack = [...state.letterStack];
      letterStack.pop();
      return {
        ...state,
        letterStack
      }
    default:
      return state
  }
};

export const submitWord = () => {
  return {
    type: SUBMIT_WORD
  };
};

export const addLetter = payload => {
  return {
    type: ADD_LETTER,
    payload
  };
};

export const removeLastLetter = () => {
  return {
    type: REMOVE_LAST_LETTER
  };
};