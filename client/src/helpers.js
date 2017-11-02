export const getWord = (boardLetters, letterStack) => {
  let word = '';
  letterStack.forEach((coord) => {
    let letter = boardLetters[coord.x][coord.y];
    if (letter === 'q') {
      letter = 'qu';
    }
    word += letter;
  });
  return word.toUpperCase();
};

export const isTileSelected = (stack, coords) => {
  for (let i = 0; i < stack.length; i++) {
    if (stack[i].x === coords.x && stack[i].y === coords.y) {
      return true;
    }
  }
  return false;
};

export const isLatestTile = (stack, coords) => {
  return stack[stack.length - 1].x === coords.x && stack[stack.length - 1].y === coords.y;
};

export const tilesAreAdjacent = (c1, c2) => {
  if (c1.x === c2.x && c1.y === c2.y) {
    return false;
  }
  if (Math.abs(c1.x - c2.x) > 1) {
    return false;
  }
  if (Math.abs(c1.y - c2.y) > 1) {
    return false;
  }
  return true;
};