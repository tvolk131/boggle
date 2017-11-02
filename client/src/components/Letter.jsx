import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addLetter } from '../store/reducer';

const tilesAreAdjacent = (x1, y1, x2, y2) => {
  if (x1 === x2 && y1 === y2) {
    return false;
  }
  if (Math.abs(x1 - x2) > 1) {
    return false;
  }
  if (Math.abs(y1 - y2) > 1) {
    return false;
  }
  return true;
};

const Letter = (props) => {
  let isUsed = props.usedTiles[props.coords.x] && props.usedTiles[props.coords.x][props.coords.y];
  let style = {background: isUsed ? '#ACCEEC' : '#FFFFFF'};

  return (
    <span onClick={() => {
      if ((tilesAreAdjacent(props.latestLetterCoords.x, props.latestLetterCoords.y, props.coords.x, props.coords.y) && (!props.usedTiles[props.coords.x] || !props.usedTiles[props.coords.x][props.coords.y])) || (props.latestLetterCoords.x === null && props.latestLetterCoords.y === null)) {
        props.addLetter(props.coords);
      }
    }} className='letter' style={style}>{formatLetter(props.letter)}</span>
  );
};

const formatLetter = (string) => {
  let letter = string.toUpperCase();
  if (letter != 'Q') {
    return letter;
  } else {
    return 'Qu';
  }
};

const mapStateToProps = (state) => ({
  usedTiles: state.currentWordTiles,
  latestLetterCoords: state.latestLetterCoords
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addLetter
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Letter);