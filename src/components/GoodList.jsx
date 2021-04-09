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
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};

GoodsList.defaultProps = {
  listOfGoods: [],
};
