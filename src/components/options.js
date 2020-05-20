import React from 'react';
import { connect } from 'react-redux';
import Operations from '../models/operations';
import Levels from '../models/levels';
import Formats from '../models/formats';
import Opts from '../models/options';

let getOperationLabel = optionId => {
  for (let i = 0; i < Operations.length; i++)
    if (Operations[i].id === optionId)
      return Operations[i].label;
}

let Header = props => {
  return <h1 style={{marginBottom: '1.5rem'}}>{getOperationLabel(props.op)}</h1>
}

let HeaderRx = connect(state => ({op: state.op}))(Header)

let Field = props => {
  return (
    <div style={{marginBottom: '1.5rem'}}>
      <div style={{marginBottom: '0.5rem'}}>{props.label}</div>
      {props.children}
    </div>
  )
}

let OptionButton = props => (
  <button type="button"
    className={'btn ' + (props.selected ? 'btn-dark' : 'btn-light')}
    onClick={()=>props.onClick()}>
    {props.label}
  </button>
)

let Options = props => {
  let options = (
    <div>
      {Opts.map(option => <Field key={option.id} label={option.label}>
        {option.vals.map(val =>
          <OptionButton key={val.id} label={val.label}
            selected={props.options[option.id] === val.id}
            onClick={() => props.onOptionSelect(option.id, val.id)}
          />
        )}
      </Field>)}
    </div>
  );

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <a href="" onClick={props.onGoBackClick}>← Menu</a>
            <HeaderRx/>
            {options}
            <button type="button" className="btn btn-primary"
              style={{marginTop: '1.5rem'}}
              onClick={props.onStartClick}
            >Start</button>
          </div>
        </div>

      </div>
    </div>
  )
}


let OptionsRx = connect(
  state => state,
  dispatch => ({
    onOptionSelect: (field, value) => {
      dispatch({
        type: 'OPTION_SELECT',
        field: field,
        value: value
      })
    },
    onGoBackClick: (e) => {
      e.preventDefault();
      dispatch({
        type: 'BACK_TO_MENU'
      })
    },
    onStartClick: () => {
      dispatch({
        type: 'START'
      })
    }
  })
)(Options);

export default OptionsRx;