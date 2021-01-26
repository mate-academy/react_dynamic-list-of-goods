import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <ol className="has-background-primary-light">
    {goods.map(good => (
      <li
        key={good.id}
        className="p-2"
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ol>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
