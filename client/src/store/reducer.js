const SUBMIT_WORD = 'SUBMIT_WORD';

export default (state, {type, payload}) => {
  switch (type) {
    case SUBMIT_WORD:
      return {
        ...state,
        completedWords: [...state.completedWords, currentWord],
        currentWord: '',
        currentWordTiles: {}
      }
    default:
      return state
  }
};

export const submitWord = payload => ({
  type: SUBMIT_WORD,
  payload
});