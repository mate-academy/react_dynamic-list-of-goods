import React from 'react';
import propTypes from 'prop-types';

const GoodsList = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li style={{ color: `${good.color}` }} key={good.id}>
        {good.name}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: propTypes.arrayOf(
    propTypes.shape({
      color: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      id: propTypes.number.isRequired,
    }),
  ).isRequired,
};

export default GoodsList;
