import React from 'react';
import { connect } from 'react-redux';

const Scoreboard = (props) => {
  let rows = [];

  props.words.forEach((word, index) => {
    rows.push(
      <div className='row' key={index}>
        <div className='column left'>
          {word}
        </div>
        <div className='column right'>
          {getScore(word)}
        </div>
      </div>
    );
  });

  rows.push(
    <div className='row' key={rows.length}>
      <div className='column left bold' style={{background: '#ABCEED'}}>
        Total:
      </div>
      <div className='column right bold' style={{background: '#ABCEED'}}>
        {getTotalScore(props.words)}
      </div>
    </div>
  );

  return (
    <div className='scoreboard'>
      <div className='row'>
        <div className='column left bold'>
          Word
        </div>
        <div className='column right bold'>
          Score
        </div>
      </div>
      {rows}
    </div>
  );
};

const getScore = (word) => {
  switch (word.length) {
    case 0:
    case 1:
    case 2:
      return 0;
    case 3:
    case 4:
      return 1;
    case 5:
      return 2;
    case 6:
      return 3;
    case 7:
      return 5;
    default:
      return 11;
  }
};

const getTotalScore = (words) => {
  let sum = 0;
  words.forEach((word) => {
    sum += getScore(word);
  });
  return sum;
};

const mapStateToProps = (state) => ({
  words: state.completedWords
});

export default connect(mapStateToProps)(Scoreboard);