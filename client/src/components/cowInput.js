import React from 'react';
import addCow from '../lib/addCow.js';

const CowInput = props => {
  return (
    <div>
      <input onChange={e => props.handleChange(e.target.value)}>{props.currentInput}</input>
      <input onChange={e => props.handleDescChange(e.target.value)}>{props.currentDesc}</input>
      <button onClick={() => props.handleSubmit(props.name, props.desc)}>Add Cow</button>
    </div>
  );
}

export default CowInput;