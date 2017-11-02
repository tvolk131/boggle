import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addLetter, removeLastLetter } from '../store/reducer';
import { isTileSelected, isLatestTile, tilesAreAdjacent } from '../helpers';

const Letter = (props) => {
  let style = {background: isTileSelected(props.letterStack, props.coords) ? '#ACCEEC' : '#FFFFFF'};

  return (
    <span onClick={() => {
      if (props.letterStack.length && isLatestTile(props.letterStack, props.coords)) {
        props.removeLastLetter();
      } else if (isNewTileValid(props.letterStack, props.coords)) {
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

const isNewTileValid = (letterStack, newTileCoords) => {
  if (!letterStack.length) {
    return true;
  }
  if (tilesAreAdjacent(letterStack[letterStack.length - 1], newTileCoords) && !isTileSelected(letterStack, newTileCoords)) {
    return true;
  }
  return false;
};

const mapStateToProps = (state) => ({
  letterStack: state.letterStack
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addLetter,
  removeLastLetter
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Letter);