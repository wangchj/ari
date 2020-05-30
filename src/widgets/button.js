import React from 'react';

let fontSize = '1.2em';
let bgColor = '#2C3E50';
let textColor = '#fff';
let borderRadius = '0.3em';
let padH = '1.5em';
let padV = '1em';
let cursor = 'pointer';
let textAlign = 'center';

let style = {
  fontSize: fontSize,
  padding: `${padV} ${padH}`,
  backgroundColor: bgColor,
  color: textColor,
  textAlign: textAlign,
  borderRadius: borderRadius,
  cursor: cursor,
};


function Button(props) {
  return <div style={style} onClick={props.onClick}>
    {props.label}
  </div>
}

export default Button;