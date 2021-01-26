import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  goods.map(good => (
    <ul key={good.id}>
      <li style={{ color: good.color }}>
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
