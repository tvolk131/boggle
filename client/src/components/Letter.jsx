import React from 'react';

const Letter = (props) => (
  <div className='letter'>{formatLetter(props.letter)}</div>
);

const formatLetter = (string) => {
  let letter = string.toUpperCase();
  if (letter != 'Q') {
    return letter;
  } else {
    return 'Qu';
  }
};

export default Letter;