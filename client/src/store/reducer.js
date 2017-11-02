const SUBMIT_WORD = 'SUBMIT_WORD';
const ADD_LETTER = 'ADD_LETTER';

export default (state, {type, payload}) => {
  switch (type) {
    case SUBMIT_WORD:
      return {
        ...state,
        completedWords: [...state.completedWords, state.currentWord],
        currentWord: '',
        currentWordTiles: {},
        latestLetterCoords: {x: null, y: null}
      }
    case ADD_LETTER:
      let currentWordTiles = {...state.currentWordTiles};
      currentWordTiles[payload.x] = state.currentWordTiles[payload.x] ? state.currentWordTiles[payload.x] : {};
      currentWordTiles[payload.x][payload.y] = true;
      let newLetter = state.boardLetters[payload.x][payload.y];
      if (newLetter === 'q') {
        newLetter = 'qu';
      }
      return {
        ...state,
        currentWord: state.currentWord + newLetter,
        currentWordTiles,
        latestLetterCoords: payload
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