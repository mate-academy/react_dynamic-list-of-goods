import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ allGoods }) => (
  <ul>
    {allGoods.map(good => (
      <li key={good.id} style={{ color: good.color }}>
        {`Good: ${good.name}`}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  allGoods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
