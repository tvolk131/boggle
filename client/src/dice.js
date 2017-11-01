const dice = [
  'aaafrs',
  'aaeeee',
  'aafirs',
  'adennn',
  'aeeeem',
  'aeegmu',
  'aegmnn',
  'afirsy',
  'bjkqxz',
  'ccenst',
  'ceiilt',
  'ceilpt',
  'ceipst',
  'ddhnot',
  'dhhlor',
  'dhlnor',
  'dhlnor',
  'eiiitt',
  'emottt',
  'ensssu',
  'fiprsy',
  'gorrvw',
  'iprrry',
  'nootuw',
  'ooottu'
];

const getRandomLetterFromString = (string) => {
  return string[Math.floor(Math.random() * (string.length))];
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const shuffle = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    swap(arr, i, getRandomInt(i, arr.length - 1))
  }
};

const swap = (arr, iOne, iTwo) => {
  let temp = arr[iOne];
  arr[iOne] = arr[iTwo];
  arr[iTwo] = temp;
};

const generateBoard = (size = 5) => {
  let diceOrder = [];
  for (let i = 0; i < Math.pow(size, 2); i++) {
    diceOrder.push(i);
  }
  shuffle(diceOrder);

  let board = [];
  let boardRow = [];
  for (let i = 0; i < diceOrder.length; i++) {
    if (boardRow.length === size) {
      board.push(boardRow);
      boardRow = [];
    }
    boardRow.push(getRandomLetterFromString(dice[diceOrder[i]]));
  }
  board.push(boardRow);
  return board;
};

module.exports = { generateBoard };