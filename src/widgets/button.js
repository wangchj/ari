import React from 'react';
import Style from 'scss/widgets/button';

function Button(props) {
  let color = props.variant ? `btn-${props.variant}` : 'btn-blue';
  let size  = props.size ? `btn-${props.size}` : 'btn-m';

  return <div className={`btn btn-round ${color} ${size}`}
    onClick={props.onClick}>{props.label}</div>
}

export default Button;