import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ list }) => (
  <ul className="list-group">
    {list.map(item => (
      <li
        key={item.id}
        style={{ color: `${item.color}` }}
        className="list-group-item"
      >
        {item.name}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  })).isRequired,
};
