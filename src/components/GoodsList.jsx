import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <div>
    <ul className="list-group list-group-flush">
      {goods.map(good => (
        <li
          className="list-group-item"
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
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
