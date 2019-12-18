import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = ({ goods }) => (
  <ul className="goods-list">
    {goods.map(good => (
      <li className="list-item" key={good.id} style={{ color: good.color }}>
        {good.name}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes
  = { goods: PropTypes.arrayOf(PropTypes.object).isRequired };

export default GoodsList;
