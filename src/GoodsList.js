import React from 'react';
import './App.scss';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <div className="goods-list">
    <ul>
      {goods.map(good => (
        <li key={good.id} style={{ color: good.color }}>{good.name}</li>
      ))}
    </ul>
  </div>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};
