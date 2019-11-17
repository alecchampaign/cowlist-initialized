import React from 'react';

const CowList = props => {
  return (
    <div className="cowList">
      <ul>
        {props.cows.map(cow => (<li>{cow.name}</li>))}
      </ul>
    </div>
  );
}

export default CowList;