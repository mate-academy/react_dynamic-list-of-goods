import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ list }) => (
  <ul>
    {list.map(item => (
      <li
        key={item.id}
        style={{ color: item.color }}
      >
        {item.name}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
  })).isRequired,
};
