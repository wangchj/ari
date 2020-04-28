import React from 'react';
import { connect } from 'react-redux';
import Operations from '../models/operations';

let MenuOption = props => {
  let box = {margin: '0.5rem'};
  let btn = {width: 300};

  return (
    <div style={box}>
      <button className="btn btn-primary btn-lg" style={btn}
              onClick={e => props.onOpSelect(props.option.id)}>
        {props.option.label}
      </button>
    </div>
  )
}

let MenuOptionRx = connect(null,
  dispatch => ({onOpSelect: op => dispatch({type: 'SELECT_OP', op: op})})
)(MenuOption)

let Menu = props => {
  return (
    <div>
      {
        Operations.map(
          option => <MenuOptionRx key={option.id} option={option}/>
        )
      }
    </div>
  )
}

export default Menu;