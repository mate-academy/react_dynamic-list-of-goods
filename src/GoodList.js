import React from 'react';
import PropTypes from 'prop-types';

export const GoodList = ({ list }) => (
  <ul>
    {list.map(item => (
      <li
        key={item.id}
        style={{ color: `${item.color}` }}
      >
        {item.name}
      </li>
    ))}
  </ul>
);

GoodList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};
