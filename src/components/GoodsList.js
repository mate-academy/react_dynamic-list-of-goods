import React from 'react';

const GoodsList = ({ goods }) => (
  goods.map(good => (
    <li className="app__item" key={good.id} style={{ color: `${good.color}` }}>
      {good.name}
    </li>
  ))
);

export default GoodsList;
