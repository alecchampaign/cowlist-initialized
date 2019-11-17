import React from 'react';

const CowList = props => {
  return (
    <div className="cowList">
      <ul>
        {props.cows.map(cow => (<li onClick={() => props.handleClick(cow)}>{cow.name}</li>))}
      </ul>
    </div>
  );
}

export default CowList;