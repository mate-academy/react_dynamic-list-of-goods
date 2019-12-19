import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} style={{ color: good.color }}>{good.name}</li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.shape({
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default GoodsList;
