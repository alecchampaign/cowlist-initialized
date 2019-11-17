import React from 'react';

const Modal = props => {
  return (
    <div>
      <h2>{props.cow.name}</h2>
      <p>{props.cow.description}</p>
    </div>
  );
}

export default Modal;