import React from 'react';
import PropTypes from 'prop-types';

export const GoodList = ({ goods }) => (
  <ul className="list-group">
    {goods.map(good => (
      <li
        key={good.id}
        style={{ color: good.color }}
        className="list-group-item"
      >
        {good.name}
      </li>
    ))}
  </ul>
);

GoodList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    color: PropTypes.string,
  })).isRequired,
};
