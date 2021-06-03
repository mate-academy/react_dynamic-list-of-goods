import React from 'react';
import PropTypes from 'prop-types';

const GoodList = ({ goods }) => (
  <ul>
    {goods.map(({ color, name, id }) => (
      <li
        key={id}
        style={{ color }}
      >
        {name}
      </li>
    ))}
  </ul>
);

export default GoodList;

GoodList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
