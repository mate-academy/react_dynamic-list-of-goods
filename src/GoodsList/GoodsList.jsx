import PropTypes, { arrayOf } from 'prop-types';
import React from 'react';

export const GoodsList = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} style={{ color: good.color }}>
        {good.name}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: arrayOf(PropTypes.shape({
    color: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })),
};

GoodsList.defaultProps = {
  goods: [],
};
