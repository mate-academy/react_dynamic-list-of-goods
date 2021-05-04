import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <div>
    <ul className="list">
      {goods.map(good => (
        <li
          className="list-item"
          key={good.id}
          style={{ color: good.color }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  </div>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  })).isRequired,
};
