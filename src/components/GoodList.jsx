import React from 'react';
import PropTypes from 'prop-types';

export const GoodList = ({ goods }) => (
  goods.map(good => (
    <li key={good.id} style={{ color: good.color }}>{good.name}</li>
  ))
);

GoodList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};
