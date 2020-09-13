import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = ({ goods }) => (
  <ul>
    {goods.map(item => (
      <li key={item.id} style={{ color: item.color }}>
        {item.name}
      </li>
    ))}
  </ul>
);

export default GoodsList;

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
