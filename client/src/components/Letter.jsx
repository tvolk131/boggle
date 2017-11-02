import React from 'react';

const Letter = (props) => (
  <span onClick={() => {console.log(props.coords)}} className='letter'>{formatLetter(props.letter)}</span>
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