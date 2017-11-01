import React from 'react';
import { connect } from 'react-redux';

const Board = (props) => (
  <div>
    Hello, this is the game board<br/>
    {JSON.stringify(props.letters)}
  </div>
);

const mapStateToProps = (state) => ({
  letters: state.boardLetters
});

export default connect(mapStateToProps)(Board);