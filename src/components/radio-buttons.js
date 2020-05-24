import React from 'react';
import Toggle from './toggle-button';

let container = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
};

function RadioButtons(props) {
  let options = props.options;

  if (!options)
    return;

  return (
    <div style={container}>{
      options.map((option, i) =>
        <Toggle
          key={option.id}
          id={option.id}
          label={option.label}
          activeId={props.activeId}
          index={i}
          length={options.length}
          size={props.size}
          activeStyle={props.activeStyle}
          onClick={props.onClick}
        />
      )
    }</div>
  )
}

export default RadioButtons;