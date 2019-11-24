import React from 'react';
import './Side.css';

function Side(props) {
  const side = props.side;
  const className = `Side-${side}`;
  return (
    <div className={className}>
      {props.children}
    </div>
  )
}

export default Side;