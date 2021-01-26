import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  goods.map(good => (
    <ul
      className="list-group list-group-flush"
      key={good.id}
    >
      <li
        className="list-group-item list-group-item-action"
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    </ul>
  ))
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
