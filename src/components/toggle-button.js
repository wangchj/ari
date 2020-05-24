import React from 'react';

let borderRadius = '0.3em';
let padH = '1.5em';
let padV = '1em';
let padHS = '1em';
let padVS = '0.8em';
let cursor = 'pointer';
let textAlign = 'center';

let activeBgColor = '#7D3C98';
let activeColor = '#fff';

let inactiveBgColor = '#eee';
let inactiveColor = '#bbb';

let base = {
  padding: `${padV} ${padH}`,
  textAlign: textAlign,
  cursor: cursor,
};

let small = {
  padding: `${padVS} ${padHS}`,
};

let head = {
  borderTopLeftRadius: borderRadius,
  borderBottomLeftRadius: borderRadius,
};

let tail = {
  borderTopRightRadius: borderRadius,
  borderBottomRightRadius: borderRadius,
};

let active = {
  color: activeColor,
  backgroundColor: activeBgColor,
};

let inactive = {
  color: inactiveColor,
  backgroundColor: inactiveBgColor,
};

function Toggle(props) {
  let style = {...base};

  // If index and length props exisit, then this button is part of a button
  // group.
  if ((props.index || props.index == 0) && props.length) {
    if (props.index === 0)
      style = {...style, ...head};
    if (props.index === props.length - 1)
      style = {...style, ...tail};
  }
  else {
    style = {...style, ...head, ...tail};
  }

  if(props.id === props.activeId)
    style = props.activeStyle ? {...style, ...props.activeStyle} :
      {...style, ...active};
  else
    style = props.inactiveStyle ? {...style, ...props.inactiveStyle} :
      {...style, ...inactive};

  if (props.size === 's')
    style = {...style, ...small};

  return <div style={style} onClick={()=>props.onClick(props.id)}>
    {props.label}
  </div>
}

export default Toggle;