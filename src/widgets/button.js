import React from 'react';
import Style from 'scss/widgets/button';

function Button(props) {
  return <div className="button" onClick={props.onClick}>
    {props.label}
  </div>
}

export default Button;