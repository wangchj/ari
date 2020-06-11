import React from 'react';
import StyleSheet from 'scss/widgets/radio-buttons';

function RadioButtons(props) {
  let options = props.options;

  if (!options)
    return;

  return (
    <div className="radio-btns">{
      options.map((option, i) => {
        let color = props.activeId === option.id ? props.variant ?
          `btn-${props.variant}` : 'btn-blue' : 'btn-inactive';
        let size = props.size ? `btn-${props.size}` : 'btn-m';

        return <div key={option.id} className={`btn ${color} ${size}`}
          onClick={() => props.onClick(option.id)}>{option.label}</div>
      })
    }</div>
  )
}

export default RadioButtons;