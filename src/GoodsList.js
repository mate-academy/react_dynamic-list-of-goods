import React from 'react';

export const GoodsList = ({ goods }) => {
  return (
    <ul>
      {
        goods.map(good => (
          <li style={{ color: good.color }}>{good.name}</li>
        ))
      }
    </ul>
  );
};
