import React from 'react';
import { connect } from 'react-redux';

import Letter from './Letter.jsx';

const Board = (props) => {
  let items = [];
  let index = 0;
  props.letters.forEach((row) => {
    row.forEach((letter) => {
      items.push(<Letter letter={letter} key={items.length} />);
      index++;
      if (index % 5 === 0) {
        items.push(<br key={items.length}/>);
      }
    });
  });

  return (
    <div className='board'>
      {items}
    </div>
  );
};

const mapStateToProps = (state) => ({
  letters: state.boardLetters
});

export default connect(mapStateToProps)(Board);