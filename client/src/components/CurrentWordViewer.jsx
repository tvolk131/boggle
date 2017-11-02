import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitWord } from '../store/reducer';
import { getWord } from '../helpers';

const CurrentWordViewer = (props) => (
  <div style={{padding: '18px 0'}}>
    <div style={{float: 'left'}}><b>Current Word: </b>{getWord(props.boardLetters, props.letterStack)}</div>
    <button onClick={props.submitWord} style={{float: 'right'}}>Submit Word</button>
    <br/>
  </div>
);

const mapStateToProps = ({boardLetters, letterStack}) => ({
  boardLetters,
  letterStack
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  submitWord
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWordViewer);