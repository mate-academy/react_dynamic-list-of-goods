import React from 'react';
import PropTypes from 'prop-types';

export const ListOfGoods = ({ goods }) => (
  <ul>
    {goods.map(item => (
      <li key={goods.id} style={{ color: item.color }}>
        {item.name}
      </li>
    ))}
  </ul>
);

ListOfGoods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  })).isRequired,
};
