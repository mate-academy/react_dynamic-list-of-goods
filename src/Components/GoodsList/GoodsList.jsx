import React from 'react';
import PropTypes from 'prop-types';

import './GoodsList.scss';

export function GoodsList({ goods }) {
  return (
    <ul className="list-group">
      {goods.map(good => (
        <li
          key={good.id}
          className={`list-group-item list-group-item--${good.color}`}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
