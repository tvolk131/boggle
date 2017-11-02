import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitWord } from '../store/reducer';

const CurrentWordViewer = (props) => (
  <div style={{padding: '10px 0'}}>
    <b>Current Word: </b>{props.currentWord.toUpperCase()}
    <button onClick={() => {if (props.currentWord.length) {props.submitWord()}}} style={{float: 'right'}}>Submit Word</button>
  </div>
);

const mapStateToProps = ({currentWord}) => ({
  currentWord
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  submitWord
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWordViewer);