import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <div className="goodsBlock">
    <ul>
      {goods.map(good => (
        <li key={good.id} style={{ color: good.color }}>
          {good.name }
        </li>
      ))}
    </ul>
  </div>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
