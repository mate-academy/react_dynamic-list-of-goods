import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ listOfGoods }) => (
  <ul>
    {listOfGoods.map(({ id, name, color }) => (
      <li key={id} style={{ color }}>
        {name}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  listOfGoods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ),
};

GoodsList.defaultProps = {
  listOfGoods: [],
};
